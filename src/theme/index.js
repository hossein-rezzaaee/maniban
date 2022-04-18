import { createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: '#fff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: '#202020',
          color: '#fff',
          borderRadius: '10px',
          border: '2px solid #fff',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#fff',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#fff',
        },
      },
    },
  },
});
