import { weekdays } from "../calendarVariables";

export const WeekDaysTitle = () => {
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