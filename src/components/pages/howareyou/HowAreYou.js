import React, { Component } from 'react'

import { Link, withRouter } from 'react-router-dom'

import { fetchSingleDiary } from '../../../actions/diaryActions'
import mood_imgs from "./moodImagePath"
import "./howareyou.scss"

class HowAreYou extends Component {
	constructor( props ) {
		super( props );

		this.checkDiaryHasBeenWritten();
	}

	checkDiaryHasBeenWritten = async () => {
		console.log("Get to fetchSingleDiary function")
		await fetchSingleDiary( this.props.date )
			.then( diary => {
				console.info(diary)
				switch (diary) {
					case null:
						console.log("Diary hasn't been written.");
						break;
					default:
						console.log("Diary has been written. Move to the diary page.")
						this.props.moodHandler( this.props.mood );
						this.props.history.push("/diary/" + this.props.date);
				}
			})
			.catch( error => {
				console.log("Couldn't check if diary has been written because of ↓")
				console.error(error);
			})
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