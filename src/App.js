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


function App() {
  const authorise = getAuth(app)
  const [userLoggedIn,setUserLoggedIn] = useState(null)

  useEffect(()=>{
    let a = onAuthStateChanged(authorise,(e)=>{
      if(e){
        setUserLoggedIn(true)
      }else{
        setUserLoggedIn(false)
      }
    })
  },[authorise])
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path ="/" element={userLoggedIn ? <Home/>:<Navigate to="/login"/>}/>

    <Route path ="/signup" element={<Signup/>}/>
    {/* <Route path ="/Login" element={userLoggedIn ? <Navigate to="/"/>:<Login/>}/> */}
    <Route path ="/login" element={<Login/>}/>


    </Routes>
    </BrowserRouter>
    </>





















    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
