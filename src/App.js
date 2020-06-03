import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav';
import Content from './Content';
import ButtonAppBar from './ButtonAppBar'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>  My Portfolio</h1>
      </header>
      <ButtonAppBar />
      <Router>
        <Nav/>
        <Content/>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
