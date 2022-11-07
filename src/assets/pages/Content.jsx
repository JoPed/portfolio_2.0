
import { useEffect } from 'react';

import About from '../components/About';
import Projects from '../components/Projects';

import contentData from "../Content.json";



const Content = () => {

    return (
        <main className='container-fluid' id="mainContent" style={{height: "1500px"}}>
            <About data={contentData.content[0]}/>
            <Projects data={contentData.content[1]} />
        </main>

    )
}
export default Content;