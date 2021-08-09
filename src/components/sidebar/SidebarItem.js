import React from 'react'
import { Link } from 'react-router-dom'

import { toggleSidebar } from './sidebar_variables';

const SidebarItem = ( props ) => {

	const item_key = Object.keys(props.item)[0];
	const item = props.item[item_key]

	switch ( item_key ) {
		//* when Sidebar item is "Search"
		case "Search":
			return (
				<li>
					<i
						className={'bx ' + item.icon}
						onClick={props.toggleSidebar}
					/>
					<input type="text" placeholder={item.links_name} />
					<span className="tooltip">{item.tooltip}</span>
				</li>
			)

		//* when Sidebar item is "Profile"
		case "Profile":
			const MouseEnterProfile = () => {
				if (document.querySelector(".sidebar").classList.contains("open")) {
					document.getElementById('github').classList.replace("bxl-github", "bxs-right-arrow-circle");
				}
			}
			const MouseLeaveProfile = () => {
				document.getElementById('github').classList.replace("bxs-right-arrow-circle", "bxl-github");
			}

			return (
				<li className="profile">
					<div
						className="profile-details"
						target="_blank"
						rel="noreferrer"
						onClick={ () =>	window.open(item.href, "_blank") }
						onMouseEnter={MouseEnterProfile}
						onMouseLeave={MouseLeaveProfile}
					>
						<img src="/images/profile.jpg" alt="profileImg" />
						<div className="name_job">
							<div className="name">Kazuki Nishimura</div>
							<div className="job">University Students</div>
						</div>
					</div>
					<i
						className={'bx ' + item.icon}
						id="github"
						onClick={toggleSidebar}
					/>
					<span className="tooltip">{item.tooltip}</span>
				</li>
			)

		//* except for the above two
		default:

			return (
				<li className="SidebarItem">
					<Link to={item.href}>
						<i className={'bx ' + item.icon} />
						<span
							className="links_name"
							onClick={toggleSidebar}
						>
							{item.links_name}
						</span>
					</Link>
					<span className="tooltip">{item.tooltip}</span>
				</li>
			)
	}
}

export default SidebarItem;