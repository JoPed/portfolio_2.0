import React from 'react';
import { Link as LinkScroll } from "react-scroll";

import { NavigationContent } from "./NavigationContent";


const NavLinks = ({onClick, showText = false}) => {

    return (
        <>
            {
                NavigationContent.map( nav => (
                    <li key={nav.id}>
                        <LinkScroll
                            containerId='mainContent'
                            to={ nav.to }
                            smooth={ true }
                            spy={ true }
                            onClick={() => onClick() }
                            offset={-150}
                        >
                            { showText ? nav.text : '' }
                        </LinkScroll>
                    </li>
                ) )
            }
        </>

    )
}

export default NavLinks;