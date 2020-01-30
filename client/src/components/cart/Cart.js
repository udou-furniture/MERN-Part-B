import React from 'react';
import { connect } from "react-redux";
import Item from "./Item";

class Cart extends React.Component {
  
  renderItems() {
    console.log(this.props)
    if (this.props.items.length > 0) {
      return this.props.items.map(item => <Item {...item} /> )
    } else 
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
  return {
    items: state.cart.items
  };
};

export default connect(mapStateToProps)(Cart);
