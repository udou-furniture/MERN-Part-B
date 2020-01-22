import React from 'react';

class Collections extends React.Component {
	state = [
		{type: "bookshelf", name: "Type01"},
		{type: "bookshelf", name: "Type02"},
		{type: "bookshelf", name: "Type03"},
		{type: "wall-unit", name: "Type01"},
		{type: "wall-unit", name: "Type02"},
		{type: "wall-unit", name: "Type03"},
		{type: "sideboard", name: "Type01"},
		{type: "sideboard", name: "Type02"},
		{type: "sideboard", name: "Type03"}
	]

	render () {
		return (
			<h1>Sanity check</h1>
		)
	}
}	

export default Collections;