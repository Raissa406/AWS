import React from 'react'
import Login from './Login'

function LoginPage() {
  return (
    <div className='p-10 hidden md:block'>
        <Login h1="worketyamo " titre='Inscription' paragraphe='Entrez vos informations personnelles.' link='/inscription' src='public/user.svg' alt='' />
        <div className='bg-gray-400 w-px h-10 ml-8 vertical-line'></div>

        <Login h1=" " titre='Validation OTP' paragraphe='Confirmez votre adresse e-mail.' src='public/mail.svg' alt='' link='/otp' />
        <div className='bg-gray-400 w-px h-10 ml-8 vertical-line'></div>

        <Login  titre='Invitez vos amis ' paragraphe='Envoyez des invitations à vos amis.' src='public/user-round-plus.svg' alt='' link='/invitations'/>
        <div className='bg-gray-400 w-px h-10 ml-8 vertical-line'></div>

        <Login titre='Bienvenu à worketyamo' paragraphe='Votre inscription est terminée.' src='public/user.svg' alt='' link='/welcome'/>

        <div className='mt-20 flex'>
            <div className='flex flex-1'>
                <img src="public/arrow-left (1).svg" alt="" />
                <h1 className='text-[#00539C] text-[1.4rem]'>Vos détails</h1>
            </div>
            <h2 className='flex-1 text-[#00539C] mr-10 text-[1.4rem]'></h2>
        </div>
        
    </div>
    
  )
}

export default LoginPage