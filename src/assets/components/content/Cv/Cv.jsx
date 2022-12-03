import React from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { cvContent } from './CvContent';

import Typewriter from '../../Typewriter';

const Cv = () => {

    return (
        <section id="cv" className="pb-3">

            <Container fluid="lg">
                <Row className="px-4">

                    {/* Image  */ }
                    <Col
                        xs={ { span: 2, order: 2 } }
                        md={ { span: 3 } }
                        className="d-none d-md-block"
                    >


                        <picture>
                            <source media="(max-width: 991px )" srcSet={ cvContent.image.imgTablet } />
                            <source media="(max-width: 1199px )" srcSet={ cvContent.image.imgLg } />
                            <source media="(min-width: 1200 )" srcSet={ cvContent.image.imgLx } />

                            <img src={ cvContent.image.imgLg } alt="Jonas Bjørn Pedersen" />

                        </picture>
                    </Col>

                    {/* Heading and underline  */ }
                    <Col xs={ { span: 12, order: 1 } } md={ { span: 7, offset: 1 } } className="px-0">
                        <Row >
                            <Col xs={ 12 } className="px-0" >

                                <Typewriter
                                    headingId="cvHeading"
                                    headline={ cvContent.headline }
                                    enableScrollTrigger={ true }
                                />

                            </Col>
                            <Col xs={ 12 } className="px-0 d-none d-md-block">
                                <hr className="ruler" />
                            </Col>

                            <Col xs={ 12 } >
                                <ul id="personalInfoList">
                                    {
                                        cvContent.info.map( i => (
                                            <li
                                                key={ i.id }
                                            >
                                                <FontAwesomeIcon
                                                    icon={ i.icon } />

                                                {' ' + i.info }

                                            </li>
                                        ) )
                                    }
                                </ul>

                            </Col>
                        </Row>
                    </Col>

                </Row>

                <Row className="rulerRow">
                    <Col xs={ 12 } md={ { span: 10, offset: 1 } }>
                        <hr className="ruler" />
                    </Col>
                </Row>

            </Container>





        </section>

    )

}

export default Cv;