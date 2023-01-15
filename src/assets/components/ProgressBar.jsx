import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import '../css/ProgressBar.min.css';

const ProgressBar = () => {

    const [ scrollTop, setScrollTop ] = useState( 0 );

    const onScroll = () => {
        const winScroll = document.querySelector( '#mainContent' ).scrollTop;

        const height = document.querySelector( '#mainContent' ).scrollHeight - document.querySelector( '#mainContent' ).clientHeight;

        const scrolled = ( winScroll / height ) * 100;

        setScrollTop( scrolled );
    }

    useEffect( () => {

        document.querySelector( '#mainContent' ).addEventListener( "scroll", onScroll );

        return () => {
            document.querySelector( '#mainContent' ).removeEventListener( "scroll", onScroll );
        }

    }, [] )


    return ReactDOM.createPortal(
        <div className="progressContainer">
            <div style={{width: `${scrollTop}%`}} className="progressbar"></div>
        </div>, document.body
    )
 
}

export default ProgressBar;