import React, { useContext, useEffect } from 'react'
import { Route,Routes,useNavigate } from 'react-router-dom';
import Login from '../LoginSignUp/Login';
import AuthContext from '../ContextApi/AuthContext';
import UserProject from '../UserProject/UserProject';
import Signup from '../LoginSignUp/Signup';
import IntroPage from '../IntroPage/IntroPage';
import Backlog from "../Backlog/Backlog";
import Navbar from "../common/navbar/Navbar";

const Homepage = () => {
  const { isAuthenticated,useEffectReload } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(isAuthenticated);
    if (isAuthenticated) {
      navigate("/backlog", true);
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
                <Navbar />
                <Routes>
                  <Route path="/backlog" element={<Backlog />} />
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