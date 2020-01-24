// // import React from 'react'
// // import { Route, Redirect } from 'react-router-dom'
// // // import { isUserLoggedIn } from '../utils/auth';

// // const PrivateRoute = ({component: Component, authed, isUserLoggedIn, ...props}) => {
// //     // const token = localStorage.getItem('authorisation')
// //     this.props.isUserLoggedIn()
// //     // console.log(authed)
// //     // return null
// //     if (this.props.loading) {
// //         return null
// //       } else if (!this.props.auth) {
// //         return <Redirect to="/" />
// //       } else {
// //         return <Component {...props} />
// //       }
// //     // return(
// //     //     <Route 
// //     //     {...rest} 
// //     //     render={props => 
// //     //         authed === true ? <Component {...props} /> : <Redirect to="/" />
// //     //             } />
// //     // )
// //         // Show the component only when the user is logged in
// //         // Otherwise, redirect the user to /signin page
// // }; 

// // export default PrivateRoute;




// import React, { useState, useEffect } from 'react'
// import { Redirect } from 'react-router-dom'
// import { checkToken } from '../utils/token'
// import { useHistory } from 'react-router-dom'

// const PrivateRoute = ({ component: Component, ...props }) => {
//   let history = useHistory()

//   const [user, setUser] = useState({
//     auth: null,
//     loading: true,
//   })

//   useEffect(() => {
//     // const token = localStorage.getItem('token')
//     checkToken(setUser)
//   }, [])

//   if (user.loading) {
//     return null
//   } else if (!user.auth) {
//     return <Redirect to="/login" />
//   } else {
//     return <Component user={user.auth} history={history} {...props} />
//   }
// }

// export default PrivateRoute

