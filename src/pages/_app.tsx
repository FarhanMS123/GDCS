import 'normalize.css';

import { FluentProvider, makeStyles, shorthands, teamsDarkTheme, tokens } from '@fluentui/react-components';
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { store } from '@/redux';
import WindowResizeHandler from '@/components/media';

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
      <Provider store={store}>
        <WindowResizeHandler />
        <Component {...pageProps} />
      </Provider>
    </FluentProvider>
  );
}
