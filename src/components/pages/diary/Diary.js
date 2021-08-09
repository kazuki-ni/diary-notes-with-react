import React, { Component } from 'react'

import "./diary.scss"
import NavList from "./NavList"
import ImageList from "./ImageList"
import { DiaryImage } from "./DiaryImage"
import { months } from "src/components/pages/calendar/calendar_variables";
import { inputDiary ,fetchDiary } from './diary_actions_to_server';
import { toggleImageFunc, inputDiaryFromDB, setDiaryImage, gatherImgURLs } from "./diary_functions";

class Diary extends Component {
	constructor( props ) {
		super( props );
		this.date_num = props.date.split("_");
		this.day = parseInt(this.date_num[1].slice(2, 4));
		this.month = months[(parseInt(this.date_num[1].slice(0, 2))-1)];
		this.year = this.date_num[0];
		this.mood = this.props.mood;

		this.imgList = []

		this.state = {
			imageFuncActivated: false
		}
	}

  addURLofImgs = (newImgURLs) => {
		this.imgList = newImgURLs;
		console.log("state_diaryImgs:");
		this.imgList.map((url, i)=>console.log(`${i+1}: ${url.slice(0, 30)}`))
  };

	inputBtnClicked = () => {

		//* [Before sending] Record img URLs
		if (this.state.imageFuncActivated) { this.addURLofImgs(gatherImgURLs()) };

		inputDiary({
			date: this.date_num.join("_"), 		//* 2021_0809
			mood: this.mood, 									//* "Happy"
			bg: document.getElementById("diary-root").style.backgroundImage || "url(\"/images/scenes/2.jpg\")",
			imgs: this.imgList, 			//* Array
			title: document.getElementById("diary-title").value, //* String
			content: document.getElementById("diary-content").value //* String
		});
	}

	imageBtnClicked = () => {

		//* [Before closing] Record img URLs
		if (this.state.imageFuncActivated) { this.addURLofImgs(gatherImgURLs()) };

		//* Toggle the diary image window
		this.setState(
			{imageFuncActivated: !this.state.imageFuncActivated},
			() => {
				console.log(`Image function ${(this.state.imageFuncActivated) ? "activated": "deactivated"}`);
				toggleImageFunc(this.state.imageFuncActivated);

				//* [After opening] Add a hover effect
				if (this.state.imageFuncActivated) {
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
					setDiaryImage(this.state.imageFuncActivated);

				//* [After closing]
				} else {
					;
				}
			}
		);
	}

	componentDidMount = async () => {
		const diary = await fetchDiary( this.date_num.join("_") );
    console.log(diary);
		inputDiaryFromDB(diary);
		this.imgList = diary.imgs;

		//* Set a layout of diary images according to the window size
		window.onresize = ()=>setDiaryImage(this.state.imageFuncActivated);
	}

	render() {
		return (
			<div id="diary-root">

				{/* Header */}
				<div className="header">
					<h1 className="diary-date">
						<span className="diary-day">{ this.day }</span>
						<span className="diary-month">{ this.month }</span>
						<span className="diary-year">{ this.year }</span>
					</h1>

				{/* Nav */}
					<div className="nav">
						<NavList
							imageFuncActivated={this.state.imageFuncActivated}
							inputBtnClicked={this.inputBtnClicked.bind(this)}
							imageBtnClicked={this.imageBtnClicked.bind(this)}
						/>
					</div>
				</div>

				{/* Diary */}
				<div
					id="diary"
					className="diary-without-img"
				>
					{this.state.imageFuncActivated && (
						<DiaryImage
							imgList={this.imgList}
							setDiaryImage={setDiaryImage.bind(this)}
							addURLofImgs={ this.addURLofImgs.bind(this) }
						/>
					)}
					<input
						id="diary-title"
						className="diary-title-without-img"
						placeholder="title..."
						type="text"
					/>
					<textarea
						id="diary-content"
						className="diary-content-without-img"
						placeholder="content..."
					/>
				</div>

				{/* Footer */}
				<div className="footer">
					<ImageList />
				</div>

			</div>

		);
	}
}

export default Diary;