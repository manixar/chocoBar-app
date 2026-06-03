"use client";
import React, { useMemo } from "react";
import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteOutIcon from "@mui/icons-material/DeleteOutlined";
import RemoveIcon from "@mui/icons-material/RemoveOutlined";
import AddIcon from "@mui/icons-material/AddOutlined";
import { useCart } from "@/context/CartContext";
import { Stack } from "@mui/material";

export default function MiniCartPopover({
  open,
  anchorEl,
  onClose,
  onContinueShopping,
  onCheckout,
}) {
  const {
    cartItems,
    cartCount,
    addToCart,
    removeFromCart,
    deleteFromCart,
    clearCart,
  } = useCart();

  //MOHASEBE JAM KOLLE PRICE
  const totalPrice = React.useMemo(() => {
    return cartItems.reduce((sum, item) => {
      const priceVal =
        typeof item.price === "string"
          ? item.price.replace(/,/g, "")
          : item.price;
      return sum + Number(priceVal || 0) * item.quantity;
    }, 0);
  }, [cartItems]);

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      PaperProps={{
        sx: {
          width: 350,
          borderRadius: 3,
          p: 2,
          direction: "rtl",
          mt: 1.5,
          boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
        },
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6" fontWeight="700">
          سبد خرید ({cartCount})
        </Typography>
        <IconButton onClick={() => clearCart()} size="small" color="default">
          <DeleteOutIcon fontSize="small" />
        </IconButton>
      </Stack>
      <Divider />
      <Box sx={{ maxHeight: 300, overflowY: "auto", py: 1 }}>
        {cartItems.length === 0 ? (
          <Typography textAlign="center" py={4} color="text.secondary">
            هنوز که چیزی نخریدی ☹️
          </Typography>
        ) : (
          cartItems.map((item) => (
            <Box key={item.id} sx={{ py: 2, borderBottom: "1px solid #eee" }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box sx={{ flexGrow: 1, textAlign: "right" }}>
                  <Typography fontWeight="600" variant="body1">
                    {item.name || item.title}
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    {Number(item.price).toLocaleString()}تومان
                  </Typography>
                </Box>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{
                    border: "1px solid #b08b63",
                    borderRadius: 10,
                    px: 0.5,
                    py: 0.2,
                  }}
                >
                  <IconButton
                    onClick={() => addToCart(item)}
                    size="small"
                    sx={{ color: "#b08b63" }}
                  >
                    <AddIcon fontSize="small" />
                  </IconButton>
                  <Typography fontWeight="bold">{item.quantity}</Typography>
                  <IconButton
                    size="small"
                    onClick={() => removeFromCart(item.id)}
                    sx={{ color: "#b08b63" }}
                  >
                    <RemoveIcon fontSize="small" />
                  </IconButton>
                </Stack>
              </Stack>
            </Box>
          ))
        )}
      </Box>
      <Box sx={{ pt: 2 }}>
        <Stack direction="row" mb={2} justifyContent="space-between">
          <Typography fontWeight="600">هزینه کل</Typography>
          <Typography fontWeight="700" variant="h6">
            {totalPrice.toLocaleString()}تومان
          </Typography>
        </Stack>
        <Typography
          textAlign="center"
          color="#b08b63"
          fontWeight="600"
          sx={{ cursor: "pointer", mb: 2 }}
        >
          کد تخفیف داری؟
        </Typography>
        <Button
          fullWidth
          variant="contained"
          size="large"
          onClick={() => {
            onCkeckout();
            onClose();
          }}
          sx={{
            bgcolor: "#b08b63",
            borderRadius: 2,
            py: 1.5,
            fontSize: "1rem",
            "&:hover": { bgcolor: "#8e6d4a" },
          }}
        >
          تکمیل سفارش
        </Button>
      </Box>
    </Popover>
  );
}
