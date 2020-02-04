import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux';

import OrderSummaryCard from './orderSummaryCard';

function mapStateToProps(state) {
  return {
    items: state.cart.items,
    height: state.configurator.height,
    width: state.configurator.width,
    depth: state.configurator.depth,
    colour: state.configurator.colour,
    price: state.configurator.price
  };
}

class OrderSummaryIndex extends React.Component {
 

  createArray = allItems => {
    console.log(this.props.items)
    if (this.props.items.length > 0)
    {
    return allItems.map(i => {
      console.log(i)
      return (
        <OrderSummaryCard
          key={i.id}
          name={i.name}
          type={i.type}
          height={i.configuration.height}
          width={i.configuration.width}
          depth={i.configuration.depth}
          price={i.configuration.price}
          colour={i.configuration.colour}
        />
      );
    });
  }
  else 
  {
    return "Cart is Empty"
  }
  };

  render() {
    return <ul>{this.createArray(this.props.items)}</ul>;
  }
}

export default connect(mapStateToProps)(OrderSummaryIndex);
