import React from 'react';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import './ProductsIndex.css';


class ProductsIndex extends React.Component {
	handleClick (e)
	{

		// this function needs to dispatch the id for the product. 
		this.props.dispatch({ type: 'UPDATE_EXAMPLE', newExample: e.id });
	}
	render() {	
		const {type} = this.props.match.params
		const {products} = this.props;
		const list = products.products
		.filter(product => {
			return product.type === type
		})
		.map((product => 
			(
				<div key={product.id}>
					<p>{product.type}</p>
					<Link to={product.type + '/' + product.id}>
						<p>{product.name}</p>
					</Link>	
				</div>
			)
		));		
		return (
			<>
				{list}
			</>
		)
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return {
		products: state.products,
		height: state.configurator.height,
    width: state.configurator.width,
    depth: state.configurator.depth,
    colour: state.configurator.colour,
    price: state.configurator.price
	}
}

export default connect(mapStateToProps)(ProductsIndex);
