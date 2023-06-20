import React from "react";
import Navbar from "./components/common/navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Project from "./components/createproject/CreateProject";


const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Navbar/>
      </Route>
      <Route exact path="/create">
        <Project/>
      </Route>
    </Switch>
  );
};
export default App;
