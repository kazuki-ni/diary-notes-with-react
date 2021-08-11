export const YearSelector = (props) => {
	const years = [...Array(12).keys()].map((y) => y - 5 + props.year);
	return (
		<div className="selector">
			{years.map((year, i) => {
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