import Link from 'next/link'
import React from 'react'
import { FileText } from 'lucide-react';
import { Button } from '../ui/button';
import NavLink from './NavLink';


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
        {isLoggedIn && <NavLink href='/dashboard'>Your Summaries</NavLink>}
      </div>

      <div className='flex lg:justify-end gap-2'>
        {isLoggedIn?<div className='flex gap-2 items-center'>
            <NavLink href='/upload'>Upload a PDF</NavLink>
            <div>Pro</div>
            <Button>User</Button>
        </div>
        :<div>
            <NavLink href='/sign-in'>Sign In</NavLink>
        </div>}
      </div>
    </nav>
  )
}

export default Header


