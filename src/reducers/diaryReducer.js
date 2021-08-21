import {
  DIARY_ACTIVATE_IMAGE,
  DIARY_DEACTIVATE_IMAGE,
  DIARY_SET_DATE,
  DIARY_SET_ALL,
  DIARY_FETCH_REQUEST,
  DIARY_FETCH_FAIL,
  DIARY_FETCH_SUCCESS,
  DIARY_INPUT_REQUEST,
  DIARY_INPUT_FAIL,
  DIARY_INPUT_SUCCESS
} from "src/constants/diaryConstants";

function diaryFetchReducer(state={
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case DIARY_FETCH_REQUEST:
      return {
        ...state,
        fetching: true
      };
    case DIARY_FETCH_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case DIARY_FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        diary: action.payload
      };
    default: return state;
  }
}

function diaryInitiallySetReducer(state={
  diary: {
    date    : "",
    mood    : "",
    bg      : "url(\"/images/scenes/2.jpg\")",
    title 	: "",
    content : "",
    imgList : []
  }
}, action) {
  switch (action.type) {
    case DIARY_SET_DATE:
      return {
        ...state,
        diary: {
          ...state.diary,
          date: action.payload
        }
      };
    case DIARY_SET_ALL:
      return {
        ...state,
        diary: {
          ...state.diary,
          date    : action.payload.date,
          mood    : action.payload.mood,
          bg      : action.payload.bg,
          title   : action.payload.title,
          content : action.payload.content,
          imgList : action.payload.imgList,
        }
      };
    default: return state;
  }
}

function diaryEditReducer(state = {
  imageFuncActivated: false
}, action) {
  switch (action.type) {
    case DIARY_ACTIVATE_IMAGE:
      return {
        ...state,
        imageFuncActivated: true
      };
    case DIARY_DEACTIVATE_IMAGE:
      return {
        ...state,
        imageFuncActivated: false
      };
    default: return state;
  }
}

function diaryInputReducer(state = {
  inputting : false,
  inputted  : false,
  error     : null,
}, action) {
  switch (action.type) {
    case DIARY_INPUT_REQUEST:
      return {
        ...state,
        inputting : true
      };
    case DIARY_INPUT_FAIL:
      return {
        ...state,
        inputting : false,
        error     : action.payload
      };
    case DIARY_INPUT_SUCCESS:
      return {
        ...state,
        inputting : false,
        inputted  : true
      };
    default: return state;
  }
}

export {
  diaryFetchReducer,
  diaryInitiallySetReducer,
  diaryEditReducer,
  diaryInputReducer
};