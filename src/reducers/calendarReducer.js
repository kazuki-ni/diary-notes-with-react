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

function calendarSelectorReducer(state = {
  displayMonthSelector: false,
  displayYearSelector: false
}, action) {
  switch (action.type) {
    case CALENDAR_ACTIVATE_MONTH_SELECTOR:
      return {
        ...state,
        displayMonthSelector: true
      };
    case CALENDAR_ACTIVATE_YEAR_SELECTOR:
      return {
        ...state,
        displayYearSelector: true
      };
    case CALENDAR_DEACTIVATE_MONTH_SELECTOR:
      return {
        ...state,
        displayMonthSelector: false
      };
    case CALENDAR_DEACTIVATE_YEAR_SELECTOR:
      return {
        ...state,
        displayYearSelector: false
      };
    default: return state;
  }
}

function calendarDateReducer(state = {
  year  : new Date().getFullYear(),
  month : new Date().getMonth()
}, action) {
  switch (action.type) {
    case CALENDAR_SET_DATE:
      return {
        ...state,
        year: action.payload.year,
        month: action.payload.month
      };
    default: return state;
  }
}

function CalendarMoodReducer(state = {
  moods     : [],
  fetching : false,
  fetched  : false,
  error    : null,
}, action) {
  switch (action.type) {
    case CALENDAR_FETCH_MOOD_REQUEST:
      return {
        ...state,
        fetching : true
      };
    case CALENDAR_FETCH_MOOD_FAIL:
      return {
        ...state,
        fetching : false,
        error     : action.payload
      };
    case CALENDAR_FETCH_MOOD_SUCCESS:
      return {
        ...state,
        moods    : action.payload,
        fetching : false,
        fetched  : true
      };
    default: return state;
  }
}

export {
  calendarSelectorReducer,
  calendarDateReducer,
  CalendarMoodReducer
};