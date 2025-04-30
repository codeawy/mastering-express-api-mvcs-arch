import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { AppError } from '~/utils/appError';

/**
 * Global error handler middleware
 * Handles both operational errors (expected errors) and programming errors (unexpected)
 */
export const errorHandler: ErrorRequestHandler = (
  err: Error | AppError | ZodError,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  // Handle Zod validation errors
  if (err.name === 'ZodError' && 'errors' in err) {
    res.status(400).json({
      success: false,
      status: 'fail',
      message: 'Validation error',
      errors: err.errors,
      timestamp: new Date(),
    });

    return; // Return early to prevent sending multiple responses
  }

  // Defaul values of non-AppError errors
  let statusCode = 500;
  let status = 'error';
  let isOperational = false;
  const message = err.message || 'Internal Server Error';

  // Check if this is an instance of AppError and use its properties
  if (err instanceof AppError) {
    console.log('From App Error');
    statusCode = err.statusCode;
    status = err.status;
    isOperational = err.isOperational;
  }

  if (isOperational) {
    console.warn(`Operational Error, ${message}`);
  } else {
    console.error(`Unhandled Error, ${message}`, err);
  }

  // Send response to the client
  res.status(statusCode).json({
    success: false,
    status,
    message,
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack }),
    timestamp: new Date(),
  });
  next();
};
