import React, { useEffect, useState } from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

import { skillsContent } from './SkillsContent';
import TypeWriter from '../../TypeWriter';

const Skills = () => {

    let typeWriter;

    const [ isReadyToAnimate, setIsReadyToAnimate ] = useState( false );

    gsap.registerPlugin( ScrollTrigger );


    const handleScrollTrigger = ( writer ) => {
        ScrollTrigger.create( {
            trigger: "#skills",
            start: "top bottom-=20px",
            end: "+=100px",
            onEnter: () => {
                setIsReadyToAnimate( true );
                writer.setInitialValues();
            },
            onLeaveBack: () => setIsReadyToAnimate( false )
        } )
    }


    useEffect( () => {

        typeWriter = new TypeWriter( skillsContent.headline, "#skillsHeading" );

        handleScrollTrigger( typeWriter );

        return () => {
            typeWriter = null;
        }

    }, [isReadyToAnimate] );

    return (
        <section id="skills" className="pb-3">

            <Row>
                <Col xs={ { span: 12, order: 2 } } lg={ { span: 6, order: 1, offset: 1 } }>


                    <h2
                        id="skillsHeading"
                        className="mt-3">

                        <span className="heading__blinkCursorStart" />
                        { isReadyToAnimate ? skillsContent.headline : "" }
                        <span className="heading__blinkCursorEnd" />

                    </h2>

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

export default Skills;