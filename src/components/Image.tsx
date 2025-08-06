import React from 'react'
interface Image{
    Text:string;
    src: string;
    alt?: string;
    paragraph:string
}

const Image:React.FC<Image> = ({Text,src,alt,paragraph}) => {
  return (
    <div className='flex flex-col py-10 justify-center items-center '>
        <img className='w-40 h-10 ' src={src} alt={alt}  />
        <b><h1 className='text-[#18181B] text-[1.9em]  mt-8 pl-10'>{Text}</h1></b>
        <p className='text-[#71717A] xxxxx  '>{paragraph}</p>
    </div>
  )
}

export default Image