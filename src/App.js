import React from 'react';
import Navigation from './components/Navigation'
import Router from './Router'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './Redux/store';

function App() {
console.log(process.env.REACT_APP_APIK_API_KEY)
return (
  <Provider store={store}>
  <BrowserRouter>
    <Navigation />
    <Router />
  </BrowserRouter>
  </Provider>
);
}

export default App;
