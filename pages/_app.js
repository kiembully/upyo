import Layout from "../components/layout";
// global styles 
import '../styles/global.scss';

function myApp({Component, pageProps}) {
    return (
        <>
        <Layout>
            <Component {...pageProps} />
        </Layout>
        </>
    );
}

export default myApp;