import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import { useEffect, useState, useRef } from "react";

import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/all";


import TypeWriter from "../TypeWriter";
import { projectsContent } from "./ProjectsContent";



const Projects = () => {

    gsap.registerPlugin(ScrollTrigger);


    const [isReadyToAnimate, setIsReadyToAnimate] = useState(false);

    const cardDetailsRef = useRef([]);

    let typeWriter;


    const handleScrollTrigger = (writer) => {
        ScrollTrigger.create({
            trigger: "#projects",
            start: "top bottom-=20px",
            end: "+=100px",
            onEnter: () => {
                setIsReadyToAnimate(true);
                writer.setInitialValues();
            },
            onLeaveBack: () => setIsReadyToAnimate(false)
        })
    }

    const showCardDetails = (event, index) => {

        const button = event.currentTarget;

        // Getting the details sections of the card that should show/hide
        const details = cardDetailsRef.current[index];

        // Get the computedstyle (those from the stylesheet)
        const detailStyles = getComputedStyle(details);


        if (detailStyles.display === "none") {

            // Setting the styles in the stylesheet, not inline
            details.style.setProperty("display", "block");
            button.textContent = "Read Less";

        }
        else {
            details.style.setProperty("display", "none");
            button.textContent = "Read More";

        }

    }
    


    useEffect(() => {

        typeWriter = new TypeWriter(projectsContent.headline, "#projectsHeading");

        handleScrollTrigger(typeWriter);

        return () => {
            typeWriter = null;
        }
    }, [isReadyToAnimate]);

    return (

        <section id="projects" className="pb-3">

            <Row>

                <Col xs={{ span: 12, order: 2 }} lg={{ span: 12, order: 1, offset: 0 }}>
                    <h2
                        id="projectsHeading">

                        <span className="heading__blinkCursorStart" />
                        {isReadyToAnimate === true ? projectsContent.headline : ""}
                        <span className="heading__blinkCursorEnd" />

                    </h2>
                </Col>

            </Row>


            <Container fluid="lg">

                <Row className="mt-5 px-5 px-lg-0">

                    {
                        projectsContent.cardData.map((card, index) => (

                            <Col
                                xs={{span: card.xsSpan, offset: card.xsColOffset}}
                                sm={{ span: 8, offset: card.smColOffset }}
                                md={{ span: 6, offset: card.mdColOffset }}
                                lg={{ span: 5, offset: card.hasOwnProperty("lgColOffset") ? card.lgColOffset : "" }}
                                xl={{ span: 4, offset: card.xlColOffset }}
                                key={card.uniqueID}
                                className={`mb-4  px-5 px-sm-3 px-md-4 px-lg-0 colOfCards ${card.hasOwnProperty("className") ? card.className : ""}`}
                            >

                                <section className="card">

                                    <picture>
                                        <source media="(max-width: 575px)" srcSet={card.mobileImg} />
                                        <source media="(max-width: 991px)" srcSet={card.tabletImg} />
                                        <source media="(min-width: 992px)" srcSet={card.pcImg} />

                                        <img src={card.pcImg} alt={card.altText} />

                                    </picture>

                                    <h3 className="card__title">{card.title}</h3>

                                    <p className="card__description">{card.description}</p>

                                    <p
                                        className="card__details"
                                        ref={ref => (cardDetailsRef.current[index] = ref)}
                                    >
                                        {card.details}
                                    </p>

                                    <button
                                        className="card__btn"
                                        onClick={(event) => showCardDetails(event, index)}
                                    >
                                        Read More
                                    </button>

                                </section>
                            </Col>

                        ))
                    }

                </Row>
            </Container>





        </section>

    )
}

export default Projects;