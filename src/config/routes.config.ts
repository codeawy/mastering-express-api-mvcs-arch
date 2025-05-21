import { Express, Request, Response } from 'express';
import authRoutes from '../routes/auth';
import { errorHandler } from '~/middlewares/error';

export function setupRoutes(app: Express): void {
  // Routes
  app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Mastering Express.js!</h1>');
  });

  // TODO: Start rec with API versioning and validateApiVersion
  // Auth Routes
  app.use('/api/v1/auth', authRoutes);

  // Add error handler middleware
  app.use(errorHandler);
}
