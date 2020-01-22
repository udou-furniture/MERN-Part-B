import React from "react";
import { render } from "react-dom";

import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import ViewerContainer from './components/configurator/viewerContainer';
import FormContainer from './components/configurator/formContainer';



const initialState = { height: 2, width: 2, depth: 2, colour: "White" }
function mapStateToProps(state) {

  return {
    height: state.height,
    width: state.width,
    depth: state.depth,
    colour: state.colour
  }
}
class Configurator extends React.Component {


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
  }

  store = createStore(this.reducer);

  render() {

    return (
      <Provider store={this.store}>
        <div className='config-container'>




          <ViewerContainer />
          <FormContainer />

        </div>
      </Provider>
    )

  };

}
// render(<App />, document.getElementById("root"));

export default connnect(mapStateToProps)(Configurator)