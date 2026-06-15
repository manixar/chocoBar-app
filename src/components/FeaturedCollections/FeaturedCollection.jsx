import { Box, Card, CardMedia, Typography } from "@mui/material";

export default function FeaturedCollection() {
  const items = [
    {
      title: "کیک های خاص",
      images: "/img/featured-collection/featured-cake.jpg",
      // bg: "#f5e1c8",
    },
    {
      title: "شکلات های دست ساز",
      images: "/img/featured-collection/featured-chocolate.jpg",
      // bg: "#f6d8e6",
    },
    {
      title: "کوکی های تازه",
      images: "/img/featured-collection/featured-cooki.jpg",
      // bg: "#d5b1b1",
    },
    {
      title: "بیسکوکیک",
      images: "/img/featured-collection/featured-biskocake.jpg",
      // bg: "#d5b1b1",
    },
  ];
  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Typography
        variant="h3"
        sx={{
          fontFamily: "var(--fonts-shabnam)",
          mb: 3,
          textAlign: "center",
          color: "#4b2c20",
        }}
      >
        خاص های چوکوبار
      </Typography>
      <Box sx={{ display: "flex", gap: 3, justifyContent: "center" }}>
        {items.map((item) => (
          <Card
            key={item.title}
            sx={{
              backgroundColor: item.bg,
              borderRadius: 4,
              width: 200,
              textAlign: "center",
              p: 2,
              boxShadow: 3,
            }}
          >
            <CardMedia
              component="img"
              src={item.images}
              alt={item.title}
              sx={{ borderRadius: 2, mb: 2 }}
            />
            <Typography
              variant="bocy2"
              sx={{
                fontFamily: "var(--fonts-shabnam)",
                color: "#4b2c20",
                whiteSpace: "nowrap",
              }}
            >
              {item.title}
            </Typography>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
