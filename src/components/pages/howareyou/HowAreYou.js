import { Link } from 'react-router-dom'

import mood_imgs from "./mood_image_path"
import "./howareyou.css"

const HowAreYou = (props) => {

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
							<Link to={"/diary/" + props.date}>
								<img
									src={img_path}
									alt={img_title + " image"}
									className="mood-img"
									onClick={ () => props.moodHandler(img_title)}
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


export default HowAreYou;