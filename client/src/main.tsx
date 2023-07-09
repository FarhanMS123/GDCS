import '@/utils/global.ts';
import React from 'react'
import ReactDOM from 'react-dom/client'

import { FluentProvider, makeStyles, shorthands, teamsDarkTheme, tokens } from '@fluentui/react-components';
import { Provider } from 'react-redux';
import { store } from '@/redux';
import WindowResizeHandler from '@/components/media';

import App from './App.tsx'

import 'normalize.css';

const useAppStyles = makeStyles({
  root: {
    width: '100vw',
    height: '100vh',
    // ...shorthands.overflow('scroll', 'auto'),
  },
});

function Main() {
  const classes = useAppStyles();

  return (
    <FluentProvider theme={teamsDarkTheme} className={classes.root}>
      <Provider store={store}>
        <WindowResizeHandler />
        <App />
      </Provider>
    </FluentProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Main />,
)
