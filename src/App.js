import React, { Component } from 'react';
import './App.css';
import Citysearch from './Components/Citysearch';

class App extends Component {
  render(){
    return (
      <div className="City">
        <h1 className="main-header">City Searcher</h1>
          <Citysearch></Citysearch>
      </div>
    );
  }
}

export default App;
