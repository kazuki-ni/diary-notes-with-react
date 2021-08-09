import React, { Component } from 'react'

import { Link, withRouter } from 'react-router-dom'

import { fetchDiary } from '../diary/diary_actions_to_server'
import mood_imgs from "./mood_image_path"
import "./howareyou.scss"

class HowAreYou extends Component {
	constructor( props ) {
		super( props );
		if (this.diaryHasBeenWritten()) {
			this.props.history.push("/diary/" + this.props.date);
		}
	}

	diaryHasBeenWritten = async() => {
		const diary = await fetchDiary(this.props.date)
		// console.log(diary);
		if (diary.date !== undefined) {
			this.props.moodHandler(diary.mood);
			return true
		}
	}

	render() {
		return (
			<div id="howareyou">
				<h1 id="title">HOW ARE YOU?</h1>
				<h3 id="lead">Before diary, choose one below that is close to your current mood</h3>

				<ul id="mood-list">
					{ Array.from(mood_imgs).map( (img) => {
						const img_title = Object.keys(img)[0];
						const img_key = img_title.toLowerCase();
						const img_path = img[img_title];
						return (
							<li
								className="mood-item"
								key={img_key}
							>
								<Link to={"/diary/" + this.props.date}>
									<img
										src={img_path}
										alt={img_title + " image"}
										className="mood-img"
										onClick={ () => this.props.moodHandler(img_title)}
									></img>
									<h2 className="mood-title">{img_title}</h2>
								</Link>
							</li>
						)
					})}
				</ul>
			</div>
		);

	}

}


export default withRouter(HowAreYou);