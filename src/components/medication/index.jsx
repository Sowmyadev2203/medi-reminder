import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
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
  Paper,
  Typography,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Popup from "../popup/index";

const Medication = () => {
  const [medications, setMedications] = useState([
    {
      doseStrength: "",
      type: "",
      medicineName: "",
      medicationTime: dayjs(),
    },
  ]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [currentMedication, setCurrentMedication] = useState(null);
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
    navigate("/result", { state: { medications: updatedMedications } });
  };

  return (
    <>
      <Typography variant="h4" align="center" gutterBottom style={{fontFamily:"cursive"}} >
        Add Medication
      </Typography>
      <Grid container justifyContent="center" >
        <Grid item xs={12} sm={8} md={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <form onSubmit={handleSubmit}>
              <div>
                <Typography variant="h6" gutterBottom>
                  Medication Details
                </Typography>
                <Box
                  component="div"
                  sx={{ "& > :not(style)": { m: 2 } }}
                  noValidate
                  autoComplete="off"
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    {medications.map((medication, index) => (
                      <div key={index}>
                        <InputLabel htmlFor={`medicine-name-${index}`}>
                          Medicine Name
                        </InputLabel>
                        <Input
                          id={`medicine-name-${index}`}
                          placeholder="Enter a Medicine name"
                          value={medication.medicineName}
                          onChange={(e) => handleMedicineNameChange(index, e)}
                          sx={{ width: "100%" }}
                        />
                        <InputLabel htmlFor={`dose-strength-${index}`}>
                          Dose Strength
                        </InputLabel>
                        <Input
                          id={`dose-strength-${index}`}
                          placeholder="Enter Dose strength"
                          value={medication.doseStrength}
                          onChange={(e) => handleDoseStrengthChange(index, e)}
                          sx={{ width: "100%" }}
                        />
                        <FormControl
                          variant="standard"
                          sx={{ m: 2, minWidth: 120, width: "100%" }}
                        >
                          <InputLabel id={`select-type-${index}`}>Type</InputLabel>
                          <Select
                            labelId={`select-type-${index}`}
                            id={`select-type-${index}`}
                            value={medication.type}
                            onChange={(e) => handleTypeChange(index, e)}
                            label="Type"
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
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
                          sx={{ width: "100%" }}
                        />
                      </div>
                    ))}
                  </LocalizationProvider>

                  <Grid container justifyContent="center">
                    <IconButton color="dark" onClick={addMedication}>
                      <AddCircleIcon />
                    </IconButton>
                  </Grid>

                  <Grid container justifyContent="center" sx={{ mt: 2 }}>
                    <Button type="submit" variant="contained" style={{ backgroundColor: "black" }}>
                      Submit
                    </Button>
                  </Grid>
                </Box>
              </div>
            </form>
          </Paper>
        </Grid>
      </Grid>

      <Popup
        show={popupVisible}
        onHide={() => setPopupVisible(false)}
        medicationName={currentMedication?.medicineName || ""}
        medicationTime={currentMedication?.medicationTime?.format("DD MMM YYYY, hh:mm A") || ""}
      />
    </>
  );
};

export default Medication;