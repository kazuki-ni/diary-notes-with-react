import { weekdays } from "../calendarVariables";

export default function WeekDaysTitle() {
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