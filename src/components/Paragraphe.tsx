import React from 'react'
interface Paragraphe{
    paragraphe:string;
}
const Paragraphe:React.FC<Paragraphe> = ({paragraphe}) => {
  return (
    <div>
        <p >{paragraphe}</p>
    </div>
  )
}

export default Paragraphe