import { months } from "../calendarVariables";

export const CalendarHeader = (props) => {

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
