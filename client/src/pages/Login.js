import React from 'react';
import axios from 'axios'

import { setLocalStorageToken } from '../utils/localStorage'

import LoginForm from '../components/LoginForm';

class Login extends React.Component {
	submit = async (values) => {
		try {
			let response = await axios.post('http://localhost:5000/api/customer/login', 
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

	render() {
		return (
			<>
				<h1>Log In</h1>
				<LoginForm onSubmit={this.submit}/>
			</>
		)
	}
}

export default Login;