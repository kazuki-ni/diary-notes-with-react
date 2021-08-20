import { useSelector, useDispatch } from "react-redux";
import { months } from "../calendarVariables";

import {
  setMonth,
  deactivateMonthSelector,
} from "src/actions/calendarActions";

export default function MonthSelector() {
	//* State
  const month = useSelector( state => state.calendarDateReducer.month );

	//* Dispatch
	const dispatch = useDispatch();
	const monthClicked = month => {
    dispatch(setMonth(month));
    dispatch(deactivateMonthSelector());
  }

	return (
		<div className="selector">
			{months.map((monthName, i) => {
				return (
					<span
						key={monthName}
						onClick={() => monthClicked(i)}
						className={`selectable ${
							i === month ? "selected" : ""
						}`}
					>
						{monthName}
					</span>
				);
			})}
		</div>
	);
}