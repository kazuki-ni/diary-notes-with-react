import React from 'react';
import { useSelector } from 'react-redux';

import "./diary.scss"
import NavList from "./components/NavList"
import ImageList from "./components/ImageList"
import DiaryImage from "./components/DiaryImage"
import { months, today_date } from "src/components/pages/calendar/calendarVariables";
import { setDiaryImage } from "./diaryFunctions";

export default function Diary() {
	//* State
	let {
    date, mood, bg, title, content
	} = useSelector( state => state.diaryInitiallySetReducer.diary );
	date = date || today_date;
	mood = mood || "Normal";
	const date_num = date.split("_");
	const day = parseInt(date_num[1].slice(2, 4));
	const month = months[(parseInt(date_num[1].slice(0, 2))-1)];
	const year = date_num[0];

	const imageFuncActivated = useSelector( state => state.diaryEditReducer.imageFuncActivated )

	//* Set a layout of diary images according to the window size
	window.onresize = () => setDiaryImage(imageFuncActivated);

	return (
		<div
			id="diary-root"
			style={{backgroundImage: bg}}
		>

			{/* Header */}
			<div className="header">
				<h1 className="diary-date">
					<span className="diary-day">{ day }</span>
					<span className="diary-month">{ month }</span>
					<span className="diary-year">{ year }</span>
				</h1>

			{/* Nav */}
				<div className="nav">
					<NavList />
				</div>
			</div>

			{/* Diary */}
			<div
				id="diary"
				className="diary-without-img"
			>
				{imageFuncActivated && (
					<DiaryImage />
				)}
				<input
					id="diary-title"
					className="diary-title-without-img"
					placeholder="title..."
					defaultValue={title}
					type="text"
				/>
				<textarea
					id="diary-content"
					className="diary-content-without-img"
					placeholder="content..."
					defaultValue={content}
				/>
			</div>

			{/* Footer */}
			<div className="footer">
				<ImageList />
			</div>

		</div>

	);
}
