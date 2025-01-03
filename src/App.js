import logo from './logo.svg';
import './App.css';
import Signup from './components/signup/signup';
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom"
import Login from './components/login/Login';
import Home from './components/Home/Home';
import {app} from "./components/fbConfig";
import { getAuth,signOut,onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import NavigationBar from './components/navbar/navbar';
import Medication from './components/medication';
import Profile from './components/profile';


 function App() {
//   const authorise = getAuth(app)
//   const [userLoggedIn,setUserLoggedIn] = useState(null)

//   useEffect(()=>{
//     let a = onAuthStateChanged(authorise,(e)=>{
//       if(e){
//         setUserLoggedIn(true)
//       }else{
//         setUserLoggedIn(false)
//       }
//     })
//   },[authorise])
  return (
    <>
    <NavigationBar/>
    
    <BrowserRouter>
    <Routes>
    {/* <Route path ="/" element={userLoggedIn ? <Home/>:<Navigate to="/login"/>}/> */}

    {/* <Route path ="/signup" element={<Signup/>}/> */}
    {/* <Route path ="/Login" element={userLoggedIn ? <Navigate to="/"/>:<Login/>}/> */}
    {/* <Route path ="/login" element={<Login/>}/> */}
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<h2>About Page</h2>} />
    <Route path="/medication" element={<Medication/>} />
    <Route path="/contact" element={<h2>Contact Page</h2>} />
    <Route path="/profile" element={<Profile/>} />



    </Routes>
    </BrowserRouter>
    </>

  )
}


export default App;
