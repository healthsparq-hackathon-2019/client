import React, { Component } from 'react';
import './App.css';
import Landing from './components/landing/Landing';
import Details from './components/details/Details';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/details' component={Details} />
          <Redirect to='/'/>
        </Switch>
      </Router>
    </>
    );
  }
}

export default App;
