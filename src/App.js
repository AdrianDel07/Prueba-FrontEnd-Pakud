import './App.css';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Network from './components/Network';
import Container from './container/Container';
import Header from './container/Header';
import Footer from './container/Footer';
 
function App() {

  return (
    <div className="App">
      <Network />
      <Router>
        <div className="container">
          <Header />
          <Container />
          <Footer />
          </div>
      </Router>
    </div>
  );
}

export default App;
