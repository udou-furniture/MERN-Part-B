import React from 'react';
import FurnitureIcon from '../../assets/furniture-icon.png'

class OrderSummaryCard extends React.Component {
    render() {
        return (
        <div className="order-summary-container"> 
            <h4>Order Summary</h4>
            <div className="summary-card">
                <img className="furniture-icon" src={FurnitureIcon} />
                <div className="summary-card-info">
                    <div className="summary-colour-selection">
                        <p>{this.props.colour}</p>
                    </div>
                    <div className="summary-dimensions">
                        <p>{this.props.height * 120 }{' '} x {this.props.depth* 40}{' '} x {this.props.width * 120}</p>
                    </div>
                    <div className="summary-card-price">
                        <p>${this.props.price} AUD</p>
                    </div>
                </div>
            </div> 
        </div>    
        )
    }
}

export default OrderSummaryCard;




{/* <li className="card" key={this.props.id}>
<div>Dimensions: {this.props.height * 120 }{' '} x {this.props.depth* 40}{' '} x {this.props.width * 120}</div>
<div>Colour: {this.props.colour}</div>
<div>Price: {this.props.price}</div>
</li> */}