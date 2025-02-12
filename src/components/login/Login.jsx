import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signInAnonymously } from 'firebase/auth';
import { app } from '../fbConfig';
import { Container, TextField, Button, Typography } from '@mui/material';
import "../login/login.css";

const Login = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleSignupRedirect = () => {
    navigate('/signup');
  };

  const handleGuestLogin = async () => {
    try {
      await signInAnonymously(auth);
      navigate("/home");
    } catch (error) {
      console.error("Error:Guest login error:", error.message);
      setLoginMessage(error.message); 
    }
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
      setLoginMessage(`Error: Invalid Details. No account found. Please sign up!`);
    }
  };

  return (
    <Container maxWidth="xs" className="login-container">
      <div className="login-box">
        <Typography variant="h4" gutterBottom>Login</Typography>

        {loginMessage && (
          <Typography 
            variant="body1" 
            sx={{
              marginBottom: 2,
              color: loginMessage.startsWith('Error' || "error") ? 'error.main' : 'success.main'
            }}
          >
            {loginMessage}
          </Typography>
        )}

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
          <Button 
            fullWidth 
            variant="contained" 
            color="primary" 
            type="submit" 
            sx={{ mt: 2 }} 
            className="login-button"
          >
            Login
          </Button>

          <Button 
            fullWidth 
            variant="contained" 
            color="secondary" 
            sx={{ mt: 2 }} 
            onClick={handleGuestLogin}
            className="login-button"
          >
            Login as Guest
          </Button>

          <Typography variant="body2" sx={{ mt: 2 }}>
            Not a member?
            <Button 
              sx={{ textTransform: "none", fontSize: "14px" }} 
              onClick={handleSignupRedirect} 
            >
              Sign Up Now!
            </Button>
          </Typography>
        </form>
      </div>
    </Container>
  );
};

export default Login;
