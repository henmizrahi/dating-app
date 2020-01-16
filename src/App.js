import React from 'react';
import {Route, Switch} from "react-router-dom"
import './App.css';
import { TopBar } from "./topBar/topBar"
import {HomePage} from "./homePage/homePage"
import {LoginPage} from "./loginPage/loginPage"

function App() {
  return (
    <div className = "App">
      <TopBar></TopBar>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/login" >
            <LoginPage />
          </Route>
        </Switch>
    </div>
  );
}



export default App;
