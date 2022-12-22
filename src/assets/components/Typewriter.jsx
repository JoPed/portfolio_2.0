import React, { useEffect, useState } from 'react';


import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

const Typewriter = ( { headingId, headline, enableScrollTrigger } ) => {

    const [ isReadyToAnimate, setIsReadyToAnimate ] = useState( false );

    gsap.registerPlugin( ScrollTrigger );

    const headingSelector = `.${ headingId }`;


    const setInitialValues = ( ) => {

        gsap.set( headingSelector + "__blinkCursorEnd", {
            backgroundColor: "transparent",
            width: "2px",
            height: "35px"
        } )

        gsap.set( `#${ headingId }`, {
            width: "2px",
            color: "transparent"
        } );

        gsap.set( headingSelector + "__blinkCursorStart", {
            backgroundColor: "#F28705",
            width: "2px",
            height: "35px",
            opacity: 1

        } );

        gsap.to( headingSelector + "__blinkCursorStart", {
            backgroundColor: "transparent",
            duration: .5,
            repeat: 5,
            yoyo: true,
            ease: "steps(1)",
            onComplete: () => {
                makeTypeWritingEffect();
            }
        } );
    }

    const makeTypeWritingEffect = () => {

        gsap.to( headingSelector + "__blinkCursorStart", {
            opacity: 0,
            duration: .1
        } )

        gsap.to( headingSelector + "__blinkCursorEnd", {
            backgroundColor: "#F28705",
            duration: .5,
            repeat: -1,
            yoyo: true,
            ease: "steps(1)"
        } );

        gsap.to( `#${ headingId }`, {
            color: "#F28705"
        } )

        //*Check length to animate and adjust duration acordionly
        let durationTime = 0;

        if ( headline.length > 10 )
            durationTime = 2;

        else
            durationTime = .8;


        gsap.to( `#${ headingId }`, {
            width: `${ headline.length + 1 }ch`,
            duration: durationTime,
            ease: `steps(${ headline.length })`

        } )
    }

    const handleScrollTrigger = () => {
        ScrollTrigger.create( {
            trigger: `#${ headingId }`,
            start: "top bottom-=20px",
            end: "+=100px",
            onEnter: () => {
                setIsReadyToAnimate( true );
                setInitialValues( );
            },
            onLeaveBack: () => {
                setIsReadyToAnimate( false )
            }
        } )
    }

    useEffect( () => {

        if ( enableScrollTrigger ) {
            handleScrollTrigger();
        }
        else {
            setInitialValues();
        }

    }, [] );

    return (
        <h2
            id={ headingId }
        >

            <span className={ headingId + "__blinkCursorStart" } />
            { isReadyToAnimate || headingId === "aboutHeading" ? headline : "" }
            <span className={ headingId + "__blinkCursorEnd" } />

        </h2>
    )
}

export default Typewriter;