import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import CartIcon from '../cart/CartIcon';
import Dropdown from '../dropdown/Dropdown';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PlaceHolderImage from '../../assets/placeholder-image.png';
import './Navbar.css';



class Navbar extends React.Component {

	logout = () => {
		localStorage.removeItem('authorisation')
		this.props.isUserLoggedIn()
	}

	render() {
		return (
			<nav className="site-nav">
				<div className="grid">
					<h1><Link to="/">UDOU</Link></h1>
					<ul>
						<li >Shelves
							{/* <Link to="/products">Shelves</Link> */}
							{/* <span className="dropdown-icon"><ExpandMoreIcon /></span> */}
						</li>
						{this.props.authed ? 
						<>
							<li><Link to="/" onClick={() => this.logout()}>Log out</Link></li>
							<li><Link to="/account">My account</Link></li>
						</> :
						<>
							<li><Link to="/registration">Registration</Link></li>
							<li><Link to="/login">Login</Link></li>
						</>	
						}
						<CartIcon />
					</ul>
				</div>
			</nav>
		)
	}
}

export default Navbar;

