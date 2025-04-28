import express, { Request, Express, Response } from 'express';
import helmet from 'helmet';
import { corsConfig } from './middlewares/security';

const app: Express = express();

// * Security Middlewares
app.use(helmet());
app.use(corsConfig);

app.use('/', (req: Request, res: Response) => {
  res.send('<h1>Mastering Express.js!</h1>');
});

export default app;
