import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainPage from "./components/mainPage/mainPage";
import OnePhotoPage from "./components/onePhotoPage/onePhotoPage";
import AlbumPage from "./components/albumPage/albumPage";

import styles from './App.module.css';


const App = () => {


  return (
      <BrowserRouter>
          <Switch>
              <Route path='/photo/:id'>
                  <OnePhotoPage />
              </Route>
              <Route path='/album/:id'>
                  <AlbumPage />
              </Route>
              <Route path='/'>
                  <MainPage />
              </Route>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
