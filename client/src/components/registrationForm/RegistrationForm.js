import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './RegistrationForm.css';


class RegistrationForm extends React.Component {
	
	render() {
		const {handleSubmit} = this.props
		return (
			<>
				{/* <div className="registration-text">
					<h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis harum ex exercitationem praesentium, maiores consequuntur accusamus amet modi voluptatum quis repellendus numquam est similique, eaque rem laboriosam doloremque deserunt nulla.Dolorum eaque, asperiores atque odit dignissimos aspernatur corporis quo officiis quasi expedita molestias facere vel quae unde deserunt? Officia, quo. Commodi quis et facilis dolor dicta neque saepe quos aut.</h3>
				</div> */}
				<div id="registration-form">
					<h1>Sign Up</h1>	
					<form onSubmit={handleSubmit}>
						<div className="email">
							<label className="email-label" htmlFor="email"></label>
							<Field name="email" component="input" type="email" placeholder="Email" />
						</div>
						<div className="password">
							<label className="password-label" htmlFor="password"></label>
							<Field name="password" component="input" type="password" placeholder="Password" />
						</div>
						<div className="password">
							<label className="password-label" htmlFor="password"></label>
							<Field name="password" component="input" type="password" placeholder="Confirm password" />
						</div>
						<button className="registration-button" type="submit">Create Account</button>
						<div className="terms">
							By signing up you agree to the <a href="#">terms of service</a> and <a href="#">privacy policy</a>
						</div>
					</form>
				</div>
			</>		
		);
	}
}

RegistrationForm = reduxForm({ form: 'registration' })(RegistrationForm);

export default RegistrationForm;