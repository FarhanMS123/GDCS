import Connector from '@/components/Main/Connector';
import Viewer from '@/components/Main/Viewer';
import { makeStyles, shorthands, tokens } from '@fluentui/react-components';
import Head from 'next/head';

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
    <>
      <Head>
        <title>Garbage Discharge Count System</title>
        <meta name="description" content="A project based on old research to count objects flowing on river." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classes.root}>
        <Connector />
        <Viewer className={classes.gapElement} />
      </main>
    </>
  );
}
