import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Cart from './Cart';
import './Cart.css';

import icon from "./CartIcon.svg"

import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';



class CartIcon extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
        isPaneOpen: false,
        isPaneOpenLeft: false
    };
  }

  componentDidMount() {
      Modal.setAppElement(this.el);
  }

    render() {
        return (
          <div ref={ref => this.el = ref}>
            <img className="shopping-cart" onClick={() => this.setState({ isPaneOpen: true })}src={icon} alt="Cart" />
            <span>
              {this.props.number}
            </span>
            <SlidingPane
              className='some-custom-class'
              overlayClassName='some-custom-overlay-class'
              isOpen={ this.state.isPaneOpen }
              title='Your Cart'
              subtitle=""
              width="500px"
              onRequestClose={ () => {
                  // triggered on "<" on left top click or on outside click
                  this.setState({ isPaneOpen: false });
              } }>
              <Cart history={this.props.history} authed={this.props.authed}/>
            </SlidingPane >
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        number: state.cart.items.length
    };
};

export default connect(mapStateToProps)(CartIcon)


