import React, { useEffect } from 'react';
import "../scss/Notification.scss";

const Notification = ({ message, notificationRef, customClass }) => {



    useEffect(() => {

        let timeOut;

        if (message !== '') {
            notificationRef.current.innerHTML = message;
            notificationRef.current.classList.add("active");

            // let parent = document.querySelector("#contact");
            // parent.scrollTop = notificationRef.current.offsetTop - parent.offsetTop;

            document.querySelector(".notification").scrollIntoView({behavior: 'smooth', block: 'start', inline: 'end'})

            timeOut = setTimeout(() => {
                document.querySelector("#contact").scrollIntoView({behavior: 'smooth', block: 'center', inline: 'start'})

                notificationRef.current.classList.remove("active");

            }, 4000)
        }

        return () => {
            clearTimeout(timeOut);
        }


    }, [message])

    return (

        <>
            {
              message != '' ?  <div className={`notification ${customClass}`} ref={notificationRef} /> : null
            }
        </>

    )
}

export default Notification;