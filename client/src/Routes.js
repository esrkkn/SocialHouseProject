import React from "react";
import Carousel from "./components/Home/Carousel";
import { Route, Switch } from "react-router-dom";
import CreatePost from "./components/Profile/CreatePost";
import LoginPage from "./components/Login/LoginPage";
import HouseList from "./components/HouseList/HouseList"
import Register from "./components/Register/Register"
import Ads from "./components/Ads/Ads";
import "./App.css"
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Carousel {...props} />} />
      <Route exact path="houses" render={(props) => <HouseList {...props} />} />
      <Route exact path="/post" render={(props) => <CreatePost {...props} />} />
      <Route exact path="/login" render={(props) => <LoginPage {...props} />} />
      <Route exact path="/register" render={(props) => <Register {...props} />} />
      <Route exact path="/ads" render={(props) => <Ads {...props} />} />


      <Route component={Unknown} />
    </Switch>
  );
}
function Unknown() {
  return <div>Error 404 page doesn't exist</div>;
}
