import React, { useEffect, useState } from 'react';


import { gsap } from "gsap/all";

const Typewriter = ( { headingId, headline } ) => {

    const [ dimensions, setDimensions ] = useState( window.innerWidth );

    const [ headingSelector ] = useState( `.${ headingId }` );

    const breakpoint = 420;

    const handleResize = () => {
        setDimensions( window.innerWidth );
    }

    useEffect( () => {
        window.addEventListener( 'resize', handleResize )

        return () => window.removeEventListener( 'resize', handleResize )
    }, [] )

    const setInitialValues = () => {

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

    useEffect( () => {

        setInitialValues();

    }, [] );

    return dimensions <= breakpoint ? <h2>{ headline }</h2> : (
        <h2
            id={ headingId }
        >
            <span className={ headingId + "__blinkCursorStart" } />
            { headline }
            <span className={ headingId + "__blinkCursorEnd" } />

        </h2>
    )
}

export default Typewriter;