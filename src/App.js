import { ThemeProvider } from '@mui/material';
import Layout from 'Layout';
import React from 'react';
import LandingIntro from 'Sections/landingIntro';
import { theme } from 'theme';

export const langCtx = React.createContext();

function App() {
  const [lang, setLang] = React.useState('en');
  document.body.dir = lang === 'en' ? 'ltr' : 'rtl';
  return (
    <langCtx.Provider value={{ lang, setLang }}>
      <ThemeProvider theme={theme}>
        <Layout />
        <LandingIntro />
      </ThemeProvider>
    </langCtx.Provider>
  );
}

export default App;
