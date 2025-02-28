'use client'
import navLinks from '@/constance/navLinks'
import { HOME_PAGE } from '@/constance/routes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className='text-white text-lg flex justify-center gap-9 items-center h-full w-[50%]'>

      {navLinks.map((navlink, index) => {

        const isActive = navlink.route == HOME_PAGE ? pathname === navlink.route : pathname.startsWith(navlink.route);
        return (<Link href={navlink.route} key={index} className={isActive ? "text-red-500" : ""}>{navlink.label}</Link>

        );



      })}
    </nav>
  )
}

export default Navbar