import './App.css';
import { Route, Routes } from 'react-router';
import Login from './users/Login';
import Signup from './users/SignUp';
import Forget from './users/Forget';
import Reset from './users/Reset';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route  path='/' element={<Login/>}/>
          <Route  path='/signup' element={<Signup/>}/>
          <Route  path='/forget' element={<Forget/>}/>
          <Route  path='/reset' element={<Reset/>}/>


        </Routes>
    </div>
  );
}

export default App;
