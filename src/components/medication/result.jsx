import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { IconButton } from "@mui/material";

import {
  Typography,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import dayjs from "dayjs";
import CapsuleLogo from "../assests/capsule.png";
import SyrupLogo from "../assests/syrup.png";
import InjectionLogo from "../assests/injection.png";
import InsulinLogo from "../assests/insuline.png";
import NoData from "../assests/nohistory.png";
import "../medication/result.css";

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
  const [originalMedication, setOriginalMedication] = useState({});

  useEffect(() => {
    localStorage.setItem("medications", JSON.stringify(medicationList));
  }, [medicationList]);

  const handleEdit = (index) => {
    setEditIndex(index);
    setOriginalMedication({ ...medicationList[index] });
    setEditedMedication({ ...medicationList[index] });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedMedication((prev) => ({
      ...prev,
      [name]: name === "medicationTime" ? dayjs(value) : value, // Ensure time format
    }));
  };

  const handleSave = () => {
    if (editIndex !== null) {
      const updatedMedications = [...medicationList];
      updatedMedications[editIndex] = {
        ...editedMedication,
        medicationTime: dayjs(editedMedication.medicationTime), // Ensure correct date format
      };

      setMedicationList(updatedMedications);
      setEditIndex(null); 
    }
  };

  const handleCancel = () => {
    setEditedMedication(originalMedication); // Restore original data
    setEditIndex(null); // Exit edit mode
  };

  const handleDelete = (index) => {
    setMedicationList(medicationList.filter((_, i) => i !== index));
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

  return (
    <Box sx={{ padding: 2 }}>
      {medicationList.length === 0 ? (
        <Box display="flex" justifyContent="center" flexDirection="column">
          <Typography variant="h6" textAlign="center" gutterBottom>
            No History Found!
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <img
              src={NoData}
              alt="No Data Available"
              style={{ height: "auto", marginTop: "-100px" }}
            />
          </div>
        </Box>
      ) : (
        <>
          <Typography variant="h4" align="center" gutterBottom>
            Submitted Medication Details
          </Typography>

          {/* Desktop View - Table */}
          <TableContainer component={Paper} sx={{ borderRadius: "20px", display: { xs: "none", md: "block" } }}>
            <Table>
              <TableHead sx={{ backgroundColor: "blueviolet" }}>
                <TableRow>
                  <TableCell sx={{ color: "whitesmoke" }}>Logo</TableCell>
                  <TableCell sx={{ color: "whitesmoke" }}>Medication Name</TableCell>
                  <TableCell sx={{ color: "whitesmoke" }}>Type</TableCell>
                  <TableCell sx={{ color: "whitesmoke" }}>Time</TableCell>
                  <TableCell sx={{ color: "whitesmoke" }}>Dose Strength</TableCell>
                  <TableCell sx={{ color: "whitesmoke" }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {medicationList.map((medication, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <img src={getMedicationLogo(medication.type)} alt={medication.type} style={{ width: 40, height: 40 }} />
                    </TableCell>
                    <TableCell>
                      {editIndex === index ? (
                        <TextField name="medicineName" value={editedMedication.medicineName} onChange={handleInputChange} />
                      ) : (
                        medication.medicineName
                      )}
                    </TableCell>
                    <TableCell>
                      {editIndex === index ? (
                        <FormControl>
                          <InputLabel>Type</InputLabel>
                          <Select name="type" value={editedMedication.type} onChange={handleInputChange}>
                            <MenuItem value="Capsule">Capsule</MenuItem>
                            <MenuItem value="Syrup">Syrup</MenuItem>
                            <MenuItem value="Injection">Injection</MenuItem>
                            <MenuItem value="Insulin">Insulin</MenuItem>
                          </Select>
                        </FormControl>
                      ) : (
                        medication.type
                      )}
                    </TableCell>
                    <TableCell>
                      {editIndex === index ? (
                        <TextField
                          name="medicationTime"
                          type="datetime-local"
                          value={editedMedication.medicationTime.format("YYYY-MM-DDTHH:mm")}
                          onChange={handleInputChange}
                        />
                      ) : (
                        medication.medicationTime.format("DD MMM YYYY, hh:mm A")
                      )}
                    </TableCell>
                    <TableCell>
                      {editIndex === index ? (
                        <TextField name="doseStrength" value={editedMedication.doseStrength} onChange={handleInputChange} />
                      ) : (
                        medication.doseStrength
                      )}
                    </TableCell>
                    <TableCell>
                      {editIndex === index ? (
                        <>
                        <Button onClick={handleSave} sx={{ color: "blue", mr: 1 , border:"1px solid blue" }}>Save</Button>
                        <Button onClick={handleCancel} sx={{ color: "red",border:"1px solid red" }}>Cancel</Button>
                      </>
                      ) : (
                        <>
                          <Button onClick={() => handleEdit(index)}  style={{color:"blue" , border:"1px blue solid"}}>
                            Edit
                          </Button>
                          <Button onClick={() => handleDelete(index)} style={{color:"red" , border:"1px red solid" , marginLeft:"5px"}}>
                           Delete 
                          </Button>
                        </>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>


          {/* Mobile View  */}
          <Grid container spacing={2} className="medication-container" sx={{ display: { xs: "block", md: "none" } }}>
  {medicationList.map((medication, index) => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
      <Card className="medication-card">
        <CardContent className="medication-content">
          {/* Medication Logo */}
          <img src={getMedicationLogo(medication.type)} alt={medication.type} className="medication-logo" />

          {/* Medication Details */}
          {editIndex === index ? (
            <div className="medication-details">
              <TextField
                name="medicineName"
                value={editedMedication.medicineName}
                onChange={handleInputChange}
                label="Medication Name"
                fullWidth
                margin="dense"
              />
              <FormControl fullWidth margin="dense">
                <InputLabel>Type</InputLabel>
                <Select name="type" value={editedMedication.type} onChange={handleInputChange}>
                  <MenuItem value="Capsule">Capsule</MenuItem>
                  <MenuItem value="Syrup">Syrup</MenuItem>
                  <MenuItem value="Injection">Injection</MenuItem>
                  <MenuItem value="Insulin">Insulin</MenuItem>
                </Select>
              </FormControl>
              <TextField
                name="medicationTime"
                type="datetime-local"
                value={editedMedication.medicationTime.format("YYYY-MM-DDTHH:mm")}
                onChange={handleInputChange}
                fullWidth
                margin="dense"
              />
              <TextField
                name="doseStrength"
                value={editedMedication.doseStrength}
                onChange={handleInputChange}
                label="Dose Strength"
                fullWidth
                margin="dense"
              />
            </div>
          ) : (
            <div className="medication-details">
              <Typography variant="body2" className="medication-name">{medication.medicineName}</Typography>
              <Typography variant="body2">Type: {medication.type}</Typography>
              <Typography variant="body2">Time: {medication.medicationTime.format("DD MMM YYYY, hh:mm A")}</Typography>
              <Typography variant="body2">Dose: {medication.doseStrength}</Typography>
            </div>
          )}

          {/* Action Buttons */}
          <div className="action-buttons">
            {editIndex === index ? (
              <>
                <IconButton onClick={handleSave} color="success">
                <SaveIcon />
                </IconButton>
                <IconButton onClick={handleCancel} color="error">
                <CancelIcon/>
                </IconButton>
              </>
            ) : (
              <>
                <IconButton onClick={() => handleEdit(index)} color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(index)} color="error">
                  <DeleteIcon />
                </IconButton>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>

        </>
      )}
    </Box>
  );
}

export default ResultPage;
