function isBrowser() {
  return typeof window !== "undefined"
}

export function loadServerEnv() {
  const env = process.env

  return {
    APP_HOST: env.APP_HOST,
    GOOGLE_VERIFICATION: env.GOOGLE_VERIFICATION,
  }
}

export function loadConfig() {
  const isOnBrowser = isBrowser()
  const ENV = isOnBrowser ? window.__ENV__ : process.env

  return {
    app: {
      host: ENV.APP_HOST || "http://localhost:5173",
    },
    verification: {
      google: ENV.GOOGLE_VERIFICATION,
    },
  } as const
}

declare global {
  interface Window {
    __ENV__: any
  }
}
