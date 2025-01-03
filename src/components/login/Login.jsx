import React,{useState} from 'react'
import {app} from "../fbConfig";
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Login = () => {
    let loginWithFb = getAuth(app) 
    let route = useNavigate()
     const[email,setEmail] = useState("")
         const [pswd,setPswd] = useState("")
         const handlesubmit= async (e)=>{
            e.preventDefault();
            setEmail("")
            setPswd("")
            try{
              let loginSuccess = await signInWithEmailAndPassword(loginWithFb,email,pswd)
              // route("/")

              // if(loginSuccess){
              //   alert("login suc")
              // }else{
              //   alert("user not found")
              // }
             
            }catch(err){
              console.log(err);
              alert(err)
              
            }
            // console.log(email,pswd);
        }
  return (
    <div>
      <h1>Let's Sign You in!</h1>
      <form onSubmit={handlesubmit}> 
      {/* <input type='email' placeholder='enter your email' onChange={(e)=>{setEmail(e.target.value)}}  value={email}/> */}
      {/* <input type='password' placeholder='enter your password' onChange={(e)=>{setPswd(e.target.value)}}  value={pswd}/> */}
      <TextField
          id="outlined-input"
          label="Email"
          type="Email"
          // autoComplete="current-password"
          onChange={(e)=>{setEmail(e.target.value)}}  value={email}/> <br></br>
          <br></br>
      <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e)=>{setPswd(e.target.value)}}  value={pswd}/>


        {/* <button>login</button> */}
        <Stack spacing={2} direction="row">
     
      <Button variant="contained">Login</Button>
      
    </Stack>

        </form>
    </div>
  )
}

export default Login
