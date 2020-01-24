import React from 'react';
import RegistrationForm from '../components/RegistrationForm'

import axios from 'axios'

class Registration extends React.Component {
	submit = async (values) => {
		try {
			let response = await axios.post('http://localhost:5000/api/customer/register', 
			{
				email: values.email,
				password: values.password
			})
			
			// console.log(response)
			localStorage.setItem('authorisation', JSON.stringify(response.data.access_token))

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