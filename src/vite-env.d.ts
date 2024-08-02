/// <reference types="vite-plugin-svgr/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REACT_APP_API_BASE_URL: string;
  readonly VITE_GOOGLE_MAP_API_KEY: string;
  readonly VITE_REACT_APP_REDIRECT_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
