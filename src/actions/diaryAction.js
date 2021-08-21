// import axios from 'axios'
import {
  DIARY_ACTIVATE_IMAGE,
  DIARY_DEACTIVATE_IMAGE,
  DIARY_SET_DATE,
  DIARY_SET_ALL,
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

export function setDiaryDate(date) {
  return {
    type: DIARY_SET_DATE,
    payload: date
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
