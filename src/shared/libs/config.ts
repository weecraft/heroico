interface ENV {
  public: {
    APP_HOST: string
    GOOGLE_VERIFICATION: string
    CONVEX_URL: string
    CLERK_PUBLISHABLE_KEY: string
  }
  private: {
    CONVEX_DEPLOYMENT: string
    CLERK_SECRET_KEY: string
    CLERK_JWT_ISSUER_DOMAIN: string
  }
}

declare global {
  interface Window {
    __ENV__: any
  }
}

export function loadEnv(): ENV {
  const isOnBrowser = typeof window !== "undefined"
  const env = isOnBrowser ? window.__ENV__ : process.env

  return {
    public: {
      APP_HOST: env.APP_HOST,
      GOOGLE_VERIFICATION: env.GOOGLE_VERIFICATION,
      CONVEX_URL: env.CONVEX_URL!,
      CLERK_PUBLISHABLE_KEY: env.CLERK_PUBLISHABLE_KEY!,
    },
    private: {
      CONVEX_DEPLOYMENT: env.CONVEX_DEPLOYMENT,
      CLERK_SECRET_KEY: env.CLERK_SECRET_KEY!,
      CLERK_JWT_ISSUER_DOMAIN: env.CLERK_JWT_ISSUER_DOMAIN,
    },
  }
}
