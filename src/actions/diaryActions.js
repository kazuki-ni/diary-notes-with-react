import axios from 'axios'
import {
  DIARY_ACTIVATE_IMAGE,
  DIARY_DEACTIVATE_IMAGE,
  DIARY_SET_DATE,
  DIARY_SET_MOOD,
  DIARY_SET_IMAGES,
  DIARY_SET_ALL,
  DIARY_FETCH_REQUEST,
  DIARY_FETCH_FAIL,
  DIARY_FETCH_SUCCESS,
  DIARY_FETCH_SUCCESS_BUT_NO_DIARY,
  DIARY_INPUT_REQUEST,
  DIARY_INPUT_FAIL,
  DIARY_INPUT_SUCCESS
} from "src/constants/diaryConstants";

const HOST = "http://localhost:9000";

//* diary => ()
export const inputDiary = diary => async dispatch => {

  console.log(diary)
  console.log("is to be inputted")
  dispatch({type: DIARY_INPUT_REQUEST});

  try {
    const { data } = await axios.post(
      HOST + '/api/diary/input',
      diary
    );
    console.log(data);
    dispatch({type: DIARY_INPUT_SUCCESS});

  } catch (err) {
    alert("Failed to input diary to DB");
    dispatch({type: DIARY_INPUT_FAIL, payload: err});
  }
}

//* date => diary
export const fetchSingleDiary = date => async dispatch => {

  console.log("Go check if DB has a diary of "+ date)
  dispatch({type: DIARY_FETCH_REQUEST});

  try {
    const { mood, bg, title, content, imgList } = await axios.get(
      HOST + '/api/diary?', {
        params: {
          date: date
        }
      }
    )
    console.log("Fetched diary from DB successfully");
    switch(mood) {
      case "":
        dispatch({type: DIARY_FETCH_SUCCESS_BUT_NO_DIARY});
        break;
      default:
        dispatch({
          type: DIARY_FETCH_SUCCESS,
          payload: {
            date: date,
            mood: mood || "",
            bg: bg || "url(\"/images/scenes/2.jpg\")",
            title: title || "",
            content: content || "",
            imgList: imgList || []
          }
        });
        break;
    }
    return mood;

  } catch (err) {
    console.warn("Failed to fetch diary from DB");
    dispatch({type: DIARY_FETCH_FAIL, payload: err});
    return ""
  }
}

export function setDiaryDate(date) {
  return {
    type: DIARY_SET_DATE,
    payload: date
  }
}

export function setDiaryMood(mood) {
  return {
    type: DIARY_SET_MOOD,
    payload: mood
  }
}

export function setDiaryImgs(imgList) {
  return {
    type: DIARY_SET_IMAGES,
    payload: imgList
  }
}

export function setDiaryAll(diary) {
  return {
    type: DIARY_SET_ALL,
    payload: diary
  }
}

export function activateImageFunc() {
  return {
    type: DIARY_ACTIVATE_IMAGE
  }
}

export function deactivateImageFunc() {
  return {
    type: DIARY_DEACTIVATE_IMAGE
  }
}