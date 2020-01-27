import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import icon from "./CartIcon.svg"


class CartIcon extends React.Component {
  render() {
    return (
			<div> 
			 <Link to="/cart">
          <div>
            <img src={icon} alt="Cart" />
          </div>
        </Link>
        <p>You have {this.props.number} items in your cart</p>
			</div>	
    );
  }
}

const mapStateToProps = state => {
  return {
    number: state.cart.cart.length
  };
};

export default connect(mapStateToProps)(CartIcon)

