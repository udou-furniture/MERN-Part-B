import React from 'react';
import { connect } from "react-redux";
import {Link} from 'react-router-dom'

import Item from "./Item";

class Cart extends React.Component {
    renderItems() {
        if (this.props.items.length > 0) {
            return this.props.items.map(item => <Item authed={this.props.authed} {...item} history={this.props.history}/> )
        } else {
            return (
                <p>Cart is empty</p>
            )
        }
    }

    renderCheckoutButton() {
        if(this.props.items.length > 0) {
            return <Link onClick={this.handleCheckoutClick}><button type='button'>Proceed to Checkout</button></Link>
        }
    }

    handleCheckoutClick = () => {
        if(!this.props.authed) {
            this.props.history.push('/login')
        } else {
            this.props.history.push('/checkout')
        }
    }

    render() {
        return (
        <div>
            <h2>Your Cart</h2>
            {this.renderItems()}
            {this.renderCheckoutButton()}
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.cart.cart 
    };
};

export default connect(mapStateToProps)(Cart);
