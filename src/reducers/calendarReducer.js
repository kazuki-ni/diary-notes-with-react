import {
  CALENDAR_ACTIVATE_MONTH_SELECTOR,
  CALENDAR_ACTIVATE_YEAR_SELECTOR,
  CALENDAR_DEACTIVATE_MONTH_SELECTOR,
  CALENDAR_DEACTIVATE_YEAR_SELECTOR,
  CALENDAR_SET_YEAR,
  CALENDAR_SET_MONTH,
  CALENDAR_SET_DATE,
  CALENDAR_SET_ALL
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
  month : new Date().getMonth(),
  date  : new Date(new Date().setDate(1))
}, action) {
  switch (action.type) {
    case CALENDAR_SET_YEAR:
      return {
        ...state,
        year: action.payload
      };
    case CALENDAR_SET_MONTH:
      console.log(action.payload)
      return {
        ...state,
        month: action.payload
      };
    case CALENDAR_SET_DATE:
      return {
        ...state,
        date: action.payload
      };
    case CALENDAR_SET_ALL:
      return {
        ...state,
        year: action.payload.year,
        month: action.payload.month,
        date: action.payload.date
      };
    default: return state;
  }
}

export {
  calendarSelectorReducer,
  calendarDateReducer
};