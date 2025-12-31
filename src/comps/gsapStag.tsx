import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export default function GsapStag(){

    useGSAP(
        ()=>{
            gsap.to(".swag", {
                y:250,
                rotation:360,
                borderRadius: '100%',
                repeat:-1,
                yoyo:true,
                // stagger:0.05
                stagger:{
                    amount:1.5,
                    grid: [2, 1],
                    axis:'y',
                    ease:'circ.in0ut',
                    from:'center'
                },
            })
        }
        ,[]
    )
    return(
        <div className="flex flex-row mx-auto my-15 justify-center ">
            <div className="swag rounded-md w-30 h-30 bg-orange-500"></div>
            <div className="swag rounded-md w-30 h-30 bg-amber-400"></div>
            <div className="swag rounded-md w-30 h-30 bg-orange-300"></div>
            <div className="swag rounded-md w-30 h-30 bg-amber-200"></div>
            <div className="swag rounded-md w-30 h-30 bg-orange-300"></div>
            <div className="swag rounded-md w-30 h-30 bg-amber-400"></div>
            <div className="swag rounded-md w-30 h-30 bg-orange-500"></div>
            {/* <div className="swag rounded-md w-30 h-30 bg-orange-950"></div> */}
        </div>
    )
}