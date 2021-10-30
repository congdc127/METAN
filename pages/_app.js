import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/styles/globals.css';

// Import Swiper styles
import 'swiper/css';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
