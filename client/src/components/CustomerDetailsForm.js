import React from 'react'
import { Field, reduxForm } from 'redux-form';
import {required, phoneNumberValidation} from '../validations'

class CustomerDetailsForm extends React.Component {
    render() {
        const {handleSubmit} = this.props
        return (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <Field 
                            name="firstName" 
                            component="input" 
                            type="firstName"
                            
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" component="input" type="lastName" />
                    </div>
                    <div>
                        <label htmlFor="address">Address</label>
                        <Field name="address" component="input" type="address" />
                    </div>
                    <div>
                        <label htmlFor="city">City</label>
                        <Field name="city" component="input" type="city" />
                    </div>
                    <div>
                        <label htmlFor="state">State</label>
                        <Field name="state" component="input" type="state" />
                    </div>
                    <div>
                        <label htmlFor="postcode">Postcode</label>
                        <Field name="postcode" component="input" type="postcode" />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <Field name="phoneNumber" component="input" type="phoneNumber" />
                    </div>
                    <button type="submit" label='submit'>Submit</button>
                </form>
        );
    }
}

CustomerDetailsForm = reduxForm({ form: 'customerDetails' })(CustomerDetailsForm);
export default CustomerDetailsForm;