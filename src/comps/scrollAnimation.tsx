import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ReturnArrow from "../reusablecomps/return"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

export default function ScrollAnimation() {
    console.log("scroll animation IS RENDERING")

    const scrollRef=useRef<HTMLDivElement>(null)
    useGSAP(()=> {
         if (!scrollRef.current) return;

        gsap.to(".j", {
            scrollTrigger:{
                trigger:".j",
                toggleActions: "restart pause reverse pause",
                // markers:true,
                start: "top center"
            },
            x:400,
            duration:4,
            rotation:360,
            scale:3,
        })


        const sweets = gsap.utils.toArray(scrollRef.current.children);
        sweets.forEach((box) => {
            gsap.to(box,{
                x:400,
                rotation:150,
                borderRadius:'100%',
                scale:1.5,
                scrollTrigger: {
                    trigger:box,
                    start:'bottom bottom',
                    end: 'top 20%',
                    scrub: true
                },
                ease:'circ.inOut'
            })
        })
    },{scope:scrollRef})

    return (
        <>
        <ReturnArrow className="mx-20 my-15" />
        <div className="p-12 my-16" >
            <h1 className="text-8xl font-roboto my-10">From concept to creation in one forty three steps</h1>
            <h1 className="text-8xl font-roboto my-10">Smooth animations make everything better</h1>
            <h1 className="text-8xl font-roboto my-10">Crafting digital experiences</h1>
        </div>
        <div className="p-12 my-16" ref={scrollRef}>
            
           <div className="c w-10 h-10 rounded-[12px] bg-green-400 mb-10"></div>
           <div className="a w-10 h-10 rounded-[12px] bg-fuchsia-400 mb-10"></div>
           <div className="b w-10 h-10 rounded-[12px] bg-amber-400 mb-10"></div>
           <div className="d w-10 h-10 rounded-[12px] bg-violet-400 mb-10"></div>
           <div className="e w-10 h-10 rounded-[12px] bg-cyan-400 mb-10"></div>
           <div className="f w-10 h-10 rounded-[12px] bg-indigo-400 mb-10"></div>
        </div>
        <div className="j w-10 h-10 rounded-[12px] bg-amber-400 mb-90"></div>
        </>
    )
}