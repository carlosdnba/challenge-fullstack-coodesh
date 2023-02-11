import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import './db/connection';
import router from './router';
import errorHandler from './errors/handler';

const app = express();
const port = process.env.API_PORT || 3333;

app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen(port, () => {
  console.clear();
  console.log(`Server up and running on port ${port} 🔥`);
});
