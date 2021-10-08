import '../public/static/bootstrap.css';
import '../public/static/site.css';

export default function MyApp({ Component, pageProps }) {
    // essencially, we're using this component to include our css classes
    return <Component {...pageProps} />;
}
