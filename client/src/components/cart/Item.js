import React from "react";
import axios from 'axios'
import { connect } from "react-redux";

import {getLocalStorageToken} from '../../utils/localStorage'

class Item extends React.Component {
	
    handleRemoveCartClick = () => {
        this.props.removeFromCart(this.props.id);
    };

    checkAuthedForSaveDesign = () => {
        if(!this.props.authed) {
            this.props.history.push('/login')
        } else {
            this.handleSaveDesignClick()
        }
    }

    handleSaveDesignClick = async () => {
        try {
            const token = getLocalStorageToken()
            await axios.post('http://localhost:5000/api/orders/new-saved-order', {
				height: this.props.configuration.height, 
				width: this.props.configuration.width, 
				depth: this.props.configuration.depth, 
				colour: this.props.configuration.colour,
				price: this.props.configuration.price, 
				furnitureType: this.props.configuration.furnitureType
			}, {
                headers: {Authorisation: `Bearer ${token}`}
            })
            console.log("saved")
        }
        catch (err) {
            console.log(err.message)
        }
    };

    render() {
        const { type, name } = this.props;
        return (
            <div>
                <h4>{type}</h4>
                <p>{name}</p>
                <button onClick={this.handleRemoveCartClick}>Remove from Cart</button>
                <button onClick={this.checkAuthedForSaveDesign}>Save For Later</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
	return {
		removeFromCart: (id) => { dispatch({ type: 'REMOVE_FROM_CART', id: id})}
	}
};

export default connect(null, mapDispatchToProps)(Item);