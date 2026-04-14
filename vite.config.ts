import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "path";
import { defineConfig } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";


const plugins = [react(), tailwindcss(), jsxLocPlugin(), vitePluginManusRuntime()];

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      "@content": path.resolve(import.meta.dirname, "content"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  publicDir: path.resolve(import.meta.dirname, "client", "public"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // Stable URLs for agriculture product PDFs (imports via ?url)
        assetFileNames: (assetInfo) => {
          const name = assetInfo.names?.[0] ?? "";
          // SuperN
          if (name === "SuperN-SpecSheet.pdf") return "spec-sheets/SuperN-SpecSheet.pdf";
          if (name === "SuperN-Certified-SpecSheet.pdf") return "spec-sheets/SuperN-Certified-SpecSheet.pdf";
          if (name === "SuperN-CFIA-Label.pdf") return "docs/SuperN-CFIA-Label.pdf";
          if (name === "SuperN-SDS.pdf") return "docs/SuperN-SDS.pdf";
          // OrganiPhos
          if (name === "OrganiPhos-SpecSheet.pdf") return "spec-sheets/OrganiPhos-SpecSheet.pdf";
          if (name === "OrganiPhos-CFIA-Label.pdf") return "docs/OrganiPhos-CFIA-Label.pdf";
          if (name === "OrganiPhos-SDS.pdf") return "docs/OrganiPhos-SDS.pdf";
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
  server: {
    host: true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      allow: [
        path.resolve(import.meta.dirname, "client"),
        path.resolve(import.meta.dirname, "content"),
      ],
      deny: ["**/.*"],
    },
  },
});
