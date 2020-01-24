import React from 'react';
import { Field, reduxForm } from 'redux-form';


class RegistrationForm extends React.Component {
	
	render() {
		const {handleSubmit} = this.props
		return (
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="email">Email</label>
						<Field name="email" component="input" type="email" />
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<Field name="password" component="input" type="password" />
					</div>
					<button type="submit">Submit</button>
				</form>
		);
	}
}

RegistrationForm = reduxForm({ form: 'registration' })(RegistrationForm);

export default RegistrationForm;