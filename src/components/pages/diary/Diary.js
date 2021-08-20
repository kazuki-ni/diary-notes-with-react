import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import "./diary.scss"
import NavList from "./components/NavList"
import ImageList from "./components/ImageList"
import { DiaryImage } from "./components/DiaryImage"
import { months, today_date } from "src/components/pages/calendar/calendarVariables";
import { inputDiary } from '../../../actions/diaryActions';
import {
	toggleImageFunc,
	setDiaryImage,
	gatherImgURLs,
	showURLofImgs
} from "./diaryFunctions";
import { DIARY_ACTIVATE_IMAGE, DIARY_DEACTIVATE_IMAGE } from 'src/constants/diaryConstants';

function Diary() {
	//* State
	let {
    date, mood, bg, title, content, imgList
	} = useSelector( state => state.diaryInitiallySetReducer.diary );
	date = date || today_date;
	mood = mood || "Normal";
	const date_num = date.split("_");
	const day = parseInt(date_num[1].slice(2, 4));
	const month = months[(parseInt(date_num[1].slice(0, 2))-1)];
	const year = date_num[0];

	const imageFuncActivated = useSelector( state => state.diaryEditReducer )

	//* Dispatch
	const dispatch = useDispatch();
	const activateImageFunc = () => dispatch({type: DIARY_ACTIVATE_IMAGE});
	const deactivateImageFunc = () => dispatch({type: DIARY_DEACTIVATE_IMAGE});

	//* Functions
	const inputBtnClicked = () => {
		const newImgList = gatherImgURLs();

		//* [Before sending] Record img URLs
		if (imageFuncActivated) showURLofImgs(newImgList);

		inputDiary({
			date		: date,
			mood		: mood,
			bg			: document.getElementById("diary-root").style.backgroundImage,
			imgList	: newImgList,
			title		: document.getElementById("diary-title").value,
			content	: document.getElementById("diary-content").value
		});
	}

	const imageBtnClicked = () => {
		const newImgList = gatherImgURLs();

		//* [Before closing] Record img URLs
		if (imageFuncActivated) showURLofImgs(newImgList);

		//* Toggle the diary image window
		switch (imageFuncActivated) {
			//* Close
			case true:
				deactivateImageFunc();
				toggleImageFunc(false);

				//* [After closing]
				break;

			//* Open
			case false:
				activateImageFunc();
				toggleImageFunc(true);

				//* [After opening] Add a hover effect
				const imgAddBtn = document.getElementById("diary-img-list");
				imgAddBtn.addEventListener("mouseenter", () => {
					imgAddBtn.style.backgroundColor = "rgba(255,255,255,0.5)";
					imgAddBtn.style.cursor = "pointer";
				}, false);
				imgAddBtn.addEventListener("mouseleave", () => {
					imgAddBtn.style.backgroundColor = "rgba(255,255,255,0.3)";
					imgAddBtn.style.cursor = "auto";
				}, false);

				//* Set a layout of diary images
				setDiaryImage(imageFuncActivated);
				break;

			default: ;
		}
	}

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
					<NavList
						imageFuncActivated={imageFuncActivated}
						inputBtnClicked={inputBtnClicked}
						imageBtnClicked={imageBtnClicked}
					/>
				</div>
			</div>

			{/* Diary */}
			<div
				id="diary"
				className="diary-without-img"
			>
				{imageFuncActivated && (
					<DiaryImage
						imgList={imgList}
						setDiaryImage={setDiaryImage}
						showURLofImgs={showURLofImgs}
					/>
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

export default Diary;