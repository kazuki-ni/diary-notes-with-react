import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

// import { fetchSingleDiary } from '../../../actions/diaryActions'
import { setDiaryAll } from 'src/actions/diaryAction'
import mood_imgs from "./moodImagePath"
import "./howareyou.scss"
import { today_date } from '../calendar/calendarVariables'

function HowAreYou() {

	//* State
	const history = useHistory();
	const { diary } = useSelector(state => state.diaryInitiallySetReducer );
	const mood = diary.mood;
	const date = diary.date || today_date;
	if (mood) {
		console.log("mood: ", mood);
		console.log("Diary has been written. Move to the diary page.");
		history.push("/diary/" + date);
	} else {
		console.log("Diary hasn't been written yet. Stay in this page.");
	}

	//* Dispatch
	const dispatch = useDispatch();
	const moodHandler = mood => {
		diary.mood = mood;
		diary.date = date;
		dispatch(setDiaryAll(diary));
	}

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