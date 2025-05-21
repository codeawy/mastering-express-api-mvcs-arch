import { Router } from 'express';
import authController from '~/controllers/auth.controller';
import { validate } from '~/middlewares/validation';
import { registerSchema } from '~/schema/auth';
import { asyncHandler } from '~/utils/asyncRouteHandler';

const router: Router = Router();

router.post('/register', validate(registerSchema), asyncHandler(authController.register));

export default router;
