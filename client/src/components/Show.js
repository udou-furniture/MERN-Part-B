import React from 'react';
import { connect } from 'react-redux';

class Show extends React.Component {
	
	handleClick = () => {
		this.props.addToCart(this.props.product.id)
	}
	
	render() {
		// console.log(this.props.product)
		// console.log(this.props.product.id)
			return (
				<div>
					<h4>{this.props.product.type}</h4>
					<p>{this.props.product.name}</p>
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







// state = {
// 	product: []
// }

//   render() {
//     const id = this.props.match.params.product_id;
//     const product = productsList.filter((product) => {
//       return product.id.toString() === this.props.match.params.product_id
//     }) 
//     .map((product, key) =>
//       <div key={product.id}> 	
//         <h3>{product.type}</h3>
//         <p>{product.name}</p>
//       </div>
//   );
//     return (
//       <div className="product-page-wrapper">
//         <h2>{product}</h2>
//         {/* <Configurator /> */}
//       </div>  
//     );
//   }
// }


// componentDidMount() {
// 	const product = productsList.find(product => 
// 		product.id.toString() === this.props.match.params.product_id
// 	);

// 	this.setState({ ...product });
// }


// render() {
// 	const { id } = this.props;
// 	const { type, name } = this.state;
// 	return (
// 		<div>
// 			<p>{type}</p>
// 			<p>{name}</p>
// 			{/* <Configurator /> */}
// 		</div>
// 	);
// }