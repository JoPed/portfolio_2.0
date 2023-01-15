import About from '../components/content/About/About';
import Projects from '../components/content/Projects/Projects';
import Cv from '../components/content/Cv/Cv';
import Contactinfo from '../components/content/Contact/Contactinfo';
import DotNavigation from '../components/Navigation/Dotnavigation';
import Footer from '../components/Footer';

const Content = () => {

    return (
        <main className='container-fluid px-0' id="mainContent">

            <DotNavigation />

            <About />
            <Projects />
            <Cv />
            <Contactinfo />
            <Footer />



        </main>

    )
}
export default Content;