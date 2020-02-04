import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../cart/CartIcon';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PlaceHolderImage from '../../assets/placeholder-image.png';
import './Navbar.css';
import { CSSTransition } from "react-transition-group";


class Navbar extends React.Component {

	state = {
    showList: false,
  };

  handleClick = () => {
    this.setState(prevState => ({
      showList: !prevState.showList
    }));
  };

	logout = () => {
		localStorage.removeItem('authorisation')
		this.props.isUserLoggedIn()
	}

	render() {
		return (
			<nav className="site-nav">
				<div className="nav-content-grid">
					<h1><Link to="/">UDOU</Link></h1>
					<div className="links">
							<Link className="display" onClick={this.handleClick}>Shelves</Link>
							{/* <span className="dropdown-icon"><ExpandMoreIcon /></span> */}
						{this.props.authed ? 
						<>
							<Link to="/" onClick={() => this.logout()}>Log out</Link>
							<Link to="/account">My account</Link>
						</> :
						<>
							<Link to="/registration">Registration</Link>
							<Link to="/login">Login</Link>
						</>	
						}
						<CartIcon />
					</div>	
				</div>	
				<div className="container">
					<CSSTransition
						in={this.state.showList}
						timeout={400}
						classNames="list-transition"
						unmountOnExit
						appear
						onEntered={this.listSwitch}
						onExit={this.listSwitch}
					>
						<div className="list-body dropdown-grid">
							{/* <ul className="list">
								<li className="list-item">Bookshelves</li>
								<li className="list-item"> Wall units</li>
								<li className="list-item"> Sideboards</li>
							</ul> */}
							<div className="list-item dropdown-card-1">
								<Link to={{pathname: "/products/bookshelf"}}>
									<img className="dropdown-image" src={PlaceHolderImage} alt="placeholder"></img>
									<h4>Bookshelves</h4>	
								</Link>
							</div>
							<div className="list-item dropdown-card-2">
								<Link to={{pathname: "/products/wallunit"}}>
									<img className="dropdown-image" src={PlaceHolderImage} alt="placeholder"></img>
									<h4>Wall Units</h4>	
								</Link>
							</div>
							<div className="list-item dropdown-card-3">
								<Link to={{pathname: "/products/sideboard"}}>
									<img className="dropdown-image" src={PlaceHolderImage} alt="placeholder"></img>
									<h4>Sideboards</h4>	
								</Link>
							</div>
          	</div>
        	</CSSTransition>
      	</div>
			</nav>
		)
	}
}

export default Navbar;

