
import React from "react";
import './App.css';
import { Route, Switch } from "react-router-dom"
import Backlog from './components/Backlog';
import Roadmap from './components/Roadmap';
import Board from './components/Board';
import Setting from "./components/Setting"
import LandingPage from './components/LandingPage/LandingPage';
import Project from "./components/createproject/CreateProject";


function App() {

  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/board" component={Board} />
        <Route exact path="/roadmap" component={Roadmap} />
        <Route exact path="/backlog" component={Backlog} />
        <Route exact path="/setting" component={Setting} />
        <Route exact path="/project" component={Project} />
      </Switch>

    </>
  );
};

export default App;
