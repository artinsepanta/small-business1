import React from 'react';
import Navigation from './components/Navigation'
import NavListing from './components/NavListing'
import Router from './Router'
import './App.css'
import { BrowserRouter } from 'react-router-dom'


function App() {
  console.log(process.env.REACT_APP_APIK_API_KEY)
  return (
    <BrowserRouter>
      <Navigation />
      <NavListing/>
      <Router />
    </BrowserRouter>
  );
}

export default App;
