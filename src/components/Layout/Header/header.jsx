"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useRouter } from "next/router";

import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const menuItems = [
  "کیک",
  "شکلات",
  "کوکی",
  "سفارش شخصی",
  "راهنمای خرید",
  "تماس با ما",
  "درباره ما",
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius * 3,
  backgroundColor: alpha("#ffffff", 0.75),
  "&:hover": {
    backgroundColor: alpha("#ffffff", 0.95),
  },
  marginLeft: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(4),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // left padding for the search icon
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    fontSize: "16px",
    [theme.breakpoints.up("md")]: {
      width: "24ch",
    },
  },
}));

export default function Header() {
  const { totalItems } = useContext(CartContext);
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleGoHome = () => router.push("/home");
  const handleLogin = () => router.push("/login");
  const handleRegister = () => router.push("/register");
  const handleCart = () => router.push("/cart");

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "#f8e1c2",
        color: "#4b2c20",
        px: { xs: 1, sm: 3, md: 5 },
        py: 1,
      }}
      dir="rtl"
    >
      <Toolbar disableGutters sx={{ minHeight: 72 }}>
        <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
          <IconButton
            size="large"
            aria-label="open navigation"
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
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
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
            <MenuItem
              onClick={() => {
                handleCloseNavMenu();
                handleGoHome();
              }}
            >
              <Typography textAlign="center">صفحه اصلی</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">کیک ها</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">شکلات ها</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">کوکی ها</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">سفارش شخصی</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">تماس با ما</Typography>
            </MenuItem>
          </Menu>
        </Box>
        {/*<Image src="/img/logo.png" width={50} height={50} alt="Logo" />*/}
        <Typography
          variant="h6"
          noWrap
          onClick={handleGoHome}
          sx={{
            mr: 1,
            ml: 1,
            cursor: "pointer",
            fontWeight: 700,
            letterSpacing: ".08em",
            color: "#4b2c20",
            textTransform: "uppercase",
            fontSize: { xs: "0.5rem", sm: "1rem", md: "1.1rem" },
          }}
        >
          ChocoBar
        </Typography>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "#b08b63" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="دنبال چی میگردی؟"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 1,
            mr: 2,
            ml: 2,
          }}
        >
          {menuItems.map((item) => (
            <Button
              key={item}
              onClick={handleCloseNavMenu}
              sx={{
                fontFamily: "var(--font-shabnam)",
                color: "#4b2c20",
                textTransform: "none",
                fontWeight: 600,
                fontSize: "0.9rem",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "var(--font-shabnam)",
                  color: "#4b2c20",
                  fontSize: "16px",
                  whiteSpace: "nowrap",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {item}
              </Typography>
            </Button>
          ))}
        </Box>
        <Box
          sx={{
            flexGrow: 0,
            display: "flex",
            alignItems: "center",
            mr: { xs: 1, sm: 3 },
          }}
        >
          <IconButton color="inherit" onClick={handleCart} sx={{ ml: 0.5 }}>
            <Badge badgeContent={totalItems} color="error">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
