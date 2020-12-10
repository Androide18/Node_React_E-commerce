import './App.css';
import  { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import Navbar from './Components/Nav/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
