import './App.css';
import Login from './components/LoginSignUp/Login';
import GoogleLogin from './components/LoginSignUp/GoogleSignIn';
import Signup from './components/LoginSignUp/Signup';
import FirstPage from './components/IntroPage/infoPage';

function App() {
  return (
    <div className="App">
      {/* <GoogleLogin/> */}
      {/* <Login/> */}
      <Signup/>
    </div>
  );
}

export default App;
