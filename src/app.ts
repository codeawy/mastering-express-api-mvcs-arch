import express, { Express } from 'express';

import { setupMiddleware } from './config/middleware.config';
import { setupRoutes } from './config/routes.config';
import pc from 'picocolors';

const app: Express = express();

/**
 * Bootstrap application
 * Orchestrates the application startup in a clear, sequential manner
 */
async function bootstrap(app: Express): Promise<void> {
  try {
    // 1. Set up all middleware (security, body parsing, etc.)
    setupMiddleware(app);

    // 2. Set up all routes and API endpoints
    setupRoutes(app);
    console.log(pc.green('✓') + ' Application bootstrap completed successfully');
  } catch (error) {
    console.error(pc.red('✖') + ' Failed to bootstrap application:', error);
    process.exit(1);
  }
}

// Start the bootstrap process in the background
// This allows the app to be exported immediately while initialization continues
bootstrap(app).catch((error) => {
  console.error('Unhandled promise rejection during initialization:', error);
  process.exit(1);
});

export default app;
