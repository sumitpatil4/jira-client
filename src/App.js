import './App.css';
import { AuthContextProvider } from './components/ContextApi/AuthContext';
import Homepage from './components/Homepage/Homepage';


function App() {
  return (
    <div className="App">
     
      <AuthContextProvider>
        <Homepage/>
      </AuthContextProvider>
    </div>
  );
}

export default App;
