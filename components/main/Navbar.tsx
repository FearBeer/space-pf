import { Socials } from "@/constants/skills";
import Image from "next/image";
import navLogo from "@/public/NavLogo.png";

export default function Navbar() {
  return (
    <nav className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2a0e61] bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row gap-1 items-center"
        >
          <Image
            src={navLogo}
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold hidden md:block text-gray-300">
            Косов Руслан
          </span>
        </a>
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex w-full h-auto items-center justify-around border border-[#7042f860] bg-[#03001460] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              Обо мне
            </a>
            <a href="#skills" className="cursor-pointer">
              Навыки
            </a>
            {/* <a href="#projects" className="cursor-pointer">
              Projects
            </a> */}
          </div>
        </div>
        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              key={social.name}
              width={24}
              height={24}
              alt={social.name}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}
