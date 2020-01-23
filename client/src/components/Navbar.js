import React from 'react';
import { Link, Navlink } from 'react-router-dom';

import {logout, isLoggedIn} from '../utils/auth'
import './Navbar.css';

class Navbar extends React.Component {
	// state = {
    //     isLoggedIn: isLoggedIn()
	// }
	
	// componentDidUpdate() {
	// 	this.setState({isLoggedIn: isLoggedIn()})
	// }
	
	render() {
		return (
			<nav className="nav-wrapper">
				<div className="container">
					<ul>
						<li><Link to="/">Home</Link></li>
						{/* <li><Link to="/registration">Registration</Link></li>
						<li><Link to="/login">Login</Link></li> */}

						
						{this.props.isLoggedIn  ? 
							<Link to="/" onClick={() => this.props.logout()}>Log out</Link> : 
							<>
								<li><Link to="/registration">Register</Link> </li>
								<li><Link to="/login">Login</Link></li>
							</>
						}
					</ul>
				</div>
			</nav>
		)
	}
}

export default Navbar;