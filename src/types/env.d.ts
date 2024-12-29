/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   *  VITE_API_URL=https://api.example.com/api
   */
  readonly VITE_API_URL: string;

  /**
   * VITE_GRAPHQL_URL=https://api.example.com/graphql
   */
  readonly VITE_GRAPHQL_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
