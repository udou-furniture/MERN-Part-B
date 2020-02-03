import React from 'react'
import { Field, reduxForm } from 'redux-form';
import {required, phoneNumberValidation} from '../validations'

class CustomerDetailsForm extends React.Component {
    render() {
        const {handleSubmit} = this.props
        return (
                <div className="grid">
                    <form className="customer-details-form" onSubmit={handleSubmit}>
                        <div className="fields">
                            <div className="first-name">
                                <label htmlFor="firstName">First Name</label>
                                <Field 
                                    name="firstName" 
                                    component="input" 
                                    type="firstName"
                                    placeholder="Jane"
                                    
                                />
                            </div>
                            <div className="last-name">
                                <label htmlFor="lastName">Last Name</label>
                                <Field name="lastName" component="input" type="lastName" placeholder="Doe" />
                            </div>
                            <div className="address">
                                <label htmlFor="address">Street address</label>
                                <Field name="address" component="input" type="address" placeholder="Level 8 420 Collins Street" />
                            </div>
                            <div className="phone-number">
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <Field name="phoneNumber" component="input" type="phoneNumber" />
                            </div>
                            <div className="city">
                                <label htmlFor="city">City</label>
                                <Field name="city" component="input" type="city" placeholder="Melbourne" />
                            </div>
                            <div className="state">
                                <label htmlFor="state">State</label>
                                <Field name="state" component="input" type="state" />
                            </div>
                            <div className="postcode">
                                <label htmlFor="postcode">Postcode</label>
                                <Field name="postcode" component="input" type="postcode" />
                            </div>
                            {/* <button className="checkout-button" type="submit" label='submit'>Submit</button> */}
                        </div>
                    </form>
                </div>
        );
    }
}

CustomerDetailsForm = reduxForm({ form: 'customerDetails' })(CustomerDetailsForm);
export default CustomerDetailsForm;