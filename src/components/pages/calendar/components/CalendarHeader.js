import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  setDate,
  activateYearSelector,
  activateMonthSelector,
} from "src/actions/calendarActions";

import { months } from "../calendarVariables";

export default function CalendarHeader() {
  //* State
  const year = useSelector( state => state.calendarDateReducer.year );
  const month = useSelector( state => state.calendarDateReducer.month );

  //* Dispatch
  const dispatch = useDispatch();
  const changeMonth = newMonth => dispatch(setDate(year, newMonth));
	const yearHandler = () => dispatch(activateYearSelector());
  const monthHandler = () => dispatch(activateMonthSelector());

	const decreaseMonth = () => changeMonth(month - 1);
	const increaseMonth = () => changeMonth(month + 1);

	return (
		<div className="header">
			<div className="header--info">
				<span
					className="header--month"
					onClick={monthHandler}
				>
					{months[month]}
				</span>
				<span
					className="header--year"
					onClick={yearHandler}
				>
					{year}
				</span>
			</div>
			<div className="header-icons">
				<span onClick={decreaseMonth}>
					<i className="bx bxs-chevron-left" />
				</span>
				<span onClick={increaseMonth}>
					<i className="bx bxs-chevron-right" />
				</span>
			</div>
		</div>
	)

}
