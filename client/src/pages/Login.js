import React from 'react';
import axios from 'axios'
import { useState} from 'react'
import { setLocalStorage } from '../utils/localStorage'
import {checkToken} from '../utils/token'

import LoginForm from '../components/LoginForm';

class Login extends React.Component {
	submit = async (values) => {
		try {
			let response = await axios.post('http://localhost:5000/api/customer/login', 
			{
				email: values.email,
				password: values.password
			})
			
			// localStorage.setItem('authorisation', JSON.stringify(response.data.access_token))
			setLocalStorage(response.data.access_token)
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




// import { setLocalStorage } from './utils/local-storage'
// import EmailVerificationForm from './forms/EmailVerificationForm'
// import LoginForm from './forms/LoginForm'


// const Login = (props) => {
//   const [email, setEmail] = useState(null)
//   const [password, setPassword] = useState(null)
//   const [error, setError] = useState(null)
//   const [passwordReset, setPasswordReset] = useState(false)

//   const onSubmitLoginForm = async (e) => {
//     try {
//       e.preventDefault()
//       const response = await axios.post('http://localhost:5000/users/login', {
//         email,
//         password,
// 	  })
	  
//       setLocalStorage(response.data.access_token)
//       props.history.push('/')
//     } catch (err) {
//       setError({
//         msg: 'Login failed!',
//       })
//     }
//   }

//   const onSubmitEmailVerificationForm = async (e) => {
//     try {
//       e.preventDefault()
//       setError({
//         msg: 'Check your email for a link to reset your password',
//       })
//       await axios.put('http://localhost:5000/mail/forgotten-password', {
//         email,
//       })
//     } catch (err) {
//       console.log(err.message)
//     }
//   }

//   if (passwordReset) {
//     return (
//       <EmailVerificationForm
//         onSubmitEmailVerificationForm={onSubmitEmailVerificationForm}
//         setEmail={setEmail}
//         error={error}
//       />
//     )
//   } else {
//     return (
//       <LoginForm
//         onSubmitLoginForm={onSubmitLoginForm}
//         setEmail={setEmail}
//         error={error}
//         setPassword={setPassword}
//         setPasswordReset={setPasswordReset}
//       />
//     )
//   }
// }

// export default Login