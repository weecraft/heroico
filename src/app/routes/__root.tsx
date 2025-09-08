import * as React from "react"
import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router"
import { ClerkProvider } from "@clerk/tanstack-react-start"
import {
  TanStackRouterDevtools,
  TanStackRouterDevtoolsPanel,
} from "@tanstack/react-router-devtools"
import { TanStackDevtools } from "@tanstack/react-devtools"
import styles from "@shared/styles/globals.css?url"
import type { QueryClient } from "@tanstack/react-query"

interface RootDocumentProps {
  children: React.ReactNode
}

interface RouteWithContextProps {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouteWithContextProps>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: styles,
      },
    ],
  }),
  shellComponent: RootDocument,
})

/**
 * RootDocument is a React component that establishes the fundamental HTML document structure.
 * It acts as the root HTML wrapper for the application, handling the <html>, <head>, and <body> tags.
 *
 * It incorporates essential elements like `HeadContent` for dynamic head management,
 * renders its `children` within the `<body>`, and includes `Scripts` for client-side JavaScript.
 *
 * Additionally, it integrates development tools such as `TanStackDevtools` for React Query
 * and `TanStackRouterDevtoolsPanel` for `@tanstack/react-router` debugging.
 *
 * @param {RootDocumentProps} props - The props for the RootDocument component.
 * @param {React.ReactNode} props.children - The child components to be rendered inside the `<body>`.
 * @returns {React.ReactElement} A React element representing the complete HTML document structure.
 */
function RootDocument({ children }: RootDocumentProps): React.ReactElement {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <ClerkProvider>{children}</ClerkProvider>
        <Devtools />
        <Scripts />
      </body>
    </html>
  )
}

function Devtools(): React.ReactElement {
  return (
    <TanStackDevtools
      config={{
        position: "bottom-right",
      }}
      plugins={[
        {
          name: "Tanstack Router",
          render: <TanStackRouterDevtoolsPanel />,
        },
        {
          name: "Tanstack Query",
          render: <TanStackRouterDevtools />,
        },
      ]}
    />
  )
}
