import React, { useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import { fetchSingleDiary, setDiaryMood } from '../../../actions/diaryActions'
import mood_imgs from "./moodImagePath"
import "./howareyou.scss"
import { today_date } from '../calendar/calendarVariables'

function HowAreYou() {
	const history = useHistory();

	//* State
	const { diary } = useSelector(state => state.diaryReducer );
	const date = diary.date || today_date;

	//* Dispatch
	const dispatch = useDispatch();
	const moodHandler = mood => dispatch(setDiaryMood(mood));

	//* Check DB
	const fetchDiary = () => {
		dispatch(fetchSingleDiary(date))
			.then( mood => {
				if (mood) {
					console.log("Diary has been written. Move to the diary page.");
					history.push("/diary/" + date);
				} else {
					console.log("Diary hasn't been written yet. Stay in this page.");
				}
			})
	}

	useEffect(fetchDiary, [dispatch, history, date])

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
							<Link to={"/diary/" + date}>
								<img
									src={img_path}
									alt={img_title + " image"}
									className="mood-img"
									onClick={ () => moodHandler(img_title)}
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

export default withRouter(HowAreYou);