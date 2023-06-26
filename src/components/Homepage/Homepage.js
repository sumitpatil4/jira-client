import React from 'react'

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