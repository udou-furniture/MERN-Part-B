import React from 'react'
import axios from 'axios'

import {getLocalStorageToken} from '../utils/localStorage'

import CustomerDetailsForm from '../components/CustomerDetailsForm'

import OrderSummaryIndex from '../components/orderSummary/OrderSummaryIndex'

import './Checkout.css';


class Checkout extends React.Component {
    submit = async (values) => {
        try {
            const token = getLocalStorageToken()
            await axios.patch('http://localhost:5000/api/customer/new-customer-details', {
                firstName: values.firstName,
                lastName: values.lastName,
                address: values.address,
                city: values.city,
                state: values.state,
                postcode: values.postcode,
                phoneNumber: values.phoneNumber
            }, {
                headers: {Authorisation: `Bearer ${token}`}
            })
            console.log('here')
            this.props.history.push('/payment')
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return(
            <div id="checkout-page">
                <div className="center-element">
                    {/* <h4>Customer information</h4> */}
                </div>
                <CustomerDetailsForm onSubmit={this.submit}/>
                <OrderSummaryIndex />
            </div>
        )
    }
}

export default Checkout
