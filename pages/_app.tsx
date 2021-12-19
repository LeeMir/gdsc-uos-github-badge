import { Global } from '@emotion/react';
import { reset } from '../styles/global';

const App = ({ Component, pageProps }) => (
  <>
    <Global styles={reset} />
    <Component {...pageProps} />
  </>
)

export default App;
