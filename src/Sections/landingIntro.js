import { Box, Typography } from '@mui/material';
import BaseButton from 'Components/Buttons/BaseButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useContext } from 'react';
import { langCtx } from 'App';
import { text } from 'Constants/text';

const LandingIntro = () => {
  const { lang } = useContext(langCtx);

  return (
    <>
      <Box
        sx={{
          py: '80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'primary.main',
        }}
      >
        <Typography variant="h3" sx={{ marginBottom: 3 }}>
          {text.sections.intro.title[lang]}
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 1 }}>
          {text.sections.intro.semiTitlte[lang]}
        </Typography>
        <Typography variant="p" sx={{ marginBottom: 4 }}>
          {text.sections.intro.parag[lang]}
        </Typography>
        <BaseButton endIcon={<ArrowForwardIcon />}>
          {text.sections.intro.btn[lang]}
        </BaseButton>
      </Box>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '200px',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {[1, 2, 3, 4].map((i) => (
          <Box
            key={i}
            sx={{
              ...((i === 2 || i === 3) && { transform: 'translateY(80px)' }),
            }}
          >
            <img
              src="https://www.freepnglogos.com/uploads/burger-png/burger-png-png-images-yellow-images-12.png"
              alt="logo"
              width="150"
            />
          </Box>
        ))}
        <Box
          sx={{
            position: 'absolute',
            bottom: '100px',
            width: '130%',
            height: '200px',
            left: '50%',
            transform: 'translateX(-50%)',
            bgcolor: 'primary.main',
            borderRadius: '70%',
            zIndex: -1,
          }}
        ></Box>
      </Box>
    </>
  );
};

export default LandingIntro;
