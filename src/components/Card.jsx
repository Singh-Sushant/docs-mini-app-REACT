// import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({data,reference}) => {
  console.log(data);
  return (
    
    <>
        <motion.div drag dragConstraints={reference} dragElastic={1.2} className='relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden'>
            <div><FaFileAlt/></div>
            <p className="text-sm leading-tight mt-5 ">{data.desc}</p>
            <div className="footer absolute bottom-0 left-0  w-full ">
             <div className="px-8 py-5 flex items-center justify-between w-full">
             <h5>{data.fileSize}</h5>
              <span className="w-8 h-8 rounded-full  bg-zinc-700 flex justify-center items-center">
              {data.close ? <IoMdClose/> : <GoDownload size=".8rem" color="white"/>}
              </span>
              
             </div>
             {
              data.tag.isOpen &&
              (<div className={`w-full h-12 ${data.tag.tagColour==="green" ? "bg-green-600" : "bg-sky-600"} flex justify-center items-center`}  >
              <h4 className="text-center text-sm mb-1">{data.tag.tagTitle}</h4> 
             </div>)
             
             }
             

            
             
            </div>
        </motion.div>
    </>
  )
}

export default Card