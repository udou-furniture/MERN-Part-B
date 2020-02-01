import React from 'react';
import axios from 'axios'

import { setLocalStorage } from '../utils/localStorage'

import LoginForm from '../components/log-in/LoginForm'

class Login extends React.Component {
	submit = async (values) => {
		try {
			let response = await axios.post('http://localhost:5000/api/customer/login', 
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

	render() {
		return (
			<div id="log-in-page">
				<LoginForm onSubmit={this.submit}/>
			</div>
		)
	}
}

export default Login;