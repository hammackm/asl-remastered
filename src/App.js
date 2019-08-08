import React, {Component} from 'react';
import './App.css';

import Header from './components/Header/Header';
import MainBody from "./components/MainBody";

class App extends Component {
  render() {
    return (
        <div className="App">
          <MainBody/>
        </div>
    );
  }
}

export default App;
