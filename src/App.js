import React from 'react';
import './App.css';
import Home from './pages';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactPage from './pages/contact';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="contact" component={ContactPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
