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
	return {
		products: state.products
	}
}

export default connect(mapStateToProps)(ProductsIndex);




// render() {	
// 	const {type} = this.props.match.params
// 	const products = productsList
// 	.filter((product) => {
// 		return product.type === type
// 	})	
// 	.map((product, key) =>
// 		<div key={product.id}> 	
// 			<h3>{product.type}</h3>
// 			<Link to={product.type + '/' + product.id}>
// 				<p>{product.name}</p>
// 			</Link>
// 		</div>	
// 	);
// 	return (
// 		<>
// 			{products}
// 		</>
// 	)
// }




// render() {	
// 	// console.log(this.props.products)
// 	// console.log(this.props.match.params)
// 	const type = this.props.match.params
// 	const products = this.props.products
// 	const list = products.filter((product) => {
// 		return product.type === type
// 		})	
// 		.map(product => {
// 			return (
// 				<div key={this.props.product.id}>
// 					<p>{this.props.product.type}</p>
// 					<p>{this.props.product.name}</p>
// 				</div>
// 			)
// 		})		
// 	return (
// 		<>
// 			<h1>Index</h1>
// 			{list}
// 		</>
// 	)
// }