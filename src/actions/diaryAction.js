// import axios from 'axios'
import {
  // DIARY_ACTIVATE_IMAGE,
  // DIARY_DEACTIVATE_IMAGE,
  // DIARY_SET_DATE,
  DIARY_SET_DIARY,
  DIARY_FETCH_REQUEST,
  // DIARY_FETCH_FAIL,
  DIARY_FETCH_SUCCESS,
  // DIARY_INPUT_REQUEST,
  // DIARY_INPUT_FAIL,
  // DIARY_INPUT_SUCCESS
} from "src/constants/diaryConstants";

export function fetchStart() {
  return {
    type: DIARY_FETCH_REQUEST
  }
}

export function fetchFinish() {
  return {
    type: DIARY_FETCH_SUCCESS
  }
}

export function setDiary(diary) {
  return {
    type: DIARY_SET_DIARY,
    payload: diary
  }
}
