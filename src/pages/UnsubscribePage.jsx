import React, { useState } from "react";
import UnsubscribeForm from "../components/UnsubscribeForm";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Card,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Alert,
} from "@mui/material";

const UnsubscribePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [subscriptionType, setSubscriptionType] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Handler to be passed to UnsubscribeForm
  const handleUnsubscribeSuccess = (email, user) => {
    setUserEmail(email);
    setUserName(user?.name || "User");
    setSubscriptionType(user?.subscriptionType || "");
    setOpen(true);
  };

  // Handler for error
  const handleUnsubscribeError = (msg) => {
    setErrorMsg(msg || "Something went wrong. Please try again.");
    setErrorOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUserEmail("");
    setUserName("");
    setSubscriptionType("");
  };

  const handleErrorClose = () => {
    setErrorOpen(false);
    setErrorMsg("");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(135deg, #fdf6e3 60%, #a5b4fc 100%)`,
        px: 2,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative floating hearts */}
      <Box
        sx={{
          position: "absolute",
          top: 30,
          left: 30,
          zIndex: 0,
          opacity: 0.18,
        }}
      >
        <span role="img" aria-label="heart" style={{ fontSize: 64 }}>
          💜
        </span>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 40,
          right: 40,
          zIndex: 0,
          opacity: 0.15,
        }}
      >
        <span role="img" aria-label="heart" style={{ fontSize: 48 }}>
          💖
        </span>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 80,
          right: 60,
          zIndex: 0,
          opacity: 0.12,
        }}
      >
        <span role="img" aria-label="star" style={{ fontSize: 40 }}>
          ⭐️
        </span>
      </Box>
      <Card
        elevation={8}
        sx={{
          width: isMobile ? "100%" : 480,
          maxWidth: "100%",
          p: isMobile ? 2 : 4,
          borderRadius: 6,
          boxShadow: "0 8px 32px 0 rgba(125, 90, 255, 0.18)",
          mb: 2,
          position: "relative",
          zIndex: 1,
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(2px)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 2,
          }}
        >
          <span
            role="img"
            aria-label="cute mail"
            style={{ fontSize: 48, marginBottom: 8 }}
          >
            📬
          </span>
          <Typography
            variant={isMobile ? "h5" : "h4"}
            align="center"
            sx={{ fontWeight: 900, mb: 1, color: "#7c3aed", letterSpacing: 1 }}
          >
            Unsubscribe
          </Typography>
        </Box>
        <UnsubscribeForm
          onSuccess={handleUnsubscribeSuccess}
          onError={handleUnsubscribeError}
        />
      </Card>
      <Typography
        variant="body2"
        align="center"
        sx={{ mt: 2, color: "#7c3aed", fontWeight: 500, zIndex: 1 }}
      >
        We value your privacy. You can re-subscribe at any time.
        <br />
        <span role="img" aria-label="sparkles">
          ✨
        </span>{" "}
        Thank you for being part of our community!{" "}
        <span role="img" aria-label="sparkles">
          ✨
        </span>
      </Typography>
      {/* Success Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Unsubscribed Successfully</DialogTitle>
        <DialogContent>
          <Typography>
            <span role="img" aria-label="bye" style={{ fontSize: 28 }}>
              👋
            </span>{" "}
            {userName
              ? `Goodbye, ${userName}! You have been unsubscribed from our ${subscriptionType} newsletter (${userEmail}).`
              : "You have been unsubscribed from our newsletter."}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      {/* Error Dialog */}
      <Dialog open={errorOpen} onClose={handleErrorClose}>
        <DialogTitle>Error</DialogTitle>
        <DialogContent>
          <Alert severity="error">{errorMsg}</Alert>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleErrorClose} variant="contained" color="error">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UnsubscribePage;
