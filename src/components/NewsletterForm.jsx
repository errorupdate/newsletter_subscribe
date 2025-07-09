import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  validateFullName,
  validateEmail,
  validatePreference,
} from "../utils/validation";
import Spinner from "./Spinner";
import ButterflyAnimation from "./ButterflyAnimation";

const initialState = {
  fullName: "",
  email: "",
  preference: "",
};

const NewsletterForm = () => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [showButterflies, setShowButterflies] = useState(false);
  const navigate = useNavigate();

  const validate = (field, value) => {
    switch (field) {
      case "fullName":
        if (!value) return "Full name is required.";
        if (!validateFullName(value)) return "Only letters and spaces allowed.";
        return "";
      case "email":
        if (!value) return "Email is required.";
        if (!validateEmail(value)) return "Invalid email address.";
        return "";
      case "preference":
        if (!validatePreference(value)) return "Please select a preference.";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  const isFormValid = () => {
    return (
      validate("fullName", values.fullName) === "" &&
      validate("email", values.email) === "" &&
      validate("preference", values.preference) === ""
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {
      fullName: validate("fullName", values.fullName),
      email: validate("email", values.email),
      preference: validate("preference", values.preference),
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some((err) => err)) return;
    setSubmitting(true);
    setShowButterflies(true);
    setTimeout(() => {
      setShowButterflies(false);
      setSubmitting(false);
      setValues(initialState);
      navigate("/thank-you", {
        state: { name: values.fullName, preference: values.preference },
      });
    }, 1800);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <ButterflyAnimation show={showButterflies} />
      <Card
        elevation={4}
        sx={{
          borderRadius: 4,
          maxWidth: 420,
          mx: "auto",
          mt: 4,
          boxShadow: 6,
          background: (theme) =>
            theme.palette.mode === "dark"
              ? theme.palette.grey[900]
              : theme.palette.background.paper,
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="h2"
            align="center"
            sx={{
              mb: 2,
              fontWeight: 700,
              color: (theme) => theme.palette.primary.main,
            }}
          >
            Sign Up for Our Newsletter
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            aria-label="Newsletter signup form"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              label="Full Name"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.fullName}
              helperText={
                errors.fullName ||
                "Enter your full name (letters and spaces only)"
              }
              autoComplete="off"
              required
              fullWidth
              inputProps={{ "aria-label": "Full Name" }}
              sx={{
                background: (theme) =>
                  theme.palette.mode === "dark"
                    ? theme.palette.grey[800]
                    : theme.palette.common.white,
                borderRadius: 2,
              }}
            />
            <TextField
              label="Email Address"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.email}
              helperText={errors.email || "We'll never share your email."}
              autoComplete="off"
              required
              fullWidth
              inputProps={{ "aria-label": "Email Address" }}
              sx={{
                background: (theme) =>
                  theme.palette.mode === "dark"
                    ? theme.palette.grey[800]
                    : theme.palette.common.white,
                borderRadius: 2,
              }}
            />
            <FormControl fullWidth error={!!errors.preference} required>
              <InputLabel id="preference-label">
                Subscription Preference
              </InputLabel>
              <Select
                labelId="preference-label"
                name="preference"
                value={values.preference}
                label="Subscription Preference"
                onChange={handleChange}
                onBlur={handleBlur}
                inputProps={{ "aria-label": "Subscription Preference" }}
                sx={{
                  background: (theme) =>
                    theme.palette.mode === "dark"
                      ? theme.palette.grey[800]
                      : theme.palette.common.white,
                  borderRadius: 2,
                }}
              >
                <MenuItem value="">
                  <em>Select...</em>
                </MenuItem>
                <MenuItem value="Weekly">Weekly</MenuItem>
                <MenuItem value="Monthly">Monthly</MenuItem>
              </Select>
              <FormHelperText>
                {errors.preference ||
                  "Choose how often you'd like to receive updates."}
              </FormHelperText>
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={!isFormValid() || submitting}
              sx={{
                mt: 2,
                fontWeight: 700,
                fontSize: 18,
                borderRadius: 2,
                boxShadow: 2,
                transition: "background 0.2s, transform 0.15s",
                "&:hover": {
                  background:
                    "linear-gradient(90deg, #7c3aed 0%, #fbbf24 100%)",
                  transform: "scale(1.04)",
                },
              }}
              aria-label="Subscribe to newsletter"
            >
              {submitting ? <Spinner /> : "Subscribe"}
            </Button>
            <Typography
              variant="body2"
              sx={{ mt: 2, color: "text.secondary", textAlign: "center" }}
            >
              We respect your privacy. Unsubscribe anytime.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default NewsletterForm;
