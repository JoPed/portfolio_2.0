import { useRef } from 'react';
import Container from 'react-bootstrap/Container';

import About from '../components/content/About/About';
import Projects from '../components/content/Projects/Projects';
import Cv from '../components/content/Cv/Cv';
import Contactinfo from '../components/content/Contact/Contactinfo';
import DotNavigation from '../components/Navigation/Dotnavigation';
import Footer from '../components/Footer';




const Content = () => {

    const mainContentRef = useRef();

    return (
        <main className='container-fluid' id="mainContent">

            <DotNavigation />

            <Container fluid="lg">

                <About contentRef={mainContentRef} />
                <Projects contentRef={mainContentRef} />
                <Cv contentRef={mainContentRef} />
                <Contactinfo contentRef={mainContentRef} />

            </Container>
                <Footer />



        </main>

    )
}
export default Content;