import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../fbConfig";
import { Container, TextField, Button, Typography } from "@mui/material";
import "../signup/signup.css";

const Signup = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupMessage, setSignupMessage] = useState("");
  const [name, setName] = useState("");

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleInputFocus = (e) => {
    e.target.classList.add("input-active");
  };

  const handleInputBlur = (e) => {
    e.target.classList.remove("input-active");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setSignupMessage("Error:Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setSignupMessage("Error: Password must be at least 6 characters long.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const userDetails = {
        name,
        email,
        password,
      };
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
      setSignupMessage("Signup successful!");
      navigate("/", { replace: true });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setSignupMessage("Error:This email is already in use. Please use a different email.");
      } else {
        setSignupMessage("Error: Something went wrong. Please try again.");
      }
    }
  };

  return (
    <Container maxWidth="xs" className="signup-container">
      <div className="signup-box">
        <Typography variant="h4" gutterBottom>Sign Up</Typography>

        {signupMessage && (
          <Typography
            variant="body1"
            sx={{
              marginBottom: 2,
              color: signupMessage.startsWith("Error") ? "error.main" : "success.main",
            }}
          >
            {signupMessage}
          </Typography>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
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
            label="Email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
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
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
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
          <Button fullWidth variant="contained" color="primary" type="submit" sx={{ mt: 2 }} className="signup-button">
            Sign Up
          </Button>

          <Typography variant="body2" sx={{ mt: 2 }}>
            Already have an account?{" "}
            <Button sx={{ textTransform: "none", fontSize: "14px" }} onClick={() => navigate("/")}>
              Log in
            </Button>
          </Typography>
        </form>
      </div>
    </Container>
  );
};

export default Signup;
