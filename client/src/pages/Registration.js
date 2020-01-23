import React from 'react';
import RegistrationForm from '../components/RegistrationForm'
// import {login} from '../utils/auth'

import axios from 'axios'

class Registration extends React.Component {
	submit = async (values) => {
		try {
			let response = await axios.post('http://localhost:5000/api/customer/register', 
			{
				email: values.email,
				password: values.password
			})
			
			localStorage.setItem('authorisation', JSON.stringify(response.data.access_token))
			this.props.history.push('/')
		} catch {
			console.log("error")
		}
	}

	render(){
		return (
		<>
			<h1>Hello from the registration page</h1>	
			<RegistrationForm onSubmit={this.submit} />
		</>
	)}
}

export default Registration;