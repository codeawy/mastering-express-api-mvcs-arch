import express, { Request, Express, Response } from 'express';
import helmet from 'helmet';
import { corsConfig } from './middlewares/security';
import { globalRateLimit } from './middlewares/rateLimit';
import { errorHandler } from './middlewares/error';
import authRoutes from './routes/auth';

const app: Express = express();

// * Security Middlewares
app.use(helmet());
app.use(corsConfig);

// * Rate Limiting
app.use(globalRateLimit);

// * Body parsing middlewares
app.use(
  express.json({
    limit: '10kb', // 10 KB
  }),
);
app.use(
  express.urlencoded({
    limit: '10kb', // 10 KB
    extended: true,
  }),
);

// * Routes
app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Mastering Express.js!</h1>');
});

// ** Auth Routes
app.use('/api/v1/auth', authRoutes);

// ** Global error handler
app.use(errorHandler);

export default app;
