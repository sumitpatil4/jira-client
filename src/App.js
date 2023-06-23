import React from "react";
import { Route, Switch } from "react-router-dom";
import Backlog from "./components/Backlog/Backlog";
import Roadmap from "./components/Roadmap";
import Board from "./components/Board";
import Setting from "./components/Setting";
import LandingPage from "./components/LandingPage/LandingPage";
import Project from "./components/createproject/CreateProject";
import Navbar from "./components/common/Navbar/Navbar";
import CreatIssue from "./components/common/Navbar/CreatIssue";

function App() {
  return (
    <>
    <Navbar/>
      <Switch>
      <Route exact path="/" component={CreatIssue} />
        <Route exact path="/board" component={Board} />        
        <Route path="/roadmap" component={Roadmap} />
        <Route path="/backlog" component={Backlog} />
        <Route path="/setting" component={Setting} />
        <Route path="/project" component={Project} />
      </Switch>
    </>
  );
}

export default App;
