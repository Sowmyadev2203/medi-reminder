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
      <div
        style={{
          marginTop: "5px",
          marginRight: "50px",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "60px",
          }}
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
          <div
            style={{
              backgroundColor: "white",
              height: "100%",
              width: "96%",
              marginLeft: "55px",
              color: "black",
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              justifyContent: "space-around",
              padding: "100px",
              borderRadius: "30px",
            }}
          >
            <h1
              style={{
                fontSize: "30px",
                fontFamily: "cursive",
                textEmphasis: "Highlight",
              }}
            >
              Welcome To The Medication reminder! <br></br>This Reminder Helps
              You To take A Right Medicine <br></br>At A Right Time!
            </h1>
            <h2>
              "Stay on top of your health with a medication reminder!<br></br>{" "}
              Never miss a dose and ensure proper treatment adherence for better
              health outcomes.<br></br> Perfect for managing chronic conditions,
              <br></br> it helps maintain consistent schedules and prevents
              missed or incorrect doses.<br></br> Caregivers can also rely on it
              for peace of mind. Simplify your routine and take control of your
              well-being today!"
            </h2>
          </div>
          <div
            style={{
              backgroundColor: "white",
              height: "100%",
              width: "96%",
              marginLeft: "55px",
              borderRadius: "30px",
            }}
          >
            <img src={timer} alt="timer" style={{ borderRadius: "30px" }} />
          </div>

          <div
            style={{
              backgroundColor: "rgb(33, 30, 30)",
              height: "100%",
              width: "96%",
              marginLeft: "55px",
              borderRadius: "30px",
              marginTop: "10px",
              padding: "100px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <h1
              style={{
                color: "rgb(10, 133, 241)",
                fontFamily: "fantasy",
                fontPalette: "light",
                fontSize: "50px",
              }}
            >
              SET A <br></br>
              <span style={{ color: "whitesmoke" }}>TIMER!!</span>
            </h1>
            <div>
              <h2 style={{ fontFamily: "cursive" }}>
                Hurry Up! And Click on the button medication to set your
                medication timings<br></br> It will help you remember the
                medication you have set
              </h2>
              <br></br>
              <Button
                variant="outlined"
                onClick={() => navigate("/medication")}
              >
                Medication
              </Button>
            </div>
            <img src={img} style={{ height: "175px", borderRadius: "50px" }} />
          </div>

          <div
            style={{
              backgroundColor: "rgb(67, 61, 61)",
              height: "100%",
              width: "96%",
              marginLeft: "55px",
              borderRadius: "30px",
              marginTop: "10px",
              display: "flex",
              flexDirection: "row",
              gap: "5px",
              justifyContent: "space-evenly",
              padding: "50px",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                fontSize: "45px",
                fontFamily: "fantasy",
                color: "rgb(10, 133, 241)",
                marginTop: "200px",
              }}
            >
              AB<span style={{ color: "whitesmoke" }}>OUT</span>
            </h1>
            <Card
              sx={{
                maxWidth: 345,
                borderRadius: "30px",
                boxShadow: "0 3px 10px  rgba(245, 245, 245, 0.7)",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={Phone}
                  alt="phone"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Medication
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Setting a reminder helps you to remind the medication at a
                    right time!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card
              sx={{
                maxWidth: 345,
                borderRadius: "30px",
                boxShadow: "0 3px 10px rgba(245, 245, 245, 0.7)",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={track}
                  alt="image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    History
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    It also helps you to track the medication and shows the
                    history about you medication details
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card
              sx={{
                maxWidth: 345,
                borderRadius: "30px",
                boxShadow: "0 3px 10px rgba(245, 245, 245, 0.7)",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={phonereminder}
                  alt="phone"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Reminder
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    This Medi-Reminder alerts you to take a medicine in time!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>

          {/* last div */}
          <div
            style={{
              backgroundColor: "rgb(41, 39, 39)",
              padding: "55px",
              height: "100%",
              width: "96%",
              marginLeft: "55px",
              borderRadius: "30px",
              marginTop: "10px",
              fontFamily: "cursive",
              display: "flex",
              gap: "20px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ padding: "30px", flex: 1 }}>
              <img
                src={logo}
                alt="Logo"
                style={{
                  width: "50px",
                  height: "50px",
                  marginRight: "10px",
                  borderRadius: "30px",
                }}
              />
              <h1
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Medi-Reminder
              </h1>
              <br></br>

              <h1 style={{ fontSize: "30px", color: "white" }}>CONTACT</h1>
              <br></br>
              <p>+91 123-456-789</p>
              <p>medireminder@gmail.com</p>
              <p>
                © 2025 by Medication Reminder. <br></br>Powered and secured
              </p>
            </div>

            <div style={{ flex: 1, textAlign: "center" }}>
              <p>Medication</p>
              <p>Reminders</p>
              <p>Track</p>
              <p>History</p>
              <Button variant="outlined" style={{ marginTop: "10px" }}>
                Get Started !
              </Button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <h1>Quick Links</h1>
              <a
                href=""
                target="_blank"
                rel=""
                style={{ textDecoration: "underline" }}
              >
                Terms @ conditions
              </a>

              <a
                href=""
                target="_blank"
                rel=""
                style={{ textDecoration: "underline" }}
              >
                privacy policy
              </a>
            </div>

            <div
              style={{ display: "flex", gap: "20px", flexDirection: "column" }}
            >
              <h1>Follow</h1>
              <h2>Enter your email</h2>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                sx={{
                  input: { color: "whitesmoke" },
                  label: { color: "whitesmoke" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "whitesmoke" },
                    "&:hover fieldset": { borderColor: "lightgray" },
                    "&.Mui-focused fieldset": { borderColor: "white" },
                  },
                }}
              />
              <Button
                variant="outlined"
                style={{
                  marginTop: "10px",
                  color: "whitesmoke",
                  outlineColor: "whitesmoke",
                }}
              >
                Get Started !
              </Button>
            </div>

            <div style={{ padding: "60px" }}>
              <div className="p-16 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Facebook className="w-6 h-6 text-blue-600" />
                  <h1>Facebook</h1>
                </div>
                <div className="flex items-center gap-2">
                  <Twitter className="w-6 h-6 text-blue-400" />
                  <h1>Twitter</h1>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram className="w-6 h-6 text-pink-500" />
                  <h1>Instagram</h1>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default HomePage;
