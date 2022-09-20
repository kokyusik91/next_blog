import '../styles/globals.css';
import Layout from '../components/layout/layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Layout 컴포넌트의 children이 된다. */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
