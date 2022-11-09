import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import { useEffect, useState } from "react";

import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/all";


import TypeWriter from "./TypeWriter";



const Projects = ({ data }) => {

    gsap.registerPlugin(ScrollTrigger);


    const [isReadyToAnimate, setIsReadyToAnimate] = useState(false);



    let typeWriter;

    const handleScrollTrigger = (writer) => {
        ScrollTrigger.create({
            trigger: "#projects",
            start: "top bottom-=20px",
            end: "+=100px",
            markers: true,
            onEnter: () => {
                setIsReadyToAnimate(true);
                writer.setInitialValues();
            },
            onLeaveBack: () => setIsReadyToAnimate(false)
        })
    }

    const showCardDetails = (event) => {

        console.log(event.currentTarget);

    }

    useEffect(() => {

        typeWriter = new TypeWriter(data.headline, "#projectsHeading");

        handleScrollTrigger(typeWriter);

        return () => {
            typeWriter = null;
        }
    }, [isReadyToAnimate]);

    return (

        <section id="projects" className="pb-3">

            <Row>

                <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1, offset: 1 }}>
                    <h2
                        id="projectsHeading">

                        <span className="heading__blinkCursorStart" />
                        {isReadyToAnimate === true ? data.headline : ""}
                        <span className="heading__blinkCursorEnd" />

                    </h2>
                </Col>

            </Row>

            <Row className="mt-5">
                <Col lg={{ span: 3, offset: 3 }}>
                    <section className="card">

                        {/*#region Use this for the real fotos <picture>
                            <source
                                media="(max-width: 767px)"
                                srcSet=""
                            />

                            <source
                                media="(min-width: 768px)"
                                srcSet=""
                            />
                            <img src="https://picsum.photos/460/200" alt="Stock foto from unsplash" />
                        </picture> */}

                        <img src="https://i.picsum.photos/id/1081/460/200.jpg?hmac=4SdKOlkbW_8J6vIi28Q1gWaW3Ic7g3sh0k_PAsDZEEc" alt="Stock foto from unsplash" />

                        <div>
                            <h3 className="card__title">Projekt 1</h3>

                            <p className="card__description">
                                This is a short description of project. Maybe about a sentence or to.Maybe about a sentence or to.
                            </p>

                            <p className="card__details" data-index={0}>This is the details section. Maybe list technologies and in what context the projects was done.</p>

                            <button className="card__btn" onClick={showCardDetails}>Read more</button>
                        </div>





                    </section>


                </Col>

                <Col lg={3}>

                    <section className="card">

                        <figure>
                            <picture>
                                <source
                                    media="(max-width: 768px)"
                                    srcSet=""
                                />
                            </picture>
                        </figure>


                    </section>

                </Col>
            </Row>



        </section>

    )
}

export default Projects;