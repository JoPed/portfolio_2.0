
import { useEffect } from 'react';

import About from '../components/content/About/About';
import Projects from '../components/content/Projects/Projects';
import Skills from '../components/content/Skills/Skills';
import Container from 'react-bootstrap/Container';



const Content = () => {

    return (
        <main className='container-fluid' id="mainContent">
            
            <Container fluid="lg">
                <About />
                <Projects />
                <Skills /> 
            </Container>


        </main>

    )
}
export default Content;