import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../src/components/fbConfig';
import NavigationBar from './components/navbar/navbar';
import Login from './components/login/Login';
import Signup from './components/signup/signup';
import HomePage from './components/Home/Home';
import Signout from './components/signout/signout';
import Medication from './components/medication';
import Profile from './components/profile';
import ResultPage from "./components/medication/result";
import ContactPage from './components/contact/contact';




const App = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsignup = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsignup();
  }, []);

  return (
    <BrowserRouter>
      {user && <NavigationBar />}
      
      <Routes>
        {/* <Route path="/home" element={user ? <HomePage /> : <Navigate to="/login" />} /> */}
        <Route path="/" element={!user ? <Login /> : <Navigate to="/home" />} />
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
        <Route path="/signout" element={user ? <Signout /> : <Navigate to="/" />} />
        <Route path="/medication" element={<Medication/>} />
        <Route path="/contact" element={<h2><ContactPage/></h2>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/history" element={<ResultPage />}/>
        <Route path="/medication" element={<ResultPage />}/>
        <Route path="/home" element={<HomePage/>}/>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
