import React from 'react'
import axios from 'axios'

import {getLocalStorageToken} from '../utils/localStorage'

import CustomerDetailsForm from '../components/CustomerDetailsForm'

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
            this.props.history.push('/payment')
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return(
            <>
                <div>Checkout</div>
                <CustomerDetailsForm onSubmit={this.submit}/>
            </>
        )
    }
}

export default Checkout