import express, { Request, Express, Response } from 'express';
import helmet from 'helmet';
import { corsConfig } from './middlewares/security';
import { globalRateLimit } from './middlewares/rateLimit';

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

// * Routes
app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Mastering Express.js!</h1>');
});

export default app;
