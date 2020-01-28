import React from 'react';
import { connect } from 'react-redux';
import Configurator from './configurator/Configurator';


class Show extends React.Component {
	
	handleClick = () => {
		this.props.addToCart(this.props.product.id)
	}
	
	render() {
			return (
				<div>
					<h4>{this.props.product.type}</h4>
					<p>{this.props.product.name}</p>
					{/* <Configurator /> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Show);
