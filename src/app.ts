import express, { Express } from 'express';

import { setupMiddleware } from './config/middleware.config';
import { setupRoutes } from './config/routes.config';
import pc from 'picocolors';
import { initializeData } from './services/dataInitialization.service';

const app: Express = express();

/**
 * Bootstrap application
 * Orchestrates the application startup in a clear, sequential manner
 */
async function bootstrap(app: Express): Promise<void> {
  try {
    await initializeData();

    // 2. Set up all middleware (security, body parsing, etc.)
    setupMiddleware(app);

    // 3. Set up all routes and API endpoints
    setupRoutes(app);
    console.log(pc.green('✓') + ' Application bootstrap completed successfully');
  } catch (error) {
    console.log('Failed to bootstrap application', error);
    process.exit(1);
  }
}

bootstrap(app).catch((error) => {
  console.log('Failed to bootstrap application', error);
  process.exit(1);
});

export default app;
