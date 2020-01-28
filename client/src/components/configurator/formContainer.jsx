import React from 'react';
import { render } from 'react-dom';
import Slider from './slider';

import axios from 'axios';

import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    height: state.configurator.height,
    width: state.configurator.width,
    depth: state.configurator.depth,
    colour: state.configurator.colour
  };
}

class FormContainer extends React.Component {
  priceCalculator = () => {
    return this.props.width * this.props.depth * this.props.height * 1000;
  };
  handleOptionChange = e => {
    this.props.dispatch({ type: 'UPDATE_COLOUR', newColour: e.target.value });
  };

  handleSubmit = async e => {
    // this should send the info from the form to the post orders end point.

    console.log(`button: ${this.props}`);
    e.preventDefault(); // i think this prevents page refresh.

    const newOrder = {
      configuration: {
        height: this.props.height,
        width: this.props.width,
        depth: this.props.depth,
        colour: this.props.colour,
        price: this.priceCalculator(),
        furnitureType: this.props.type
      }
    };
    try {
      console.log(newOrder);
      let response = await axios({
        method: 'POST',
        url: `/api/orders/new-order`,
        headers: { authorisation: localStorage.token },
        data: newOrder
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <form className="slider-form" onSubmit={this.handleSubmit}>
        <label>
          <Slider
            type="range"
            // min={this.props.min}
            min={0.5}
            // max={this.props.max}
            max={3}
            value={this.props.height}
            // step={this.props.step}
            step={0.1}
            onChange={e => {
              this.props.dispatch({
                type: 'UPDATE_HEIGHT',
                newHeight: e.target.value
              });
            }}
          />
          <div className="slider-label">
            <p>Height</p>
            <p>{this.props.height * 100} cm</p>
          </div>
        </label>
        <label>
          <Slider
            type="range"
            // min={this.props.min}
            min={0.5}
            // max={this.props.max}
            max={3}
            value={this.props.depth}
            // step={this.props.step}
            step={0.1}
            onChange={e => {
              this.props.dispatch({
                type: 'UPDATE_DEPTH',
                newDepth: e.target.value
              });
            }}
          />
          <div className="slider-label">
            <p>Depth</p>
            <p>{this.props.depth * 100} cm</p>
          </div>
        </label>
        <label>
          <Slider
            type="range"
            // min={this.props.min}
            min={0.5}
            // max={this.props.max}
            max={3}
            value={this.props.width}
            // step={this.props.step}
            step={0.1}
            onChange={e => {
              this.props.dispatch({
                type: 'UPDATE_WIDTH',
                newWidth: e.target.value
              });
            }}
          />
          <div className="slider-label">
            <p>Width</p>
            <p>{this.props.width * 100} cm</p>
          </div>
        </label>

        <div className="radio">
          <label>
            <input
              type="radio"
              value="Natural"
              checked={this.props.colour === 'Natural'}
              onChange={this.handleOptionChange}
            />
            Natural
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Black"
              checked={this.props.colour === 'Black'}
              onChange={this.handleOptionChange}
            />
            Black
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="White"
              checked={this.props.colour === 'White'}
              onChange={this.handleOptionChange}
            />
            White
          </label>
        </div>
        <div className="price-display">${this.priceCalculator()}</div>

        <button onClick={this.handleSubmit} type="submit">
          Place Order
        </button>
      </form>
    );
  }
}

export default connect(mapStateToProps)(FormContainer);
