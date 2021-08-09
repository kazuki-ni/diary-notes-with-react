// import path from 'path';
import { config } from "./config.js"
import diaryRoute from './routes/diaryRoute.js';

import cors from "cors";
import express from 'express';
const app = express();

app.use(cors({
  origin: 'http://localhost:3000', //permit
  credentials: true, //add Access-Control-Allow-Credentials
  // optionsSuccessStatus: 200 //set response status as 200
}))
app.use(express.json({
  limit: '50mb'
}));
app.use(express.urlencoded({
  limit: '50mb',
  extended: true
}));

//* route path
app.use('/api/diary', diaryRoute);

app.listen(config.PORT, () => {
  console.log('Server started at http://localhost:9000');
});