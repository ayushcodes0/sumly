import React from 'react'
import { FileText } from 'lucide-react';
import NavLink from './NavLink';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';


const Header = () => {
    const isLoggedIn = false;
  return (
    <nav className='container flex items-center justify-between lg:flex py-4 lg:px-8 px-2 mx-auto'>

      <div className='flex gap-0'>
        <NavLink href='/' className='flex items-center gap-1' >
        <div className=' text-gray-900 hover:rotate-[20deg] transform transition duration-200 ease-in-out'><FileText /></div>
        <span className='font-extrabold text-gray-900 lg:text-xl'>Sumly</span></NavLink>
      </div>

      <div className='flex lg:justify-center gap-4 lg:gap-12 lg:items-center'>
        <NavLink href='/#pricing'>Pricing</NavLink>
        <SignedIn><NavLink href='/dashboard'>Your Summaries</NavLink></SignedIn>
      </div>

      <div className='flex lg:justify-end gap-2'>
        <SignedIn>
          <div className='flex gap-2 items-center'>
            <NavLink href='/upload'>Upload a PDF</NavLink>
            <div>Pro</div>
            <SignedIn>
              <UserButton />
            </SignedIn>
           </div>
        </SignedIn>
        <SignedOut>
            <NavLink href='/sign-in'>Sign In</NavLink>
        </SignedOut>
      </div>
    </nav>
  )
}

export default Header


