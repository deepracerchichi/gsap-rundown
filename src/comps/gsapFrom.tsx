import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export default function gsapFrom() {
    useGSAP(()=> {
        gsap.fromTo("#yo", 
            {   y:0,
                x:0,
                backgroundColor:"green",
                borderRadius:0,

            },
            {   x:50,
                y:100,
                borderRadius:100,
                yoyo:true,
                skewX:20,
                repeat:-1,
                backgroundColor:"blue",
                scale:3,
                duration:4,
            }
        )

        gsap.fromTo("#ho", 
            {   y:-20,
                color:"green",
                rotation:-30
            },
            {   
                y:-50,
                yoyo:true,
                repeat:-1,
                color:"blue",
                ease:'back.inOut',
                duration: 4,
                rotationX:50,
                rotation:60
            }
        )
    }, [])
    return(
        <div className="flex justify-center items-center min-h-[50vh]">
            <h1 id="ho" className=" inline-block mb-20 text-white text-8xl">s</h1><h1 className="mb-20 text-white text-8xl">easoning</h1>
            <div id="yo" className="mt-20 w-20 h-20 bg-amber-400 rounded-md"></div>
        </div>
    )
}