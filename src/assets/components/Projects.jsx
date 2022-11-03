import { useNavigate } from "react-router-dom";

const Projects = ()=> {

    const navigate = useNavigate();

    const handleClick = ()=> {
        window.open("./Projects/build/");
    }

    return (

        <div id="projects">
            <h2> Projects</h2>
            <button onClick={handleClick} id="root">Tryk på mig!</button>
        </div>
        
    )
}

export default Projects;