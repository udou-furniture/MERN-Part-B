import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import FurnitureIcon from '../../assets/furniture-icon.png';


class PurchaseTableRow extends React.Component {
    render() {
        return (
            <div className="purchased-card">
                <img className="furniture-icon" src={FurnitureIcon} />
                <div className="purchased-card-info">
                    <div className="colour-selection">
                        <p>{this.props.order.configuration.colour}</p>
                    </div>
                    <div className="dimensions">
                        <p>{this.props.order.configuration.height * 120 }{' '} x {this.props.order.configuration.depth* 40}{' '} x {this.props.order.configuration.width * 120}</p>
                    </div>
                    <div className="purchased-card-price">
                        <p>${this.props.order.configuration.price} AUD</p>
                    </div>
                </div>
                <Link to={`/leave-review/${this.props.order._id}`} className="button-purchased">Leave a review</Link>
                {/* <p>
                    {this.props.order.review}
                </p> */}
            </div> 



        );
    }
}

export default PurchaseTableRow