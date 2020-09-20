import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/login" component={LoginPage} exact/>
        <Route path="/signup" component={SignUpPage} exact/>
      </Switch>
    </Router>
  );
}

export default App;
