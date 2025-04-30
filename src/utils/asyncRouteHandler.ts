import { Request, Response, NextFunction } from 'express';

/**
 * Wraps an async route handler to properly catch and forward errors
 * This eliminates the need for try/catch blocks in every controller
 */
export const asyncHandler = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<unknown>,
) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
