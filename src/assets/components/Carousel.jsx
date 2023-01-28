import React, { useEffect, useRef } from 'react';

import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';

const Carousel = ( { slides, trigger } ) => {

    const slideIndex = useRef( 0 );

    const timeOutRef = useRef( null );

    const slideRef = useRef( [] );

    const delay = 5000;

    const showSlides = () => {

        if(slideRef.current === null) return;

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

    const handleScrollTrigger = () => {
        ScrollTrigger.create( {
            trigger: trigger,
            start: "top top+=255px",
            end: "+=60%",
            onEnterBack: () => showSlides(),
            onLeave: () =>{
                resetTimeOut()}
        } )
    }

    useEffect( () => {

        gsap.registerPlugin( ScrollTrigger );

        // Start the slideshow
        showSlides();

        // Handles the scrolltrigger to either reset the time when out of the scrolltrigger
        // Or recalling the showslides when back again
        handleScrollTrigger();

        return () => {
            resetTimeOut();
            slideRef.current = null;
        }

    }, [] );

    return (
        <div className="slideshow">

            {
                slides.map( ( s, index ) => (
                    <figure
                        className="slides"
                        key={ index }
                        ref={ ref => ( slideRef.current[ index ] = ref ) }
                    >

                        <picture>

                            {/* Mobile */ }
                            <source media="(max-width: 575px)" srcSet={ s.sliderImgMobile } />

                            {/*tablet  */ }
                            <source media="(max-width: 991px)" srcSet={ s.sliderImgTablet } />

                            {/* large screens */ }
                            <source media="(max-width: 1199px)" srcSet={ s.sliderImgLg } />

                            {/* extra large screens */ }
                            <source media="(min-width: 1200px)" srcSet={ s.sliderImgXl } />

                            <img src={ s.sliderImgLg } alt={ s.altText } />

                        </picture>

                    </figure>
                ) )
            }

        </div>
    )
}

export default Carousel;