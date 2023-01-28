import React from 'react';
import { NavLink } from 'react-router-dom';

import { NavigationContent } from "./NavigationContent";


const NavLinks = ({onClick, showText = false}) => {

    return (
        <>
            {
                NavigationContent.map( nav => (
                    <li key={nav.id}>
                        <NavLink
                            to={ nav.to }
                            onClick={() => onClick() }
                            offset={-150}
                        >
                            { showText ? nav.text : '' }
                        </NavLink>
                    </li>
                ) )
            }
        </>

    )
}

export default NavLinks;