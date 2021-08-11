import { months } from "../calendarVariables";

export const MonthSelector = (props) => {
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