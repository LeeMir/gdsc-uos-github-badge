import Head from 'next/head';
import { Global } from '@emotion/react';
import { reset } from '../styles/global';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel='shortcut icon' href='/favicon.ico' />
    </Head>
    <Global styles={reset} />
    <Component {...pageProps} />
  </>
)

export default App;
