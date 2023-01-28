import "../../css/Navigation.min.css";
import { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import NavLinks from "./NavLinks";

const Navbar = () => {

    /* #region  Usestates */
    const [ isMenuOpen, setIsMenuOpen ] = useState( false );
    /* #endregion */

    const headerRef = useRef();

    /* #region  Menu handling */
    const handleClick = () => setIsMenuOpen( !isMenuOpen );

    const closeMenu = () => setIsMenuOpen( false );    

    /* #endregion */   


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