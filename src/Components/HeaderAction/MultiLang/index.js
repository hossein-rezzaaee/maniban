import React from 'react';
import IconButton from '@mui/material/IconButton';
import LanguageIcon from '@mui/icons-material/Language';
import { Box } from '@mui/material';

const MultiLang = () => {
  return (
    <IconButton>
      <Box display="flex">
        <Box>EN</Box>
        <LanguageIcon />
      </Box>
    </IconButton>
  );
};

export default MultiLang;
