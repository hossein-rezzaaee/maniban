import React from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Box } from '@mui/material';

const BasketBadge = ({ badgeCount = 0 }) => {
  return (
    <IconButton>
      <Box sx={{ position: 'relative' }}>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: '100%',
            background: 'red',
            fontSize: '0.5em',
            padding: '5px',
            borderRadius: '50%',
            lineHeight: 0.5,
          }}
        >
          {badgeCount}
        </Box>
        <ShoppingBasketIcon />
      </Box>
    </IconButton>
  );
};

export default BasketBadge;
