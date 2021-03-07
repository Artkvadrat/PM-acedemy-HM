import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Navbar from "./navbar/navber";
import WeatherApp from "./weatherApp/weatherApp/weatherApp";
import RetrospectiveApp from "./retrospectiveApp/App/retrospectiveApp";
import TodoApp from "./todoApp/todoApp/todoApp";
import MainPage from "./mainPage/mainPage";

import './App.module.css';

function App() {
  return <Router>
    <Navbar/>
    <Switch>
      <Route path='/weather' component={WeatherApp}/>
      <Route path='/retro' component={RetrospectiveApp}/>
      <Route path='/todos' component={TodoApp}/>
      <Route path='/' component={MainPage}/>
    </Switch>
  </Router>
}

export default App;
