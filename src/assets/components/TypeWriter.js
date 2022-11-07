import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

class TypeWriter {

    constructor(headline, selector, trigger) {
        gsap.registerPlugin(ScrollTrigger);

        this.heading = headline;
        this.elemSelector = selector;
        let tiggerElem = trigger;       
        


        if (this.elemSelector === "#aboutHeading" || this.elemSelector === "#projectsHeading") {            

            this.makeTypeWritingEffect();

        }
        else {

            gsap.set(this.elemSelector, {
                width: `${this.heading.length + .2}ch`,
                borderRight: "2px solid rgba(214,90,49,.83)"
            });

            ScrollTrigger.create({

                trigger: tiggerElem,
                start: "70px 95%",
                markers: true,
                onEnter: () => this.makeTypeWritingEffect()

            })
        }

    }

    makeTypeWritingEffect() {  
        
        gsap.set(this.elemSelector, {
            width: `${this.heading.length + .2}ch`,
            borderRight: "2px solid rgba(214,90,49,.83)"
        });    


        gsap.from(this.elemSelector, {
            width: "0ch",
            duration: 2,
            ease: `steps(${this.heading.length})`
        })

        gsap.to(this.elemSelector, {
            borderRightColor: "transparent",
            duration: .5,
            repeat: -1,
            yoyo: true,
            ease: "steps(1)"
        });

    }




};

export default TypeWriter;