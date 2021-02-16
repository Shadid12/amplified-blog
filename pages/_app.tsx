import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head';
import Amplify from 'aws-amplify';
import awsconfig from '../src/aws-exports';
Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
