import React from 'react'
import axios from 'axios'

import {getLocalStorageToken} from '../../utils/localStorage'

class SavedTableRow extends React.Component {
    handleRemoveDesign = async () => {
        try {
            console.log(this.props.order._id)
            const token = getLocalStorageToken()
            await axios.patch('http://localhost:5000/api/orders/remove-saved-order', {
                orderID: this.props.order._id
            }, {
                headers: {Authorisation: `Bearer ${token}`}
            })
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        console.log(this.props.order)
        return (
            <div>
                <div>Dimensions: {this.props.order.configuration.height * 120 }{' '} x {this.props.order.configuration.depth* 40}{' '} x {this.props.order.configuration.width * 120}</div>
                <div>Colour: {this.props.order.configuration.colour}</div>
                <div>Price: {this.props.order.configuration.price}</div>
                <button type='button' onClick={this.handleRemoveDesign}>Remove from Saved Design</button>
            </div> 


            // <tr>
            //     <td>
            //         {this.props.order.configuration.height}
            //     </td>
            //     <td>
            //         {this.props.order.configuration.width}
            //     </td>
            //     <td>
            //         {this.props.order.configuration.depth}
            //     </td>
            //     <td>
            //         {this.props.order.configuration.colour}
            //     </td>
            //     <td>
            //         <button type='button' onClick={this.handleRemoveDesign}>Remove from Saved Design</button>
            //     </td>
            // </tr>
        );
      }
}

export default SavedTableRow