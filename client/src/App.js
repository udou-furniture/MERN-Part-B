import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import ProductIndex from './pages/ProductIndex';
import Registration from './pages/Registration';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/registration' component={Registration} />
          <Route path='/login' component={Login} />
          <Route path='/product_index' component={ProductIndex} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
