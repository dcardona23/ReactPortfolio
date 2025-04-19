import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/theme';
import BaseLayout from './components/BaseLayout';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <BaseLayout />
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
