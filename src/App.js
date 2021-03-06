import React from 'react';
import {Route, Switch} from "react-router-dom"
import './App.css';
import { TopBar } from "./topBar/topBar"
import {HomePage} from "./homePage/homePage"
import {LoginPage} from "./loginPage/loginPage"
import {ProfilePage} from "./profilePage/profilePage"
import {UserPage} from "./userPage/userPage"

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
          <Route path="/profile" >
            <ProfilePage />
          </Route>
          <Route path="/user/:name" >
            <UserPage />
          </Route>
        </Switch>
    </div>
  );
}



export default App;
