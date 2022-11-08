import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import { useEffect } from "react";

import TypeWriter from "./TypeWriter";



const Projects = ({ data }) => {

    let typeWriter;

    useEffect(() => {

        typeWriter = new TypeWriter(data.headline, "#projectsHeading");

        return () => {
            typeWriter = null;
        }
    })

    return (

        <section id="projects" className="pb-3">

            <Row>

                <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1, offset: 1 }}>
                    <h2
                        id="projectsHeading"
                        style={{ marginBottom: "50px" }}>

                            {data.headline}

                        <span className="blinkCursor" />

                    </h2>


                    <a href="" style={{ fontSize: "2rem", backgroundColor: "#ccc" }}>Tryk på mig!</a>
                </Col>
            </Row>


            
        </section>

    )
}

export default Projects;