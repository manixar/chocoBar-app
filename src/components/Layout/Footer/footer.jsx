import { Grid, Typography, Link, Box, Container } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#3b2519", color: "#fff", py: 6 }}>
      <Container>
        <Grid container spacing={4} dir="rtl">
          <Grid item xs={12} md={4}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              درباره ما
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                underline="none"
                color="inherit"
                href="#"
                sx={{ fontSize: "14px" }}
              >
                آدرس ایمیل:
              </Link>
              <Link
                underline="none"
                color="inherit"
                href="#"
                sx={{ fontSize: "14px" }}
              >
                ساعت کاری:
              </Link>
              <Link
                underline="none"
                color="inherit"
                href="#"
                sx={{ fontSize: "14px" }}
              >
                آدرس:
              </Link>
              <Link
                underline="none"
                color="inherit"
                href="#"
                sx={{ fontSize: "14px" }}
              >
                شبکه های اجتماعی:
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              دسترسی سریع
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                underline="none"
                color="inherit"
                href="#"
                sx={{ fontSize: "14px" }}
              >
                پیگیری سفارش
              </Link>
              <Link
                underline="none"
                color="inherit"
                href="#"
                sx={{ fontSize: "14px" }}
              >
                سفارش شخصی
              </Link>
              <Link
                underline="none"
                color="inherit"
                href="#"
                sx={{ fontSize: "14px" }}
              >
                شکلات ها
              </Link>
              <Link
                underline="none"
                color="inherit"
                href="#"
                sx={{ fontSize: "14px" }}
              >
                مینی کیک
              </Link>
              <Link
                underline="none"
                color="inherit"
                href="#"
                sx={{ fontSize: "14px" }}
              >
                کوکی ها
              </Link>
              <Link
                underline="none"
                color="inherit"
                href="#"
                sx={{ fontSize: "14px" }}
              >
                کیک های تولدی و مناسبتی
              </Link>
              <Link
                underline="none"
                color="inherit"
                href="#"
                sx={{ fontSize: "14px" }}
              >
                نظرات
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              اطلاعات
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link
                underline="none"
                color="inherit"
                href="#"
                sx={{ fontSize: "14px" }}
              >
                {" "}
                راهنما و سوالات متداول
              </Link>
              <Link
                underline="none"
                color="inherit"
                href="#"
                sx={{ fontSize: "14px" }}
              >
                {" "}
                حریم خصوصی مشتری
              </Link>
              <Link
                underline="none"
                color="inherit"
                href="#"
                sx={{ fontSize: "14px" }}
              >
                {" "}
                نحوه سفارش کیک و شکلات
              </Link>
              <Link
                underline="none"
                color="inherit"
                href="#"
                sx={{ fontSize: "14px" }}
              >
                {" "}
                شرایط و قوانین
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
