const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px'
};

const media = (Object.keys(breakpoints) as Array<keyof typeof breakpoints>).reduce(
  (acc, key) => {
    acc[key] = (style: String) => `@media (max-width: ${breakpoints[key]}) { ${style} }`;
    return acc;
  },
  {} as { [index: string]: Function }
);

export const theme = {
  name: 'default',
  colors: {
    lightRed: '#F3B7BD',
    lightBlue: ' #EFF5F9',
    grey: '#E5E5E5',
    lightGrey: '#EDEDED',
    lightGrey2: '#FDFDFD',
    lightGrey3: '#BDBDBD',
  },
  fonts: ['adrianna-extended', 'Adrianna', 'BodoniSvtyTwoITCTT'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
  ...media,
};