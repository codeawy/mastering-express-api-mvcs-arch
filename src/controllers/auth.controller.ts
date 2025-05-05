import { Request, Response } from 'express';
import authService from '~/services/auth.service';

const authController = {
  register: async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const data = await authService.register({ email, password });

    res.status(201).json({
      status: 'success',
      message: 'User created successfully!',
      data: {
        ...data,
      },
    });
  },
};

export default authController;
