import { useRef, forwardRef, useImperativeHandle } from "react"; // forwardRef را اینجا اضافه کردیم
import { Box } from "@mui/material";

const ProductSlider = forwardRef(({ children }, ref) => {
  const scrollRef = useRef(null);

  useImperativeHandle(ref, () => ({
    handleScroll: (direction) => {
      const el = scrollRef.current;
      if (!el) return;
      const step = el.clientWidth * 0.1;
      el.scrollBy({
        left: direction === "left" ? -step : step,
        behavior: "smooth",
      });
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        gap: 3,
        overflowX: "auto",
        "&::-webkit-scrollbar": { display: "none" },
      }}
      ref={scrollRef}
    >
      {children}
    </Box>
  );
});

export default ProductSlider;
