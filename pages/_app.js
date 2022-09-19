import '../styles/globals.css';
import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* Layout 컴포넌트의 children이 된다. */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
