import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './LoginForm.css';
import placeHolder from '../../assets/placeholder-image.png';


class LoginForm extends React.Component {
	render() {
        const {handleSubmit} = this.props
		return (
			<div class="grid">
				<form className="login-form" onSubmit={handleSubmit}>
					<h1>Log in</h1>
					<div className="login-form-label">
						<label htmlFor="email">Email</label>
						<Field name="email" component="input" type="email" />
					</div>
					<div className="login-form-label">
						<label htmlFor="password">Password</label>
						<Field name="password" component="input" type="password" />
					</div>
					<button type="submit" label='submit'>Submit</button>
				</form>
				<div className="login-img">
					{/* <img src={placeHolder}></img> */}
				</div>
			</div>	
		);
	}
}

LoginForm = reduxForm({ form: 'login' })(LoginForm);
export default LoginForm;