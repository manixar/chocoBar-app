import { Box, Button, Card, CardMedia, Typography } from "@mui/material";

export default function ProductsList() {
  const bestSellers = [
    {
      title: "محصول ۱",
      price: "۱,۳۴۰,۰۰۰",
      image: "/img/products-card/cake-1.jpeg",
    },
    {
      title: "محصول ۲",
      price: "۱,۳۴۰,۰۰۰",
      image: "/img/products-card/chocolate-1.png",
    },
    {
      title: "محصول ۳",
      price: "۱,۳۴۰,۰۰۰",
      image: "/img/products-card/kooki-1.jpg",
    },
    {
      title: "محصول ۴",
      price: "۱,۳۴۰,۰۰۰",
      image: "/img/products-card/chocolate-2.jpg",
    },
    {
      title: "محصول ۵",
      price: "۱,۳۴۰,۰۰۰",
      image: "/img/products-card/kooki-2.jpg",
    },
    {
      title: "محصول ۶",
      price: "۱,۳۴۰,۰۰۰",
      image: "/img/products-card/cake-3.jpeg",
    },
    {
      title: "محصول ۷",
      price: "۱,۳۴۰,۰۰۰",
      image: "/img/products-card/cake-2.webp",
    },
    {
      title: "محصول ۸",
      price: "۱,۳۴۰,۰۰۰",
      image: "/img/products-card/chocolate-2.jpg",
    },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        overflow: "hidden",
        mt: 10,
        mb: 10,
        pt: 6,
        pb: 8,
        position: "relative",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          textAlign: "center",
          color: "#4b2c20",
          fontFamily: "var(--font-shabnam)",
          position: "relative",
          zIndex: 2,
        }}
      >
        چوکوبار امروز چی پخته؟
      </Typography>

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
        {bestSellers.map((item) => (
          <Card
            key={item.title}
            sx={{
              minWidth: 250,
              p: 2,
              borderRadius: 3,
              background: "rgba(255, 255, 255, 0.45)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.4)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                background: "rgba(255, 255, 255, 0.55)",
              },
            }}
          >
            <CardMedia
              component="img"
              src={item.image}
              alt={item.title}
              sx={{ borderRadius: 3, mb: 2, objectFit: "cover", height: 190 }}
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
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#4b2c20",
                borderRadius: "20px",
                padding: "10px",
                "&:hover": { backgroundColor: "rgba(92,56,38,0.8)" },
              }}
            >
              <Typography variant="caption">افزودن به سبد خرید</Typography>{" "}
            </Button>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
