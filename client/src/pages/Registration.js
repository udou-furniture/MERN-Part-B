import React from 'react';
import axios from 'axios'

import {setLocalStorageToken} from '../utils/localStorage'

import RegistrationForm from '../components/RegistrationForm'


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
		<>
			<h1>Sign Up</h1>	
			<RegistrationForm onSubmit={this.submit} />
		</>
	)}
}

export default Registration;