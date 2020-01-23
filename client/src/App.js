import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import ProductsIndex from './pages/ProductsIndex';
import Registration from './pages/Registration';
import ProductView from './pages/ProductView';

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
          <Route path='/products_index' component={ProductsIndex} />
          <Route path='/product_view' component={ProductView} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
