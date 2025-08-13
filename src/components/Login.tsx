import React from 'react'
import { Link } from 'react-router';
interface Login{
    h1?:string;
    titre:string;
    paragraphe:string;
    src:string;
    alt?:string;
    link:string;
}

const Worketyamo:React.FC<Login> = ({h1,titre,paragraphe,src,alt,link}) => {
  return (
    <Link to={link}>
        <b><h1 className='text-[#00539C] text-[3rem]'>{h1}</h1></b>
        <div className='flex gap-4'>
          <h1 className='w-18 h-18 border border-[#8080808C] rounded-[1.5rem]'><img  className='flex ml-4 mt-3 w-10' src={src} alt={alt} /></h1> 

          <div className='flex-1 text-[#8080808C] text-[1.50rem]'>
            <h3>{titre}</h3>
            <p>{paragraphe}</p>
          </div>
        </div>

        
    </Link>
  )
}

export default Worketyamo