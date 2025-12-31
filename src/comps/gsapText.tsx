import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import ReturnArrow from "../reusablecomps/return"

export default function GsapText() {

    
    useGSAP(()=> {

        const made = new SplitText(".made", {
        type:"chars, words"
        })

        gsap.to(made.chars,
            {
            yPercent:100,
            duration: 1.8,
            ease:'expo.inOut',
            stagger:0.06,
            
        })
        const slide = new SplitText(".slide", {
            type:"chars"
        })

        slide.chars.forEach((char) => char.classList.add("text-gradient"));

        gsap.to(".slide", {
            y:0,
            ease:'expo.in',
            // stagger:0.8,
            opacity:1,
            scrub:true
        })

        const Linesplit = new SplitText(".new",
            {
                type:"lines"
            })
        gsap.fromTo(Linesplit.lines, {
            opacity:0,
            y:20
        }, {
            opacity:1,
            y:0,
            delay:1,
            stagger:0.1
        })
    },[])


    return(
        <>
        <ReturnArrow className="my-12 mx-15"/>
        <div className="p-12 my-16" >
            <h1 className="slide text-8xl font-stack my-15 text-center my-10 opacity-0 translate-y-10">Build. Animate. Ship</h1>
            <h1 className="made text-5xl font-roboto my-15 text-center">Typography in motion brings ideas to life</h1>
            <h1 className="new text-8xl font-roboto my-10"> The quick brown fox jumps over the lazy dog</h1>
            <h1 className="new text-8xl font-roboto my-10">Pixels dancing across the screen</h1>
        </div>
        </>
    )
}