import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import CartIcon from '../cart/CartIcon';
import Dropdown from '../dropdown/Dropdown';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PlaceHolderImage from '../../assets/placeholder-image.png';
import './Navbar.css';

class Navbar extends React.Component {

	container = React.createRef();
	state = {
		open: false,
	};

	componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
	}

	componentWillUnmount() {
		document.removeEventListener("mousedown", this.handleClickOutside);
	}

  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open,
      };
		});
	};

	// handleClickOutside = event => {
	// 	if (this.container.current && !this.container.current.contains(event.target)) {
	// 		this.setState({
	// 			open: false,
	// 		});
	// 	}
	// };


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
						<li onClick={this.handleButtonClick}>Shelves
							{/* <Link to="/products">Shelves</Link> */}
							{/* <span className="dropdown-icon"><ExpandMoreIcon /></span> */}
						</li>	
						{this.props.authed ? 
						<li><Link to="/" onClick={() => this.logout()}>Log out</Link></li> : 
						<>
							<li><Link to="/registration">Sign up</Link></li>
							<li><Link to="/login">Login</Link></li>
							<CartIcon />
						</>	
						}
						{this.props.authed ? 
							<Link to ="/cart"><CartIcon /></Link> : 
							<></>
						}
					</ul>
				</div>
				{/* <div className="container" ref={this.container}>
				{this.state.open && (
					<div className="dropdown">
						<div className="dropdown-card-1">
							<Link to={{pathname: "/products/bookshelf"}}>
								<img className="dropdown-image" src={PlaceHolderImage} alt="placeholder"></img>
								<h4>Bookshelves</h4>	
							</Link>
						</div>
						<div className="dropdown-card-2">
							<Link to={{pathname: "/products/wallunit"}}>
								<img className="dropdown-image" src={PlaceHolderImage} alt="placeholder"></img>
								<h4>Wall Units</h4>	
							</Link>
						</div>
						<div className="dropdown-card-3">
							<Link to={{pathname: "/products/sideboard"}}>
								<img className="dropdown-image" src={PlaceHolderImage} alt="placeholder"></img>
								<h4>Sideboards</h4>	
							</Link>
						</div>
					</div>	
				)}
				</div> */}
			</nav>
		)
	}
}

export default Navbar;

