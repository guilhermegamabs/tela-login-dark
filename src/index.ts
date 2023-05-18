import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';

const router = Router();

const createUser = new CreateUserController();

router.get('/', (req, res )=> {
  res.sendFile(__dirname + '/views/index.html');
});

router.post('/', (req, res) => {
  res.send({message: 'Hello World!'})
});


export { router }