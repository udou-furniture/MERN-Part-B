import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import ProductsIndex from './pages/ProductsIndex';
import Registration from './pages/Registration';
import axios from 'axios'

class App extends React.Component {
  state = {
    auth: null,
    loading: true
  }

  async componentDidMount() {
    try {
      const token = localStorage.getItem('authorisation')
      axios.get("http://localhost:5000/api/customer/check-token", { headers: {
        Authorisation: `Bearer ${token}`
      }})
      this.setState({
        auth: true,
        loading: false
      })
    } catch(err) {
      console.log(err.message)
      this.setState({
        auth: false,
        loading: false
      })
    }
  }

  isUserLoggedIn = () => {
    const TOKEN_KEY = 'authorisation'
    if (localStorage.getItem(TOKEN_KEY)) {
      this.setState({ auth: true, loading: false })
    } else {
      this.setState({ auth: false, loading: false })
    }
  }

  logout = () => {
    localStorage.removeItem('authorisation')
    this.setState({
      auth: false
    })
  }

  render() {
    if (this.state.loading) {
      return null 
    } else {
      return (
      <BrowserRouter>
        <div className="App">
          <Navbar isLoggedIn={this.state.auth} logout={this.logout} />
          <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/registration' render={(props) => {
            return <Registration isUserLoggedIn={this.isUserLoggedIn} {...props} />
          }}  />
          <Route path='/login' component={Login} />
          <Route path='/products_index' component={ProductsIndex} />
          </Switch>
        </div>
      </BrowserRouter>
      )
    }
  }
}

export default App;
