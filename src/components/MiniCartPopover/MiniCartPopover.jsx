"use client"
import * from 'react';
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteOutIcon from '@mui/icons-material/DeleteOutlined';
import RemoveIcon from '@mui/icons-material/RemoveOutlined';
import AddIcon from '@mui/icons-material/AddOutlined';
import { useCart } from '@/context/CartContext';


export default function MiniCartPopover({open , anchorEl, onClose,onContinueShopping,onCheckout}) {
    const {
        cartItem,
        cartCount,
        addToCart,
        removeFromCart,
        deleteFromCart,
        clearCart,
    } = useCart();

    //MOHASEBE JAM KOLLE PRICE


  return (

  );
}
