import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {required, email, passwordMinLength} from '../validations'

const renderTextField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>

        <div>
            <input {...input} placeholder={label} type={type}/>

            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

class RegistrationForm extends React.Component {
	render() {
		const { handleSubmit, pristine, submitting } = this.props
		return (
				<form onSubmit={handleSubmit}>
					<Field 
                        name="email" 
                        type="email"
                        component={renderTextField} 
                        label="Email"
                        validate={[required, email]}
				    />
                    <div>{this.props.errorMessage && <span>email already exists</span>}</div>
                    <Field 
                        name="password" 
                        type="password"
                        component={renderTextField} 
                        label="Password"
                        validate={[required, passwordMinLength]}
				    />
					<button type="submit" disabled={pristine || submitting}>Submit</button>
				</form>
		);
	}
}

RegistrationForm = reduxForm({ form: 'registration' })(RegistrationForm);

export default RegistrationForm;