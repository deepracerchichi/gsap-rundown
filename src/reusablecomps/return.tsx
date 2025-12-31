// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


export default function ReturnArrow({...props}) {

    // useGSAP(()=> {
        
    
    // }, [])

    const navigate = useNavigate();
    const handlereturn = () => {
        navigate(-1)
    }

    return(
        <div className="bumpy" onClick={handlereturn}>
        <IoArrowBackOutline size={24} color="blue" {...props}/>
        </div>
    )
}

