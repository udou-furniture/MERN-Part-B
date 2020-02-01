import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './LoginForm.css';


class LoginForm extends React.Component {
	render() {
        const {handleSubmit} = this.props
		return (
				<form className="log-in-form" onSubmit={handleSubmit}>
					<h1>Log in</h1>
					<div className="log-in-form-label">
						<label htmlFor="email">Email</label>
						<Field name="email" component="input" type="email" />
					</div>
					<div className="log-in-form-label">
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