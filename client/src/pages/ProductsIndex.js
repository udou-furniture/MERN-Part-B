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
  handleClick(e) {
    // this function needs to dispatch the id for the product.
    console.log(`handle click ${JSON.stringify(e)}`);
    // let example = productsList[e-1]
		// console.log(example)
		// let example =		productsList.forEach((i) => 
		// {
		// 	if (i.id === e)
		// 	{
		// 	return i
		// 	}
		// });
		var example
		console.log(productsList)
		productsList.forEach((i) => 
		{
			if (i.id === e)
			{
			example = i
			return example
			}
		});
		



    this.setDefaultConfig(example);
    // this.props.dispatch({ type: 'UPDATE_EXAMPLE', newExample: example});
    // // this.props.dispatch();
    // this.props.dispatch({
    //   type: 'UPDATE_HEIGHT',
    //   newHeight: productsList[e].configuration.height,
    // });
  }

  setDefaultConfig = example => {
		// let example = e
		console.log(example)

    let exampleConfig = {
      newHeight: example.configuration.height,
			newWidth: example.configuration.width,
			newDepth: example.configuration.depth,
			newColour: example.configuration.colour	


    };

    this.props.dispatch({ type: 'SET_DEFAULTS', exampleConfig });
  };

  render() {
    const { type } = this.props.match.params;
    const products = productsList
      .filter(product => {
        return product.type === type;
      })
      .map(
        (product, key) => (
          <li key={product.id}>
            <Link to={'/product_view'} onClick={this.handleClick(product.id)}>
              {product.type} {product.name}
            </Link>
          </li>
        )
        // this needs to be made clicklable
      );

    return (
      <div>
        <ul>{products}</ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ProductsIndex);
