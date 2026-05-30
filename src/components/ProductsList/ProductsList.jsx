import {
  Box,
  Button,
  Card,
  CardMedia,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { useContext, useRef } from "react";
import { CartContext } from "@/context/CartContext";
import ProductSlider from "../ProductSlider/ProductSlider";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styled from "styled-components";

const DetailButton = styled(Button)(({ theme }) => ({
  borderRadius: "40px",
  padding: "8px 16px",
  background: "transparent",
  color: "#4b2c20",
  fontWeight: "600",
  textTransform: "none",
  fontSize: "14px",
  border: "1px solid #4b2c20",
  transition: "all 0.1s ease",
  "&:hover": {
    background: "#4b2c20",
    color: "white",
    border: "1.5px solid #4b2c20",
  },
}));

const BuyButton = styled(Button)(({ theme }) => ({
  borderRadius: "40px",
  padding: "8px 16px",
  background: "#4b2c20",
  color: "white",
  fontWeight: 600,
  textTransform: "none",
  fontSize: "13px",
  gap: "6px",
  transition: "all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  "&:hover": {
    background: "#3a2218",
    gap: "10px",
    boxShadow: "0 4px 12px rgba(75, 44, 32, 0.3)",
    "& .MuiButton-endIcon": {
      transform: "translateX(4px)",
    },
  },
  "& .MuiButton-endIcon": {
    transition: "transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  },
}));

export default function ProductsList() {
  const theme = useTheme();
  const { addToCart } = useContext(CartContext);
  const sliderRef = useRef();
  const bestSellers = [
    {
      id: 1,
      title: "محصول ۱",
      price: "۱,۳۴۰,۰۰۰",
      image: "/img/products-card/cake-1.jpeg",
    },
    {
      id: 2,
      title: "محصول ۲",
      price: "۱,۳۴۰,۰۰۰",
      image: "/img/products-card/chocolate-1.png",
    },
    {
      id: 3,
      title: "محصول ۳",
      price: "۱,۳۴۰,۰۰۰",
      image: "/img/products-card/kooki-1.jpg",
    },

    {
      id: 4,
      title: "محصول ۴",
      price: "۱,۳۴۰,۰۰۰",
      image: "/img/products-card/kooki-2.jpg",
    },
    {
      id: 5,
      title: "محصول ۵",
      price: "۱,۳۴۰,۰۰۰",
      image: "/img/products-card/cake-3.jpeg",
    },
    {
      id: 6,
      title: "محصول ۶",
      price: "۱,۳۴۰,۰۰۰",
      image: "/img/products-card/cake-2.webp",
    },
    {
      id: 7,
      title: "محصول ۷",
      price: "۱,۳۴۰,۰۰۰",
      image: "/img/products-card/cake-1.jpeg",
    },
    {
      id: 8,
      title: "محصول ۸",
      price: "۱,۳۴۰,۰۰۰",
      image: "/img/products-card/chocolate-1.png",
    },
    {
      id: 9,
      title: "محصول ۹",
      price: "۱,۳۴۰,۰۰۰",
      image: "/img/products-card/kooki-1.jpg",
    },

    {
      id: 10,
      title: "محصول ۱۰",
      price: "۱,۳۴۰,۰۰۰",
      image: "/img/products-card/kooki-2.jpg",
    },
  ];

  const handleIncrease = (product) => {
    console.log("افزودن محصول", product);
    addToCart(product);
  };

  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        overflow: "hidden",
        mt: 15,
        mb: 10,
        pt: 6,
        pb: 8,
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 5,
            textAlign: "center",
            color: "#4b2c20",
            fontFamily: "var(--font-shabnam)",
            position: "relative",
            zIndex: 2,
          }}
        >
          چوکوبار امروز چی پخته؟
        </Typography>

        <IconButton
          onClick={() => sliderRef.current?.handleScroll("left")}
          sx={{
            p: 2,
            m: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(233, 150, 122, 0.5)",
            "&:hover": {
              backgroundColor: "#4b2c20",
              color: "#fff",
            },
          }}
        >
          <ArrowBackIosIcon sx={{ fontSize: "19px" }} />
        </IconButton>
        <IconButton
          onClick={() => sliderRef.current?.handleScroll("right")}
          sx={{
            p: 2,
            m: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(233, 150, 122, 0.5)",
            "&:hover": {
              backgroundColor: "#4b2c20",
              color: "#fff",
            },
          }}
        >
          <ArrowForwardIosIcon sx={{ fontSize: "19px" }} />
        </IconButton>
      </Box>

      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "48%",
          bottom: 0,
          background: "linear-gradient(180deg, #d8a178 0%, #c98d63 100%)",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          display: "flex",
          overflow: "auto",
          pb: 3,
          gap: 3,
          "&::-webkit-scrollbar": { height: "8px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#4b2c20",
            borderRadius: 6,
          },
        }}
      >
        <ProductSlider ref={sliderRef}>
          {bestSellers.map((item) => (
            <Card
              key={item.title}
              sx={{
                minWidth: 230,
                p: 2,
                mt: 2,
                mb: 2,
                borderRadius: 4,
                flexShrink: 0,
                overflow: "hidden",
                background: "rgba(255, 255, 255, 0.16)",
                backdropFilter: "blur(22px)",
                WebkitBackdropFilter: "blur(22px)",
                border: "1px solid rgba(255, 255, 255, 0.24)",

                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",

                transition: "all 0.3s ease",
              }}
            >
              <CardMedia
                sx={{
                  height: 190,
                  width: "100%",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: 3,
                }}
                component="img"
                src={item.image}
                alt={item.title}
              />
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "var(--font-shabnam)",
                  fontWeight: "600",
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "gray", mb: 2 }}>
                <Typography variant="caption">{item.price}تومان</Typography>
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <DetailButton
                  sx={{ color: "#4b2c20" }}
                  fullWidth
                  variant="outlined"
                >
                  <Typography variant="caption">جزئیات محصول</Typography>
                </DetailButton>
                <BuyButton
                  fullWidth
                  variant="contained"
                  onClick={() => handleIncrease(item)}
                >
                  <Typography variant="caption">میخرم</Typography>
                </BuyButton>
              </Box>
            </Card>
          ))}
        </ProductSlider>
      </Box>
    </Box>
  );
}
