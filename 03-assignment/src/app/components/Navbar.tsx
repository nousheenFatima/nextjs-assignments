import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
        <nav className='bg-red-900 h-[58px] px-4 text-white flex justify-between items-center'>
            <div>
                <h1 className='text-blue-300 font-bold text-2xl'><a href='#!'>Sweet Tooth</a></h1>
            </div>
            <div>
                <ul className='flex space-x-6'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/flavours">Flavours</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            <div>
                <ul className='flex space-x-6'>
                    <li><Link href="#!">Signup</Link></li>
                    <li><Link href="#!">Login</Link></li>
                </ul>
            </div>
        </nav>
    </div>
   )
}

export default Navbar