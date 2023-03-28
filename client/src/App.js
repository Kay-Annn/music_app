import React, {useState} from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login, Home } from './components';


const App = () => {
const [auth, setAuth] = useState(false || window.localStorage.getItem("auth") === "true")

  return (
    <div className='w-screen h-screen bg-primary flex justify-center items-center'>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
