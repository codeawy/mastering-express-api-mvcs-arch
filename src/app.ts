import express, { Request, Express, Response } from 'express';

const app: Express = express();

app.use('/', (req: Request, res: Response) => {
  res.send('<h1>Mastering Express.js!</h1>');
});

export default app;
