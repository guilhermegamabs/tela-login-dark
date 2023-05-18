import express from 'express';
import { router } from '.';
const app = express();
const engines = require('consolidate')
const PORT = 3301;

app.use(express.json());
app.use(express.urlencoded());


app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});