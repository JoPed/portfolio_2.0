
import { useEffect } from 'react';

import About from '../components/content/About';
import Projects from '../components/content/Projects';



const Content = () => {

    return (
        <main className='container-fluid' id="mainContent" style={{height: "1500px"}}>
            <About />
            <Projects />
        </main>

    )
}
export default Content;