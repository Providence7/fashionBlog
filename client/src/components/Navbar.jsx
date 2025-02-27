import React, { useState } from 'react'
import { IKImage } from 'imagekitio-react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
const Navbar = () => {
    const [open , setOpen] = useState(false)
  return (

    <div className='w-full h-14 md:h-20 flex items-center justify-between'>
        {/*LOGO*/}
        <Link to={"/"} >
        <div className=''>
          <span
            className='italic text-[#c4458f] font-bold  text-xl'
          >
            <span className='font-bold text-3xl'> F</span>ashion
          </span>
          <span className='text-[#0d1321] font-bold text-2xl '>
            <span className='font-bold text-3xl' >E</span>ra
          </span>
          </div>
        </Link>
        {/* MOBILE  */}
        <div className='md:hidden'>
            <div className='text-[#0d1321] cursor-pointer text-3xl font-bold'
            onClick={()=>setOpen((prev) => !prev)}>
                 {open ? "X" : "|||"}</div>
                 <div className={`w-full h-screen flex flex-col items-center  justify-center absolute top-16
         bg-[#cac7c7] transition-all
         gap-10 font-medium text-lg ease-in-out
          ${open ? "-right-0" :"-right-[100%]"}`}>
          <Link to="">Home</Link>
        <Link to="">Fashion A I</Link>
        <Link to="">Development</Link>
        <Link to="">forum</Link>
        <Link to="">About</Link>
       
        <SignedOut>
        <Link to="/login" className='py-2 px-4 rounded-3xl bg-[#c4458f]'>
            <button>Login 👋 </button>
        </Link>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
        </div>
        </div>
        {/* mobile menu lists */}
       
        {/* DESKTOP */}
        <div className='hidden md:flex text-[#0d1321] items-center gap-8 xl:gap-12 font-medium'>
        <Link to="">Home</Link>
        <Link to="">Fashion A I</Link>
        <Link to="">Development</Link>
        <Link to="">forum</Link>
        <Link to="">About</Link>

       
        <SignedOut>
        <Link to="/login" className='py-2 px-4 rounded-3xl bg-[#c4458f]'>
            <button>Login 👋 </button>
        </Link>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>

        </div>
    </div>
  )
}

export default Navbar