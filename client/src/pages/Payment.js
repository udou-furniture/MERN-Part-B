import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getLocalStorageToken } from '../utils/localStorage';

import OrderSummaryIndex from '../components/orderSummary/OrderSummaryIndex';

const style = {
  base: {
    display: 'flex',
    flexDirection: 'column',
    margin: '10',
  }
};

class Payment extends React.Component {
  mapThroughCart = item => {
    return this.props.items.map(item => this.handleCompletePurchase(item))
  };

  async handleCompletePurchase(item) {
    try {
      console.log(item);
      const token = getLocalStorageToken();
      await axios.post(
        'http://localhost:5000/api/orders/new-purchased-order',
        {
          height: item.configuration.configuration.height,
          width: item.configuration.configuration.width,
          depth: item.configuration.configuration.depth,
          colour: item.configuration.configuration.colour,
          price: item.configuration.configuration.price,
          furnitureType: item.configuration.configuration.furnitureType
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
    return (
      <div >
        <h1>This is where stripe will be</h1>
        <form style={style}>
            <div>
          <label>
            <h3>Fake Name</h3>
            <input type="text" placeholder="This is a fake form"></input>
          </label>
          <label>
            <h3>Fake Card Number</h3>
            <input type="number" placeholder="1234" maxLength={4}></input>
            <input type="number" placeholder="1234" maxLength={4}></input>
            <input type="number" placeholder="1234" maxLength={4}></input>
            <input type="number" placeholder="1234" maxLength={4}></input>
          </label>
          <label>
            <h3>Fake Expiry</h3>
            <select default={'01'}>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <input
              type="number"
              default={'2020'}
              max={'2050'}
              min={'2020'}
            ></input>
          </label>
          <label>
            <h3>Fake CVC</h3>
            <input type="number" placeholder="123"></input>
          </label>
          </div>

          <Link to={'/payment-complete'} style={style}>
            <button
              type="submit"
              onClick={this.mapThroughCart(this.props.items)}
            >
              <span>Complete Purchase</span>
            </button>
          </Link>
        </form>
        <OrderSummaryIndex />
      </div>
      
      
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.cart.items
  };
};

export default connect(mapStateToProps)(Payment);
