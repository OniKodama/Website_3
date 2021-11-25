import './App.css';
import Navbar from './components/Navbar';
import React from 'react'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Home />
          <Routes>
            <Route path = "/products" component = {Products} exact />
            <Route path = "/services" component = {Services} exact />
            <Route path = "/sign-up" component = {SignUp} exact />
          </Routes>
      </Router>
      
    </>
  );
}

export default App;
