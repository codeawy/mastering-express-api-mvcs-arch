import express, { Express } from 'express';

import { setupMiddleware } from './config/middleware.config';
import { setupRoutes } from './config/routes.config';

const app: Express = express();

/**
 * Bootstrap application
 * Orchestrates the application startup in a clear, sequential manner
 */
async function bootstrap(): Promise<void> {
  try {
    // 1. Set up all middleware (security, body parsing, etc.)
    setupMiddleware(app);

    // 2. Set up all routes and API endpoints
    setupRoutes(app);
  } catch (error) {
    console.log('Failed to bootstrap applicaiton', error);
    process.exit(1);
  }
}

bootstrap().catch((error) => {
  console.log('Failed to bootstrap applicaiton', error);
  process.exit(1);
});

export default app;
