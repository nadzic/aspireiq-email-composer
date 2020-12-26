import { FC, ReactElement } from 'react';
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components';
import { theme } from '../constants';

const AllTheProviders: FC = ({ children }): ReactElement =>
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>


const customRender = (ui: ReactElement) =>
  render(ui, { wrapper: AllTheProviders })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }