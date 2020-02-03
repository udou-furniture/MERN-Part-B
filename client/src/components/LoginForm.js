import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {required} from '../validations'

const renderTextField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>

        <div>
            <input {...input} placeholder={label} type={type}/>

            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

class LoginForm extends React.Component {
	render() {
        const { handleSubmit, pristine, submitting } = this.props
		return (
				<form onSubmit={handleSubmit}>
					<Field 
						name="email" 
						type="email"
						component={renderTextField} 
						label="Email"
						validate={required}
				    />
                    <Field 
						name="password" 
						type="password"
						component={renderTextField} 
						label="Password"
						validate={required}
				    />
                    {/* <Field 
						name="passwordConfirmation" 
						type="password"
						component={renderTextField} 
						label="Password"
						validate={required, matchPassword()}
				    /> */}
					<button type="submit" disabled={pristine || submitting}>Submit</button>
				</form>
		);
	}
}

LoginForm = reduxForm({ form: 'login' })(LoginForm);
export default LoginForm;