interface ImportMetaEnv {
  readonly VITE_MAP_TOKEN: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
