import React from 'react';

import OrderSummaryIndex from '../components/orderSummary/OrderSummaryIndex';
import CreditCardDetailsForm from '../components/CreditCardDetailsForm'

import './Payment.css';

class Payment extends React.Component {
    render() {
        return (
            <div id="payment-page">
                <CreditCardDetailsForm />
                <OrderSummaryIndex />
            </div>
        )
    } 
}

export default Payment
