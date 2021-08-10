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

  let findSuccessfully = true;
  const result = await findDiary(date).catch( error => {
    findSuccessfully = false;
    console.error(error);
    return {};
  })
  console.log("findDiary: " + findSuccessfully);

  res.send(result);

  // //* If signed in
  // if (true) {
  //   res.send({
	// 		// date    : result.date, 		//* String 2021_0809
	// 		mood    : result.mood, 		//* String "Happy"
	// 		bg      : result.bg,      //* String
	// 		imgs    : result.imgs,    //* Array
	// 		title   : result.title,   //* String
	// 		content : result.content  //* String
  //   });

  // //* not signed in
  // } else {
  //   ;
  // }
});

export default router;
