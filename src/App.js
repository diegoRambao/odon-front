import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'

import Dashboard from './pages/Dashboard'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import SignUpPage from './pages/SignUpPage'


function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute restricted={false} component={HomePage} path="/" exact/>
        <PublicRoute restricted={true} component={LoginPage} path="/login" exact />
        <PublicRoute restricted={false} component={SignUpPage} path="/signup" exact/>
        <PrivateRoute component={Dashboard} path="/main" exact />
        <PrivateRoute component={ProfilePage} path="/profile" exact />
      </Switch>
    </Router>
  );
}

export default App;
