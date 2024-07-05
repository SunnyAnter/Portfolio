'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Mail, BriefcaseBusiness, House, User, Instagram, Github, Linkedin } from 'lucide-react';

export default function SideNav() {
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
    <div className="w-[15%] bg-[rgb(46,46,53)] h-screen shrink-0 fixed top-0 left-0 justify-center items-center hidden lg:flex">
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
            <Link
              key={href}
              className={`nav-link w-[90%] text-sm ${pathname === href ? 'text-white bg-[rgb(33,33,40)] drop-shadow-xl' : 'text-gray-400'} hover:text-white p-2 rounded-md flex items-center gap-2`}
              href={href}
            >
              <Icon className="icon" size={14} style={{color: pathname === href ? 'rgb(204,85,0)': 'inherit'}}/> {label}
            </Link>
          ))}
        </div>
        <div className="w-full flex flex-col gap-2" id="socials">
          <h1 className="text-md text-white pb-[5%]">Socials</h1>
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              className="w-[90%] text-sm text-gray-400 hover:text-white p-2 rounded-md flex items-center gap-2"
              href={href}
              target="_blank"
            >
              <Icon size={14}/> {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
