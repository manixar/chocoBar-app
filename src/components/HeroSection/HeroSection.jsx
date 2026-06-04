import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <Box
      dir="rtl"
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        minHeight: "100vh",
        overflow: "hidden",
        px: 6,
        //BACKGROUND
        backgroundImage: "url(/img/main-pic.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        //ON BACKGROUND
        "&:before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(216,185,185,0.09)",
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1, mb: 3 }}>
        <Typography
          component={motion.h3}
          variant="h3"
          sx={{
            fontFamily: "var(--font-shabnam)",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          تازه ترین هارو از ما بخواهید
        </Typography>
        <Button
          variant="contained"
          sx={{
            width: "120px",
            backgroundColor: "#fff",
            color: "#4b2c20",
            borderRadius: "25px",
            px: 4,
            py: 1,
            fontFamily: "var(--font-shabnam)",
            fontSize: 18,
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#f5e1c8",
            },
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          component={motion.button}
        >
          سفارش
        </Button>
      </Box>
    </Box>
  );
}
