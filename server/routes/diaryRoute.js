import { insertDiary, findDiary, gatherMoods } from '../operateDiaryDB.js';
import express from 'express';

const router = express.Router();

//* insertDiary
router.post('/input', (req, res) => {
  insertDiary(req.body)
  res.send("Input Diary")
});

//* findDiary
router.get('/:date', async (req, res) => {
  const date = req.params.date;
  console.log("Come to server");

  let findSuccessfully = true;
  const diary = await findDiary(date).catch( error => {
    findSuccessfully = false;
    console.error(error);
    return {};
  })
  console.log("findDiary: " + findSuccessfully);

  res.send(diary);
});

//* gatherMoods
router.get('/mood/:year&:month', async (req, res) => {
  const year = req.params.year;
  const month = req.params.month;
  console.log("Come to server");

  console.info(year, month);

  // let gatherSuccessfully = true;
  // const diary = await gatherMoods(year, month)
  //   .catch( error => {
  //     gatherSuccessfully = false;
  //     console.error(error);
  //     return {};
  //   })
  // console.log("findDiary: " + gatherSuccessfully);

  // res.send(diary);
});

export default router;
