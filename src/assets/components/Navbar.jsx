import { Link as LinkScroll } from "react-scroll";

import { useState, useRef, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark} from "@fortawesome/free-solid-svg-icons";



import { gsap } from "gsap/all";

const Navbar = () => {

    /* #region  Usestates */
    const [ isMenuOpen, setIsMenuOpen ] = useState( false );

    const [ scrolledYPos, setScrolledYPos ] = useState( 0 );
    /* #endregion */

    const headerRef = useRef();

    const timeLine = gsap.timeline();

    /* #region  Menu handling */
    const handleClick = () => setIsMenuOpen( !isMenuOpen );

    const closeMenu = () => setIsMenuOpen( false );


    /* #endregion */

    const handleStylingOnScroll = () => {
        const scrollY = window.scrollY;
        setScrolledYPos( scrollY );

        if ( scrollY > 75 ) {

            //* The header styling happens inside changeHeadingOnScroll in the gsap onComplete
            headerRef.current.children[ 0 ].children[ 0 ].style.display = "none";

            headerRef.current.classList.add( "headerOnScroll" );

        }
        else {

            headerRef.current.children[ 0 ].children[ 0 ].style.display = "block";
            headerRef.current.classList.remove( "headerOnScroll" );

        }
    }


    useEffect( () => {

        window.addEventListener( "scroll", handleStylingOnScroll );

        return () => {
            window.removeEventListener( "scroll", handleStylingOnScroll );
        }

    }, [ scrolledYPos ] )

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

                    <li>
                        <LinkScroll
                            to="about"
                            smooth={ true }
                            spy={ true }
                            duration={ 500 }
                            offset={ -150 }
                            onClick={ closeMenu }
                        >
                            Om Mig
                        </LinkScroll>
                    </li>

                    <li>
                        <LinkScroll to="projects"
                            smooth={ true }
                            spy={ true }
                            duration={ 500 }
                            offset={ -150 }
                            onClick={ closeMenu }
                        >
                            Projekter
                        </LinkScroll>
                    </li>

                    <li>
                        <LinkScroll to="cv"
                            smooth={ true }
                            spy={ true }
                            duration={ 500 }
                            offset={ -150 }
                            onClick={ closeMenu }
                        >
                            CV
                        </LinkScroll>
                    </li>
                </ul>
                <div id="hamburger" onClick={ handleClick }>
                    { isMenuOpen ? <FontAwesomeIcon icon={faXmark}  /> : <FontAwesomeIcon icon={faBars}  /> }
                </div>

            </nav>
        </header>
    )
}
export default Navbar;