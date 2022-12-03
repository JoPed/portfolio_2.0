import React, { useEffect, useState } from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

import { cvContent } from './CvContent';
import TypeWriter from '../../TypeWriter';

const Cv = () => {

    let typeWriter;

    const [isReadyToAnimate, setIsReadyToAnimate] = useState(false);

    gsap.registerPlugin(ScrollTrigger);


    const handleScrollTrigger = (writer) => {
        ScrollTrigger.create({
            trigger: "#cv",
            start: "top bottom-=20px",
            end: "+=100px",
            onEnter: () => {
                setIsReadyToAnimate(true);
                writer.setInitialValues();
            },
            onLeaveBack: () => setIsReadyToAnimate(false)
        })
    }


    useEffect(() => {

        typeWriter = new TypeWriter(cvContent.headline, "#cvHeading");

        handleScrollTrigger(typeWriter);

        return () => {
            typeWriter = null;
        }

    }, [isReadyToAnimate]);

    return (
        <section id="cv" className="pb-3">

            <Container fluid="lg">
                <Row className="px-4">

                    {/* Image  */}
                    <Col xs={{ span: 2, order: 2 }} md={{span: 3}} className="d-none d-md-block">


                        <picture>
                            <source media="(max-width: 991px )" srcSet="" />
                            <source media="(max-width: 1199px )" srcSet="" />
                            <source media="(min-width: 1200 )" srcSet="" />

                            <img src="/assets/images/tablet/Portrait_Jonas_Bjoern_Pedersen_tablet.webp" alt="Jonas Bjørn Pedersen" />

                        </picture>
                    </Col>

                    {/* Heading and underline  */}
                    <Col xs={{ span: 12, order: 1}}  md={{span: 7, offset: 1}}  className="px-0">
                        <Row >
                            <Col xs={12} className="px-0" >

                                <h2
                                    id="cvHeading"
                                    className="mt-3">

                                    <span className="heading__blinkCursorStart" />
                                    {isReadyToAnimate ? cvContent.headline : ""}
                                    <span className="heading__blinkCursorEnd" />

                                </h2>

                            </Col>
                            <Col xs={12} className="px-0 d-none d-md-block">
                                <hr className="ruler" />
                            </Col>
                        </Row>
                    </Col>

                </Row>

                <Row className="rulerRow">
                    <Col xs={12} md={{ span: 10, offset: 1 }}>
                        <hr className="ruler" />
                    </Col>
                </Row>

            </Container>





        </section>

    )

}

export default Cv;