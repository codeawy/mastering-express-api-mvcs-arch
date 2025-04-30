import { Request, Response, Router } from 'express';
import { validate } from '~/middlewares/validation';
import { registerSchema } from '~/schema/auth';
import { asyncHandler } from '~/utils/asyncRouteHandler';

const router: Router = Router();

router.post(
  '/register',
  validate(registerSchema),
  asyncHandler(async (req: Request, res: Response) => {
    const { email } = await Promise.resolve(req.body);
    res.send({
      email,
    });
    return;
  }),
);

export default router;
