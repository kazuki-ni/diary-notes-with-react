// import path from 'path';
import { config } from "./config.js"
import diaryRoute from './routes/diaryRoute.js';

import cors from "cors";
import express from 'express';
// import favicon from "serve-favicon";
// import path from "path";

const app = express();
// const dirname = path.dirname(new URL(import.meta.url).pathname)
// app.use(favicon(path.join(dirname, '../public', 'favicon.ico')))
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