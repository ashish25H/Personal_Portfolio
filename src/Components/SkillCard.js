import React from "react";

const SkillCard = ({image,bgColor})=>{
    return(
        <div className="bg-[#CAD5E2] p-6 rounded-2xl  mb-10 flex justify-center items-center" >
            <img className="w-[180px]" src={image} alt='logoImg'/>
        </div>
    )
}

export default SkillCard;