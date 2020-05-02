import React from "react";
import Header from "./components/header/Header";
import HomePage from "./pages/homePage/HomePage";
import ShopPage from "./pages/shop/Shop";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
