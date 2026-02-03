import { type Express } from "express";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import fs from "fs";
import path from "path";

const viteLogger = createLogger();

export async function setupVite(server: Server, app: Express) {
  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: {
      middlewareMode: true,
      hmr: { server },
    },
  });

  app.use(vite.middlewares);

  // HTML fallback for SPA routing - must be last
  app.use((req, res, next) => {
    const url = req.originalUrl;

    // Let Vite handle its own requests
    if (res.headersSent) {
      return;
    }

    try {
      const htmlPath = path.resolve(viteConfig.root as string, "index.html");
      let html = fs.readFileSync(htmlPath, "utf-8");
      vite.transformIndexHtml(url, html).then(transformedHtml => {
        res.status(200).set({ "Content-Type": "text/html" }).end(transformedHtml);
      }).catch(e => {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      });
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}
