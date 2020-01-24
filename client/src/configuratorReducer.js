// const initialState = 

const configuratorReducer = (state = { height: 1, width: 1, depth: 1, colour: "Black" }, action) => {

  let newState = {}

  switch (action.type) {
    case "UPDATE_HEIGHT":
      newState = { ...state, height: action.newHeight };
      break

    case "UPDATE_WIDTH":
      newState = { ...state, width: action.newWidth };
      break

    case "UPDATE_DEPTH":
      newState = { ...state, depth: action.newDepth };
      break
    case "UPDATE_COLOUR":
      newState = { ...state, colour: action.newColour };
      break
      case "CALCULATE_PRICE":
        newState = { ...state, price: action.newPrice}


    default: newState = { ...state }
  }
  return newState

}

export default configuratorReducer
