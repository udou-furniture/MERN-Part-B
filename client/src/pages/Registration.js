import React from 'react';
import axios from 'axios'

import {setLocalStorageToken} from '../utils/localStorage'

import RegistrationForm from '../components/registration/RegistrationForm';


class Registration extends React.Component {
	submit = async (values) => {
		try {
			let response = await axios.post('http://localhost:5000/api/customer/register', 
			{
				email: values.email,
				password: values.password
			})
			
			setLocalStorageToken(response.data.access_token)
			this.props.isUserLoggedIn()
			this.props.history.push('/')
		} catch (err) {
			console.log(err.message)
		}
	}

	render(){
		return (
		<div id="registration-page">
			<RegistrationForm onSubmit={this.submit} />
		</div>
	)}
}

export default Registration;