import React from 'react';
import './App.css';
import Home from './pages';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './pages/contact';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={Contact} exact />
      </Switch>
    </Router>
  );
}

export default App;
