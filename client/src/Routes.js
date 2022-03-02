import React from 'react';
import Main from './components/Home/Main';
import { Route, Switch} from "react-router-dom";
import CreatePost from './components/Profile/CreatePost';
import LoginPage from "./components/Login/LoginPage"


export default function Routes(){
  return (
   
      <Switch>

        <Route exact path="/" component={Main}/>
        <Route exact path="/post" component={CreatePost}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route component={Unknown}/>

</Switch>

  );
}
function Unknown() {
  return <div>Error 404 page doesn't exist</div>
}

