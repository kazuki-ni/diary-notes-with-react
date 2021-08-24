import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router';

import { fetchMoods } from 'src/actions/calendarActions';
import { setDiaryDate } from "src/actions/diaryActions";

import { checkToday, getHolidays, getDaysInMonth } from '../calendarFunctions';


export default function Days() {
	const history = useHistory();

	//* State
  const year = useSelector( state => state.calendarDateReducer.year );
  const month = useSelector( state => state.calendarDateReducer.month );
  const date = new Date(year, month, 1);
	const moods = useSelector(state => state.calendarMoodReducer.moods)

  //* Dispatch
  const dispatch = useDispatch();
  const dayClicked = (day) => {
    const date_ =
      year + "_" +
      ('00' + (month+1)).slice(-2) +
      ('00' + day ).slice(-2);

    dispatch(setDiaryDate(date_))
    history.push('/howareyou')
  }

	const firstDay = date.getDay() + 1;
	const days = getDaysInMonth(year, month);
	const today = checkToday(date);
	const holidays = getHolidays(month);
	const style = {gridColumnStart: firstDay};

	useEffect( () => dispatch(fetchMoods(year, month)), [dispatch, year, month]);

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
