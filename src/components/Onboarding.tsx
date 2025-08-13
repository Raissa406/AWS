import React from 'react'
import { Link } from 'react-router'
import Image from './Image'
import Button from './Button'
import Paragraphe from './Paragraphe'
import Bordure from './Bordure'

function Onboarding() {
  return (
    <div className='p-10 md:p-2 md:px-10'>
        <Image src="/Vector(1).svg" Text="Finalisation" paragraph="Inviter 04 amis pour finaliser l’inscription " /> 
        <img className='md:w-[50rem] md:ml-50' src="public/images 2.svg" alt="" />

        <div className="flex gap-4 bg-[#00539C] border border-[#E4E4E7] w-[20rem] h-10 rounded-[4px] text-[#FFFF] justify-center items-center mt-10 text-[1.4rem] md:w-[50rem] md:ml-50">  
            <Button text="Creer le compte"/>
        </div>

        <div className="justify-center items-center text-center mt-12 text-[#71717A]">
            <Paragraphe paragraphe="By clicking continue, you agree to our Terms of Service and Privacy Policy."/>
        </div>
         <div className="flex gap-3 py-40 md:justify-center md:items-center md:py-20">
            <Bordure color="bg-[#FFA2738F]"/>
            <Bordure color="bg-[#FFA273]"/>
            <Bordure color="bg-linear-to-r from-[#FFA273] to-[#00539C] "/>
            <Bordure color="bg-[#00539C]"/>
        </div>
    </div>
  )
}

export default Onboarding