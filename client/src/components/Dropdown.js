import React from 'react';
import './Dropdown.css';
import { Link, Route } from 'react-router-dom';
import ProductsIndex from '../pages/ProductsIndex';

class Dropdown extends React.Component {
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
	
	handleClickOutside = event => {
		if (this.container.current && !this.container.current.contains(event.target)) {
			this.setState({
				open: false,
			});
		}
	};


	render() {
		return (
			<div className="container" ref={this.container}>
				<h3 className="button" onClick={this.handleButtonClick}>Shelves</h3>
				{this.state.open && (
					<div className="dropdown">
						<ul>
							<li><Link to={{pathname: "/products/bookshelf"}}>Bookshelves</Link></li>
							<li><Link to={{pathname: "/products/wallunit"}}>Wall Units</Link></li>
							<li><Link to={{pathname: "/products/sideboard"}}>Sideboards</Link></li>
						</ul>
					</div>
				)}
			</div>
		);
	}
}

export default Dropdown;