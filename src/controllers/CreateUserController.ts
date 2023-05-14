import { Request, Response } from 'express';
import { database } from '../database';

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await database.user.create({
      data: {
        email,
        password
      }
    });

    return res.json(user);
  }
}