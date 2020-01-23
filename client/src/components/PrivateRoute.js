import React from 'react'
import { Route, Redirect } from 'react-router-dom'

tokenStuff = () => {
    let token = JSON.parse(localStorage.getItem('authorisation'))
    console.log(`Authorization=Bearer ${token}`)
}
// function getMe(e) {
// 	e.preventDefault();
// 	var token = JSON.parse(localStorage.getItem('token'));
// 	console.log(`Authorization=Bearer ${token}`)
// 	fetch('/users/me', {
// 		method: 'GET',
// 		headers: {
// 			'Authorization': 'Bearer ' + token
// 		}
// 	})
// 		.then(res => res.json())
// 		.then(data => {
// 			console.log(data)
// 			// window.location.href = 'http://localhost:3000/dashboard';
// 		})
// 		.catch(err => { console.log(err) })
// } 

const PrivateRoute = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/signin" />
        )} />
    );
};

export default PrivateRoute;

export default PrivateRoute
