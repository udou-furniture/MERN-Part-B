import React from 'react';
import Dropdown from '../components/Dropdown';
import Configurator from '../components/configurator/Configurator';
import { connect } from 'react-redux';
import productsList from  '../productsList';
// const mapStateToProps = (state, ownProps) => {
//   let id = ownProps.match.params.product_id;
//   return {
//     product: state.products.products.find(
//       product => product.id.toString() === id
//     ),
//     height: state.configurator.height,
//     width: state.configurator.width,
//     depth: state.configurator.depth,
//     colour: state.configurator.colour,
//     price: state.configurator.price
//   };
// };

const mapStateToProps = (state) => {
  return {
    height: state.configurator.height,
    width: state.configurator.width,
    depth: state.configurator.depth,
    colour: state.configurator.colour,
    price: state.configurator.price
  };
};

class ProductView extends React.Component {
  handleClick = () => {
    let cartItem = {
      id: "ID",
      type: "TYPE",
      name: `Customer XXX's custom INSERT PROPS`,
      configuration: {
        height: this.props.height,
        width: this.props.width,
        depth: this.props.depth,
        colour: this.props.colour,
        price: this.props.price,
        furnitureType: 'custom'
      }
    };

    this.props.dispatch({ type: 'ADD_TO_CART_2', cartItem });
    // this.props.addToCart(cartItem)
  };

  render() {
    return (
      <div className="product-page-wrapper">
        <h4>{`this.props.product.type`}</h4>
        <p>{`this.props.product.name`}</p>
        <Dropdown />
        <Configurator />
        <button onClick={this.handleClick}>Add to cart</button>
      </div>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
// 	let id = ownProps.match.params.product_id
// 	return {
// 		product: state.products.products.find(product => product.id.toString() === id)
// 	}
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     addToCart: id => {
//       dispatch({ type: 'ADD_TO_CART_2', id: id });
//     }
//   };
// };

export default connect(mapStateToProps)(ProductView);

// render() {
//   return (
//     <div className="product-page-wrapper">
//       {/* <h2>{product}</h2> */}
//       <Configurator />
//     </div>
//   );
// }
// }

// export default ProductView;
