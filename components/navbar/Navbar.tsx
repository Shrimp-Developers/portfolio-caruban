"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import LanguageToggle from "@/components/toggle-languange/ToggleLanguange";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
    fixed top-4 z-50
    flex items-center justify-between
    transition-all duration-300 px-8 py-3
    ${
      scrolled
        ? "left-1/2 -translate-x-1/2 w-[800px] px-6 py-3 bg-white/60 backdrop-blur-xl shadow-lg rounded-2xl border border-white/20"
        : "left-0 right-0 w-full px-6 py-3 bg-transparent"
    }
  `}
    >
      <div className="flex items-center gap-3">
        <Image
          src="/icon-caruban.png"
          alt="Logo"
          width={40}
          height={40}
          priority
        />
        <div className="flex flex-col">
          <span className="text-sm font-bold text-black">Caruban</span>
          <span className="text-sm text-gray-500">TECHNOLOGY</span>
        </div>
      </div>

      <ul className="flex space-x-6 text-black font-medium">
        <li>
          <a href="#" className="hover:text-gray-500">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-500">
            Tentang Kami
          </a>
        </li>
        <li>
          <a href="#project" className="hover:text-gray-500">
            Projects
          </a>
        </li>
      </ul>

      <div className="flex items-center gap-2">
        <LanguageToggle />
        <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-3 rounded transition">
          Hubungi Kami
        </button>
      </div>
    </nav>
  );
}
