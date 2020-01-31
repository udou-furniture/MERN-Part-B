import React from 'react';
import Dropdown from '../components/Dropdown';
import Configurator from '../components/configurator/Configurator';
import { connect } from 'react-redux';
import productsList from  '../productsList';
import CardSection from '../components/payments/cardSection'


const mapStateToProps = (state) => {
  return {
    height: state.configurator.height,
    width: state.configurator.width,
    depth: state.configurator.depth,
    colour: state.configurator.colour,
    price: state.configurator.price,
    type: state.order.type,
    name: state.order.name,
  };

};

class ProductView extends React.Component {
componentDidMount = () =>
{


}

  render() {
    return (
      <div className="product-page-wrapper">
        <h4>{this.props.colour} {this.props.type}</h4>
        <p>{this.props.name}</p>
        <Dropdown />
        <Configurator />
        {/* <CardSection /> */}
        
      </div>
    );
  }
}



export default connect(mapStateToProps)(ProductView);


