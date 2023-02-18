import { FluentProvider, teamsDarkTheme } from '@fluentui/react-components';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FluentProvider theme={teamsDarkTheme}>
      <Component {...pageProps} />
    </FluentProvider>
  );
}
