import { createApp } from "vinxi";
import reactRefresh from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default createApp({
  server: {
    preset: "node-server", // change to 'netlify' or 'bun' or anyof the supported presets for nitro (nitro.unjs.io)
    experimental: {
      asyncContext: true,
    },
  },
  routers: [
    {
      type: "static",
      name: "public",
      dir: "./public",
    },
    {
      type: "http",
      name: "trpc",
      base: "/trpc",
      handler: "./src/server/api/handler.ts",
      target: "server",
      plugins: () => [
        tsConfigPaths({
          projects: ["./tsconfig.json"],
        }),
      ],
    },
    {
      type: "spa",
      name: "client",
      handler: "./index.html",
      target: "browser",
      plugins: () => [
        tsConfigPaths({
          projects: ["./tsconfig.json"],
        }),
        TanStackRouterVite({
          target: "react",
          autoCodeSplitting: true,
          routesDirectory: "./src/routes",
          generatedRouteTree: "./src/routeTree.gen.ts",
        }),
        reactRefresh(),
      ],
    },
  ],
});
