import './App.css';
import {useState}from 'react';
import { Route, Switch} from "react-router-dom"
import Navbar from './components/common/Navbar';
import Sidebar from './components/common/Sidebar';
import Backlog from './components/Backlog';
import Roadmap from './components/Roadmap';
import Board from './components/Board';
import Setting from "./components/Setting"

function App() {
  
  // const [sidebarOpen, setSideBarOpen] = useState(false);
  // const handleViewSidebar = () => {
  //   setSideBarOpen(!sidebarOpen);
  // }
 
  return (
    <>
    <Switch>
      <Route exact path="/" component={Board} />
      <Route exact path="/roadmap" component={Roadmap}/>
      <Route exact path="/backlog" component={Backlog}/> 
      <Route exact path="/setting" component={Setting}/> 
    </Switch>
      
    

    {/* <Board/>
    <Roadmap/>
    <Backlog/> */}

         {/* <span>
          <Navbar onClick={handleViewSidebar} />
         <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
         </span>
          */}
    </>
  );
};

export default App;
