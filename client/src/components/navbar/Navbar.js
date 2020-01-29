import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import CartIcon from '../cart/CartIcon';
import Dropdown from '../dropdown/Dropdown';

class Navbar extends React.Component {
	logout = () => {
		localStorage.removeItem('authorisation')
		this.props.isUserLoggedIn()
	}

	render() {
		return (
			<nav className="site-nav grid">
				<h3><Link to="/">UDOU</Link></h3>
				{/* <Dropdown /> */}
				<ul>
					{this.props.authed ? 
						<li><Link to="/" onClick={() => this.logout()}>Log out</Link></li> : 
						<>
							<li><Link to="/registration">Register</Link> </li>
							<li><Link to="/login">Login</Link></li>
						</>
					}
					{/* <li><Link to ="/product_view">Configurator</Link></li> */}
					{/* {this.props.authed ? 
						<li><Link to='/shopping'>Shopping Cart</Link></li> : 
						<></>
					} */}
					<li><Link to ="/cart"><CartIcon /></Link></li>
					
				</ul>
			</nav>
		)
	}
}

export default Navbar;