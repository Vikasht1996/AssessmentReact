import React from 'react';
import logo from './logo.svg';
import './App.css';
import Registrationfrom from './Assessment4/Registrationfrom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Loginform from './Assessment4/Loginform';
import Home from './Assessment4/Home'
import Home1 from './Assessment4/Home1'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Registrationfrom}></Route>
        <Route exact path='/register' component={Registrationfrom}></Route>
        <Route exact path='/login' component={Loginform}></Route>
        <Route exact path='/home' component={Home}></Route>
        <Route exact path='/home1' component={Home1}></Route>
      </Switch>
    </Router>
  );
}

export default App;
