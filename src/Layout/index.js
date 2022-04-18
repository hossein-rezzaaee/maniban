import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import TopHeader from 'Components/Header/topHeader';
import HeaderMenu from 'Components/Header/headerMenu';
import { Container } from '@mui/material';

const Layout = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <TopHeader />
          <HeaderMenu />
        </Container>
      </AppBar>
    </Box>
  );
};

export default Layout;
