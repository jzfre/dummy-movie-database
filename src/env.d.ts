declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VITE_OMDB_API_KEY: string;
    }
  }
}

export {};
