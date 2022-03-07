import React from 'react';
import Main from './components/Home/Main';
import { Route, Switch} from "react-router-dom";
import CreatePost from './components/Profile/CreatePost';
import LoginPage from "./components/Login/LoginPage"


export default function Routes(){
  return (
   
      <Switch>

        <Route exact path="/" render={(props)=> <Main{...props}/>}/>
        <Route exact path="/post" render={(props)=> <CreatePost{...props}/>}/>
        <Route exact path="/login" render={(props)=> <LoginPage{...props}/>}/>
        <Route component={Unknown}/>

</Switch>

  );
}
function Unknown() {
  return <div>Error 404 page doesn't exist</div>
}

