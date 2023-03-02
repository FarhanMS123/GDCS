import 'normalize.css';

import { FluentProvider, makeStyles, shorthands, teamsDarkTheme, tokens } from '@fluentui/react-components';
import type { AppProps } from 'next/app'

const useAppStyles = makeStyles({
  root: {
    width: '100vw',
    height: '100vh',
    // ...shorthands.overflow('scroll', 'auto'),
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const classes = useAppStyles();
  return (
    <FluentProvider theme={teamsDarkTheme} className={classes.root}>
      <Component {...pageProps} />
    </FluentProvider>
  );
}
