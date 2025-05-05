import express, { Express } from 'express';

import { setupMiddleware } from './config/middleware.config';
import { setupRoutes } from './config/routes.config';

const app: Express = express();

async function bootstrap(): Promise<void> {
  try {
    // 1. Setup middlewares
    setupMiddleware(app);
    // 2. Setup routes and API
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
