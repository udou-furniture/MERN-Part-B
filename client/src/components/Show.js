import React from 'react'
import Dropdown from '../components/Dropdown'
import Configurator from '../components/configurator/Configurator'
import productsList from '../productsList'


class Show extends React.Component {
  render() {
    const id = this.props.match.params.product_id;
    const product = productsList.filter((product) => {
      return product.id.toString() === this.props.match.params.product_id
    }) 
    .map((product, key) =>
      <div key={product.id}> 	
        <h3>{product.type}</h3>
        <p>{product.name}</p>
      </div>
  );
    return (
      <div className="product-page-wrapper">
        <h2>{product}</h2>
        {/* <Configurator /> */}
      </div>  
    );
  }
}

export default Show;