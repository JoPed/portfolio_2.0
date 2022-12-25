import Container from 'react-bootstrap/Container';

import About from '../components/content/About/About';
import Projects from '../components/content/Projects/Projects';
import Cv from '../components/content/Cv/Cv';
import Contactinfo from '../components/content/Contact/Contactinfo';



const Content = () => {

    return (
        <main className='container-fluid' id="mainContent">
            
            <Container fluid="lg">
                
                <About />
                <Projects />
                <Cv /> 
                <Contactinfo />

            </Container>


        </main>

    )
}
export default Content;