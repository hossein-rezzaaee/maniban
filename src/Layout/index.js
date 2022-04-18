import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import TopHeader from 'Components/Header/topHeader';
import HeaderMenu from 'Components/Header/headerMenu';

const Layout = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <TopHeader />
        <HeaderMenu />
      </AppBar>
    </Box>
  );
};

export default Layout;
