import { ConvexHttpClient } from "convex/browser"
import { getEnv } from "./config"

const env = getEnv()

/**
 * A client for interacting with the Convex backend.
 *
 * This client is used to make API calls to the Convex deployment URL
 * specified in the environment variables (VITE_CONVEX_URL).
 */
export const convexClient = new ConvexHttpClient(env.VITE_CONVEX_URL)
