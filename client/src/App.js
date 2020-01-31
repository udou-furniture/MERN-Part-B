import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './OOCSS.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import ProductsIndex from './pages/ProductsIndex';
import Registration from './pages/Registration';
import ProductView from './pages/ProductView';
import Show from './components/Show';
import PrivateRoute from './components/PrivateRoute';
import Cart from './components/cart/Cart';
import ReviewFormPage from './pages/ReviewFormPage';
import AccountDashboard from './pages/AccountDashboard';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment'

class App extends React.Component {
  state = {
    authed: false,
    loading: true
  };

  componentDidMount() {
    this.isUserLoggedIn();
  }

  isUserLoggedIn = async () => {
    try {
      const token = localStorage.getItem('authorisation');
      await axios.get('http://localhost:5000/api/customer/check-token', {
        headers: {
          Authorisation: `Bearer ${token}`
        }
      });

      this.setState({
        authed: true,
        loading: false
      });
    } catch (err) {
      this.setState({
        authed: false,
        loading: false
      });
    }
  };

    render() {
        if(this.state.loading) {
            return null 
        } else {
            return(
                <BrowserRouter>
                <div className="App">
                    <Navbar authed={this.state.authed} isUserLoggedIn={this.isUserLoggedIn} />
                    <Switch>
                        <Route exact path="/" component={Home} />

                        <Route path="/registration" render={(props) => {
                            return <Registration isUserLoggedIn={this.isUserLoggedIn} {...props} />
                        }}  />
                        <Route path="/login" render={(props) => {
                            return <Login isUserLoggedIn={this.isUserLoggedIn} {...props} />
                        }} />
                        {/* Order of the below two routes is important. Don't change without reason */}
                        <Route path="/products/:type/:product_id" component={ProductView} />
                        <Route path="/products/:type" component={ProductsIndex} />
                        <Route path="/cart" render={(props) => {
                            return <Cart authed={this.state.authed} {...props} />
                        }} />
                        {/* <Route path="/cart" component={Cart} authed={this.state.authed}/> */}

                        {/* <PrivateRoute exact path="/cart" component={Cart} authed={this.state.authed} isUserLoggedIn={this.isUserLoggedIn}/> */}
                        <PrivateRoute exact path="/leave-review/:orderID" component={ReviewFormPage} authed={this.state.authed}/>
                        <PrivateRoute exact path="/account" component={AccountDashboard} authed={this.state.authed}/>
                        {/* <PrivateRoute path="/checkout" authed={this.state.authed} render={(props) => {
                            return <Checkout isUserLoggedIn={this.isUserLoggedIn} {...props} />
                        }} /> */}
                        <PrivateRoute exact path="/checkout" component={Checkout} authed={this.state.authed} />
                        <PrivateRoute exact path="/payment" component={Payment} authed={this.state.authed} />
                    </Switch>
                </div>
                </BrowserRouter> 
            );
        }
    }
}

export default App;
