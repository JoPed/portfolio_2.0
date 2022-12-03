import React, { useEffect, useRef } from 'react'

const Carousel = ({slides}) => {

    const slideIndex = useRef( 0 );

    const timeOutRef = useRef( null );

    const slideRef = useRef([]);

    const delay = 2500;

    const showSlides = () => {
        console.log( slideRef.current );
        slideRef.current.forEach( s => s.style.display = "none" );

        slideIndex.current++;

        if ( slideIndex.current > slideRef.current.length ) {
            slideIndex.current = 1;
        }

        slideRef.current[ slideIndex.current - 1 ].style.display = "block";

        timeOutRef.current = setTimeout( showSlides, delay );

    }

    const resetTimeOut = () => {
        if ( timeOutRef.current ) {
            clearTimeout( timeOutRef.current );
        }
    }

    useEffect( () => {

        showSlides();

        return () => {
            resetTimeOut();
        }

    }, [] );

    return (
        <div className="slideshow" style={ { margin: "0 auto", maxWidth: "500px" } }>

            <div className="slideshowSlider" >

                {
                    slides.map( ( s, index ) => (
                        <figure className="slides" style={ { height: "400px", display: "none" } } key={ index } ref={ref => (slideRef.current[index] = ref)} >
                            <img src={ s.URL } alt={s.alt} />
                        </figure>
                    ) )
                }


            </div>

        </div>
    )
}

export default Carousel;