import express from 'express';

import { insertDiary, findDiary, gatherMoods } from '../operateDiaryDB.js';

const router = express.Router();

//* insertDiary
router.post('/input', (req, res) => {
  console.log("Come to api/diary/input");
  console.log(req.body.date)
  console.log(req.body.mood)
  console.log(req.body.bg)
  console.log(req.body.title)
  console.log(req.body.content)
  req.body.imgList.forEach(img=>console.log(img.slice(0, 30)))
  insertDiary(req.body)
  res.send("Input Diary")
});

//* findDiary
router.get('/', async (req, res) => {
  const { date } = req.query;
  console.log("Come to api/diary");
  console.info("date: "+date);

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
router.get('/mood', async (req, res) => {
  const { year, month } = req.query;
  console.log("Come to api/diary/mood");
  console.info("year: "+year+"month: "+month);

  let gatherSuccessfully = true;
  const diary = await gatherMoods(year, month)
    .catch( error => {
      gatherSuccessfully = false;
      console.error(error);
      return [];
    })
  console.log("gatherMoods: " + gatherSuccessfully);

  res.send(diary);
});

export default router;
