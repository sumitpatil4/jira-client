import './App.css';
import Login from './components/LoginSignUp/Login';
import GoogleLogin from './components/LoginSignUp/GoogleSignIn';
import Signup from './components/LoginSignUp/Signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { AuthContextProvider } from './components/ContextApi/AuthContext';
import Homepage from './components/Homepage/Homepage';



function App() {
  return (
    <div className="App">
      {/* <GoogleLogin/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      <AuthContextProvider>
        <Homepage/>
      </AuthContextProvider>
    </div>
  );
}

export default App;
