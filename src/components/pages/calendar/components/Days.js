import { firstDayOfMonth, holiday_list, days_list } from "../calendarVariables";
import { fetchMoods } from "src/actions/diaryActions";

export const Days = (props) => {

	const firstDay = firstDayOfMonth(props.date)+1;
	const days = [...Array(days_list[props.month]).keys()].map(i => ++i)
	const today_date = new Date();
	const today = (
		(props.date.getFullYear() === today_date.getFullYear()) &&
		(props.date.getMonth() === today_date.getMonth())
	) ? today_date.getDate() : "not today";
	const holidays = holiday_list[props.month];
	const style = {gridColumnStart: firstDay}
	const moods = fetchMoods(props.date.getFullYear(), props.date.getMonth()+1);

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
					onClick={() => props.dayClicked(day)}
				>
					{day}
				</span>
			)
		})
	)
}
