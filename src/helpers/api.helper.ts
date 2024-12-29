import type { AxiosInstance, AxiosRequestConfig } from "axios";
import axios, { AxiosError } from "axios";
import { APP_CONSTANTS, APP_EVENTS } from "@/configs";
import { AppHelper } from "./app.helper";

type ApiSubscriber = (token: string) => Promise<void>;
type ApiParams = Record<string, string | number | boolean | null | undefined>;
type ApiData = ApiParams | FormData;
type ApiInterceptorConfig = { isGraphQL?: boolean };

class ApiHelperInstance {
  private axios: AxiosInstance;
  private baseURL: string = import.meta.env.VITE_API_URL;
  private graphQLURL: string = import.meta.env.VITE_GRAPHQL_URL;
  private timeout: number = 60000;
  private isRefreshingToken: boolean = false;
  private subscribers: ApiSubscriber[] = [];

  public constructor() {
    this.axios = axios.create();
  }

  public default(interceptorConfig: ApiInterceptorConfig) {
    this.axios.interceptors.request.clear();
    this.axios.interceptors.response.clear();

    this.axios.interceptors.request.use(
      (config) => {
        const baseURL = interceptorConfig.isGraphQL ? this.graphQLURL : this.baseURL;
        config.baseURL = baseURL;
        config.timeout = this.timeout;
        return config;
      },
      (error) => Promise.reject(error),
    );

    this.axios.interceptors.response.use(
      (response) => Promise.resolve(response),
      (error) => Promise.reject(error),
    );

    return this;
  }

  public withAuth(interceptorConfig: ApiInterceptorConfig) {
    this.axios.interceptors.request.clear();
    this.axios.interceptors.response.clear();

    this.axios.interceptors.request.use(
      (config) => {
        const baseURL = interceptorConfig.isGraphQL ? this.graphQLURL : this.baseURL;
        const accessToken = AppHelper.retrieve<string>(APP_CONSTANTS.storageKeys.accessToken);
        if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
        config.timeout = this.timeout;
        config.baseURL = baseURL;
        return config;
      },
      (error) => Promise.reject(error),
    );

    this.axios.interceptors.response.use(
      (response) => Promise.resolve(response),
      async (error) => {
        if (error instanceof AxiosError === false) return Promise.reject(error);
        if (error.response?.status !== 401) return Promise.reject(error);
        if (error.config === undefined) return Promise.reject(error);

        const refreshToken = AppHelper.retrieve<string>(APP_CONSTANTS.storageKeys.refreshToken);
        if (refreshToken === null) return Promise.reject(error);

        if (this.isRefreshingToken) {
          return new Promise((resolve, reject) => {
            this.subscribers.push(async (token) => {
              if (error.config && error.config.headers) {
                error.config.headers.Authorization = `Bearer ${token}`;
                resolve(this.axios.request(error.config));
              } else {
                reject(error);
              }
            });
          });
        }

        try {
          this.isRefreshingToken = true;
          const accessToken = await this.handleRefreshToken(refreshToken);
          this.subscribers.forEach((callback) => callback(accessToken));
          error.config.headers.Authorization = `Bearer ${accessToken}`;
          const response = await this.axios.request(error.config);
          return Promise.resolve(response);
        } catch {
          AppHelper.emit(APP_EVENTS.refreshTokenFailed);
          return Promise.reject(error);
        } finally {
          this.isRefreshingToken = false;
          this.subscribers = [];
        }
      },
    );

    return this;
  }

  public async get(url: string, params: ApiParams = {}, config: AxiosRequestConfig = {}) {
    return this.axios.get(url, { ...config, params });
  }

  public async post(url: string, data: ApiData = {}, config: AxiosRequestConfig = {}) {
    return this.axios.post(url, data, config);
  }

  public async put(url: string, data: ApiData = {}, config: AxiosRequestConfig = {}) {
    return this.axios.put(url, data, config);
  }

  public async patch(url: string, data: ApiData = {}, config: AxiosRequestConfig = {}) {
    return this.axios.patch(url, data, config);
  }

  public async delete(url: string, params: ApiParams = {}, config: AxiosRequestConfig = {}) {
    return this.axios.delete(url, { ...config, params });
  }

  public graphQL(query: string, variables: ApiParams = {}, config: AxiosRequestConfig = {}) {
    return this.axios.post("", { query, variables }, config);
  }

  private async handleRefreshToken(refreshToken: string): Promise<string> {
    console.log("refreshToken", refreshToken);
    return "access-token-here";
  }
}

export const ApiHelper = new ApiHelperInstance();
