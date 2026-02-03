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

  // Use Vite's middleware
  app.use(vite.middlewares);

  // Fallback to index.html for any unmatched routes (SPA)
  app.use(async (req, res, next) => {
    // Skip if response already sent
    if (res.headersSent) {
      return next();
    }

    const url = req.originalUrl;

    try {
      const htmlPath = path.resolve(viteConfig.root as string, "index.html");
      let html = fs.readFileSync(htmlPath, "utf-8");
      html = await vite.transformIndexHtml(url, html);
      
      // Explicitly set headers to prevent download
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.removeHeader("Content-Disposition");
      res.status(200).send(html);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}
