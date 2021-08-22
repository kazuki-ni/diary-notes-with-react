import SidebarItem from './SidebarItem';
import { sidebar_item, toggleSidebar } from './sidebarVariables';
import './sidebar.css';

export default function Sidebar() {

	return (
		<div className="sidebar">
			<div
				className="logo-details"
				onClick={ toggleSidebar }
			>
				<i className='bx bxl-c-plus-plus icon'></i>
				<div className="logo_name">Daily Notes</div>
				<i
					className='bx bx-menu'
					id="btn"
				></i>
			</div>

			<ul className="nav-list">

				{Array.from(sidebar_item).map( item => {
					const key = Object.keys(item)[0];
					return (
						<SidebarItem
							key = { key }
							item = { item }
						/>
					)
				})}
			</ul>
		</div>
	);
}
