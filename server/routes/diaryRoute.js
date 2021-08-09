import { insertDiary, findDiary } from '../operateDiaryDB.js';
import express from 'express';

const router = express.Router();

router.post('/input', (req, res) => {
  insertDiary(req.body)
  res.send("Input Diary")
});

router.get('/fetch/:date', async (req, res) => {
  const date = req.params.date;

  console.log("Go fetch diary on " + date);
  try {
    const result = await findDiary(date);
    console.log("findDiary: " + true);
    res.send(result);

  } catch {
    console.log("findDiary: " + false);
    res.send("なかった");
  }
});

export default router;
