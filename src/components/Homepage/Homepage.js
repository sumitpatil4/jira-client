import React, { useContext, useEffect } from 'react'
import { Route,Routes,useNavigate } from 'react-router-dom';
import Login from '../LoginSignUp/Login';
import AuthContext from '../ContextApi/AuthContext';
import UserProject from '../UserProject/UserProject';
import LandingPage from '../LandingPage/LandingPage';
import Signup from '../LoginSignUp/Signup';

const Homepage = () => {
  const { isAuthenticated,useEffectReload } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(isAuthenticated);
    if (isAuthenticated) {
      navigate("/", true);
    }
    else{
      navigate("/login", true);
    }
  }, [useEffectReload]);
  return (
    <>
        {isAuthenticated ?  
          <>
              <div>
                <Routes>
                  <Route path="/" element={<UserProject />} />
                </Routes>
              </div>
          </>
      :
      <>
          <Routes>
            <Route path="/landingPage" element={<LandingPage />} />
            <Route path="/signUp" element={<Signup />} />
            <Route path="/login" element={<Login />} />
           
          </Routes>
      </>
}
    </>
  );
}

export default Homepage;