import React, { useState } from "react";
import { Button, Grid, Typography, Paper, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MedicationIcon from "@mui/icons-material/Medication";
import background from "../assests/wallpaper.png";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import timer from "../assests/timer.png";
import img from "../assests/capsuleindiv.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Phone from "../assests/phone.png";
import phonereminder from "../assests/phonereminder.png";
import track from "../assests/track.jpg";
import logo from "../assests/logo.png";
import Checkbox from "@mui/material/Checkbox";
import { Facebook, Twitter, Instagram } from "lucide-react";
import "../Home/style.css";
const images = [
  {
    url: background,
    title: "Get Started!",
    width: "100%",
    height: "100%",
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleAddMedication = () => {
    navigate("/medication");
  };

  const handleViewMedications = () => {
    navigate("/history");
  };

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    height: 700,
    width: "100%",
    borderRadius: "30px",
    overflow: "hidden",

    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      height: 250,
      borderRadius: "20px",
    },
    "&:hover, &.Mui-focusVisible": {
      zIndex: 1,
      "& .MuiImageBackdrop-root": {
        opacity: 0.15,
      },
      "& .MuiImageMarked-root": {
        opacity: 0,
      },
      "& .MuiTypography-root": {
        border: "4px solid currentColor",
      },
    },
  }));

  const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "30px",
  });

  const Image = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  }));

  const ImageBackdrop = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
    borderRadius: "30px",
  }));

  const ImageMarked = styled("span")(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  }));

  return (
    <div>
      {/* firstdiv */}
      <div
        style={{
          marginTop: "5px",
          marginRight: "30px",
        }}
        className="maindiv"
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Column on mobile, row on larger screens
            justifyContent: "center",
            alignItems: "center",
            marginLeft: { xs: "20px", md: "60px" }, // Smaller margin on mobile
          }}
          className="imagebutton"
        >
          <ImageButton
            focusRipple
            key={images[0].title}
            style={{ width: images[0].width }}
            onClick={() => navigate("/medication")}
          >
            <ImageSrc style={{ backgroundImage: `url(${images[0].url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={(theme) => ({
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: `calc(${theme.spacing(1)} + 6px)`,
                })}
              >
                {images[0].title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        </Box>

        <Box sx={{ flex: 1, marginTop: "30px" }}>
          {/* second div */}
          <div className="welcome-container">
            <div className="welcome-text">
              <h1>Welcome To The Medication Reminder!</h1>
              <p>
                This Reminder Helps You To Take The Right Medicine At The Right
                Time!
              </p>
            </div>
            <div className="welcome-description">
              <h2>
                "Stay on top of your health with a medication reminder! Never
                miss a dose and ensure proper treatment adherence for better
                health outcomes.
                <br />
                Perfect for managing chronic conditions, it helps maintain
                consistent schedules and prevents missed or incorrect doses.
                <br />
                Caregivers can also rely on it for peace of mind. Simplify your
                routine and take control of your well-being today!"
              </h2>
            </div>
          </div>

          <div className="image-container">
            <img src={timer} alt="Medication Timer" className="timer-image" />
          </div>
        </Box>

        {/* third div */}

        <div className="setdiv">
          {/* Heading */}
          <h1 className="set-title">
            SET A <br />
            <span className="set-span">TIMER!!</span>
          </h1>

          {/* Content Section */}
          <div className="set-content">
            <h2>
              Hurry Up! Click the button below to set your medication timings.
            </h2>
            <p>It will help you remember your medication schedule.</p>
            <Button variant="outlined" onClick={() => navigate("/medication")}>
              Medication
            </Button>
          </div>

          {/* Timer Image */}
          <img src={img} alt="capsule" className="set-image" />
        </div>

        {/* four div */}
        <div className="aboutdiv">
          <h1 className="about-title">
            AB<span style={{ color: "whitesmoke" }}>OUT</span>
          </h1>
          <div className="card-container">
            <Card className="about-card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={Phone}
                  alt="phone"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Medication
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Setting a reminder helps you to take medication at the right
                    time!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className="about-card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={track}
                  alt="history"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    History
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Track your medication history and stay updated with your
                    details.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className="about-card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={phonereminder}
                  alt="reminder"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Reminder
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This Medi-Reminder alerts you to take medicine on time!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>

        {/* fifth div */}
        <div className="footer-container">
      {/* Left Section - Logo & Contact */}
      <div className="footer-section">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="footer-logo" />
          <h1 className="footer-title">Medi-Reminder</h1>
        </div>
        <h1 className="footer-heading">CONTACT</h1>
        <p>+91 123-456-789</p>
        <p>medireminder@gmail.com</p>
        <p>© 2025 by Medication Reminder. Powered and secured</p>
      </div>

      {/* Middle Section - Features */}
      <div className="footer-section">
        <p>Medication</p>
        <p>Reminders</p>
        <p>Track</p>
        <p>History</p>
        <Button variant="outlined" className="footer-button">
          Get Started!
        </Button>
      </div>

      {/* Quick Links */}
      <div className="footer-section">
        <h1 className="footer-heading">Quick Links</h1>
        <a href="#" className="footer-link">Terms & Conditions</a>
        <a href="#" className="footer-link">Privacy Policy</a>
      </div>

      {/* Subscription Section */}
      <div className="footer-section">
        <h1 className="footer-heading">Follow</h1>
        <h2>Enter your email</h2>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          className="footer-input"
        />
        <Button variant="outlined" className="footer-button">
          submit
        </Button>
      </div>

      {/* Social Media Icons */}
      <div className="footer-section social-icons">
        <div className="social-item">
          <Facebook className="social-icon facebook" />
          <h1>Facebook</h1>
        </div>
        <div className="social-item">
          <Twitter className="social-icon twitter" />
          <h1>Twitter</h1>
        </div>
        <div className="social-item">
          <Instagram className="social-icon instagram" />
          <h1>Instagram</h1>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default HomePage;
