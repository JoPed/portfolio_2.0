import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [scrolledYPos,setScrolledYPos] = useState(0); 

    const headerRef = useRef();

    const handleClick = () => setIsMenuOpen(!isMenuOpen);

    const closeMenu = () => setIsMenuOpen(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        setScrolledYPos(scrollY);

        if(scrollY > 75){
            headerRef.current.classList.add("headerOnScroll");
        }
        else{
            headerRef.current.classList.remove("headerOnScroll");

        }
        
    }

    useEffect(() => {

        window.addEventListener("scroll", handleScroll);

    }, [scrolledYPos])


    return (
        <header className="container-fluid" id="header" ref={headerRef}>

            <nav className="container-lg" id="navbar">
                <h1>Jonas<br />
                    Bjørn<br />
                    Pedersen
                </h1>
                <ul className={isMenuOpen ? "navbar__menu active" : "navbar__menu"}>

                    <li>
                        <LinkScroll to="about" 
                        smooth={true} 
                        spy={true} 
                        duration={500} 
                        offset={-150} 
                        onClick={closeMenu}>Om Mig</LinkScroll>
                    </li>

                    <li>
                        <LinkScroll to="projects" 
                        smooth={true} 
                        spy={true} 
                        duration={500} 
                        offset={-150} 
                        onClick={closeMenu}>Projekter</LinkScroll>
                    </li>

                    <li>
                        <LinkRouter to="/cv">CV</LinkRouter>
                    </li>
                </ul>
                <div id="hamburger" onClick={handleClick}>
                    {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>

            </nav>
        </header>
    )
}
export default Navbar;