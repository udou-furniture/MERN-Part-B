import React from 'react';
import RegistrationForm from '../components/RegistrationForm'

class Registration extends React.Component {

	submit = (values) => {
		console.log(values);
		//would potentially be the spot for fetch request to our express server
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