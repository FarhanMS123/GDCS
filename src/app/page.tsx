'use client';
import Connector from '@/app/Connector';
import Viewer from '@/app/Viewer';
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

export default function Main() {
  const classes = useMainStyles();

  return (
    <main className={classes.root}>
      <Connector />
      <Viewer className={classes.gapElement} />
    </main>
  );
}
