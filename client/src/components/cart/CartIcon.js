import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Cart from './Cart';
import './Cart.css';

import icon from "./CartIcon.svg"


class CartIcon extends React.Component {
  
  // wrapperRef = React.createRef();
  
  // handleClick() {
  //   const wrapper = this.wrapperRef.current;
  //   wrapper.classList.toggle('is-nav-open')
  // }
  
  
  // render() {
  //   return (
	// 		<div ref={this.wrapperRef} className="cart-wrapper"> 
	// 		 <Link to="/cart">
  //         <div className="cart-icon">
  //           <img src={icon} alt="Cart" onClick={() => this.handleClick()} />
  //         </div>
  //       </Link>
  //       {/* <span>{this.props.number}</span> */}
	// 		</div>	
  //   );
  // }
    render() {
        return (
          <>
            <li><Link to="/cart"> <img className="shopping-cart" src={icon} alt="Cart" /></Link></li>
            <li className="number-of-items">
              {this.props.number}
            </li>
          </>	
        );
    }
}

const mapStateToProps = state => {
    return {
        number: state.cart.items.length
    };
};

export default connect(mapStateToProps)(CartIcon)




// import React, { Component } from 'react';
// import { Icon } from 'antd';
// import './style.css';

// export default class ExampleCss extends Component {
//   constructor(props) {
//     super(props);
//     this.wrapperRef = React.createRef();
//   }

//   handleClick() {
//     const wrapper = this.wrapperRef.current;
//     wrapper.classList.toggle('is-nav-open')
//   }

//   render() {
//     return (
//       <div ref={this.wrapperRef} className="wrapper" >
//         <div className="nav">
//           <Icon className="nav__icon" type="menu-fold" onClick={() => this.handleClick()} />
//           <div className="nav__body">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ducimus est laudantium libero nam omnis optio repellat sit unde voluptatum?
//           </div>
//         </div>
//       </div>
//     );
//   }
// }