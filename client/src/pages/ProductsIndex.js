import React from 'react';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';

class ProductsIndex extends React.Component {
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
		products: state.products
	}
}

export default connect(mapStateToProps)(ProductsIndex);
