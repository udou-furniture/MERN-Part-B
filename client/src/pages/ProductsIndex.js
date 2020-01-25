import React from 'react';
import productsList from '../productsList';
import { Link } from 'react-router-dom';


class ProductsIndex extends React.Component {
	render() {	
		const {type} = this.props.match.params 
		const products = productsList
		.filter((product) => {
			// const id = product.id
			return product.type === type
		})	
		.map((product, key) =>
		<div key={product.id}> 
			<h4>{product.type}</h4>
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