import React from 'react'
interface Bordure {
    color?:string;

}
const Bordure: React.FC<Bordure> = ({color}) => {
  return (
    <div className={`w-20 h-2 rounded-2xl bg-white-700 md:w-[18.2rem] ${color}`}>
       
    </div>
  )
}

export default Bordure