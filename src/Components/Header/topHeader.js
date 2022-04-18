import { Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import BasketBadge from 'Components/HeaderAction/BasketBadge';
import MultiLang from 'Components/HeaderAction/MultiLang';
import PhoneIcon from '@mui/icons-material/Phone';
import Box from '@mui/material/Box';

const TopHeader = () => {
  return (
    <Toolbar
      sx={{
        display: 'felx',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box display="flex" gap={5}>
        <BasketBadge badgeCount={0} />
        <MultiLang />
      </Box>
      <Box display="flex" gap={5}>
        <Typography>order without internet</Typography>
        <a href="tel:12345">
          <Box display="flex" alignItems="center" fontWeight="bolder">
            <PhoneIcon />
            12345
          </Box>
        </a>
      </Box>
    </Toolbar>
  );
};

export default TopHeader;
