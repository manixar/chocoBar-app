import { Box, Card, CardMedia, IconButton, Typography } from "@mui/material";
import { useRef } from "react";
import ProductSlider from "../ProductSlider/ProductSlider";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styled from "styled-components";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useCart } from "../../context/CartContext";

const DetailButton = styled.button`
  width: 100%;
  border-radius: 40px;
  padding: 8px 16px;
  background: transparent;
  color: #4b2c20;
  font-weight: 600;
  text-transform: none;
  font-size: 13px;
  border: 1.5px solid #4b2c20;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;

  &:hover {
    background: #4b2c20;
    color: white;
    transform: translateY(-2px);
  }
`;

const BuyButton = styled.button`
  width: 100%;
  border-radius: 40px;
  padding: 8px 16px;
  background: #4b2c20;
  color: white;
  font-weight: 600;
  text-transform: none;
  font-size: 13px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  font-family: inherit;

  &:hover {
    background: #3a2218;
    gap: 10px;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(75, 44, 32, 0.3);
  }

  &:hover svg {
    transform: translateX(4px);
  }

  svg {
    transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
`;

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f5f5;
  border-radius: 40px;
  padding: 4px;
  gap: 8px;
  width: 100%;
`;

const QuantityButtonStyled = styled.button`
  background-color: #4b2c20;
  color: white;
  padding: 6px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  transition: all 0.2s;

  &:hover {
    background-color: #3a2218;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  svg {
    font-size: 16px;
  }
`;

const QuantityText = styled.span`
  font-weight: 600;
  font-size: 16px;
  min-width: 30px;
  text-align: center;
  color: #4b2c20;
`;
const QuantityButton = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <QuantityWrapper>
      <QuantityButtonStyled onClick={onDecrease} disabled={quantity === 0}>
        <RemoveIcon />
      </QuantityButtonStyled>
      <QuantityText>{quantity}</QuantityText>
      <QuantityButtonStyled onClick={onIncrease}>
        <AddIcon />
      </QuantityButtonStyled>
    </QuantityWrapper>
  );
};
export default function ProductsList() {
  const { addToCart, removeFromCart, getProductQuantity } = useCart();
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
    console.log("محصول", product, "اضافه شد");
    addToCart(product);
  };

  const handleDecrease = (id) => {
    console.log("محصول", id, "حذف شد");
    removeFromCart(id);
  };

  const handleDetailClick = (product) => {
    alert(`جزئیات محصول: ${product.title}\nقیمت: $${product.price}`);
  };

  return (
    <Box
      sx={{
        backgroundColor: "transparent",

        overflow: "hidden",
        mt: 15,
        mb: 10,
        py: 6,
        px: { xs: 2, sm: 4, md: 8 },
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
          flexWrap: "wrap",
          gap: 2,
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton
            onClick={() => sliderRef.current?.handleScroll("left")}
            sx={{
              p: 1.5,
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
              p: 1.5,
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
        <Typography
          variant="h4"
          sx={{
            color: "#4b2c20",
            fontWeight: "bold",
          }}
        >
          چوکوبار امروز چی پخته؟
        </Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "50%",
          bottom: 0,
          background: "linear-gradient(180deg, #d8a178 0%, #c98d63 100%)",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          display: "flex",
          overflow: "auto",
          pb: 2,
          position: "relative",
          zIndex: 1,
          "&::-webkit-scrollbar": { height: "6px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#4b2c20",
            borderRadius: 6,
          },
        }}
      >
        <ProductSlider ref={sliderRef}>
          {bestSellers.map((item) => {
            const quantity = getProductQuantity(item.id);
            return (
              <Card
                key={item.id}
                sx={{
                  minWidth: { xs: 260, sm: 280 },
                  p: 2.5,
                  borderRadius: 3,
                  flexShrink: 0,
                  backgroundColor: "rgba(255,255,255,0.35)",
                  // border: "1px solid",
                  boxShadow: "0 2px 12px rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <CardMedia
                  sx={{
                    height: 190,
                    width: "100%",
                    objectFit: "cover",
                    mb: 2,
                    borderRadius: 2,
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
                    color: "#2d2d2d",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "gray", mb: 2 }}>
                  {item.price}
                </Typography>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
                >
                  <DetailButton
                    onClick={() => handleDetailClick(item)}
                    sx={{ color: "#4b2c20" }}
                    fullWidth
                    variant="outlined"
                  >
                    <Typography variant="caption">جزئیات محصول</Typography>
                  </DetailButton>
                  {quantity > 0 ? (
                    <QuantityButton
                      quantity={quantity}
                      onIncrease={() => handleIncrease(item)}
                      onDecrease={() => handleDecrease(item.id)}
                    />
                  ) : (
                    <BuyButton
                      fullWidth
                      variant="contained"
                      onClick={() => handleIncrease(item)}
                    >
                      <Typography variant="caption">میخرم</Typography>
                    </BuyButton>
                  )}
                </Box>
              </Card>
            );
          })}
        </ProductSlider>
      </Box>
    </Box>
  );
}
