import { createRouter as createTanStackRouter } from "@tanstack/react-router"
import { routeTree } from "./routeTree.gen"
import { routerWithQueryClient } from "@tanstack/react-router-with-query"
import { ConvexProvider, ConvexReactClient } from "convex/react"
import { ConvexQueryClient } from "@convex-dev/react-query"
import { QueryClient } from "@tanstack/react-query"
import { getEnv } from "@shared/libs/config"

const env = getEnv()

export function createRouter() {
  // Integrate convex, clerk and query
  const convex = new ConvexReactClient(env.VITE_CONVEX_URL, {
    unsavedChangesWarning: false,
  })
  const convexQueryClient = new ConvexQueryClient(convex)
  const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryKeyHashFn: convexQueryClient.hashFn(),
        queryFn: convexQueryClient.queryFn(),
      },
    },
  })
  convexQueryClient.connect(queryClient)

  // define the route with context
  const router = routerWithQueryClient(
    createTanStackRouter({
      routeTree,
      defaultPreload: "intent",
      context: { queryClient, convexClient: convex, convexQueryClient },
      Wrap: ({ children }) => (
        <ConvexProvider client={convexQueryClient.convexClient}>
          {children}
        </ConvexProvider>
      ),
    }),
    queryClient,
  )

  return router
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}
