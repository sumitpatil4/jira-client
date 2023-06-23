import React, { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "../LoginSignUp/Login";
import AuthContext from "../ContextApi/AuthContext";
import UserProject from "../UserProject/UserProject";
import Signup from "../LoginSignUp/Signup";
import IntroPage from "../IntroPage/IntroPage";
import RoadMap from "../RoadMap/RoadMap";

const Homepage = () => {
  const { isAuthenticated, useEffectReload } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(isAuthenticated);
    if (isAuthenticated) {
      navigate("/userProject");
    } else {
      navigate("/", true);
    }
  }, [useEffectReload]);
  return (
    <>
      {isAuthenticated ? (
        <>
          <div>
            <Routes>
              <Route path="/userProject" element={<UserProject />} />
              <Route path="/RoadMap" element={<RoadMap />} />
            </Routes>
          </div>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route path="/signUp" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default Homepage;
