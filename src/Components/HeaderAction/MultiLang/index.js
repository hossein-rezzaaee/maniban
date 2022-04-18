import React, { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import LanguageIcon from '@mui/icons-material/Language';
import { Box, Menu, MenuItem } from '@mui/material';
import { langCtx } from 'App';

const MultiLang = () => {
  const lang = useContext(langCtx);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const openLang = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const changeLang = (val) => {
    if (val) lang.setLang(val);
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={openLang}>
        <Box display="flex">
          <Box>{lang.lang}</Box>

          <LanguageIcon />
        </Box>
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {['en', 'fa'].map((lg) => (
          <MenuItem key={lg} onClick={() => changeLang(lg)}>
            {lg}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MultiLang;
