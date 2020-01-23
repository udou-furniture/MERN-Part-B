import React from 'react';
import { Link, Navlink } from 'react-router-dom';

import {logout, isLoggedIn} from '../utils/auth'
import './Navbar.css';

class Navbar extends React.Component {
	state = {
        isLoggedIn: isLoggedIn()
    }

    handleLogout = () => {
        logout()
        this.setState({isLoggedIn: false})
	}
	
	render() {
		return (
			<nav className="nav-wrapper">
				<div className="container">
					<ul>
						<li><Link to="/">Home</Link></li>
						{/* <li><Link to="/registration">Registration</Link></li>
						<li><Link to="/login">Login</Link></li> */}

						{this.state.isLoggedIn ? 
							<button onClick={() => this.handleLogout()}>Click here to log out</button>
							: <Link to="/registration">Register</Link><Link to="/login">Login</Link>
                		}
					</ul>
				</div>
			</nav>
		)
	}
}

export default Navbar;