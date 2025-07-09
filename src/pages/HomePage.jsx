import React, { useEffect } from "react";
import NewsletterForm from "../components/NewsletterForm";
import { Box, Typography, Card } from "@mui/material";

const HomePage = () => {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    // Prevent scrolling on the homepage
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        minHeight: 0,
        minWidth: 0,
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "center",
        background: "linear-gradient(90deg, #7c3aed 60%, #fbbf24 100%)",
        px: 0,
        py: 0,
        overflow: "hidden",
        zIndex: 1300,
      }}
    >
      {/* Decorative paper planes */}
      <Box
        sx={{
          position: "absolute",
          top: 40,
          left: 60,
          zIndex: 0,
          opacity: 0.13,
        }}
      >
        <span role="img" aria-label="plane" style={{ fontSize: 56 }}>
          🛩️
        </span>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 60,
          right: 80,
          zIndex: 0,
          opacity: 0.1,
        }}
      >
        <span role="img" aria-label="plane" style={{ fontSize: 40 }}>
          🛩️
        </span>
      </Box>
      {/* Left: Form Card */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
          minHeight: "100vh",
        }}
      >
        <Card
          elevation={8}
          sx={{
            width: 420,
            maxWidth: "90vw",
            borderRadius: 5,
            p: 4,
            background: "linear-gradient(135deg, #f87171 0%, #fbbf24 100%)",
            boxShadow: "0 8px 32px 0 rgba(125, 90, 255, 0.18)",
            mr: 6,
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: 900, mb: 2, color: "#fff", letterSpacing: 1 }}
          >
            Sign Up for Our Newsletter
          </Typography>
          <NewsletterForm />
        </Card>
      </Box>
      {/* Right: Illustration */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
          minHeight: "100vh",
        }}
      >
        {/* SVG illustration matching the style */}
        <Box sx={{ width: 440, height: 440, position: "relative" }}>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 440 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="220" cy="220" r="220" fill="#a5b4fc" />
            <rect
              x="120"
              y="180"
              width="200"
              height="140"
              rx="32"
              fill="#fff"
            />
            <polygon points="120,180 220,280 320,180" fill="#6366f1" />
            <rect
              x="160"
              y="100"
              width="120"
              height="100"
              rx="28"
              fill="#fde68a"
            />
            <polygon points="160,100 220,180 280,100" fill="#fbbf24" />
            <rect
              x="180"
              y="70"
              width="80"
              height="40"
              rx="16"
              fill="#fbbf24"
            />
            <polygon points="220,180 220,280 320,180" fill="#818cf8" />
            <polygon points="220,180 220,280 120,180" fill="#818cf8" />
            {/* Paper planes */}
            <polygon points="380,80 420,120 360,100" fill="#fff" />
            <polygon points="100,400 140,440 80,420" fill="#fff" />
          </svg>
          {/* Envelope icon overlay */}
          <Box sx={{ position: "absolute", top: 170, left: 190 }}>
            <span role="img" aria-label="envelope" style={{ fontSize: 80 }}>
              ✉️
            </span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
