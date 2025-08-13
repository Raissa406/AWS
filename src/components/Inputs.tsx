import React from 'react'
interface Inputs {
   label?:string;
   type:string;
   placeholdor:string;
}
const Inputs:React.FC<Inputs> = ({label, type,placeholdor}) => {
  return (
    <div>
        <h1 className='text-[1.2rem] text-[#09090B]'>{label}</h1>
        <input className='border border-[#E4E4E7] bg-[#F4F4F5] px-14 h-10 rounded-[4px] md:w-[75rem]' type={type} placeholder={placeholdor } />
    </div>
  )
}
export default Inputs