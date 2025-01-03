import React, { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
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
  Grid2,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const ariaLabel = { "aria-label": "medication" };

function Medication() {
  const [value, setValue] = useState(dayjs());
  const [medications, setMedications] = useState([
    {
      doseStrength: "",
      type: "",
    },
  ]);

  // Handler for Type Change
  const handleTypeChange = (index, event) => {
    const newMedications = [...medications];
    newMedications[index].type = event.target.value;
    setMedications(newMedications);
  };

  // Handler for Dose Strength Change
  const handleDoseStrengthChange = (index, event) => {
    const newMedications = [...medications];
    newMedications[index].doseStrength = event.target.value;
    setMedications(newMedications);
  };

  // Add New Medication Field
  const addMedication = () => {
    setMedications([...medications, { doseStrength: "", type: "" }]);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted: " + JSON.stringify(medications, null, 2));
  };

  return (
    <>
      <Typography variant="h4" align="center" gutterBottom>
        Add Medication
      </Typography>
      <Grid2 container justifyContent="center">
        <Grid2 item xs={12} sm={8} md={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <form onSubmit={handleSubmit}>
              <div>
                {/* DateTime Picker */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={["DateTimePicker", "DateTimePicker"]}
                  >
                    <DateTimePicker
                      label="Date & Time"
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                      fullWidth
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>

              <div>
                <Typography variant="h6" gutterBottom>
                  Medication Details
                </Typography>
                <Box
                  component="form"
                  sx={{ "& > :not(style)": { m: 2 } }}
                  noValidate
                  autoComplete="off"
                >
                  {/* Render Multiple Medication Fields */}
                  {medications.map((medication, index) => (
                    <div key={index}>
                      <InputLabel htmlFor={`medicine-name-${index}`} fullWidth>
                        Medicine Name
                      </InputLabel>
                      <Input
                        id={`medicine-name-${index}`}
                        placeholder="Enter a Medicine name"
                        inputProps={ariaLabel}
                        fullWidth
                      />

                      <InputLabel htmlFor={`disease-name-${index}`} fullWidth>
                        Disease Name
                      </InputLabel>
                      <Input
                        id={`disease-name-${index}`}
                        placeholder="Enter a Disease name"
                        inputProps={ariaLabel}
                        fullWidth
                      />

                      {/* Dose Strength Input */}
                      <InputLabel htmlFor={`dose-strength-${index}`} fullWidth>
                        Dose Strength
                      </InputLabel>
                      <Input
                        id={`dose-strength-${index}`}
                        placeholder="Enter Dose strength"
                        value={medication.doseStrength}
                        onChange={(e) => handleDoseStrengthChange(index, e)}
                        inputProps={ariaLabel}
                        fullWidth
                      />

                      {/* Type Selection */}
                      <FormControl
                        variant="standard"
                        sx={{ m: 2, minWidth: 120 }}
                        fullWidth
                      >
                        <InputLabel id={`select-type-${index}`}>
                          Type
                        </InputLabel>
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
                          <MenuItem value={1}>Capsule</MenuItem>
                          <MenuItem value={2}>Insulin</MenuItem>
                          <MenuItem value={3}>Syrup</MenuItem>
                          <MenuItem value={4}>Injection</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  ))}

                  {/* Add New Medication Button */}
                  <Grid2 container justifyContent="center">
                    <IconButton color="dark" onClick={addMedication}>
                      <AddCircleIcon />
                    </IconButton>
                  </Grid2>

                  {/* Submit Button */}
                  <Grid2 container justifyContent="center" sx={{ mt: 2 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      onSubmit={handleSubmit}
                    >
                      Submit
                    </Button>
                  </Grid2>
                </Box>
              </div>
            </form>
          </Paper>
        </Grid2>
      </Grid2>
    </>
  );
}

export default Medication;
