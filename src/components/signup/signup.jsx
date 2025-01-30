import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../fbConfig';
import { Container, TextField, Button, Typography } from '@mui/material';

const Signup = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);  
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created:", userCredential.user); 
      alert('Signup successful!');
      navigate('/login', { replace: true });
    } catch (error) {
      console.error("Signup Error:", error.message);  
      alert(error.message);  
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 5, textAlign: 'center',backgroundColor:"black",padding:"60px",borderRadius:"50px"}}>
      <Typography variant="h4" gutterBottom>Sign Up</Typography>
      <form onSubmit={handleSubmit}>
        <TextField 
          fullWidth label="Email" margin="normal" 
          value={email} onChange={(e) => setEmail(e.target.value)} required
          InputProps={{ style: { color: "white" } }}  
          InputLabelProps={{ style: { color: "white" } }} 
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' }, 
              '&:hover fieldset': { borderColor: 'white' }, 
              '&.Mui-focused fieldset': { borderColor: 'white' } 
            }
          }} 
        />
        <TextField 
          fullWidth label="Password" type="password" margin="normal" 
          value={password} onChange={(e) => setPassword(e.target.value)} required
          InputProps={{ style: { color: "white" } }}  
          InputLabelProps={{ style: { color: "white" } }} 
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' }, 
              '&:hover fieldset': { borderColor: 'white' }, 
              '&.Mui-focused fieldset': { borderColor: 'white' } 
            }
          }} 
        />
        <Button fullWidth variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default Signup;
