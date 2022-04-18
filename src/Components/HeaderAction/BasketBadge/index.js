import React from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Badge, Box } from '@mui/material';

const BasketBadge = ({ badgeCount = 0 }) => {
  return (
    <IconButton>
      <Box sx={{ position: 'relative' }}>
        <Badge badgeContent={badgeCount.toString()} color="secondary">
          <ShoppingBasketIcon />
        </Badge>
      </Box>
    </IconButton>
  );
};

export default BasketBadge;
