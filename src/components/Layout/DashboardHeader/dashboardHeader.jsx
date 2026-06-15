"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { useRouter } from "next/router";

const menuItems = ["درباره ما", "سفارش شخصی", "پرفروش ها", "شکلات", "کیک"];

export default function DashboardHeader() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const router = useRouter();
  const handleGoHome = () => router.push("/home");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        fontFamily: "Shabnam",
        bgcolor: "#f8e1c2",
        color: "#4b2c20",
        px: { xs: 2, md: 5 },
        py: 0.5,
      }}
    >
      <Toolbar
        disableGutters
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/*<Image*/}
          {/*    src="/img/logo.png"*/}
          {/*    width={45}*/}
          {/*    height={45}*/}
          {/*    alt="Logo"*/}
          {/*    style={{ cursor: "pointer" }}*/}
          {/*/>*/}
          <Typography
            variant="h6"
            noWrap
            onClick={handleGoHome}
            sx={{
              mr: 2,
              cursor: "pointer",
              fontWeight: 400,
              letterSpacing: ".08em",
              color: "#4b2c20",
              textTransform: "uppercase",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            }}
          >
            ChocoBar
          </Typography>
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, mr: 10 }}>
          {menuItems.map((item) => (
            <Button
              key={item}
              onClick={handleCloseNavMenu}
              sx={{
                fontFamily: "var(--fonts-shabnam)",
                color: "#4b2c20",
                textTransform: "none",
                fontWeight: 600,
                fontSize: "0.9rem",
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontFamily: "var(--fonts-shabnam)", color: "#4b2c20" }}
              >
                {item}
              </Typography>
            </Button>
          ))}
        </Box>

        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="menu"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            dir={"rtl"}
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            sx={{
              display: { xs: "block", md: "none" },
              "&:MuiPaper-root": {
                direction: "rtl",
                minWidth: 220,
                borderRadius: 3,
                mt: 1,
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                overflow: "hidden",
              },
              "& .MuiMenuItem-root": {
                justifyContent: "flex-start",
                textAlign: "right",
                py: 1.5,
                px: 2,
                fontSize: "0.85rem",
                gap: 1,
              },
            }}
          >
            {menuItems.map((item) => (
              <MenuItem key={item} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{item}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
