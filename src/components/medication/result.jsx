import React, { useState, useEffect } from "react";
import "../medication/result.css";
import { DateTimePicker } from "@mui/x-date-pickers";
import { useLocation } from "react-router-dom";
import {
  Typography,
  Box,
  Button,
  Grid,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import dayjs from "dayjs";
import Popup from "../popup/index";
import CapsuleLogo from "../assests/capsule.png";
import SyrupLogo from "../assests/syrup.png";
import InjectionLogo from "../assests/injection.png";
import InsulinLogo from "../assests/insuline.png";

function ResultPage() {
  const location = useLocation();
  const { medications: stateMedications } = location.state || {};

  const [medicationList, setMedicationList] = useState(() => {
    const storedMedications = localStorage.getItem("medications");
    return storedMedications
      ? JSON.parse(storedMedications).map((med) => ({
          ...med,
          medicationTime: dayjs(med.medicationTime), 
        }))
      : stateMedications
      ? stateMedications.map((med) => ({
          ...med,
          medicationTime: dayjs(med.medicationTime), 
        }))
      : [];
  });

  const [editIndex, setEditIndex] = useState(null);
  const [editedMedication, setEditedMedication] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const [selectedMedication, setSelectedMedication] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedType, setSelectedType] = useState(null); 

  useEffect(() => {
    localStorage.setItem("medications", JSON.stringify(medicationList));
  }, [medicationList]);

  useEffect(() => {
    const timers = [];

    medicationList.forEach((medication) => {
      const timeDifference = medication.medicationTime.diff(
        dayjs(),
        "millisecond"
      );

      if (timeDifference > 0) {
        const timer = setTimeout(() => {
          setSelectedMedication(medication.medicineName);
          setSelectedTime(
            medication.medicationTime.format("DD MMM YYYY, hh:mm A")
          );
          setSelectedType(medication.type); 
          setModalShow(true);
        }, timeDifference);
        timers.push(timer);
      }
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [medicationList]);

  const handleEdit = (index) => {
    const medicationToEdit = medicationList[index];
    setEditIndex(index);
    setEditedMedication({
      ...medicationToEdit,
      medicationTime: dayjs(medicationToEdit.medicationTime), 
    });
  };

  const handleSave = () => {
    const updatedMedications = [...medicationList];
    updatedMedications[editIndex] = editedMedication;
    setMedicationList(updatedMedications);
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    const updatedMedications = medicationList.filter((_, i) => i !== index);
    setMedicationList(updatedMedications);
  };

  const getMedicationLogo = (type) => {
    switch (type) {
      case "Capsule":
        return CapsuleLogo;
      case "Syrup":
        return SyrupLogo;
      case "Injection":
        return InjectionLogo;
      case "Insulin":
        return InsulinLogo;
      default:
        return null;
    }
  };

  if (!medicationList.length) {
    return (
      <Typography variant="h6" align="center" >
        No medications data found.
      </Typography>
    );
  }

  return (
    <Box sx={{ padding: 3 }} className="result-container" >
      <Typography variant="h4" align="center" gutterBottom style={{fontFamily:"cursive"}}>
        Submitted Medication Details
      </Typography>

      {medicationList.map((medication, index) => (
        <Box
          key={index}
          sx={{
            marginBottom: 2,
            backgroundColor: "aliceblue",
            padding: 2,
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "black",
            fontFamily:"cursive"
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={getMedicationLogo(medication.type)}
              alt={medication.type}
              style={{ width: 40, height: 40, marginRight: 10 }}
            />
            <Typography variant="h6" style={{fontFamily:"cursive"}}>Medicine {index + 1}</Typography>
          </Box>

          {editIndex === index ? (
            <Box >
              <FormControl
                variant="outlined"
                fullWidth
                sx={{ marginBottom: 2}}
              >
                <InputLabel id={`select-type-${index}`} >Type</InputLabel>
                <Select
                  labelId={`select-type-${index}`}
                  id={`select-type-edit-${index}`}
                  value={editedMedication.type || ""}
                  onChange={(e) =>
                    setEditedMedication({
                      ...editedMedication,
                      type: e.target.value,
                    })
                  }
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

              <TextField
                label="Edit Dose Strength"
                variant="outlined"
                size="small"
                value={editedMedication.doseStrength}
                onChange={(e) =>
                  setEditedMedication({
                    ...editedMedication,
                    doseStrength: e.target.value,
                  })
                }
                sx={{ width: "100%", marginBottom: 2 }}
              />

              <TextField
                label="Edit Medication Name"
                variant="outlined"
                size="small"
                value={editedMedication.medicineName}
                onChange={(e) =>
                  setEditedMedication({
                    ...editedMedication,
                    medicineName: e.target.value,
                  })
                }
                sx={{ width: "100%", marginBottom: 2 }}
              />

           
              <Grid container spacing={2} justifyContent="flex-start">
                <Grid item>
                  <Button variant="outlined" color="black" onClick={handleSave}>
                    Save
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="black"
                    onClick={() => setEditIndex(null)}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </Box>
          ) : (
            <Box sx={{ marginBottom: 1 }}>
              <Typography>
                <strong>Medication Name:</strong> {medication.medicineName}
              </Typography>
              <Typography>
                <strong>Type:</strong> {medication.type}
              </Typography>
              <Typography>
                <strong>Time:</strong>{" "}
                {medication.medicationTime.format("DD MMM YYYY, hh:mm A")}
              </Typography>

              <Typography>
                <strong>Dose Strength:</strong> {medication.doseStrength}
              </Typography>

              <Grid container spacing={2} justifyContent="flex-start">
                <Grid item>
                  <Button
                    variant="outlined"
                    color="dark"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="dark"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </Button>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      ))}

      <Popup
        show={modalShow}
        onHide={() => setModalShow(false)}
        medicationName={selectedMedication} 
        medicationTime={selectedTime} 
        medicationType={selectedType} 
      />
    </Box>
  );
}

export default ResultPage;
