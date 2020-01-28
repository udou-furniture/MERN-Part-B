import React from 'react';
import Dropdown from '../components/Dropdown'
import Configurator from '../components/configurator/Configurator'



class ProductView extends React.Component {
  render() {
    return (
      <div className="product-page-wrapper">
        {/* <h2>{product}</h2> */}
        <Configurator />
      </div>  
    );
  }
}





export default ProductView;