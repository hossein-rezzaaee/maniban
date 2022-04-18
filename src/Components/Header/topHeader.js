import { Typography } from '@mui/material';
import BasketBadge from 'Components/HeaderAction/BasketBadge';
import MultiLang from 'Components/HeaderAction/MultiLang';
import PhoneIcon from '@mui/icons-material/Phone';
import Box from '@mui/material/Box';
import { langCtx } from 'App';
import { useContext } from 'react';
import { text } from 'Constants/text';

const TopHeader = () => {
  const { lang } = useContext(langCtx);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box display="flex" gap={5}>
        <BasketBadge badgeCount={0} />
        <MultiLang />
      </Box>
      <Box display="flex" gap={5}>
        <Typography>{text.header.orderPhone[lang]}</Typography>
        <a href="tel:12345">
          <Box
            component={Typography}
            display="flex"
            alignItems="center"
            fontWeight="bolder"
          >
            <PhoneIcon />
            12345
          </Box>
        </a>
      </Box>
    </Box>
  );
};

export default TopHeader;
