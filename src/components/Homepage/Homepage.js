import React, { useContext, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from '../LoginSignUp/Login';
import AuthContext from '../ContextApi/AuthContext';
import Signup from '../LoginSignUp/Signup';
import IntroPage from '../IntroPage/IntroPage';
import LandingPage from '../LandingPage/LandingPage';
import Navbar from '../common/Navbar/Navbar';
import Backlog from '../Backlog/Backlog';
import Roadmap from '../RoadMap/Roadmap';
import Setting from '../Setting/Setting';
import Project from '../common/Navbar/Project';
import CreatIssue from '../common/Navbar/createIssueButton/CreatIssue';
import Board from '../Board/Board';

const Homepage = () => {
  const { isAuthenticated, useEffectReload } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(isAuthenticated);
    if (isAuthenticated) {
      navigate("/landingpage", true);
    }
    else {
      navigate("/", true);
    }
  }, [useEffectReload]);
  return (
    <>
      {isAuthenticated ?
        <>
          <div>
            <Navbar />
            <Routes>
              <Route path="/landingpage" element={<LandingPage />} />
              <Route path="/backlog" element={<Backlog />} />
              <Route path="/board" element={<Board />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/project" element={<Project />} />
            </Routes>
          </div>
        </>
        :
        <>
          <Routes>
            <Route path="/" element={<CreatIssue />} />
            <Route path="/signUp" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </>
      }
    </>
  );
}
export default Homepage;