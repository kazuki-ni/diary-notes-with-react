import { combineReducers } from "redux";

import {
  diaryReducer,
  diaryEditReducer,
  diaryInputReducer
} from "./diaryReducers";
import {
  calendarSelectorReducer,
  calendarDateReducer,
  calendarMoodReducer
} from "./calendarReducers";
import {
  userLogInReducer,
  userSignUpReducer,
  userUpdateReducer,
  userLogOutReducer
} from "./userReducers";

const reducer = combineReducers({
  diaryReducer,
  diaryEditReducer,
  diaryInputReducer,
  calendarSelectorReducer,
  calendarDateReducer,
  calendarMoodReducer,
  userLogInReducer,
  userSignUpReducer,
  userUpdateReducer,
  userLogOutReducer
});

export default reducer;