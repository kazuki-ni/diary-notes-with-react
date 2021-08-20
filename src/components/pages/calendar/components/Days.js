import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router';

import { setDate } from "src/actions/calendarActions";

import { firstDayOfMonth, holiday_list, days_list } from "../calendarVariables";
import { fetchMoods } from "src/actions/diaryActions";

export default function Days() {
	const history = useHistory();

	//* State
  const year = useSelector( state => state.calendarDateReducer.year );
  const month = useSelector( state => state.calendarDateReducer.month );
  const date = useSelector( state => state.calendarDateReducer.date );

  //* Dispatch
  const dispatch = useDispatch();
  const dayClicked = (day) => {
    const date =
      year + "_" +
      ('00' + (month+1)).slice(-2) +
      ('00' + day ).slice(-2);

    dispatch(setDate(date))
    history.push('/howareyou')
  }

	const firstDay = firstDayOfMonth(date)+1;
	const days = [...Array(days_list[month]).keys()].map(i => ++i)
	const today_date = new Date();
	const today = (
		(date.getFullYear() === today_date.getFullYear()) &&
		(date.getMonth() === today_date.getMonth())
	) ? today_date.getDate() : "not today";
	const holidays = holiday_list[month];
	const style = {gridColumnStart: firstDay}
	const moods = fetchMoods(year, month+1);

	return (
		days.map( day => {
			let mood_class = "";
			if (Object.keys(moods).includes(String(day))) {
				mood_class = moods[String(day)].toLowerCase() + "-day";
			}

			return (
				<span
					key={day}
					className={
						`day ${mood_class}
						${day === 1 ? "first-day" : ""}
						${day === today ? "today" : ""}
						${(day + firstDay) % 7 === 2 ? "sunday" : ""}
						${(day + firstDay) % 7 === 1 ? "saturday" : ""}
						${holidays.includes(day) ? "sunday" : ""}
						${holidays.includes(day) ? "sunday" : ""}
						`}
					style={day === 1 ? style : {}}
					onClick={() => dayClicked(day)}
				>
					{day}
				</span>
			)
		})
	)
}
