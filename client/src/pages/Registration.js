import React from 'react';
import axios from 'axios'

import { setLocalStorage } from '../utils/localStorage'

import RegistrationForm from '../components/registrationForm/RegistrationForm'


class Registration extends React.Component {
	submit = async (values) => {
		try {
			let response = await axios.post('http://localhost:5000/api/customer/register', 
			{
				email: values.email,
				password: values.password
			})
			
			setLocalStorage(response.data.access_token)
			this.props.isUserLoggedIn()
			this.props.history.push('/')
		} catch (err) {
			console.log(err.message)
		}
	}

	render(){
		return (
		<div id="registration" className="grid">
			<RegistrationForm onSubmit={this.submit} />
			<div className="already-account">
				Already have an account? <a>Log in</a>
			</div>
		</div>
	)}
}

export default Registration;