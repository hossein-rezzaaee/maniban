import { Box } from '@mui/material';
import { langCtx } from 'App';
import HeaderList from 'Components/HeaderAction/HeaderList';
import { text } from 'Constants/text';
import { useContext } from 'react';

const HeaderMenu = () => {
  const { lang } = useContext(langCtx);

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box flex={1}>
        <HeaderList list={text.header.menu.left[lang]} />
      </Box>
      <Box flex={1} display="flex" justifyContent="center">
        <a href="/">
          <img
            src="https://haida.shop/wp-content/uploads/2020/04/logo-persian-haida.png"
            alt="logo"
            width="100"
          />
        </a>
      </Box>
      <Box flex={1} display="flex" justifyContent="flex-end">
        <HeaderList list={text.header.menu.right[lang]} />
      </Box>
    </Box>
  );
};

export default HeaderMenu;
