import React from 'react'
import { Route, Redirect } from 'react-router-dom'
// import { isUserLoggedIn } from '../utils/auth';

const PrivateRoute = ({component: Component, authed, history, ...rest}) => {
    return (
        <Route {...rest} render={props => {
            return(
                authed ? 
                <Component {...props} /> 
                // console.log("this is true")
                : 
                
                <Redirect to="/" />
                // console.log("this is false")
            )
        }} />
    )
}; 

export default PrivateRoute;
