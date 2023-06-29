import { useState } from 'react';

import Connector from '@/components/Main/Connector';
import Viewer from '@/components/Main/Viewer';
import { makeStyles, shorthands, tokens } from '@fluentui/react-components';

const useMainStyles = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground3,
    width: `calc(100% - (2 * ${tokens.spacingHorizontalL}))`,
    minHeight: `calc(100% - (2 * ${tokens.spacingVerticalL}))`,
    ...shorthands.padding(tokens.spacingVerticalL, tokens.spacingHorizontalL),
  },
  gapElement: {
    ...shorthands.margin(tokens.spacingVerticalL, 0),
  }
});

function App() {
  const classes = useMainStyles();

  return (
    <>
      <main className={classes.root}>
        <Connector />
        <Viewer className={classes.gapElement} />
      </main>
    </>
  )
}

export default App
