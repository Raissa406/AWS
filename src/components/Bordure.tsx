import React from 'react'
interface Bordure {
    color?:string;

}
const Bordure: React.FC<Bordure> = ({color}) => {
  return (
    <div className={`w-20 h-2 rounded-2xl bg-white-700 ${color}`}>
       
    </div>
  )
}

export default Bordure