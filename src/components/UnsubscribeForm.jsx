import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { validateEmail } from "../utils/validation";
import Spinner from "./Spinner";

const UnsubscribeForm = ({ onSuccess, onError }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  // Removed modal and navigation logic; handled by parent

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  // Mock API call to get user info (simulate with timeout)
  const mockUnsubscribeApi = (email) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mock: extract name from email for demo
        const name = email
          .split("@")[0]
          .replace(/\./g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase());
        resolve({ name: name || "User", subscriptionType: "Weekly" });
      }, 1000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required.");
      if (onError) onError("Email is required.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Invalid email address.");
      if (onError) onError("Invalid email address.");
      return;
    }
    setSubmitting(true);
    try {
      // Mock API call
      const user = await mockUnsubscribeApi(email);
      setSubmitting(false);
      setEmail("");
      if (onSuccess) {
        onSuccess(email, user);
      }
    } catch {
      setSubmitting(false);
      if (onError) onError("Failed to unsubscribe. Please try again.");
    }
  };

  return (
    <Card
      elevation={4}
      sx={{
        borderRadius: { xs: 2, sm: 4 },
        maxWidth: 420,
        width: { xs: "100%", sm: 420 },
        mx: { xs: 0, sm: "auto" },
        mt: { xs: 2, sm: 4 },
        boxShadow: 6,
        background: (theme) =>
          theme.palette.mode === "dark"
            ? theme.palette.grey[900]
            : theme.palette.background.paper,
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          align="center"
          sx={{
            mb: 2,
            fontWeight: 700,
            color: (theme) => theme.palette.primary.main,
            fontFamily: "Inter, Roboto, Arial, sans-serif",
            letterSpacing: 0.5,
          }}
        >
          Unsubscribe from Newsletter
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          aria-label="Unsubscribe from newsletter form"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Email Address"
            name="email"
            value={email}
            onChange={handleChange}
            error={!!error}
            helperText={error || "Enter your email to unsubscribe."}
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
              fontFamily: "Inter, Roboto, Arial, sans-serif",
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="warning"
            disabled={submitting}
            sx={{
              mt: 2,
              fontWeight: 700,
              fontSize: 16,
              borderRadius: 3,
              boxShadow: 3,
              fontFamily: "Inter, Roboto, Arial, sans-serif",
              transition: "background 0.2s, box-shadow 0.2s, transform 0.2s",
              background: "linear-gradient(90deg, #fbbf24 0%, #f87171 100%)",
              color: "#fff",
              "&:hover": {
                background: "linear-gradient(90deg, #f87171 0%, #fbbf24 100%)",
                boxShadow: 6,
                transform: "translateY(-2px) scale(1.03)",
              },
            }}
            aria-label="Unsubscribe from newsletter"
          >
            {submitting ? <Spinner /> : "Unsubscribe"}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );

  // unreachable code removed
};

export default UnsubscribeForm;
