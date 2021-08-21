import { holiday_list } from "./calendarVariables";

const checkToday = (date) => {
	const today = new Date();
  if ( date === today.setDate(1) ) {
    return today.getDate()
  } else {
    return "not today"
  }
}

const getHolidays = month => holiday_list[month];

const getDaysInMonth = (year, month) => {
  const endOfMonth = new Date(year, month+1, 0);
  const daysInMonth = endOfMonth.getDate();
  const dayArrayInMonth = [...Array(daysInMonth).keys()].map(i => ++i)
  return dayArrayInMonth;
}

export {
  checkToday,
  getHolidays,
  getDaysInMonth
}