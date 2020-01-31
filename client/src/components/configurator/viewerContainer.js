import React from 'react';
// import Slider from './slider';

import Viewer from './viewer';

import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        height: state.configurator.height,
        width: state.configurator.width,
        depth: state.configurator.depth,
        colour: state.configurator.colour
    }
}

class ViewerContainer extends React.Component {
    render() {
        return (
            <div className="viewer-container">
                <Viewer />
            </div>
        )
    }
}

export default connect(mapStateToProps)(ViewerContainer);
