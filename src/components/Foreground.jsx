import { useRef } from "react";
import Card from "./Card"


const Foreground = () => {
  const reference = useRef(null);
  const data =[
    {
      desc:"This is a dummy text for file 1",
      fileSize : '0.6 mb',
      close : true,
      tag :{
        isOpen:false,
        tagTitle:'Download Now',
        tagColour:'green'
      }
    },
    {
      desc:"This is a dummy text for file 2",
      fileSize : '0.8 mb',
      close : false,
      tag :{
        isOpen:true,
        tagTitle:'Download Now',
        tagColour:'green'
      }
    },
  ];
  return (
    <div ref={reference} className='fixed w-full z-[3] h-screen flex gap-5 p-3'>
       {data.map((item,index)=>(
        <Card data={item} reference={reference} key={index}/>
       ))}
        
    </div>

  )
}

export default Foreground