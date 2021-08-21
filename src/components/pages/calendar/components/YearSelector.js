import { useSelector, useDispatch } from "react-redux";

import {
  setDate,
  deactivateYearSelector,
} from "src/actions/calendarActions";

export default function YearSelector() {

  //* State
  const year = useSelector( state => state.calendarDateReducer.year );
  const month = useSelector( state => state.calendarDateReducer.month );

	const years = [...Array(12).keys()].map((y) => y - 5 + year);

	//* Dispatch
	const dispatch = useDispatch();
  const yearClicked = newYear => {
    dispatch(setDate(newYear, month));
    dispatch(deactivateYearSelector());
  }

	return (
		<div className="selector">
			{years.map((year, i) => {
				return (
					<span
						key={year}
						onClick={() => yearClicked(year)}
						className={`selectable ${
							i === year ? "selected" : ""
						}`}
					>
						{year}
					</span>
				);
			})}
		</div>
	);
}