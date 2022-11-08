import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

class TypeWriter {

    constructor(headline, selector) {

        this.heading = headline;
        this.elemSelector = selector;


        gsap.set(".blinkCursorEnd", {
            backgroundColor: "rgba(214,90,49,.83)",
            width: "2px",
            height: "35px"
        })

        gsap.set(this.elemSelector, {
            width: "2px",
            color: "transparent"
        });

        gsap.set(".blinkCursorStart", {
            backgroundColor: "rgba(214,90,49,.83)",
            width: "2px",
            height: "35px",
            opacity: 1

        });

        gsap.to(".blinkCursorStart", {
            backgroundColor: "transparent",
            duration: .5,
            repeat: 10,
            yoyo: true,
            ease: "steps(1)",
            onComplete: () => {
                this.makeTypeWritingEffect();
            }
        });     


    }

    makeTypeWritingEffect() {

        gsap.to(".blinkCursorStart", {
            opacity: 0
        })
        
        gsap.to(".blinkCursorEnd", {
            backgroundColor: "transparent",
            duration: .5,
            repeat: -1,
            yoyo: true,
            ease: "steps(1)"
        });
        
        
        gsap.to(this.elemSelector, {
            color: "rgba(214,90,49,.83)",
            duration: 1,
            onComplete: () => {

                gsap.to(this.elemSelector, {
                    width: `${this.heading.length + 1}ch`,
                    duration: 2,
                    ease: `steps(${this.heading.length})`
                })
            }
        })

       

    }

};

export default TypeWriter;