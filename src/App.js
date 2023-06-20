import './App.css';
import Login from './components/LoginSignUp/Login';
import GoogleLogin from './components/LoginSignUp/GoogleSignIn';

function App() {
  return (
    <div className="App">
      {/* <GoogleLogin/> */}
      <Login/>
    </div>
  );
}

export default App;
