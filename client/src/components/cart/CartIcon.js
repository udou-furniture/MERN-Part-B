import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Cart from './Cart';
import './Cart.css';

import icon from "./CartIcon.svg"


class CartIcon extends React.Component {
  





    render() {
        return (
          <li>
            <Link to="/cart"> <img className="shopping-cart" src={icon} alt="Cart" /></Link>
            <span>
              {this.props.number}
            </span>
          </li>	
        );
    }
}

const mapStateToProps = state => {
    return {
        number: state.cart.items.length
    };
};

export default connect(mapStateToProps)(CartIcon)


