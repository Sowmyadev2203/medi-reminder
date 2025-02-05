import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "../medication/style.css";
import {
  Box,
  Input,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Button,
  IconButton,
  Grid,
  Typography,
  Paper,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import medicationImage from "../assests/application.png"; // Make sure to add your image here

const Medication = () => {
  const [medications, setMedications] = useState([
    {
      doseStrength: "",
      type: "",
      medicineName: "",
      medicationTime: dayjs(),
    },
  ]);
  const navigate = useNavigate();

  const handleTypeChange = (index, event) => {
    const newMedications = [...medications];
    newMedications[index].type = event.target.value;
    setMedications(newMedications);
  };

  const handleMedicineNameChange = (index, event) => {
    const newMedications = [...medications];
    newMedications[index].medicineName = event.target.value;
    setMedications(newMedications);
  };

  const handleDoseStrengthChange = (index, event) => {
    const newMedications = [...medications];
    newMedications[index].doseStrength = event.target.value;
    setMedications(newMedications);
  };

  const addMedication = () => {
    setMedications([
      ...medications,
      { doseStrength: "", type: "", medicineName: "", medicationTime: dayjs() },
    ]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const existingMedications = JSON.parse(localStorage.getItem("medications")) || [];
    const updatedMedications = [...existingMedications, ...medications];
    localStorage.setItem("medications", JSON.stringify(updatedMedications));
    navigate("/history", { state: { medications: updatedMedications } });
  };

  return (
    <>
      
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontFamily: "cursive", color: "white", mt: 2 }}
        >
          Add Medication 
        </Typography>

        <Grid container justifyContent="center" spacing={2}  style={{marginTop:"40px"}}>
          {/* Form Section */}
          <Grid item xs={12} sm={10} md={6} className="container">
            <form onSubmit={handleSubmit} >
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: "white", fontFamily: "cursive", textAlign: "center" }}
              >
                Medication Details
              </Typography>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                {medications.map((medication, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: { xs: "100%", sm: "80%", md: "70%" },
                    }}
                    className="formcontainer"
                  >
                    <InputLabel htmlFor={`medicine-name-${index}`} sx={{ color: "white" }}>
                      Medicine Name
                    </InputLabel>
                    <Input
                      id={`medicine-name-${index}`}
                      placeholder="Enter Medicine Name"
                      value={medication.medicineName}
                      onChange={(e) => handleMedicineNameChange(index, e)}
                      fullWidth
                      sx={{ input: { color: "white" } }}
                    />

                    <InputLabel htmlFor={`dose-strength-${index}`} sx={{ color: "white", mt: 2 }}>
                      Dose Strength
                    </InputLabel>
                    <Input
                      id={`dose-strength-${index}`}
                      placeholder="Enter Dose Strength"
                      value={medication.doseStrength}
                      onChange={(e) => handleDoseStrengthChange(index, e)}
                      fullWidth
                      sx={{ input: { color: "white" } }}
                    />

                    <FormControl fullWidth sx={{ mt: 2 }}>
                      <InputLabel id={`select-type-${index}`} sx={{ color: "white" }}>
                        Type
                      </InputLabel>
                      <Select
                        labelId={`select-type-${index}`}
                        id={`select-type-${index}`}
                        value={medication.type}
                        onChange={(e) => handleTypeChange(index, e)}
                        sx={{ color: "white" }}
                        MenuProps={{
                          PaperProps: { sx: { backgroundColor: "#333", color: "white" } },
                        }}
                      >
                        <MenuItem value="Capsule">Capsule</MenuItem>
                        <MenuItem value="Insulin">Insulin</MenuItem>
                        <MenuItem value="Syrup">Syrup</MenuItem>
                        <MenuItem value="Injection">Injection</MenuItem>
                      </Select>
                    </FormControl>

                    <DateTimePicker
                      label="Medication Time"
                      value={medication.medicationTime}
                      onChange={(newValue) => {
                        const newMedications = [...medications];
                        newMedications[index].medicationTime = newValue;
                        setMedications(newMedications);
                      }}
                      sx={{ width: "100%", mt: 2 }}
                      slotProps={{
                        textField: {
                          sx: { input: { color: "white" }, label: { color: "white" } },
                        },
                      }}
                    />
                  </Box>
                ))}
              </LocalizationProvider>

              <Grid container justifyContent="center" sx={{ mt: 2 }}>
                <IconButton onClick={addMedication}>
                  <AddCircleIcon sx={{ color: "white", fontSize: "2rem" }} />
                </IconButton>
              </Grid>

              <Grid container justifyContent="center" sx={{ mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    width: { xs: "100%", sm: "50%" },
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </form>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} sm={10} md={4}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={medicationImage} 
                alt="Medication"
                style={{
                  marginLeft:"40px",
                  width:"80%"
                }}
              />
            </Box>
          </Grid>
        </Grid>
     
    </>
  );
};

export default Medication;
