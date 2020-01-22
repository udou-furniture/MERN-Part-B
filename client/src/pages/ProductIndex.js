import React from 'react';

const collections = [
	{type: "bookshelf", name: "Type01"},
	{type: "bookshelf", name: "Type02"},
	{type: "bookshelf", name: "Type03"},
	{type: "wall-unit", name: "Type01"},
	{type: "wall-unit", name: "Type02"},
	{type: "wall-unit", name: "Type03"},
	{type: "sideboard", name: "Type01"},
	{type: "sideboard", name: "Type02"},
	{type: "sideboard", name: "Type03"}
];	

const bookshelves = collections.filter((type) => {
	return collections.type === "bookshelf"
});


class Collections extends React.Component {
	render() {
		return (
			<h1>Hello from the collections page. I'm about to be dynamic!</h1>
		)
	}
}
// class Collections extends React.Component {
// 	state = []

// 	render () {
// 		return (
// 			<>
				
	
// 			</>
// 		)
// 	}
// }	

export default ProductIndex;