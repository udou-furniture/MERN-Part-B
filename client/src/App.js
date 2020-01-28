import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios'

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import ProductsIndex from './pages/ProductsIndex';
import Registration from './pages/Registration';
import ProductView from './pages/ProductView';
import Show from './components/Show';
// import ShoppingCartPage from './pages/ShoppingCartPage';
import PrivateRoute from './components/PrivateRoute';
import Cart from './components/cart/Cart';

class App extends React.Component {
    state = {
        authed: false,
        loading: true
    }

    componentDidMount() {
        this.isUserLoggedIn()
    }
    
    isUserLoggedIn = async () => {
        try {
            const token = localStorage.getItem('authorisation')
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

    render() {
        if(this.state.loading) {
            return null 
        } else {
            return(
                <BrowserRouter>
                <div className="App">
                    <Navbar authed={this.state.authed} isUserLoggedIn={this.isUserLoggedIn} />
                    <Switch>
                        <Route exact path='/' component={Home} />

                        <Route path='/registration' render={(props) => {
                            return <Registration isUserLoggedIn={this.isUserLoggedIn} {...props} />
                        }}  />
                        <Route path='/login' render={(props) => {
                            return <Login isUserLoggedIn={this.isUserLoggedIn} {...props} />
                        }} />
                        <Route path='/product_view' component={ProductView} />
                        <Route path='/products/:type/:product_id' component={Show} />
                        <Route path='/products/:type' component={ProductsIndex} />
                        <Route path='/cart' component={Cart} />
                        {/* <Route path='/index' component={ProductsIndex} /> */}

                        {/* <PrivateRoute exact path="/cart" component={Cart} authed={this.state.authed}/> */}
                    </Switch>
                </div>
                </BrowserRouter> 

            )
        }
    }
}

export default App;