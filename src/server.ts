import exp from 'constants';
import express from 'express';
const app = express();
const PORT = 3301;

app.use(express.json());
app.use(express.urlencoded());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});