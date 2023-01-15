
import { useState, useRef, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import NavLinks from "./NavLinks";

import { gsap } from "gsap/all";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";


const Navbar = () => {

    gsap.registerPlugin( ScrollToPlugin, ScrollTrigger );

    /* #region  Usestates */
    const [ isMenuOpen, setIsMenuOpen ] = useState( false );
    /* #endregion */

    const headerRef = useRef();

    /* #region  Menu handling */
    const handleClick = () => setIsMenuOpen( !isMenuOpen );

    const closeMenu = () => {
        setIsMenuOpen( false );

        console.log( document.querySelectorAll( ".page" ) );
        document.querySelectorAll( ".page" )?.forEach( p => p.classList.add( "clicked" ) );
        document.querySelector( ".footer" )?.classList.add( "clicked" );
    }


    /* #endregion */

    const handleScroll = () => {

        document.querySelectorAll( ".page" )?.forEach( p => p.classList.remove( "clicked" ) );
        document.querySelector( ".footer" )?.classList.remove( "clicked" );
    }

    useEffect( () => {

        // window.addEventListener( "scroll", handleScroll );

        document.querySelector( "#mainContent" ).addEventListener( "wheel", () => handleScroll );


        return () => {
            // window.removeEventListener( "scroll", handleScroll );
            document.querySelector( "#mainContent" ).removeEventListener( "wheel", () => handleScroll );
        }

    }, [] )

    useEffect( () => {

        /* Removing the class on every render to make sure the header only has default values. 
            This cannot happen in the other useEffect, since that will run every time the y scroll pos changes. 
        */
        if ( headerRef.current.classList.contains( "headerOnScroll" ) ) {
            headerRef.current.classList.remove( "headerOnScroll" );
        }


    }, [] )


    return (
        <header className="container-fluid" id="header" ref={ headerRef }>

            <nav className="container-lg" id="navbar">
                <h1>Jonas<br />
                    Bjørn<br />
                    Pedersen
                </h1>
                <ul className={ isMenuOpen ? "navbar__menu active" : "navbar__menu" }>

                    <NavLinks onClick={ closeMenu } showText />

                </ul>
                <div id="hamburger" onClick={ handleClick }>
                    { isMenuOpen ? <FontAwesomeIcon icon={ faXmark } /> : <FontAwesomeIcon icon={ faBars } /> }
                </div>

            </nav>
        </header>
    )
}
export default Navbar;