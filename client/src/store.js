import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const initialState = { height: 2, width: 2, depth: 2, colour: "White" }

const rootReducer = combineReducers({


  // ...Place all reducers here

  reducer(state = initialState, action) {

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


      default: newState = { ...state }
    }
    return newState
  },


  form: formReducer
});

export const store = createStore( rootReducer );