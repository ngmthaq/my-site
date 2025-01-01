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

  /**
   * VITE_SUPABASE_URL=https://example.supabase.com
   */
  readonly VITE_SUPABASE_URL: string;

  /**
   * VITE_SUPABASE_KEY=example-supabase-key
   */
  readonly VITE_SUPABASE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
