import type { Express } from "express";
import type { Server } from "http";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // API routes can be added here in the future
  // Currently, the contact form works client-side only
  
  return httpServer;
}
