import axios from 'axios'
import {
  // DIARY_ACTIVATE_IMAGE,
  // DIARY_DEACTIVATE_IMAGE,
  // DIARY_SET_DATE,
  // DIARY_SET_MOOD,
  // DIARY_SET_CONTENT,
  DIARY_FETCH_REQUEST,
  DIARY_FETCH_FAIL,
  DIARY_FETCH_SUCCESS,
  DIARY_INPUT_REQUEST,
  DIARY_INPUT_FAIL,
  DIARY_INPUT_SUCCESS
} from "src/constants/diaryConstants";

import { months } from 'src/components/pages/calendar/calendarVariables';

const HOST = "http://localhost:9000"

//* diary => ()
export const inputDiary = diary => async dispatch => {

  console.log(diary)
  console.log("is to be inputted")

  try {
    dispatch({type: DIARY_INPUT_REQUEST});
    const res = await axios.post( HOST + '/api/diary/input', diary);
    dispatch({type: DIARY_INPUT_SUCCESS});
    console.log(res.data);
    this.props.history.push('/');
  } catch (err) {
    alert("Failed to input diary to DB");
    dispatch({type: DIARY_INPUT_FAIL, payload: err});
  }
}

//* date => diary
export const fetchSingleDiary = date => async dispatch => {
  console.log("Go check if DB has a diary of "+ date)

  dispatch({type: DIARY_FETCH_REQUEST});
  await axios.get( HOST + '/api/diary/' + date)
    .then( res => {
      dispatch({type: DIARY_FETCH_SUCCESS, payload: res.data});
      console.log("Fetched diary from DB successfully");
      // const result = res.data || null;
    })
    .catch( err => {
      console.warn("Failed to fetch diary from DB");
      dispatch({type: DIARY_FETCH_FAIL, payload: err});
    })
}

export const fetchMoods = (year, month) => {
  console.log("Go fetch moods of", months[month], year);

  // const moods = await axios.get( HOST + '/api/diary/mood/', {
  //   year : year,
  //   month: month
  // })
  //   //* Success
  //   .then( res => {
  //     console.log("Fetched moods from DB successfully");
  //     const result = res.data;
  //     return result; // => moods
  //   })
  //   //* Failure
  //   .catch( err => {
  //     console.warn("Failed to fetch moods from DB");
  //     console.error(err);
  //     return {}; // => moods
  //   } )
  const moods = {
    '1': 'Happy',
    '2': 'Normal',
    '3': 'Rad',
    '4': 'Rad',
    '5': 'Happy',
    '6': 'Sad'
  }

  return moods;
}
