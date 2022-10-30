
import About from '../components/About';
import Projects from '../components/Projects';

import contentData from "../Content.json";



const Content = () => {
    return (
        <main className='container-lg' id="mainContent" style={{height: "1500px"}}>
             <About data={contentData}/>
            {/*<Projects /> */}
        </main>

    )
}
export default Content;