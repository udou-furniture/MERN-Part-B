import React from 'react';
// import { render } from 'react-dom';
// import { connect } from 'react-redux';

// function mapStateToProps(state) {
//     return {
//         // height: state.configurator.height,
//         // width: state.configurator.width,
//         // depth: state.configurator.depth,
//         // colour: state.configurator.colour,
//         // price: state.configurator.price
//     };
// }

class OrderSummaryCard extends React.Component {
  render() {
    console.log('hello from card');
    return (
      <li className="card" key={this.props.id}>
          <div>Name: {this.props.type} {this.props.id} </div>
        <div>
          {' '}
          Dimensions: {this.props.height * 100 } x {this.props.width * 100} x{' '}
          {this.props.depth* 50}{' '}
        </div>
        <div> Colour: {this.props.colour} </div>
        <div> Price: {this.props.price} </div>
      </li>
    );
  }
}

export default OrderSummaryCard;
