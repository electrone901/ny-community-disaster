
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Navbar from './component/layout/Navbar';
import Footer from './component/layout/Footer';
import LocationSearch from './component/community/LocationSearch';
import ResultSearch from './component/community/ResultSearch';
import Profile from './component/community/Profile';
import Register from './component/auth/Register';
import Login from './component/auth/Login';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <div>
              <Route exact path="/" component={LocationSearch} />
              <Route exact path="/resultSearch/:location" component={ResultSearch} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
