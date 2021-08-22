import { combineReducers } from "redux";

import {
  diaryReducer,
  diaryEditReducer,
  diaryInputReducer
} from "./diaryReducer";
import {
  calendarSelectorReducer,
  calendarDateReducer,
  CalendarMoodReducer
} from "./calendarReducer";

const reducer = combineReducers({
  diaryReducer,
  diaryEditReducer,
  diaryInputReducer,
  calendarSelectorReducer,
  calendarDateReducer,
  CalendarMoodReducer
});

export default reducer;