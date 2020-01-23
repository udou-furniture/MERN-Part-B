import React from 'react';
import { Field, reduxForm } from 'redux-form';


class LoginForm extends React.Component {
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
					<button type="submit" label='submit'>Submit</button>
				</form>
		);
	}
}

LoginForm = reduxForm({ form: 'login' })(LoginForm);
export default LoginForm;