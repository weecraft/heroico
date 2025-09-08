import { createRouter as createTanstackRouter } from "@tanstack/react-router"
import { routeTree } from "./routeTree.gen"
import { routerWithQueryClient } from "@tanstack/react-router-with-query"
import { QueryClient } from "@tanstack/react-query"

export const createRouter = () => {
  // Define the integrations
  // including query client, etc.
  const queryClient = new QueryClient()

  // Define the router and wrap with query client functions
  // to adding context of query client in each context of route
  const router = routerWithQueryClient(
    createTanstackRouter({
      routeTree,
      defaultPreload: "intent",
      context: {
        queryClient,
      },
      scrollRestoration: true,
      defaultPreloadStaleTime: 0,
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
