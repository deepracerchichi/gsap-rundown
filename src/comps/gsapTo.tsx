import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ReturnArrow from "../reusablecomps/return"
import { useNavigate } from "react-router-dom"

export default function GsapTo() {
    console.log("GSAP IS RENDERING")
    
    useGSAP(()=>{
        gsap.to("#greeny", {
            x:200,
            y:250,
            repeat:-1,
            scale:3,
            yoyo:true,
            ease:'power-in',
            rotation:360,
            duration:3,
        })
    }, [])
    
    

    return (
        <>
        {/* <div className="mt-15">
            <div className="bluey" className="w-20 h-20 rounded-md bg-blue-700 my-10"></div>
        </div> */}
        
        <div className="mt-15">
            <ReturnArrow className="items-center mx-15 my-auto"/>
            <div id="greeny" className="w-20 h-20 rounded-full bg-green-400 my-10"></div>
        </div>
        </>
    )
}