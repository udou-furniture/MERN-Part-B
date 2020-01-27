
const	initState = {
	products: [
		{id: 1, type: "bookshelf", name: "Type01"},
		{id: 2, type: "bookshelf", name: "Type02"},
		{id: 3, type: "bookshelf", name: "Type03"},
		{id: 4, type: "wallunit", name: "Type01"},
		{id: 5, type: "wallunit", name: "Type02"},
		{id: 6, type: "wallunit", name: "Type03"},
		{id: 7, type: "sideboard", name: "Type01"},
		{id: 8, type: "sideboard", name: "Type02"},
		{id: 9, type: "sideboard", name: "Type03"}
	],
	cart: []
}

const cartReducer = (state = initState, action) => {
	let newState = {};

	console.log("Original state", state);
	
	switch (action.type) {
    case 'ADD_TO_CART':
			const product = state.products.find(product => product.id.toString() === action.id);
      newState = { ...state, cart: state.cart.concat(product) };
      break;

    default:
      newState = {...state}
	}
	
	console.log("New State:", newState);

  return newState;
};

export default cartReducer;


