
import React from 'react'
import Image from './Image'
import Button from './Button'
import Paragraphe from './Paragraphe'
import Bordure from './Bordure'

function Verification() {
  return (
    <div className='p-10 py-30'>
      <Image src="/Vector(1).svg" Text="Verification OTP" paragraph="Rentrez vos infos pour creer votre compte ." />

      <div className="flex gap-5 justify-center items-center ">
        <div className="w-18 h-18 border border-[#E4E4E7] rounded-[0.2rem] bg-[#F4F4F580]"></div>
        <div className="w-18 h-18 border border-[#E4E4E7] rounded-[0.2rem] bg-[#F4F4F580]"></div>
        <div className="w-18 h-18 border border-[#E4E4E7] rounded-[0.2rem] bg-[#F4F4F580]"></div>
        <div className="w-18 h-18 border border-[#E4E4E7] rounded-[0.2rem] bg-[#F4F4F580]"></div>
      </div>

      <div className="flex gap-4 bg-[#00539C] border border-[#E4E4E7] w-[20rem] h-10 rounded-[6px] text-[#FFFF] justify-center items-center mt-8 text-[1.4rem]">  
          <Button text="Creer le compte"/>
      </div>

      <div className="justify-center items-center text-center mt-12 text-[#71717A]">
        <Paragraphe paragraphe="By clicking continue, you agree to our Terms of Service and Privacy Policy."/>
      </div>

     <div className="flex gap-3 py-55">
        <Bordure color="bg-[#FFA2738F]"/>
        <Bordure color="bg-[#FFA273]"/>
        <Bordure color="bg-[#D9D9D9]"/>
        <Bordure color="bg-[#D9D9D9]"/>
      </div>
        
    </div>
  )
}

export default Verification