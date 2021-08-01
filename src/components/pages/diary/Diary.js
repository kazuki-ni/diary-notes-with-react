import React, { Component } from 'react'
import "./diary.scss"

import ImageList from "./ImageList"
import { months } from "src/components/pages/calendar/CalendarVariables";

class Diary extends Component {
	constructor( props ) {
		super( props );
		const date_num = props.date.split("_")
		this.day = parseInt(date_num[1].slice(2, 4))
		this.month = months[(parseInt(date_num[1].slice(0, 2))-1)]
		this.year = date_num[0]
	}

	bgChose = (bg_img) => {
		const diary_root = document.getElementById("diary-root");
		diary_root.style.backgroundImage = "url("+bg_img+")";
	}

	render() {

		return (

			<div id="diary-root">

				<div className="header">
					<h1 className="diary-date">
						<span className="diary-day">{ this.day }</span>
						<span className="diary-month">{ this.month }</span>
						<span className="diary-year">{ this.year }</span>
					</h1>

					<div className="nav">
					</div>
				</div>

				<div className="diary">
					<img
						id="diary-img"
						src="/images/scenes/2.jpg"
						alt=""
					/>
					<input
						className="diary-title"
						placeholder="title..."
					></input>
					<textarea
						className="diary-content"
						placeholder="content..."
					></textarea>
				</div>

				<div className="footer">
					<ImageList
						bgChose={this.bgChose}
					/>
				</div>

			</div>

		);
	}
}

export default Diary;