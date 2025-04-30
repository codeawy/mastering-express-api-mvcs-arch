import { Request, Response, Router } from 'express';
import { validate } from '~/middlewares/validation';
import { registerSchema } from '~/schema/auth';

const router: Router = Router();

router.post('/register', validate(registerSchema), (req: Request, res: Response) => {
  res.send('Register');
});

export default router;
