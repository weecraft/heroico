import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const config = defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    tanstackStart({
      srcDirectory: "src/app",
      prerender: {
        enabled: true,
        crawlLinks: true,
      },
      sitemap: {
        enabled: true,
        host: "https://www.heroico.site",
      },
    }),
    react(),
    nitro(),
  ],
});

export default config;
