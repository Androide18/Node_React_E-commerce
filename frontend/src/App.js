import './App.css';
import NavBar from './Components/NavBar';
import  { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;
