import React from 'react';
import {Route, Switch, Router} from "react-router-dom"
import './App.css';
import { TopBar } from "./topBar/topBar"
import {HomePage} from "./homePage/homePage"

function App() {
  return (
    <div>
      <TopBar></TopBar>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
    </div>
  );
}


{/* <Router>
<div>
<TopBar/>
  <Switch>
    <Route path="/" exact>
      <HomePage />
    </Route>
  </Switch>
</div>
</Router> */}

export default App;
