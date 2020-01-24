import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios'

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import ProductsIndex from './pages/ProductsIndex';
import Registration from './pages/Registration';
import ProductView from './pages/ProductView';
import ShoppingCartPage from './pages/ShoppingCartPage';
import PrivateRoute from './components/PrivateRoute'

import {checkToken} from './utils/token'


class App extends React.Component {
    state = {
        authed: false,
        loading: true
    }

    componentDidMount() {
        this.isUserLoggedIn()
        // return null
    }
    
    isUserLoggedIn = async () => {
        try {
            const token = localStorage.getItem('authorisation')
            console.log(token)
            await axios.get("http://localhost:5000/api/customer/check-token", { headers: {
                Authorisation: `Bearer ${token}`}})
            
            this.setState({
                authed: true,
                loading: false
            })
        } catch(err) {
            this.setState({
                authed: false,
                loading: false
            })
            
        }
    }

    // logout = () => {
    //     localStorage.removeItem('authorisation')

    //     this.setState({
    //         auth: false
    //     })
    // }

    render() {
        if(this.state.loading) {
            return null 
        } else {
            return(
                <BrowserRouter>
                <div className="App">
                    <Navbar authed={this.state.authed} isUserLoggedIn=
                    {this.isUserLoggedIn}/>
                    <Switch>
                        <Route exact path='/' component={Home} />

                        <Route path='/registration' render={(props) => {
                            return <Registration isUserLoggedIn={this.isUserLoggedIn} {...props} />
                        }}  />
                        <Route path='/login' render={(props) => {
                            return <Login 
                            isUserLoggedIn={this.isUserLoggedIn} 
                            {...props} />
                        }} />

                        {/* <Route path='/products_index' component={ProductsIndex} /> */}
                        <Route path='/products/:type' component={ProductsIndex} />
                        <Route path='/product_view' component={ProductView} />

                        {/* <PrivateRoute exact path="/shopping" component={ShoppingCartPage} /> */}
                    </Switch>
                </div>
                </BrowserRouter> 

            )
        }
    }
}

export default App;



// import React from 'react'
// import { Switch, Route } from 'react-router-dom'
// import Login from './Login'
// import Home from './Home'
// import ProtectedRoute from './ProtectedRoute'
// import ResetPassword from './ResetPassword'

// const App = () => {
//   return (
//     <Switch>
//       <Route path="/login" component={Login} />
//       <Route path="/:passwordToken/change-password" component={ResetPassword} />
//       <ProtectedRoute exact path="/" component={Home} />
//     </Switch>
//   )
// }

// export default App