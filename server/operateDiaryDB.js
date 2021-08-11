import Diary from "./models/diaryModel.js"

async function insertDiary(query) {
  const diary = new Diary(query);
  const newDiary = await diary.save().catch( error => {
    console.error(error);
    return {};
  })
  if (newDiary) {
    console.log("A new diary is input:");
    showDiary(newDiary);
  } else {
    console.log(newDiary);
  }
  return newDiary;
}

async function findDiary(date) {
  const diary = await Diary.findOne({date: date}).catch( error => {
      console.error(error);
      return {};
    });
  if (diary !== null) {
    showDiary(diary);
  } else {
    console.log("Diary is null")
  }
  return diary;
}

async function gatherMoods(year, month) {
  const diaries = await Diary.find({
    year: year,
    month: month
  }).catch( error => {
      console.error(error);
      return {};
    });

  const moods = {};
  diaries.map( diary =>
    moods[diary.day] = diary.mood
  )

  return moods;
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