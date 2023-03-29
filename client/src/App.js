import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Login, Home } from './components';
import { app } from './config/FirebaseConfig';
import {getAuth} from 'firebase/auth'


const App = () => {
  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false || window.localStorage.getItem("auth") === "true")

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((UserCredentials)=>{
      if(UserCredentials){
        UserCredentials.getIdToken().then((token) => {
          console.log(token);
        })
      }else{
        setAuth(false);
        window.localStorage.setItem("auth","false");
        navigate("/login")
      }
    })
  }, [])


  return (
    <div className='w-screen h-screen bg-primary flex justify-center items-center'>
      <Routes>
        <Route path='/login' element={<Login setAuth={setAuth} />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
