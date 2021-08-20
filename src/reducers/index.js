import { combineReducers } from "redux";

import {
  diaryFetchReducer,
  diaryInitiallySetReducer,
  diaryEditReducer,
  diaryInputReducer
} from "./diaryReducer";
import {
  calendarSelectorReducer,
  calendarDateReducer
} from "./calendarReducer";

const reducer = combineReducers({
  diaryFetchReducer,
  diaryInitiallySetReducer,
  diaryEditReducer,
  diaryInputReducer,
  calendarSelectorReducer,
  calendarDateReducer
});

export default reducer;