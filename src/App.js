import React, { Component } from 'react';
import './App.css';
// import Landing from './components/landing/Landing';
import Details from './components/details/Details';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <>
        <Details />
        <Footer />
      </>
    );
  }
}

export default App;
