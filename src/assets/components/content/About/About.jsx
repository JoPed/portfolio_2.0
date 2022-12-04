import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Typewriter from "../../Typewriter";
import { aboutContent } from "./AboutContent";

import Carousel from "../../Carousel";

const About = () => {

    return (
        <section id="about" className="pb-3">

            <Row>
                <Col xs={ { span: 12, order: 2 } } lg={ { span: 6, order: 1, offset: 1 } }>

                    <Typewriter
                        headingId="aboutHeading"
                        headline={ aboutContent.headline }
                        enableScrollTrigger={ false }
                    />

                    <Row>
                        <Col>
                            <article>
                                <p className="mainText">{ aboutContent.paragraphs.map( item => item ) }</p>
                            </article>
                        </Col>
                    </Row>
                </Col>

                <Col xs={ { span: 8, order: 1, offset: 2 } } sm={ { span: 8, offset: 2 } } md={ { span: 6, offset: 3 } } lg={ { span: 5, order: 2, offset: 0 } }>

                    <Carousel
                        slides={ aboutContent.slides }
                        trigger="#about"
                    />

                </Col>

            </Row>

            <Row className="rulerRow">
                <Col xs={ 12 } md={ { span: 10, offset: 1 } }>
                    <hr className="ruler" />
                </Col>
            </Row>


        </section>

    )
}
export default About;