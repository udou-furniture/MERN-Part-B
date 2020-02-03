import React from "react";

import { connect } from 'react-redux';
import ViewerContainer from './viewerContainer';
import FormContainer from './formContainer';

// const initialState = { height: 2, width: 2, depth: 2, colour: "White" }

function mapStateToProps(state) {
    return {
        height: state.configurator.height,
        width: state.configurator.width,
        depth: state.configurator.depth,
        colour: state.configurator.colour
    }
}

class Configurator extends React.Component {


// reducer(state = initialState, action) {
//   let newState = {}

//   switch (action.type) {
//     case "UPDATE_HEIGHT":
//       newState = { ...state, height: action.newHeight };
//       break

//     case "UPDATE_WIDTH":
//       newState = { ...state, width: action.newWidth };
//       break

//     case "UPDATE_DEPTH":
//       newState = { ...state, depth: action.newDepth };
//       break
//     case "UPDATE_COLOUR":
//       newState = { ...state, colour: action.newColour };
//       break


//     default: newState = { ...state }
//   }
//   return newState
// }

// store = createStore(this.reducer);

    render() {
        return (
            <div className='config-container'>
                <ViewerContainer />
                <FormContainer />
            </div>
        )
    };
}
// render(<App />, document.getElementById("root"));

export default connect(mapStateToProps)(Configurator)