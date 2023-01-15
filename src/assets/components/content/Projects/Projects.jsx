import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import Typewriter from "../../Typewriter";
import { projectsContent } from "./ProjectsContent";

const Projects = ( ) => {

    const cardDetailsRef = useRef( [] );

    const showCardDetails = ( event, index ) => {

        event.preventDefault();

        const button = event.currentTarget;

        // Getting the details sections of the card that should show/hide
        const details = cardDetailsRef.current[ index ];

        // Get the computedstyle (those from the stylesheet)
        const detailStyles = getComputedStyle( details );


        if ( detailStyles.display === "none" ) {

            // Setting the styles in the stylesheet, not inline
            details.style.setProperty( "display", "block" );
            button.textContent = "Read Less";

            // ændre til gsap 
            // event.target.parentNode.scrollIntoView( { block: "center", inline: "nearest" } );
        }
        else {
            details.style.setProperty( "display", "none" );
            button.textContent = "Read More";

            // ændre til gsap
            // event.target.parentNode.scrollIntoView({ block: "end", inline: "nearest"});

        }

    }

    return (

        <section id="projects" className="page">

            <Container fluid="lg">

                <Row className="px-5 px-lg-0">

                    <Col xs={ { span: 12, order: 2 } } lg={ { span: 10, order: 1, offset: 1 } } className="px-4 mt-5">

                        <Typewriter
                            headingId="projectsHeading"
                            headline={ projectsContent.headline }
                            enableScrollTrigger={ true }
                        />

                    </Col>

                </Row>

                <Row className="mt-5 px-5 px-lg-0">

                    {
                        projectsContent.cardData.map( ( card, index ) => (

                            <Col
                                xs={ { span: card.xsSpan, offset: card.xsColOffset } }
                                sm={ { span: 8, offset: card.smColOffset } }
                                md={ { span: 6, offset: card.mdColOffset } }
                                lg={ { span: 5, offset: card.hasOwnProperty( "lgColOffset" ) ? card.lgColOffset : "" } }
                                xl={ { span: 4, offset: card.xlColOffset } }
                                key={ card.uniqueID }
                                className={ `mb-4  px-5 px-sm-3 px-md-4 px-lg-0 colOfCards ${ card.hasOwnProperty( "className" ) ? card.className : "" }` }
                            >

                                <section className="card">

                                    <picture>
                                        <source media="(max-width: 575px)" srcSet={ card.mobileImg } />
                                        <source media="(max-width: 991px)" srcSet={ card.tabletImg } />
                                        <source media="(min-width: 992px)" srcSet={ card.pcImg } />

                                        <img src={ card.pcImg } alt={ card.altText } />

                                    </picture>

                                    <h3 className="card__title">{ card.title }</h3>

                                    <p className="card__description">{ card.description }</p>

                                    <p
                                        className="card__details"
                                        ref={ ref => ( cardDetailsRef.current[ index ] = ref ) }
                                    >
                                        { card.details }
                                        <a className="card__link" href={ card.gitHubLink } target="_blank"> <FontAwesomeIcon icon={ faGithub } /> Åben på Github</a>
                                        {
                                            card.hasOwnProperty( "siteLink" ) ?
                                                ( <a
                                                    className="card__link"
                                                    href={ card.siteLink }
                                                    target="_blank"
                                                > <FontAwesomeIcon icon={ faGlobe } /> Åben siden</a> ) : null }
                                    </p>

                                    <button
                                        className="card__btn"
                                        onClick={ ( event ) => showCardDetails( event, index ) }
                                    >
                                        Read More
                                    </button>

                                </section>
                            </Col>

                        ) )
                    }

                </Row>
            </Container>

        </section>

    )
}

export default Projects;