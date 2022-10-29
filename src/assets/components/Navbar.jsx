import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const handleClick = () => setOpen(!open);


    return (
        <header className="container-lg" id="header">

            <nav className="" id="navbar">
                <h1>Jonas<br />
                    Bjørn<br />
                    Pedersen
                </h1>
                <ul className={open ? "navbar__menu active" : "navbar__menu"}>
                    <li><LinkScroll to="welcome" smooth={true} spy={true} duration={500} offset={-50}>Om Mig</LinkScroll></li>
                    <li><LinkScroll to="projects" smooth={true} spy={true} duration={500} offset={-50}>Projekter</LinkScroll></li>
                    <li><LinkRouter to="/cv">CV</LinkRouter></li>
                </ul>
                <div id="hamburger" onClick={handleClick}>
                    {open ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>

            </nav>
        </header>
    )
}
export default Navbar;