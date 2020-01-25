import React from 'react';
import productsList from '../productsList';
import { Link } from 'react-router-dom';


class ProductsIndex extends React.Component {

	render() {	
		const {type} = this.props.match.params
		const products = productsList
		.filter((product) => {
			return product.type === type
		})	
		.map((product, key) =>
			<div key={product.id}> 	
				<h3>{product.type}</h3>
				<Link to={product.type + '/' + product.id}>
					<p>{product.name}</p>
				</Link>
			</div>	
		);
		return (
			<>
				{products}
			</>
		)
	}
}

export default ProductsIndex;