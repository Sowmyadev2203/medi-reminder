import React, { useState, useEffect } from "react";
import { Button, Grid, Typography, Paper, List, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MedicationIcon from "@mui/icons-material/Medication";
import dayjs from "dayjs";

const HomePage = () => {
  const navigate = useNavigate();

  const [upcomingMedications, setUpcomingMedications] = useState([]);

  

  const handleAddMedication = () => {
    navigate("/medication");
  };

  const handleViewMedications = () => {
    navigate("/history");
  };

  return (
    <div>
      <Typography variant="h3" align="center" gutterBottom>
        Welcome to Medication Reminder
      </Typography>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: "2rem" }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3}
            style={{
              padding: "2rem",
              textAlign: "center",
              backgroundColor: "#e3f2fd",
            }}
          >
            <MedicationIcon color="primary" style={{ fontSize: 80 }} />
            <Typography variant="h5" gutterBottom>
              Add Medication
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddMedication}
            >
              Add Medication
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3}
            style={{
              padding: "2rem",
              textAlign: "center",
              backgroundColor: "#fce4ec",
            }}
          >
            <MedicationIcon color="secondary" style={{ fontSize: 80 }} />
            <Typography variant="h5" gutterBottom>
              View Medications
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleViewMedications}
            >
              View Medications
            </Button>
          </Paper>
        </Grid>
      </Grid>
     
    </div>
  );
};

export default HomePage;
