import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'
import { isLogin } from './services/Authentication.service'

import Dashboard from './pages/Dashboard'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Navbar from './components/Navbar'
import SignUpPage from './pages/SignUpPage'


function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute restricted={false} component={HomePage} path="/" exact/>
        <PublicRoute restricted={true} component={LoginPage} path="/login" exact />
        <PrivateRoute component={Dashboard} path="/main" exact />
        <PublicRoute restricted={false} component={SignUpPage} path="/signup" exact/>
      </Switch>
    </Router>
  );
}

export default App;
