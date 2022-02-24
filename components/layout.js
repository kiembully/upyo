// structural components 
import Navigation from "./Navigation";
import Footer from "./Footer";

// styles 
import layoutStyles from '../styles/layout.module.scss';

const Layout = ({children}) => {
    return (
        <div>
            <Navigation />
            <main className={layoutStyles.main}>
                {/* this is where all the pages are rendered */}
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;