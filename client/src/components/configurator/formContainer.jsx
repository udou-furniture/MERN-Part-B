import React from 'react';
import Slider from './slider';

import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        name: state.order.name,
        type: state.order.type,
        height: state.configurator.height,
        width: state.configurator.width,
        depth: state.configurator.depth,
        colour: state.configurator.colour,
        price: state.configurator.price,
        example: state.configurator.example
    };
}

class FormContainer extends React.Component {
  priceCalculator = () => {
    //this calculates the price based on the sliders and dispatches it to store.
    console.log('Price')
    var price =
      this.props.width * this.props.depth * this.props.height * 1000;
      price = price.toFixed(2)
      console.log(price)

    this.props.dispatch({ type: 'CALCULATE_PRICE', newPrice: price });
    console.log(this.props.colour)

    return price
  };

  displayNumber = num => {
    let result = num * 100;
    return result.toFixed(2);
  };

  handleOptionChange = e => {
    this.props.dispatch({ type: 'UPDATE_COLOUR', newColour: e.target.value });
  };


  handleSubmit = async e => {
    //   // this should send the info from the form to the post orders end point.
    e.preventDefault(); // i think this prevents page refresh.
    console.log("handleSubmit",this.props)
    this.priceCalculator()
    console.log("handleSubmit",this.props)

    const newOrder = {
      
        height: this.props.height,
        width: this.props.width,
        depth: this.props.depth,
        colour: this.props.colour,
        price: this.props.price,
        furnitureType: 'custom'
      
    };
    // this.props.dispatch({
    //   type: 'UPDATE_TYPE',
    //   newType: 'something that is passes from the config'
    // })
    // this.props.dispatch({
    //   type: 'UPDATE_name',
    //   newName: 'something that is passes from the config'
    // })

    this.props.dispatch({
      type: 'ADD_TO_CART',
      newConfiguration: newOrder,
      newType: this.props.type,
      newName: this.props.name
    });
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
              max={3}
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
              <p>{this.displayNumber(this.props.height)} cm</p>
            </div>
          </label>
          <label>
            <Slider
              type="range"
              min={0.3}
              max={1}
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
              <p>{this.displayNumber(this.props.depth)} cm</p>
            </div>
          </label>
          <label>
            <Slider
              type="range"
              min={0.5}
              max={3}
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
              <p>{this.displayNumber(this.props.width)} cm</p>
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
          <div className="form-block">
            <div className="price-block">
              <div className="price-display">${this.priceCalculator()}</div>
              <h3>Price</h3>
              <button onClick={this.handleSubmit} type="submit">
                Add To Cart 
              </button>
            </div>
          </div>
        </label>
      </form>
    );
  }
}

export default connect(mapStateToProps)(FormContainer);
