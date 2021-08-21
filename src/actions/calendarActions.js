import {
  CALENDAR_ACTIVATE_MONTH_SELECTOR,
  CALENDAR_ACTIVATE_YEAR_SELECTOR,
  CALENDAR_DEACTIVATE_MONTH_SELECTOR,
  CALENDAR_DEACTIVATE_YEAR_SELECTOR,
  CALENDAR_SET_DATE
} from "src/constants/calendarConstants";

const setDate = (year, month) => ({
  type: CALENDAR_SET_DATE,
  payload: {
    year: year,
    month: month
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
  setDate,
  activateYearSelector,
  activateMonthSelector,
  deactivateYearSelector,
  deactivateMonthSelector,
};