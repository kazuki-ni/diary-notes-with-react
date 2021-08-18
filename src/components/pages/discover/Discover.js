import { Header } from 'src/components/Header';

import MiniArticle from './components/MiniArticle';
import "./discover.scss";

const Discover = () => {

	return (

		<div className="discover-root">

			<Header title="Discover" />

			<div className="discover-content">
				<ul className="mini-article-list">
					<MiniArticle />
				</ul>
				<div className="search"></div>
			</div>

		</div>

	);
}

export default Discover;