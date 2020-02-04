import React from 'react';
// import { Link, Route } from 'react-router-dom';
// import ProductsIndex from '../../pages/ProductsIndex';
// import chevronIcon from './cheveron-down.svg';
// import { CSSTransition } from "react-transition-group";

class Dropdown extends React.Component {
// 	state = {
//     showList: true,
//   };

//   handleClick = () => {
//     this.setState(prevState => ({
//       showList: !prevState.showList
//     }));
//   };

//   render() {
//     return (
//       <div className="dropdown container">
//         <button className="display" onClick={this.handleClick}>
//           Shelves
//         </button>
//         <CSSTransition
//           in={this.state.showList}
//           timeout={400}
//           classNames="list-transition"
//           unmountOnExit
//           appear
//           onEntered={this.listSwitch}
//           onExit={this.listSwitch}
//         >
//           <div className="list-body dropdown-grid">
//             <ul className="list">
//               <li className="list-item">Bookshelves</li>
//               <li className="list-item"> Wall units</li>
//               <li className="list-item"> Sideboards</li>
//             </ul>
// 						<div className="list-item dropdown-card-1">
// 							<Link to={{pathname: "/products/bookshelf"}}>
// 								<img className="dropdown-image" src={PlaceHolderImage} alt="placeholder"></img>
// 								<h4>Bookshelves</h4>	
// 							</Link>
// 						</div>
// 						<div className="list-item dropdown-card-2">
// 							<Link to={{pathname: "/products/wallunit"}}>
// 								<img className="dropdown-image" src={PlaceHolderImage} alt="placeholder"></img>
// 								<h4>Wall Units</h4>	
// 							</Link>
// 						</div>
// 						<div className="list-item dropdown-card-3">
// 							<Link to={{pathname: "/products/sideboard"}}>
// 								<img className="dropdown-image" src={PlaceHolderImage} alt="placeholder"></img>
// 								<h4>Sideboards</h4>	
// 							</Link>
// 						</div>
//           </div>
//         </CSSTransition>
//       </div>
//     );
//   }
// }
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// container = React.createRef();
	// state = {
	// 	open: false,
	// };

	// componentDidMount() {
  //   document.addEventListener("mousedown", this.handleClickOutside);
	// }

	// componentWillUnmount() {
	// 	document.removeEventListener("mousedown", this.handleClickOutside);
	// }

  // handleButtonClick = () => {
  //   this.setState(state => {
  //     return {
  //       open: !state.open,
  //     };
  //   });
	// };
	
	// handleClickOutside = event => {
	// 	if (this.container.current && !this.container.current.contains(event.target)) {
	// 		this.setState({
	// 			open: false,
	// 		});
	// 	}
	// };

// PROTOTYPE RENDER FUNCTION
	// render() {
	// 	return (
	// 		<div className="container"ref={this.container}>
	// 			<a onClick={this.handleButtonClick}>Shelves</a>
	// 			{this.state.open && (
	// 				<div className="dropdown">
	// 					<ul>
	// 						<li><Link to={{pathname: "/products/bookshelf"}}>Bookshelves</Link></li>
	// 						<li><Link to={{pathname: "/products/wallunit"}}>Wall Units</Link></li>
	// 						<li><Link to={{pathname: "/products/sideboard"}}>Sideboards</Link></li>
	// 					</ul>
	// 				</div>
	// 			)}
	// 		</div>
	// 	);
	// }

	// FIRST NAVBAR RENDER
				/* <div className="container" ref={this.container}>
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
				</div> */

				}


export default Dropdown;