import React from "react"
import { Link } from "react-router"
import Image from "./Image"
import Inputs from "./Inputs"
import Bordure from "./Bordure"
import Button from "./Button"
import Paragraphe from "./Paragraphe"

function Inscription() {
    return(
        <div className="p-10 md:p-2 md:px-10">
            <Image src="/Vector(1).svg" Text="Creation de compte" paragraph="Rentrez vos infos pour creer votre compte ." />
            <div className="flex flex-col gap-5 ">
                <Inputs type="Text" label="Email" placeholdor="abc@example.com" />
                <Inputs type="Text" label="Mot de passe" placeholdor="****************" />
            </div>
            <div className="flex gap-3 py-4">
                <Bordure color="bg-[#00539C]"/>
                <Bordure color="bg-[#D9D9D9]"/>
                <Bordure color="bg-[#D9D9D9]"/>
                <Bordure color="bg-[#D9D9D9]"/>
            </div>
            <div className="flex my-5 gap-15">
                <hr className="text-[#E4E4E7] w-55 h-1 mt-3 md:w-127"/>
                <div className="flex gap-2">
                    <h1>ou</h1>
                    <h1>avec</h1>
                </div>
                <hr className="text-[#E4E4E7] w-55 h-1 mt-3 md:w-127"/>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex gap-3 bg-[#FFFF] border border-[#E4E4E7] w-[20rem] h-10 rounded-[4px] text-[#18181B] justify-center items-center md:w-[75rem] ">
                    <img src="/Vector(2).svg" alt="" />
                    <Button text="Github"/>
                </div>

                <div className="flex gap-4 bg-[#FFFF] border border-[#E4E4E7] w-[20rem] h-10 rounded-[4px] text-[#18181B] justify-center items-center md:w-[75rem] ">
                    <img src="public/Google.svg" alt="" />
                    <Button text="Github"/>
                </div>
            </div>

           <div className="flex gap-4 bg-[#00539C] border border-[#E4E4E7] w-[20rem] h-10 rounded-[4px] text-[#FFFF] justify-center items-center mt-10 text-[1.4rem] md:w-[75rem]">  
                <Button text="Creer le compte"/>
            </div>
            
           
            <div className="justify-center items-center text-center mt-6">
                <Paragraphe paragraphe="By clicking continue, you agree to our Terms of Service and Privacy Policy."/>
            </div>

            <div className="flex gap-3 py-4 mt-6">
                <Bordure color="bg-[#FFA273]"/>
                <Bordure color="bg-[#D9D9D9]"/>
                <Bordure color="bg-[#D9D9D9]"/>
                <Bordure color="bg-[#D9D9D9]"/>
            </div>
        </div>
    )
}
export default Inscription