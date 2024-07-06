'use client';
import Link from "next/link"
import { Mail, BriefcaseBusiness, House, User, Instagram, Github, Linkedin, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function SideNavMobile() {

  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home", icon: House },
    { href: "/about", label: "About", icon: User },
    { href: "/experience", label: "Experience", icon: BriefcaseBusiness },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  const socialLinks = [
    { href: "https://www.instagram.com/sunny.anter/", label: "Instagram", icon: Instagram },
    { href: "https://github.com/SunnyAnter", label: "GitHub", icon: Github },
    { href: "https://www.linkedin.com/in/sunnyelianter/", label: "LinkedIn", icon: Linkedin },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
       <button className="burger absolute bottom-6 right-6 rounded-full h-14 w-14 bg-black text-white flex justify-center items-center drop-shadow-xl" ><Menu color="white" size={24} strokeWidth="3px"/></button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-[rgb(46,46,53)] pt-[10%]">
       <div className="h-[90%] w-[80%] flex flex-col items-center" id="main-box">
        <div className="flex w-full items-center gap-3" id="name-work">
          <div className="w-12 h-12 rounded-full bg-white shrink-0" />
          <div className="flex flex-col">
            <h1 className="text-md text-white">Sunny Eli Anter</h1>
            <h2 className="text-sm text-gray-400">Web Developer</h2>
          </div>
        </div>
        <div className="pt-[25%] pb-[25%] w-full flex flex-col gap-2" id="links">
            {navLinks.map(({ href, label, icon: Icon }) => (
          <SheetClose asChild key={href}>
            <Link
              className={`nav-link w-[90%] text-sm ${pathname === href ? 'text-white bg-[rgb(33,33,40)] drop-shadow-xl' : 'text-gray-400'} p-2 rounded-md flex items-center gap-2`}
              href={href}
            >
              <Icon className="icon" size={14} style={{color: pathname === href ? 'rgb(204,85,0)': 'inherit'}}/> {label}
            </Link>          
          </SheetClose>
          ))}
        </div>
        <div className="w-full flex flex-col gap-2" id="socials">
          <h1 className="text-md text-white pb-[5%]">Socials</h1>
            {socialLinks.map(({ href, label, icon: Icon }) => (
          <SheetClose key={href}>          
            <Link
              className="nav-link w-[90%] text-sm text-gray-400 p-2 rounded-md flex items-center gap-2"
              href={href}
              target="_blank"
            >
              <Icon size={14}/> {label}
            </Link>
          </SheetClose>
          ))}
        </div>
      </div>
      </SheetContent>
    </Sheet>
  )
}
