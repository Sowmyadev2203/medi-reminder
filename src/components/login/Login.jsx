import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../fbConfig';
import { Container, TextField, Button, Typography } from '@mui/material';

const Login = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState(''); 

  const handleSignupRedirect = () => {
    navigate('/signup');
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);  
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!isValidEmail(email)) {
      setLoginMessage("Error: Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setLoginMessage("Error: Password must be at least 6 characters long.");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoginMessage('Login successful!'); 
      navigate('/home'); 
    } catch (error) {
      setLoginMessage(`Error:Invalid Details/Not Found Your account please Sign up!`); 
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 5, textAlign: 'center', color: "whitesmoke", padding: "60px", borderRadius: "30px" }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      
      {loginMessage && <Typography variant="body1" color="danger.main" sx={{
            marginBottom: 2,
            color: loginMessage.startsWith('Error') || loginMessage.startsWith('Incorrect') || loginMessage.startsWith('No account') ? 'error.main' : 'success.main'
          }}>{loginMessage}</Typography>}

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
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
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
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
        <Button fullWidth variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>Login</Button>
        <Button fullWidth variant="contained" color="secondary" sx={{ mt: 2 }} onClick={handleSignupRedirect}>Sign Up</Button>
      </form>
    </Container>
  );
};

export default Login;
