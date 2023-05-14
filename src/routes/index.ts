import { Router } from 'express';
import { CreateUserController } from '../controllers/CreateUserController';

const router = Router();

const createUser = new CreateUserController();

router.get('/', (req, res )=> {
  res.send('Hello World');
});

router.post('/user', createUser.handle);


export { router }