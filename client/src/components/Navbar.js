import React from 'react';
import { Link, Navlink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="nav-wrapper">
			<div className="container">
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/login">Login</Link></li>
					<li><Link to="/collections">Collection</Link></li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar;