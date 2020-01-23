import React from 'react';
import LoginForm from '../components/LoginForm';
import axios from 'axios'

class Login extends React.Component {
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

	render() {
		return (
			<LoginForm onSubmit={this.submit}/>
		)
	}
}

export default Login;