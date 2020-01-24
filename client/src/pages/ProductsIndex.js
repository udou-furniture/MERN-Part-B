import React from 'react';
import productsList from '../productsList';


class ProductsIndex extends React.Component {
	render() {	
		const {type} = this.props.match.params
		const products = productsList
		.filter((product) => {
			return product.type === type
		})
		.map((product, key) => 
			<li key={product.id}>{product.type} {product.name}</li>
		);
		
		return (
			<div>
				<ul>
					{products}
				</ul>	
			</div>
		)
	}
}

export default ProductsIndex;