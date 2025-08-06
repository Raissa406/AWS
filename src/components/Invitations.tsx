import React from 'react'
import Image from './Image'
import Inputs from './Inputs'
import Button from './Button'
import Paragraphe from './Paragraphe'
import Bordure from './Bordure'

function Invitations() {
  return (
    <div className='p-10'>
       <Image src="/Vector(1).svg" Text="Finalisation" paragraph="Inviter 04 amis pour finaliser l’inscription " /> 

        <div className="flex flex-col gap-5  ">
            <Inputs type="Text" label='Numeros de telephone' placeholdor="Numero whatsapp" />
            <Inputs type="Text" placeholdor="Numero whatsapp" />
            <Inputs type="Text" placeholdor="Numero whatsapp" />
            <Inputs type="Text" placeholdor="Numero whatsapp" />
        </div>
        <div className="flex gap-4 bg-[#00539C] border border-[#E4E4E7] w-[20rem] h-10 rounded-[4px] text-[#FFFF] justify-center items-center mt-10 text-[1.4rem]">  
            <Button text="Creer le compte"/>
        </div>
        <div className="justify-center items-center text-center mt-12 text-[#71717A]">
            <Paragraphe paragraphe="By clicking continue, you agree to our Terms of Service and Privacy Policy."/>
        </div>

        <div className="flex gap-3 py-30">
            <Bordure color="bg-[#FFA2738F]"/>
            <Bordure color="bg-[#FFA273]"/>
            <Bordure color="bg-linear-to-r from-[#FFA273] to-[#00539C] "/>
            <Bordure color="bg-[#D9D9D9]"/>
        </div>

    </div>
  )
}

export default Invitations