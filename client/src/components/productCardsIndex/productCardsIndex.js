import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import productsList from '../../productsList';

function mapStateToProps(state) {
  return {
    height: state.configurator.height,
    width: state.configurator.width,
    depth: state.configurator.depth,
    colour: state.configurator.colour,
    price: state.configurator.price
  };
}
const style = {
  display: 'flex',
  flexDirection: 'row'
};

const liStyle = {
  height: '50px',
  width: '20vw',
  border: '1px', 
  borderColor: 'black',
  borderStyle: 'solid'
};

class ProductCardsIndex extends React.Component {
  handleClick(id, e) {
    // this function takes the id number that was passed through with the menu list item that was created and finds the item in the productsList array that matches it.

    var example;
    console.log(productsList);
    productsList.forEach(i => {
      if (i.id === id) {
        example = i;

        return example;
      }
    });

    this.setDefaultConfig(example);
  }

  setDefaultConfig = example => {
    console.log(example);
    let exampleConfig = {
      newHeight: example.configuration.height,
      newWidth: example.configuration.width,
      newDepth: example.configuration.depth,
      newColour: example.configuration.colour
    };
    // console.log(example.configuration.height)
    this.props.dispatch({
      type: 'UPDATE_TYPE',
      newType: example.type
    });

    this.props.dispatch({
      type: 'UPDATE_NAME',
      newName: example.name
    });

    this.props.dispatch({
      type: 'SET_DEFAULTS',
      exampleConfig
    });
  };
  shuffle = array => {
    return array.sort(() => Math.random() - 0.5);
  };

  render() {
    console.log(this.props);
    // const { type } = this.props.match.params;
    console.log(this.props);
    // console.log(`type: ${type}`);
    this.products = this.shuffle(productsList);
    console.log(this.propducts);
    // .filter(product => {
    //   return product.type === type;
    // })

    this.createArray = item => {
      return item.map(product => (
        <li style={liStyle} key={product.id}>
          <Link
            to={product.type + '/' + product.id}
            onClick={e => this.handleClick(product.id, e)}
          >
            {product.type} {product.name}
          </Link>
        </li>
      ));
    };

    return (
      <div>
        <ul style={style}>{this.createArray(this.products)}</ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ProductCardsIndex);
