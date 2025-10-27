import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
  // Define the integrations
  // including query client, etc.
  const queryClient = new QueryClient();

  // Define the router and wrap with query client functions
  // to adding context of query client in each context of route
  const router = routerWithQueryClient(
    createRouter({
      routeTree,
      defaultPreload: "intent",
      context: {
        queryClient,
      },
      scrollRestoration: true,
      defaultPreloadStaleTime: 0,
    }),
    queryClient
  );

  return router;
}
