
import React from 'react'
import { Link } from 'react-router'
import Image from './Image'
import Button from './Button'
import Paragraphe from './Paragraphe'
import Bordure from './Bordure'

function Verification() {
  return (
    <div className='p-10 py-30 md:p-0 md:px-10'>
      <Image src="/Vector(1).svg" Text="Verification OTP" paragraph="Rentrez vos infos pour creer votre compte ." />

      <div className="flex gap-5 justify-center items-center md:gap-25">
        <div className="w-18 h-18 border border-[#E4E4E7] rounded-[0.2rem] bg-[#F4F4F580] md:w-30 h-30"></div>
        <div className="w-18 h-18 border border-[#E4E4E7] rounded-[0.2rem] bg-[#F4F4F580] md:w-30 h-30"></div>
        <div className="w-18 h-18 border border-[#E4E4E7] rounded-[0.2rem] bg-[#F4F4F580] md:w-30 h-30"></div>
        <div className="w-18 h-18 border border-[#E4E4E7] rounded-[0.2rem] bg-[#F4F4F580] md:w-30 h-30"></div>
      </div>

      <div className="flex gap-4 bg-[#00539C] border border-[#E4E4E7] w-[20rem] h-10 rounded-[6px] text-[#FFFF] justify-center items-center mt-8 text-[1.4rem] md:w-[75rem]">  
        <link  href="/invitations" />  <Button text="Creer le compte"/> <link />
      </div>

      <div className="justify-center items-center text-center mt-12 text-[#71717A]">
        <Paragraphe paragraphe="By clicking continue, you agree to our Terms of Service and Privacy Policy."/>
      </div>

     <div className="flex gap-3 py-55 md:py-10 md:justify-center items-center">
        <Bordure color="bg-[#FFA2738F]"/>
        <Bordure color="bg-[#FFA273]"/>
        <Bordure color="bg-[#D9D9D9]"/>
        <Bordure color="bg-[#D9D9D9]"/>
      </div>
        
    </div>
  )
}

export default Verification