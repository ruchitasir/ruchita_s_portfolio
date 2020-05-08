import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Nav from './Nav';
import Content from './Content';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>  My Portfolio</h1>
      </header>
      <Router>
        <Nav/>
        <Content/>
      </Router>
    </div>
  );
}

export default App;
