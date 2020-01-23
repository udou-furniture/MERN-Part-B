import React from 'react';
// import productsList from '../productsList';


	// const bookshelves = productsList.filter((product) => {
	// return product.type === "bookshelf"
	// })

	// const wallunits = productsList.filter((product) => {
	// return product.type === "wall unit"
	// })

	// const sideboards = productsList.filter((product) => {
	// return product.type === "sideboard"
	// })




class ProductsIndex extends React.Component {
	render() {	
		const productsList = [
			{
				id: 1,
				type: "bookshelf",
				name: "Type01"
			},
			{
				id: 2,
				type: "bookshelf",
				name: "Type02"
			},
			{
				id: 3,
				type: "bookshelf",
				name: "Type03"
			},
			{
				id: 4,
				type: "wall unit",
				name: "Type01"
			},
			{
				id: 5,
				type: "wall unit",
				name: "Type02"
			},
			{
				id: 6,
				type: "wall unit",
				name: "Type03"
			},
			{
				id: 7,
				type: "sideboard",
				name: "Type01"
			},
			{
				id: 8,
				type: "sideboard",
				name: "Type02"
			},
			{
				id: 9,
				type: "sideboard",
				name: "Type03"
			},
		
		];
		const products = productsList.map((product, key) => 
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