import Diary from "../models/diaryModel.js"
import connectMongo from "./database.js"

async function insertDiary(diary) {
  const date = diary.date;

  const query = {
    year      : date.split("_")[0],
    month     : date.split("_")[1].slice(0, 2) - 0 + "",
    day       : date.split("_")[1].slice(2, 4) - 0 + "",
    timestamp : new Date().toUTCString(),
    mood      : diary.mood,
    bg        : diary.bg,
    imgList   : diary.imgList,
    title     : diary.title,
    content   : diary.content
  }

  await connectMongo().then( async mongoose => {
    try {
      const diary = new Diary(query);
      await diary.save();
      console.log("Saved a new diary!")

    } catch (err) {
      console.error("Catch an error: ", err);

    } finally {
      mongoose.connection.close();
    }
  })
}

async function findDiary(date) {
  const year = date.split("_")[0];
  const month = date.split("_")[1].slice(0, 2) - 0 + "";
  const day = date.split("_")[1].slice(2, 4) - 0 + "";

  return (
    await connectMongo().then( async mongoose => {
      try {
        const diary = await Diary.findOne( {
          year: year, month: month, day: day
        });
        if (diary === null) {
          console.log("Diary is ", diary);
        } else {
          showDiary(diary);
        }
        return diary;

      } catch (err) {
        console.error("Catch an error: ", err);
        return null;

      } finally {
        mongoose.connection.close();
      }
    })
  )
}

async function gatherMoods(year, month) {
  return (
    await connectMongo().then( async mongoose => {
      try {
        const diaries = await Diary.find( {
          year: year, month: month
        });
        if (diaries === null) { return null };

        const moods = {};
        diaries.map( diary =>
          moods[diary.day] = diary.mood
        )
        console.log(moods);
        return moods;

      } catch (err) {
        console.error("Catch an error: ", err);
        return [];

      } finally {
        mongoose.connection.close();
      }
    })
  )
}

const showDiary = (result) => {
  //* show diary
  console.log("--------------------diary--------------------");
  Object.keys(result).forEach( key => {
    try {
      if ( key === "imgs" ) {
        result[key].map( ( url, i ) => console.log(`imgs ${i+1}: ${url.slice(0, 50)}`) )
      } else {
        console.log(`${key}: ${result[key]}`);
      }
    } catch (error){
      console.log("Couldn't get values of this key: "+key);
      console.error(error);
    }
  })
  console.log("---------------------------------------------");
}

export { insertDiary, findDiary, gatherMoods };