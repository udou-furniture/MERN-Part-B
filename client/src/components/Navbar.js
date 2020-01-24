import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


class Navbar extends React.Component {
	logout = () => {
		localStorage.removeItem('authorisation')
		this.props.isUserLoggedIn()
	}

	render() {
		return (
			<nav className="nav-wrapper">
				<div className="container">
					<ul>
						<li><Link to="/">Home</Link></li>
						{this.props.authed ? 
							<Link to="/" onClick={() => this.logout()}>Log out</Link> : 
							<>
								<li><Link to="/registration">Register</Link> </li>
								<li><Link to="/login">Login</Link></li>
							</>
						}
						<li><Link to ="/product_view">Configurator</Link></li>
						{this.props.authed ? 
							<li><Link to='/shopping'>Shopping Cart</Link></li> : 
							<></>
						}
						
					</ul>
				</div>
			</nav>
		)
	}
}

export default Navbar;