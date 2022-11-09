import { gsap } from 'gsap';

class TypeWriter {


    constructor(headline, selector) {

        this.heading = headline;
        this.elemSelector = selector;

    }

    setInitialValues() {
        gsap.set(".heading__blinkCursorEnd", {
            backgroundColor: "#F28705",
            width: "2px",
            height: "35px"
        })

        gsap.set(this.elemSelector, {
            width: "2px",
            color: "transparent"
        });

        gsap.set(".heading__blinkCursorStart", {
            backgroundColor: "#F28705",
            width: "2px",
            height: "35px",
            opacity: 1

        });

        gsap.to(".heading__blinkCursorStart", {
            backgroundColor: "transparent",
            duration: .5,
            repeat: 5,
            yoyo: true,
            ease: "steps(1)",
            onComplete: () => {
                this.makeTypeWritingEffect();
            }
        });
    }

    //Called inside setInitialValues
    makeTypeWritingEffect() {

        gsap.to(".heading__blinkCursorStart", {
            opacity: 0,
            duration: .1
        })

        gsap.to(".heading__blinkCursorEnd", {
            backgroundColor: "transparent",
            duration: .5,
            repeat: -1,
            yoyo: true,
            ease: "steps(1)"
        });

        gsap.to(this.elemSelector, {
            color: "#F28705"
        })

        //*Check length to animate and adjust duration acordionly
        let durationTime = 0;
        if (this.heading.length > 10)
            durationTime = 2;

        else
            durationTime = .8;


        gsap.to(this.elemSelector, {
            width: `${this.heading.length + 1}ch`,
            duration: durationTime,
            ease: `steps(${this.heading.length})`

        })
    }

};

export default TypeWriter;