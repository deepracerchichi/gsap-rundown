import { useGSAP } from "@gsap/react"
import { Link } from "react-router-dom"
import gsap from "gsap"

export const animations = [
    {
        title: "gsapto",
        description: "learning gsap to",
        path: "/gsapto"
    },
    {
        title: "scrolltrigger",
        description: "scroll trigger practice",
        path: "/scrollanimation"
    },
    {
        title: "gsapfrom",
        description: "gsap from practice",
        path: "/gsapfrom"
    },
    {
        title: "stagger",
        description: "gsap stagger practice",
        path: "/gsapstag"
    },
    {
        title: "text",
        description: "gsap text practice",
        path: "/gsaptext"
    }
]

export default function Home () {

    // useGSAP(()=> {
    //     gsap.to("#bumpy", {
    //         x:200,
    //         y:-300,
    //         rotation:360,
    //         yoyo:true,
    //         repeat:-1,
    //         duration:2,
    //         ease:"back.inOut"
    //     })
    // },[])

    useGSAP(()=> {
        console.log("GSAP HOOK RUNNING")
        console.log("Elements found:", document.querySelectorAll(".bumpy"))
        
        gsap.to(".bumpy", {
            y:-20,
            duration: 2,
            // backgroundColor: "yellow",
            repeat:-1,
            // rotation:180,
            skewX:20,
            yoyo:true
        })

        gsap.fromTo(".stag", {
            y:-20,
            
            
        },

        {
            y:0,
            repeat:-1,
            // yoyo:true,
            stagger:0.07,
            ease:"back.inOut"
        }
    )

    },[])

    return(
    <main className="min-h-screen">
        <ul className="flex justify-center gap-10 p-5 bg-fuchsia-400 max-w-200 h-10 mx-auto my-10 rounded-[23px] items-center">
            {animations.map((animation, index)=>(
                <li
                    key={index}
                    className="list-none"
                >
                    <Link
                        to={animation.path}
                        className=" m-5 font-mono text-blue-950"
                    >
                        {animation.title}
                    </Link>
                </li>
            ))}
        </ul>
        <div className="flex justify-center items-center min-h-[50vh]">
        <h1 className="text-white text-8xl font-arvo">
            N
            <h1 className="inline-block text-rose-500 bg-rose-200">e</h1>
            ne's <h1 className="bumpy inline-block text-fuchsia-500">A</h1>
            <h1 className="stag inline-block">n</h1>
            <h1 className="stag inline-block">i</h1>
            <h1 className="stag inline-block">m</h1>
            <h1 className="stag inline-block">a</h1>
            <h1 className="stag inline-block">t</h1>
            <h1 className="stag inline-block">i</h1>
            <h1 className="stag inline-block">o</h1>
            <h1 className="stag inline-block">n</h1>
            <h1 className=" inline-block">   </h1>
            <h1 className=" inline-block"> Practice</h1>
        </h1>
        </div>
        <div className="flex justify-center items-center min-h-[50vh]"></div>
    </main>
    )
}