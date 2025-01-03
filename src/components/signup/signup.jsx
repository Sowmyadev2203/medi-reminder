import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"
import {app} from "../fbConfig";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



const Signup = () => {
  const signUpWithfb = getAuth(app)
    const route = useNavigate()
     const[email,setEmail] = useState("")
     const [pswd,setPswd] = useState("")
     const handlesubmit=async (e)=>{
        e.preventDefault();
        setEmail("")
        setPswd("")
        try{
            let a = await createUserWithEmailAndPassword(signUpWithfb,email,pswd)
            alert("signup done")
            console.log(a);
            
        }
        catch(err){
            console.log(err);
        }
        // console.log(email,pswd);
        //  route("/login ")
    }
    
  return (
    <div>
      Sign up 
      <form onSubmit={handlesubmit}> 
      {/* <input type='email' placeholder='enter your email' onChange={(e)=>{setEmail(e.target.value)}}  value={email}/>
      <input type='password' placeholder='enter your password' onChange={(e)=>{setPswd(e.target.value)}}  value={pswd}/>
        <button>signup</button> */}


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


        
        <Stack spacing={2} direction="row">
     
      <Button variant="contained">Sign Up</Button>
      
    </Stack>



        </form>
    </div>
  )
}

export default Signup
