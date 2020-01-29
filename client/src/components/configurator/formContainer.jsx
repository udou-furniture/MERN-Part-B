import React from 'react';
import { render } from 'react-dom';
import Slider from './slider';
import productsList from '../../productsList';

import axios from 'axios';

import { connect } from 'react-redux';

// import productsList from '../../productsList'

function mapStateToProps(state) {
  return {
    height: state.configurator.height,
    width: state.configurator.width,
    depth: state.configurator.depth,
    colour: state.configurator.colour,
    price: state.configurator.price,
    example: state.configurator.example
  };
}

class FormContainer extends React.Component {
  getDefaultsfromID = e => {
    var example;
    
    productsList.forEach(i => {
      if (i.id === e) {
        example = i;
        console.log(`handle Click2 ${JSON.stringify(example)}`);
        return example;
      }
    });

    let exampleConfig = {
      newHeight: example.configuration.height,
      newWidth: example.configuration.width,
      newDepth: example.configuration.depth,
      newColour: example.configuration.colour
    }
    this.props.dispatch({ type: 'SET_DEFAULTS', exampleConfig })
    
    // this.setDefaultConfig(example);
  };
  componentDidMount = () =>
  {
    this.getDefaultsfromID(4)
  }
  priceCalculator = () => {
    //this calculates the price based on the sliders and dispatches it to store.
    const price =
      this.props.width * this.props.depth * this.props.height * 1000;

    this.props.dispatch({ type: 'CALCULATE PRICE', newPrice: price });

    return price;
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
        price: this.props.price,
        furnitureType: 'custom'
      }
    };
    try {
      console.log(newOrder);
      let response = await axios({
        method: 'POST',
        url: `/api/orders/new-order`,
        data: newOrder
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <form className="slider-form" onSubmit={this.handleSubmit}>
        <div className="slider-inputs" className="form-block">
          <label>
            <Slider
              type="range"
              // min={this.props.min}
              min={0.5}
              // max={this.props.max}
              max={5}
              // defaultValue={this.props.height}
              value={this.props.height}
              step={0.1}
              onChange={e => {
                this.props.dispatch({
                  type: 'UPDATE_HEIGHT',
                  newHeight: e.target.value
                });
              }}
            />
            <div className="slider-label">
              <h3>Height</h3>
              <p>{this.props.height * 120} cm</p>
            </div>
          </label>
          <label>
            <Slider
              type="range"
              min={0.5}
              max={5}
              value={this.props.depth}
              step={0.1}
              onChange={e => {
                this.props.dispatch({
                  type: 'UPDATE_DEPTH',
                  newDepth: e.target.value
                });
              }}
            />
            <div className="slider-label">
              <h3>Depth</h3>
              <p>{this.props.depth * 40} cm</p>
            </div>
          </label>
          <label>
            <Slider
              type="range"
              min={0.5}
              max={5}
              value={this.props.width}
              step={0.1}
              onChange={e => {
                this.props.dispatch({
                  type: 'UPDATE_WIDTH',
                  newWidth: e.target.value
                });
              }}
            />
            <div className="slider-label">
              <h3>Width</h3>
              <p>{this.props.width * 120} cm</p>
            </div>
          </label>
        </div>
        <label>
          <div className="colour-radio" className="form-block">
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="Natural"
                  checked={this.props.colour === 'Natural'}
                  onChange={this.handleOptionChange}
                />
                <h3>Natural</h3>
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
                <h3>Black</h3>
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
                <h3>White</h3>
              </label>
            </div>
            <h3>Colour</h3>
          </div>
        </label>
        <label>
          <div className="form-block" >
            <div className="price-block">
            <div className="price-display">${this.priceCalculator()}</div>
            <h3>Price</h3>
            <button onClick={this.handleSubmit} type="submit">
              Place Order
            </button>
          </div>
          </div>
        </label>
      </form>
    );
  }
}

export default connect(mapStateToProps)(FormContainer);
