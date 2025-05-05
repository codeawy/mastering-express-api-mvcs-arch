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
  // Security middleware - apply these before route handlers
  app.use(helmet()); // Set security-related HTTP headers
  app.use(corsConfig); // Custom CORS configuration
  app.use(globalRateLimit); // API rate limiting

  // Body parsing middleware
  app.use(express.json({ limit: '10kb' })); // Limit body size to prevent abuse
  app.use(express.urlencoded({ extended: true, limit: '10kb' }));
}
