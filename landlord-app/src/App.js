import React, { Component } from 'react';
import Topbar from './Components/Topbar';
import Footer from './Components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topbar />
        <Footer />
      </div>
    );
  }
}

export default App;
