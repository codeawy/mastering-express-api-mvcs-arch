import { NextFunction, Request, RequestHandler, Response } from 'express';

/**
 * CORS configuration middleware
 * Restricts which domains can access your API
 */
export const corsConfig: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  // Set allowed origins based on evniroment
  const allowdOrigins =
    process.env.NODE_ENV === 'production'
      ? ['https://yourdomain.com', 'https://test.com']
      : ['http://localhost:3000'];

  const origin = req.headers.origin;

  if (origin && allowdOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', ['GET', 'PUT', 'POST', 'POST', 'DELETE']);
    res.setHeader('Access-Control-Allow-Headers', ['Content-Type', 'Authorization']);
  }

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  next();
};
