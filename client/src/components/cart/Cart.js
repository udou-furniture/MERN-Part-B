import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Item from "./Item";

// import RegistrationForm from './RegistrationForm'

class Cart extends React.Component {
  
  renderItems() {
    if (this.props.items.length > 0) {
      return (
        <p>It appears you have some items in your cart...</p>
      )
    } 
    else 
      return (
        <p>Cart is empty</p>
      )
  }

  render() {
    return (
      <div>
        <h2>Your Cart</h2>
        {this.renderItems()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // {console.log(state.cart.cart)}
  return {
    items: state.cart.cart 
  };
};

export default connect(mapStateToProps)(Cart);





