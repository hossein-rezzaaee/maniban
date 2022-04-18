import { Box } from '@mui/material';
import HeaderList from 'Components/HeaderAction/HeaderList';

const HeaderMenu = () => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box flex={1}>
        <HeaderList
          list={[
            { title: 'management', link: '#' },
            { title: 'menu', link: '#' },
            { title: 'about us', link: '#' },
          ]}
        />
      </Box>
      <Box flex={1} display="flex" justifyContent="center">
        <img
          src="https://haida.shop/wp-content/uploads/2020/04/logo-persian-haida.png"
          alt="logo"
          width="100"
        />
      </Box>
      <Box flex={1} display="flex" justifyContent="flex-end">
        <HeaderList
          list={[
            { title: 'contact us', link: '#' },
            { title: 'profile', link: '#' },
          ]}
        />
      </Box>
    </Box>
  );
};

export default HeaderMenu;
