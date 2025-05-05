import express, { Express } from 'express';
import helmet from 'helmet';
import { corsConfig } from '../middlewares/security';
import { globalRateLimit } from '../middlewares/rateLimit';

/**
 * Sets up all middleware for the Express application
 * Groups related middleware together for better organization
 * @param app Express application instance
 */
export function setupMiddleware(app: Express): void {
  app.use(helmet());
  app.use(corsConfig);
  app.use(globalRateLimit);
  app.use(
    express.json({
      limit: '10kb',
    }),
  );
  app.use(
    express.urlencoded({
      limit: '10kb',
      extended: true,
    }),
  );
}
