import { useState } from "react"
import Link from "next/link"
import {List, ArrowDownLeft} from 'phosphor-react';

export function Header() {

  const [open, setOpen] = useState(false)
  let Links =[
    {name:"Blog",link:"/about"},
    {name:"Cases 4G",link:"/skills"},
    {name:"Sobre Nos",link:"/projects"},
    {name:"Falar com o Especialista",link:"/contact"},
    ]

  return(
    <header className={`fixed w-full bg-black text-white z-10 px-4
    lg:px-40 xl:px-60`}>
    <section className={` items-center justify-between py-4 px-7 
    md:flex md:px-10`}>
    <Link href="/" className='flex items-center font-bold text-xl cursor-pointer'>
      4Groot
    </Link>
    <div onClick={()=>setOpen(!open)} className='absolute cursor-pointer right-8 top-4 md:top-0 md:hidden duration-1000'>
    {open?<ArrowDownLeft size={32} />:<List size={32} />}
    </div>
    <ul className={`w-full z-[-1] left-0 pb-12 
    md:flex md:items-center md:static md:z-auto md:w-auto md:pb-0 md:pl-0 ${open ? 'top-15 ':'hidden'} transition-all duration-1000 ease-in`}>
    {
      Links.map((link)=>(
        <li key={link.name} className='shadow-md text-center text-md font-bold my-1 py-5
        md:shadow-none md:ml-8 md:my-0'>
          <Link href={link.link} className='text-gray-400 hover:text-green-600 transition-all duration-300 ease-in'>{link.name}</Link>
        </li>
      ))
    }
    </ul>
    </section>
    </header> 
  )
}