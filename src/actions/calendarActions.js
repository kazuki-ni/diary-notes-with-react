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

const setYear = (year) => ({
  type: CALENDAR_SET_YEAR,
  payload: year
})

const setMonth = (month) => ({
  type: CALENDAR_SET_MONTH,
  payload: month
})

const setDate = (date) => ({
  type: CALENDAR_SET_DATE,
  payload: date
})

const setAll = (newDate) => ({
  type: CALENDAR_SET_ALL,
  payload: {
    year: newDate.getFullYear(),
    month: newDate.getMonth(),
    date: newDate
  }
})

const activateYearSelector = () => ({
  type: CALENDAR_ACTIVATE_YEAR_SELECTOR
})

const activateMonthSelector = () => ({
  type: CALENDAR_ACTIVATE_MONTH_SELECTOR
})

const deactivateYearSelector = () => ({
  type: CALENDAR_DEACTIVATE_YEAR_SELECTOR
})

const deactivateMonthSelector = () => ({
  type: CALENDAR_DEACTIVATE_MONTH_SELECTOR
})

export {
  setYear,
  setMonth,
  setDate,
  setAll,
  activateYearSelector,
  activateMonthSelector,
  deactivateYearSelector,
  deactivateMonthSelector,
};