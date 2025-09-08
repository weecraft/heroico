interface ENV {
  VITE_APP_HOST: string
  VITE_GOOGLE_VERIFICATION: string
  CONVEX_DEPLOYMENT: string
  VITE_CONVEX_URL: string
  VITE_CLERK_PUBLISHABLE_KEY: string
  CLERK_SECRET_KEY: string
}

/**
 * Retrieves environment variables, adapting between server-side (Node.js) and
 * client-side (browser) environments.
 *
 * It checks if `window` is defined to determine if the code is running on the server.
 * On the server, it uses `process.env`. On the client, it uses `import.meta.env`.
 *
 * @returns An object containing environment-specific configurations, particularly for Convex.
 */
export function getEnv(): ENV {
  const isServer = typeof window === "undefined"
  const env = isServer ? process.env : (import.meta.env as any)

  return {
    VITE_APP_HOST: env.VITE_APP_HOST,
    VITE_GOOGLE_VERIFICATION: env.VITE_GOOGLE_VERIFICATION,
    CONVEX_DEPLOYMENT: env.CONVEX_DEPLOYMENT,
    VITE_CONVEX_URL: env.VITE_CONVEX_URL,
    VITE_CLERK_PUBLISHABLE_KEY: env.VITE_CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: env.CLERK_SECRET_KEY,
  }
}
