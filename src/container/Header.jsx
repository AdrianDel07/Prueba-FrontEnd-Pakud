import React from 'react';
import { Link } from "react-router-dom";
import '../assets/sass/styles.scss';


const Header = () => (
	<div>
		<ul className="header">
			<div className="">
				<li className="box-activity">
					<Link style={{textDecoration: "none"}} className="box-activity" to='/'>
						<span className="activity"></span>
						<h3 className="activity-text">Activity</h3>
					</Link>
				</li>
			</div>
			<div className="header box-menu">
				<Link style={{textDecoration: "none"}} className="line-bottom header-li li" to='/'>
					<li className="active">Inbox</li>
				</Link>
				<Link style={{textDecoration: "none"}} className="header-li li" to='/calls'>
					<li className="">All calls</li>
				</Link>
				<li>
					<span className="settings-l"></span>
				</li>
		  </div>
		</ul>
	</div>
	)

export default Header;