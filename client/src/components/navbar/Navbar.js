import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import CartIcon from '../cart/CartIcon';
import Dropdown from '../dropdown/Dropdown';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PlaceHolderImage from '../../assets/placeholder-image.png';

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
			<nav>
				<div className="content">
					<h3><Link to="/">UDOU</Link></h3>
					<div className="links">
						<a className="menu" onClick={this.handleButtonClick}>Shelves<span className="dropdown-icon"><ExpandMoreIcon /></span></a>	
						{this.props.authed ? 
							<a><Link to="/" onClick={() => this.logout()}>Log out</Link></a> : 
							<>
								<a><Link to="/registration">Register</Link> </a>
								<a><Link to="/login">Login</Link></a>
								<a><Link to ="/cart"><CartIcon /></Link></a>
							</>	
						}
						{this.props.authed ? 
							<a><Link to ="/cart"><CartIcon /></Link></a> : 
							<></>
						}
						
					</div>
				</div>
				<div className="container" ref={this.container}>
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
				</div>
			</nav>
		)
	}
}

export default Navbar;

