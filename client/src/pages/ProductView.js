import React from 'react';
import Dropdown from '../components/Dropdown'
import Configurator from '../components/configurator/Configurator'
import productsList from '../productsList'
 

class ProductView extends React.Component {

  render() {
    const id = this.props.match.params.product_id;
    const { type, name } = this.props;
    console.log(this.props)
    return (
      <div className="product-page-wrapper">
        <h2>{this.props.type}</h2>
        <h4>{this.props.name}</h4>
        {/* <Configurator /> */}
      </div>  
    );
  }
}

export default ProductView;