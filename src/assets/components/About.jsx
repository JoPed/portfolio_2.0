import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TypeWriter from "./TypeWriter";
import { useEffect } from "react";

const About = ({ data }) => {

    let typeWriter;

    useEffect(() => {

        console.log(data.headline);
        typeWriter = new TypeWriter(data.headline, "#aboutHeading", "#about");
    })



    return (
        <section id="about" className="pb-3">
            <Row>
                <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1, offset: 1 }}>
                    <h2
                        id="aboutHeading"
                        className="mt-3">

                        {data.headline}

                    </h2>

                    <Row>
                        <Col>
                            <article>
                                <p className="mainText">{data.paragraphs.map(item => item)}</p>
                            </article>
                        </Col>
                    </Row>
                </Col>

                <Col xs={{ span: 12, order: 1 }} md={{ span: 6, offset: 3 }} lg={{ span: 4, order: 2, offset: 0 }}>
                    <figure className="mt-3" id="portrait">

                        <img
                            src="/assets/images/desktop/Portrait_Jonas_Pedersen.jpg"
                            alt="Portrait of Jonas Bjørn Pedersen"
                        />

                    </figure>
                </Col>

            </Row>

            <Row className="mt-5">
                <Col xs={12} md={{ span: 10, offset: 1 }}>
                    <hr className="ruler" />
                </Col>
            </Row>


        </section>

    )
}
export default About;