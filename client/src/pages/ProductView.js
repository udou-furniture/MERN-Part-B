import React from 'react';
import Dropdown from '../components/Dropdown';
import Configurator from '../components/configurator/Configurator';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        height: state.configurator.height,
        width: state.configurator.width,
        depth: state.configurator.depth,
        colour: state.configurator.colour,
        price: state.configurator.price
    };
};

class ProductView extends React.Component {
    render() {
        return (
            <div className="product-page-wrapper">
                <Dropdown />
                <Configurator />
            </div>
        );
  }
}

export default connect(mapStateToProps)(ProductView);


