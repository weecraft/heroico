import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "react-router"
import "@shared/styles/globals.css"
import { Button } from "@shared/components"
import * as React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ConvexQueryClient } from "@convex-dev/react-query"
import { ConvexProvider, ConvexReactClient } from "convex/react"
import { ClerkProvider } from "@clerk/react-router"
import { rootAuthLoader } from "@clerk/react-router/ssr.server"
import type { Route } from "./+types/root"
import { loadEnv } from "@shared/libs"

interface LayoutProps {
  children: React.ReactNode
}

export async function loader(args: Route.LoaderArgs) {
  const env = loadEnv()

  return rootAuthLoader(
    args,
    () => {
      return { env }
    },
    {
      publishableKey: env.public.CLERK_PUBLISHABLE_KEY,
      secretKey: env.private.CLERK_SECRET_KEY,
    },
  )
}

export function Layout({ children }: LayoutProps) {
  const loaderData = useLoaderData<typeof loader>()
  const { env } = loaderData

  // Convex setup and query client
  const convex = new ConvexReactClient(env.public.CONVEX_URL)
  const convexQueryClient = new ConvexQueryClient(convex)

  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            queryKeyHashFn: convexQueryClient.hashFn(),
            queryFn: convexQueryClient.queryFn(),
          },
        },
      }),
  )
  convexQueryClient.connect(queryClient)

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="min-h-screen pb-28 mt-5 tablet:mt-10 tablet:pb-56">
          <ClerkProvider loaderData={loaderData}>
            <ConvexProvider client={convex}>
              <QueryClientProvider client={queryClient}>
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
              </QueryClientProvider>
            </ConvexProvider>
          </ClerkProvider>
        </div>
        <ScrollRestoration />
        <Scripts />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__ENV__ = ${JSON.stringify(env.public)}`,
          }}
        />
      </body>
    </html>
  )
}

export function ErrorBoundary({ error }) {
  let message = "Oops!"
  let details = "An unexpected error occurred."
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error"
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className="flex flex-col items-center text-center pt-16 p-4 container mx-auto">
      <h1 className="text-4xl">{message}.</h1>
      <p className="text-foreground/60 mt-6">{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto mt-16">
          <code>{stack}</code>
        </pre>
      )}

      <div className="flex justify-center items-center mt-16">
        <Button asChild>
          <Link to={"/"}>Back to home</Link>
        </Button>
      </div>
    </main>
  )
}

export default function App() {
  return <Outlet />
}
