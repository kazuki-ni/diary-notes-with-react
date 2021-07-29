import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import image_path from "./image_path"
import "./howareyou.css"

class HowAreYou extends Component {

	constructor( props ) {
		super( props );
		this.rad_imgs = image_path["Rad"]
		this.happy_imgs = image_path["Happy"]
		this.normal_imgs = image_path["Normal"]
		this.sad_imgs = image_path["Sad"]
		this.angry_imgs = image_path["Angry"]
		console.log(this.rad_imgs)
		this.mood_imgs = [
			{"Rad": this.rad_imgs[Math.floor(Math.random() * this.rad_imgs.length)]},
			{"Happy": this.happy_imgs[Math.floor(Math.random() * this.happy_imgs.length)]},
			{"Normal": this.normal_imgs[Math.floor(Math.random() * this.normal_imgs.length)]},
			{"Sad": this.sad_imgs[Math.floor(Math.random() * this.sad_imgs.length)]},
			{"Angry": this.angry_imgs[Math.floor(Math.random() * this.angry_imgs.length)]}
		]
	}

	render() {

		return (
			<div id="howareyou">
				<h1 id="title">HOW ARE YOU?</h1>
				<h3 id="lead">Before diary, choose one that is close to your current mood</h3>

				<ul id="mood-list">
					{ Array.from(this.mood_imgs).map( (img) => {
						const img_title = Object.keys(img)[0];
						const img_key = img_title.toLowerCase();
						const img_path = img[img_title];
						return (
							<li className="mood-item">
								<Link to={"/diary/" + img_key}>
									<img
										src={img_path}
										alt={img_title + " image"}
										className="mood-img"></img>
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

export default HowAreYou;