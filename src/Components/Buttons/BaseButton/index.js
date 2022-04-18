import { Button } from '@mui/material';
import React from 'react';

const Index = ({ children, ...props }) => {
  return (
    <Button variant="contained" {...props}>
      {children}
    </Button>
  );
};

export default Index;
