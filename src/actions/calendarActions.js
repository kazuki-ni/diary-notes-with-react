import axios from "axios";

import {
  CALENDAR_ACTIVATE_MONTH_SELECTOR,
  CALENDAR_ACTIVATE_YEAR_SELECTOR,
  CALENDAR_DEACTIVATE_MONTH_SELECTOR,
  CALENDAR_DEACTIVATE_YEAR_SELECTOR,
  CALENDAR_SET_DATE,
  CALENDAR_FETCH_MOOD_REQUEST,
  CALENDAR_FETCH_MOOD_SUCCESS,
  CALENDAR_FETCH_MOOD_FAIL
} from "src/constants/calendarConstants";

import { months } from 'src/components/pages/calendar/calendarVariables';

const HOST = "http://localhost:9000"

export const setDate = (year, month) => ({
  type: CALENDAR_SET_DATE,
  payload: {
    year: year,
    month: month
  }
})

export const fetchMoods = (year, month) => async dispatch => {
  console.log("Go fetch moods of", months[month], year);

  try {
    dispatch({type: CALENDAR_FETCH_MOOD_REQUEST});
    const { data } = await axios.get(
      HOST + '/api/diary/mood?', {
        params: {
          year : year,
          month: month+1
        }
      }
    );
    dispatch({type: CALENDAR_FETCH_MOOD_SUCCESS, payload: data});
    console.log(data);

  } catch (err) {
    console.warn("Failed to fetch moods from DB");
    dispatch({type: CALENDAR_FETCH_MOOD_FAIL, payload: err});
  }
}

export const activateYearSelector = () => ({
  type: CALENDAR_ACTIVATE_YEAR_SELECTOR
})

export const activateMonthSelector = () => ({
  type: CALENDAR_ACTIVATE_MONTH_SELECTOR
})

export const deactivateYearSelector = () => ({
  type: CALENDAR_DEACTIVATE_YEAR_SELECTOR
})

export const deactivateMonthSelector = () => ({
  type: CALENDAR_DEACTIVATE_MONTH_SELECTOR
})
