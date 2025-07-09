import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Typography, Button, Card, Fade, Grow } from "@mui/material";

const ThankYouPage = () => {
  const location = useLocation();
  const { name, preference, unsubscribed } = location.state || {};
  return (
    <Fade in timeout={700}>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: (theme) =>
            `linear-gradient(135deg, ${theme.palette.background.default} 60%, ${theme.palette.primary.light} 100%)`,
          px: 2,
        }}
      >
        {/* Animated butterfly SVGs */}
        <Box
          sx={{
            position: "absolute",
            left: 40,
            top: 60,
            zIndex: 10,
            pointerEvents: "none",
          }}
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            style={{ animation: "fly1 2.2s ease-in-out" }}
          >
            <path
              d="M12 2C10 6 6 8 2 8c4 0 8 2 10 6 2-4 6-6 10-6-4 0-8-2-10-6z"
              fill="#fbbf24"
            />
            <ellipse cx="12" cy="12" rx="2" ry="4" fill="#fff" opacity=".7" />
          </svg>
        </Box>
        <Box
          sx={{
            position: "absolute",
            right: 60,
            top: 100,
            zIndex: 10,
            pointerEvents: "none",
          }}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            style={{ animation: "fly2 2.3s 0.2s ease-in-out" }}
          >
            <path
              d="M12 2C14 6 18 8 22 8c-4 0-8 2-10 6-2-4-6-6-10-6 4 0 8-2 10-6z"
              fill="#7c3aed"
            />
            <ellipse cx="12" cy="12" rx="2" ry="4" fill="#fff" opacity=".7" />
          </svg>
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: 120,
            bottom: 80,
            zIndex: 10,
            pointerEvents: "none",
          }}
        >
          <svg
            width="54"
            height="54"
            viewBox="0 0 24 24"
            style={{ animation: "fly3 2.1s 0.4s ease-in-out" }}
          >
            <path
              d="M12 2C10 7 6 10 2 10c4 0 8 3 10 7 2-4 6-7 10-7-4 0-8-3-10-8z"
              fill="#f87171"
            />
            <ellipse cx="12" cy="12" rx="2" ry="4" fill="#fff" opacity=".7" />
          </svg>
        </Box>
        <Grow in timeout={900}>
          <Card
            elevation={4}
            sx={{
              width: { xs: "100%", sm: 480 },
              maxWidth: "100%",
              p: { xs: 2, sm: 4 },
              borderRadius: 4,
              boxShadow: 6,
              mb: 2,
              textAlign: "center",
              position: "relative",
              overflow: "visible",
            }}
          >
            {/* Animated confetti emoji */}
            <Box
              sx={{
                position: "absolute",
                top: -48,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 2,
              }}
            >
              <span
                role="img"
                aria-label="confetti"
                style={{
                  fontSize: 56,
                  animation: "pop 0.7s cubic-bezier(.68,-0.55,.27,1.55)",
                }}
              >
                🎉
              </span>
            </Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: (theme) => theme.palette.primary.main,
                animation: "fadeInUp 0.8s cubic-bezier(.68,-0.55,.27,1.55)",
              }}
            >
              {unsubscribed ? "Unsubscribed" : "Thank You for Subscribing!"}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 2,
                animation: "fadeInUp 1.1s cubic-bezier(.68,-0.55,.27,1.55)",
              }}
            >
              {unsubscribed
                ? `Goodbye${
                    name ? ", " + name : ""
                  }! You have been unsubscribed from our${
                    preference ? " " + preference : ""
                  } newsletter.`
                : `Thank you${
                    name ? ", " + name : ""
                  }! You are now subscribed to our${
                    preference ? " " + preference : ""
                  } newsletter. Check your inbox for updates.`}
            </Typography>
            <Button
              component={Link}
              to="/"
              variant="contained"
              color="primary"
              sx={{
                mt: 2,
                fontWeight: 700,
                fontSize: 18,
                borderRadius: 2,
                boxShadow: 2,
                animation: "fadeInUp 1.3s cubic-bezier(.68,-0.55,.27,1.55)",
              }}
            >
              Back to Home
            </Button>
            {/* Keyframes for pop, fadeInUp, and butterfly flight */}
            <style>{`
              @keyframes pop {
                0% { transform: scale(0.5) translateX(-50%); opacity: 0; }
                60% { transform: scale(1.2) translateX(-50%); opacity: 1; }
                100% { transform: scale(1) translateX(-50%); opacity: 1; }
              }
              @keyframes fadeInUp {
                0% { opacity: 0; transform: translateY(30px); }
                100% { opacity: 1; transform: translateY(0); }
              }
              @keyframes fly1 {
                0% { opacity: 0; transform: translateY(0) scale(0.7) rotate(-10deg); }
                10% { opacity: 1; }
                60% { opacity: 1; }
                100% { opacity: 0; transform: translateY(-60vh) translateX(30vw) scale(1.1) rotate(40deg); }
              }
              @keyframes fly2 {
                0% { opacity: 0; transform: translateY(0) scale(0.7) rotate(10deg); }
                10% { opacity: 1; }
                60% { opacity: 1; }
                100% { opacity: 0; transform: translateY(-70vh) translateX(-25vw) scale(1.1) rotate(-30deg); }
              }
              @keyframes fly3 {
                0% { opacity: 0; transform: translateY(0) scale(0.7) rotate(0deg); }
                10% { opacity: 1; }
                60% { opacity: 1; }
                100% { opacity: 0; transform: translateY(-80vh) translateX(10vw) scale(1.1) rotate(60deg); }
              }
            `}</style>
          </Card>
        </Grow>
      </Box>
    </Fade>
  );
};

export default ThankYouPage;
