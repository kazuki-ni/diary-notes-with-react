import React from 'react'

import { firstDayOfMonth, weekdays, months, holiday_list, days_list } from "./calendar_variables";

const CalendarHeader = (props) => {

	const decreaseMonth = () => {
		props.setMonth(props.month - 1)
	}
	const increaseMonth = () => {
		props.setMonth(props.month + 1)
	}

	return (
		<div className="header">
			<div className="header--info">
				<span
					className="header--month"
					onClick={props.monthHandler}
				>
					{months[props.month]}
				</span>
				<span
					className="header--year"
					onClick={props.yearHandler}
				>
					{props.year}
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

const WeekDaysTitle = () => {
	return (
		<div className="weekrow">
			{weekdays.map( weekday => {
				return (
					<span
						key={weekday}
						className="weekday"
					>
					{ weekday }
					</span>
				)
			})}
		</div>
	)
}

const Days = (props) => {

	const firstDay = firstDayOfMonth(props.date)+1;
	const days = [...Array(days_list[props.month]).keys()].map(i => ++i)
	const today_date = new Date();
	const today = (
		(props.date.getFullYear() === today_date.getFullYear()) &&
		(props.date.getMonth() === today_date.getMonth())
	) ? today_date.getDate() : "not today";
	const holidays = holiday_list[props.month];
	const style = {gridColumnStart: firstDay}

	return (
		days.map( day => {
			return (
				<span
					key={day}
					className={
						`day
						${day === 1 ? "first-day" : ""}
						${day === today ? "today" : ""}
						${(day + firstDay) % 7 === 2 ? "sunday" : ""}
						${(day + firstDay) % 7 === 1 ? "saturday" : ""}
						${holidays.includes(day) ? "sunday" : ""}
						`}
					style={day === 1 ? style : {}}
					onClick={() => props.dayClicked(day)}
				>
					{day}
				</span>
			)
		})
	)
}

const MonthSelector = (props) => {
	return (
		<div className="selector">
			{months.map((month, i) => {
				return (
					<span
						key={month}
						onClick={() => props.monthClicked(i)}
						className={`selectable ${
							i === props.month ? "selected" : ""
						}`}
					>
						{month}
					</span>
				);
			})}
		</div>
	);
}

const YearSelector = (props) => {
	const years = [...Array(12).keys()].map((y) => y - 5 + props.year)
	console.log(years)
	return (
		<div className="selector">
			{years.map((year, i) => {
				console.log(year)
				return (
					<span
						key={year}
						onClick={() => props.yearClicked(year)}
						className={`selectable ${
							i === props.year ? "selected" : ""
						}`}
					>
						{year}
					</span>
				);
			})}
		</div>
	);
}

export { CalendarHeader, WeekDaysTitle, Days, MonthSelector, YearSelector }