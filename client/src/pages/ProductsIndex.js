import React from 'react';
import productsList from '../productsList';


const bookshelves = productsList.filter((product) => {
	return product.type === "bookshelf"
})

const wallunits = productsList.filter((product) => {
	return product.type === "wall unit"
})

const sideboards = productsList.filter((product) => {
	return product.type === "sideboard"
})


class ProductsIndex extends React.Component {

	render() {
		return (
			<div>
				<h1>Hello from the products index. This page is about to be dynamic</h1>
			</div>
		)
	}
}

export default ProductsIndex;