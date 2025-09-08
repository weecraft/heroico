import { defineConfig } from "vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import viteTsConfigPaths from "vite-tsconfig-paths"
import tailwindcss from "@tailwindcss/vite"

const config = defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    viteTsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      customViteReactPlugin: true,
      tsr: {
        srcDirectory: "src/app",
      },
    }),
    viteReact(),
  ],
})

export default config
