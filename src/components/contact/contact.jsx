import React, { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { Mail, Phone, Send } from "lucide-react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Box
      sx={{
        padding: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        
      }}
    >
      <Card sx={{ maxWidth: 600, width: "100%", borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            Contact Us
          </Typography>

          <Typography
            variant="body1"
            align="center"
            color="textSecondary"
            gutterBottom
          >
            Have questions about the Medication Reminder App? Get in touch!
          </Typography>

          {isSubmitted && (
            <Typography
              variant="body1"
              color="success.main"
              align="center"
              gutterBottom
            >
              Thank you for reaching out! We'll get back to you shortly.
            </Typography>
          )}

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  startIcon={<Send />}
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ marginTop: 4 }}>
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
              <Mail style={{ marginRight: 8 }} />
              <Typography variant="body1">sowmya@gmail.com</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Phone style={{ marginRight: 8 }} />
              <Typography variant="body1">+91 7995928853 </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ContactPage;
