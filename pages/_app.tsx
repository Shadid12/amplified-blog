import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
