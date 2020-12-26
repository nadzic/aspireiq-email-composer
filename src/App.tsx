import React, { FC, ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { Composer } from './components/composer';
import { theme } from './constants';
import './App.css';

const App: FC = (): ReactElement =>
  <ThemeProvider theme={theme}>
    <Composer />
  </ThemeProvider>

export default App;