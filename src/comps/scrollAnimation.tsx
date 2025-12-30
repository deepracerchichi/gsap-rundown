import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function ScrollAnimation() {
    console.log("scroll animation IS RENDERING")
    useGSAP(()=> {


        gsap.to(".b", {
            scrollTrigger:{
                trigger:".b",
                toggleActions: "restart pause reverse pause",
                markers:true,
                start: "top center"
            },
            x:400,
            duration:4,
            rotation:360,
            scale:3,
        })
    },[])

    return (
        <div className="p-12 my-16">
           <div className="c w-10 h-10 rounded-[12px] bg-green-400 mb-90"></div>
           <div className="a w-10 h-10 rounded-[12px] bg-fuchsia-400 mb-90"></div>
           <div className="b w-10 h-10 rounded-[12px] bg-amber-400 mb-90"></div>
           <div className="d w-10 h-10 rounded-[12px] bg-violet-400 mb-90"></div>
           <div className="e w-10 h-10 rounded-[12px] bg-cyan-400 mb-90"></div>
           <div className="f w-10 h-10 rounded-[12px] bg-indigo-400 mb-90"></div>
        </div>
    )
}