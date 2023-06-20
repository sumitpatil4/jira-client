import './App.css';
import { Route, Switch } from "react-router-dom"
import Backlog from './components/Backlog';
import Roadmap from './components/Roadmap';
import Board from './components/Board';
import Setting from "./components/Setting"
import Homepage from './components/Homepage/Homepage';
import LandingPage from './components/LandingPage/LandingPage';

function App() {

  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/board" component={Board} />
        <Route exact path="/roadmap" component={Roadmap} />
        <Route exact path="/backlog" component={Backlog} />
        <Route exact path="/setting" component={Setting} />
      </Switch>

    </>
  );
};

export default App;
