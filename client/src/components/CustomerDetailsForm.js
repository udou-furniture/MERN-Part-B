import React from 'react'
import { Field, reduxForm } from 'redux-form';
import {required, phoneNumber, postcodeValidation, number} from '../validations'

const renderTextField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>

        <div>
            <input {...input} placeholder={label} type={type}/>

            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

class CustomerDetailsForm extends React.Component {
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props
        return (
                <form onSubmit={handleSubmit}>
                    <Field 
                        name="firstName" 
                        type="text"
                        component={renderTextField} 
                        label="First Name"
                        validate={required}
                    />
                    <Field 
                        name="lastName" 
                        type="text"
                        component={renderTextField} 
                        label="Last Name"
                        validate={required}
                    />
                    <Field 
                        name="address" 
                        type="text"
                        component={renderTextField} 
                        label="Address"
                        validate={[required]}
                    />
                    <Field 
                        name="city" 
                        type="text"
                        component={renderTextField} 
                        label="City"
                        validate={required}
                    />
                    <div>
                        <label htmlFor="state">State</label>
                        <Field 
                            name="state" 
                            component='select'
                            validate={required}
                        >
                            <option value="VIC">Victoria</option>
                            <option value="NSW">New South Wales</option>
                            <option value="QLD">Queensland</option>
                            <option value="NT">Northern Territory</option>
                            <option value="SA">South Australia</option>
                            <option value="WA">Western Australia</option>
                            <option value="TAS">Tasmania</option>
                            <option value="ACT">Australian Capital Territory</option>
                        </Field>
                    </div>
                    <Field 
                        name="postcode" 
                        type="text"
                        component={renderTextField} 
                        label="Postcode"
                        validate={[required, postcodeValidation, number]}
                    />
                    <Field 
                        name="phoneNumber" 
                        type="text"
                        component={renderTextField} 
                        label="Phone Number"
                        validate={[ required, phoneNumber, number ]}
                    />
                    <button type="submit" disabled={pristine || submitting}>Submit</button>
                </form>
        );
    }
}

CustomerDetailsForm = reduxForm({ form: 'customerDetails' })(CustomerDetailsForm);
export default CustomerDetailsForm;