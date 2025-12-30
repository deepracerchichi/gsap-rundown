import { useGSAP } from "@gsap/react";
import { IoArrowBackOutline } from "react-icons/io5";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";


export default function ReturnArrow({...props}) {

    useGSAP(()=> {
        gsap.fromTo(".bumpy", {
            y:0,
        },
        {
            y:-20,
            yoyo:true,
            ease:'back.inOut',
            repeat:-1,
            scale:3
        }
    )
    }, [])

    const navigate = useNavigate();
    const handlereturn = () => {
        navigate(-1)
    }

    return(
        <div className="bumpy my-10 mx-20 align-left" onClick={handlereturn}>
        <IoArrowBackOutline size={24} color="blue" {...props} />
        </div>
    )
}

