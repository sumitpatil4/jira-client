import React,{useState} from 'react'

const AuthContext= React.createContext();

export const AuthContextProvider = (props) => {

    const [isAuthenticated,setIsAuthenticated]=useState(false);
    const [userid,setUserid]=useState("");
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [usermail,setUsermail]=useState("");
    const [userpicture,setUserpicture]=useState(null);
    const [userrole,setUserrole]=useState("");
    const [accessToken,setAccessToken]=useState("");
    const [idToken,setIdToken]=useState("");
    const [useEffectReload,setUseEffectReload]=useState(false);
    const [jiraRole,setJiraRole] = useState("");


    const updateuserid=(e)=>setUserid(e);
    const updatefname=(e)=>setFname(e);
    const updatelname=(e)=>setLname(e);
    const updateusermail=(e)=>setUsermail(e);
    const updateuserpicture=(e)=>setUserpicture(e);
    const updateuserrole=(e)=>setUserrole(e);
    const updateaccessToken=(e)=>setAccessToken(e);
    const updateidToken=(e)=>setIdToken(e);
    const updateIsAuthenticated =(e)=>{setIsAuthenticated(e);setUseEffectReload(!useEffectReload)};
    const updateJiraRole =(e)=>setJiraRole(e);


const handleLogout=()=>{
    setIsAuthenticated(false);
    setUserid("");
    setFname("");
    setLname("");
    setUsermail("");
    setUserpicture("");
    setUserrole("");
    setIdToken("");
    setAccessToken("");
    setJiraRole("")
}

return (
    <AuthContext.Provider
    value={{
      isAuthenticated,
      fname,
      lname,
      userid,
      usermail,
      userpicture,
      userrole,
      accessToken,
      idToken,
      useEffectReload,
      jiraRole,

      updateIsAuthenticated,
      handleLogout,
      updateuserid,
      updatefname,
      updatelname,
      updateusermail,
      updateuserpicture,
      updateuserrole,
      updateaccessToken,
      updateidToken,
      updateJiraRole,
    }}
  >
    {props.children}
  </AuthContext.Provider>
);
}

export default AuthContext
