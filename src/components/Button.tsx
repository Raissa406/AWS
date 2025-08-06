import React from 'react'
interface Button{
    src?:string;
    alt?:string;
    color?:string;
    text:string;
}
const Button:React.FC<Button> = ({text,src,alt,color}) => {
  return (
    <div>
        <img src={src} alt={alt} />
        <button className={` bg-white-700 ${color} `} >{text}</button>
    </div>
  )
}

export default Button