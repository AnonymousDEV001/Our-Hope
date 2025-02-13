import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-[#A02222] text-white px-8 py-6 flex-wrap'>
        <h1 className='font-bold text-2xl'>OUR HOPE</h1>
        <ul className='flex justify-center items-center gap-4 flex-wrap'>
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/about"}>
            <li>About</li>
            </Link>
          <Link href={"/help"}>
            <li>Help</li>
            </Link>
          <Link href='/contact'>
            <li>Contact</li>
          </Link>
        </ul>
        <ul className='flex justify-center items-center gap-4'>
          <Link href={"/donors"}>
            <li>Search Info</li>
          </Link>
        </ul>
    </nav>
  )
}

export default Navbar