import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"
import {app} from "../fbConfig";
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
         route("/login ")
    }
    
  return (
    <div>
      Sign up 
      <form onSubmit={handlesubmit}> 
      <input type='email' placeholder='enter your email' onChange={(e)=>{setEmail(e.target.value)}}  value={email}/>
      <input type='password' placeholder='enter your password' onChange={(e)=>{setPswd(e.target.value)}}  value={pswd}/>
        <button>signup</button>
        </form>
    </div>
  )
}

export default Signup
