import React from "react";
import HomePage from "./pages/homePage/HomePage";
import { Switch, Route } from "react-router-dom";
import "./App.css";

const HatPage = ()=>(
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatPage} />
      </Switch>
    </div>
  );
}

export default App;
