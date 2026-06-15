import { Box, Paper } from "@mui/material";
import Image from "next/image";

const LayoutAuth = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f6efe3",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--fonts-shabnam)",
        p: {
          xs: 2,
          sm: 3,
          md: 4,
        },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: {
            xs: "100%",
            sm: "80%",
            md: "50%",
            lg: "35%",
          },
          maxWidth: "500px",
          minHeight: {
            xs: "auto",
            sm: "400px",
            md: "450px",
            lg: "500px",
          },
          borderRadius: {
            xs: "16px",
            sm: "20px",
            md: "24px",
          },
          p: {
            xs: 3,
            sm: 4,
            md: 5,
          },
          textAlign: "center",
        }}
      >
        <Image
          src="/img/logo.png"
          alt="Logo"
          width={160}
          height={60}
          style={{
            marginBottom: 20,
            maxWidth: "100%",
            height: "auto",
          }}
        />

        {children}
      </Paper>
    </Box>
  );
};

export default LayoutAuth;
