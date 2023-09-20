import './App.css';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import AuthDetails from './components/AuthDetails';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>

    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/login' element={<SignIn/>}/>
    <Route exact path='/signup' element={<SignUp/>}/>
    <Route exact path='/' element={<AuthDetails/>}/>
    
      </Routes>
    </Router>
  );
}

export default App;
