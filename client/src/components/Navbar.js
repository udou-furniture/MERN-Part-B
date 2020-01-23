import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className="nav-wrapper">
			<div className="container">
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/registration">Registration</Link></li>
					<li><Link to="/login">Login</Link></li>
					<li><Link to ="/product_view">Configurator</Link></li>

				</ul>
			</div>
		</nav>
	)}

export default Navbar;