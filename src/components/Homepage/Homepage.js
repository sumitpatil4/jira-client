import React, { useContext, useEffect } from 'react'
import { Route,Routes,useNavigate } from 'react-router-dom';
import Login from '../LoginSignUp/Login';
import AuthContext from '../ContextApi/AuthContext';
// import UserProject from '../UserProject/UserProject';
import Signup from '../LoginSignUp/Signup';
import IntroPage from '../IntroPage/IntroPage';
import LandingPage from '../LandingPage/LandingPage';
import Navbar from '../common/navbar/Navbar'
import Backlog from '../Backlog'
import Roadmap from '../Roadmap';
import Setting from '../Setting';
import Project from '../common/navbar/Project';
import Board from '../Board';

const Homepage = () => {
  const { isAuthenticated,useEffectReload } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(isAuthenticated);
    if (isAuthenticated) {
      navigate("/landingpage", true);
    }
    else{
      navigate("/", true);
    }
  }, [useEffectReload]);
  return (
    <>
        {isAuthenticated ?  
          <>
              <div>
                <Navbar/>
                <Routes>
                  <Route path="/landingpage" element={<LandingPage/>} />
                  <Route path="/backlog" element={<Backlog/>} />
                  <Route path="/board" element={<Board/>} />
                  <Route path="/roadmap" element={<Roadmap/>} />
                  <Route path="/setting" element={<Setting/>} />
                  <Route path="/project" element={<Project/>} />
                </Routes>
              </div>
          </>
      :
      <>
          <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route path="/signUp" element={<Signup />} />
            <Route path="/login" element={<Login />} />
           
          </Routes>
      </>
}
    </>
  );
}

export default Homepage;