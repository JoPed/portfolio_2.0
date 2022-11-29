
import { useEffect } from 'react';

import About from '../components/content/About';
import Projects from '../components/content/Projects';
import Container from 'react-bootstrap/Container';



const Content = () => {

    return (
        <main className='container-fluid' id="mainContent">
            
            <Container fluid="lg">
                <About />
                <Projects />
            </Container>


        </main>

    )
}
export default Content;