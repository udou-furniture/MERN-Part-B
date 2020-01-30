import React from 'react';
import productsList from '../productsList';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { render } from 'react-dom';


function mapStateToProps(state) {
  return {
    height: state.configurator.height,
    width: state.configurator.width,
    depth: state.configurator.depth,
    colour: state.configurator.colour,
    price: state.configurator.price
  };
}


class ProductsIndex extends React.Component {
  handleClick(id, e) {

    // this function takes the id number that was passed through with the menu list item that was created and finds the item in the productsList array that matches it. 
    console.log(`handle click`, e);
    console.log(id)
    
    
		var example
		console.log(productsList)
		productsList.forEach((i) => 
		{
			if (i.id === id)
			{
      example = i
      console.log(`handle Click2 ${JSON.stringify(example)}`)
			return example
			}
		});
		



    this.setDefaultConfig(example);
  
  }

  setDefaultConfig = example => {
		
		console.log(example)

    let exampleConfig = {
      newHeight: example.configuration.height,
			newWidth: example.configuration.width,
			newDepth: example.configuration.depth,
			newColour: example.configuration.colour	

    };

    console.log(example.configuration.height)
    this.props.dispatch({ type: 'SET_DEFAULTS', exampleConfig });
  };


  render() {
    const { type } = this.props.match.params;
    console.log(this.props)
    console.log(`type: ${type}`);
    const products = productsList
      .filter(product => {
        return product.type === type;
      })
      .map(
        (product, key) => (
          <li key={product.id}  >
            {console.log(product.id)} 
            <Link to={product.type + '/' + product.id} onClick={(e) => this.handleClick(product.id, e)}>
              {product.type} {product.name}
            </Link>
          </li>
        )
        
      );

    return (
      <div>
        {console.log(products)}
        <ul >{products}</ul>
      </div>
      // maybe i could pass the params inside the div tag? defaultConfigId= {product.id} and then load this from the config page
    );
  }
}

export default connect(mapStateToProps)(ProductsIndex);
