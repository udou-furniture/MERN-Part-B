import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getLocalStorageToken } from '../utils/localStorage';

const style = {
    base: {
      display: "flex",
      flexDirection: "column",
  
    }
  }

class Payment extends React.Component {
  mapThroughCart = item => {
    console.log(item);
    // return this.props.items.map(item => this.handleCompletePurchase(item))
  };

  async handleCompletePurchase(item) {
    try {
      console.log(item);
      const token = getLocalStorageToken();
      await axios.post(
        'http://localhost:5000/api/orders/new-purchased-order',
        {
          height: item.configuration.height,
          width: item.configuration.width,
          depth: item.configuration.depth,
          colour: item.configuration.colour,
          price: item.configuration.price,
          furnitureType: item.configuration.furnitureType
        },
        {
          headers: { Authorisation: `Bearer ${token}` }
        }
      );
      console.log('sent');
    } catch (err) {
      console.log(err.message);
    }
  }

  render() {
    console.log(this.props);
    return (
      <div style={style}>
        <h1>This is where stripe will be</h1>
        <form>
          <label>
            <input type="text" value="this is a fake form"></input>
            Fake Name
          </label>
          <label>
            <input type="text" value="this is a fake form"></input>
            Fake Card Number
          </label>
          <label>
            <input type="text" value="this is a fake form"></input>
            Fake Expiry
          </label>
          <label>
            <input type="text" value="this is a fake form"></input>
            Fake CVC
          </label>
          <Link to={'/payment-complete'}>
            <button
              type="submit"
              onClick={this.mapThroughCart(this.props.items)}
            >
              <span>Complete Purchase</span>
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.cart.cart
  };
};

export default connect(mapStateToProps)(Payment);
