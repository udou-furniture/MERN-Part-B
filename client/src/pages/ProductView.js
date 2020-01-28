import React from 'react';
import Dropdown from '../components/Dropdown'
import Configurator from '../components/configurator/Configurator'
import {connect} from 'react-redux'

class ProductView extends React.Component {
  handleClick = () => {
		this.props.addToCart(this.props.product.id)
	}
	
	render() {
			return (
				<div className="product-page-wrapper">
					<h4>{this.props.product.type}</h4>
					<p>{this.props.product.name}</p>
          <Dropdown />
					<Configurator />
					<button onClick={this.handleClick}>Add to cart</button>
				</div>
			)
	}
};

const mapStateToProps = (state, ownProps) => {
	let id = ownProps.match.params.product_id
	return {
		product: state.products.products.find(product => product.id.toString() === id)
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (id) => { dispatch({ type: 'ADD_TO_CART', id: id})}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);
  
  

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