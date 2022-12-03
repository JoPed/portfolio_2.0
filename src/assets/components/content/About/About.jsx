import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Typewriter from "../../Typewriter";
import { aboutContent } from "./AboutContent";

const About = () => {

    return (
        <section id="about" className="pb-3">

            <Row>
                <Col xs={ { span: 12, order: 2 } } lg={ { span: 6, order: 1, offset: 1 } }>

                    <Typewriter
                        headingId="aboutHeading"
                        headline={aboutContent.headline}
                        enableScrollTrigger={false}
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
                    <figure className="mt-3" id="portrait">

                        {/* <img
                            src="/assets/images/desktop/Portrait_Jonas_Pedersen.jpg"
                            alt="Portrait of Jonas Bjørn Pedersen"
                        /> */}

                        <picture>
                            {/* mobile */ }
                            <source media="(max-width: 575px)" srcSet={ aboutContent.portraitImgMobile } />

                            {/*tablet  */ }
                            <source media="(max-width: 991px)" srcSet={ aboutContent.portraitImgTablet } />

                            {/* large screens */ }
                            <source media="(max-width: 1199px)" srcSet={ aboutContent.portraitImgLg } />

                            {/* extra large screens */ }
                            <source media="(min-width: 1200px)" srcSet={ aboutContent.portraitImgXl } />

                            <img src={ aboutContent.portraitImgLg } alt="Portrait of Jonas Bjørn Pedersen" />

                        </picture>

                    </figure>
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