'use client';
import Link from "next/link"
import { Mail, BriefcaseBusiness, House, User, Instagram, Github, Linkedin } from 'lucide-react';

export default function SideNav() {
  return (
    <div className="w-[15%] bg-[rgb(46,46,53)] h-screen shrink-0 fixed top-0 left-0 flex justify-center items-center">
      <div className="h-[90%] w-[80%] flex flex-col items-center" id="main-box">
        <div className="flex w-full items-center gap-3" id="name-work">
          <div className="w-12 h-12 rounded-full bg-white shrink-0" />
          <div className="flex flex-col">
            <h1 className="text-md text-white">Sunny Eli Anter</h1>
            <h2 className="text-sm text-gray-400">Web Developer</h2>
          </div>
        </div>
        <div className="pt-[25%] pb-[25%] w-full flex flex-col gap-2"id="links">
          <Link className="nav-link w-[90%] text-sm text-gray-400 hover:text-white focus:bg-[rgb(33,33,40)] focus:drop-shadow-xl focus:text-white p-2 rounded-md flex items-center gap-2" href="/" ><House className="icon" size={14}/> Home</Link>
          <Link className="nav-link w-[90%] text-sm text-gray-400 hover:text-white focus:bg-[rgb(33,33,40)] focus:drop-shadow-xl focus:text-white p-2 rounded-md flex items-center gap-2" href="/about"><User className="icon" size={14}/>About</Link>
          <Link className="nav-link w-[90%] text-sm text-gray-400 hover:text-white focus:bg-[rgb(33,33,40)] focus:drop-shadow-xl focus:text-white p-2 rounded-md flex items-center gap-2" href="/experience"><BriefcaseBusiness className="icon" size={14}/>Experience</Link>
          <Link className="nav-link w-[90%] text-sm text-gray-400 hover:text-white focus:bg-[rgb(33,33,40)] focus:drop-shadow-xl focus:text-white p-2 rounded-md flex items-center gap-2"  href="/contact"><Mail className="icon" size={14}/>Contact</Link>
        </div>
        <div className="w-full flex flex-col gap-2" id="socials">
          <h1 className="text-md text-white pb-[5%]">Socials</h1>
          <Link className="w-[90%] text-sm text-gray-400 hover:text-white p-2 rounded-md flex items-center gap-2" href="https://www.instagram.com/sunny.anter/" target="_blank"><Instagram className="icon" size={14}/> Instagram</Link>
          <Link className="w-[90%] text-sm text-gray-400 hover:text-white p-2 rounded-md flex items-center gap-2" href="https://github.com/SunnyAnter" target="_blank"><Github className="icon" size={14}/>GitHub</Link>
          <Link className="w-[90%] text-sm text-gray-400 hover:text-white p-2 rounded-md flex items-center gap-2" href="https://www.linkedin.com/in/sunnyelianter/" target="_blank"><Linkedin className="icon" size={14}/>LinkedIn</Link>
        </div>
      </div>
    </div>)
}
