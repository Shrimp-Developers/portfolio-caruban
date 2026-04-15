"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen py-28 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Title */}
      <div className="flex gap-2 flex-col items-center">
        <h1 className="text-2xl font-bold">
          Solusi Pengembangan Web dan Aplikasi <br />
          Terintegrasi untuk Bisnis Anda
        </h1>
        <p className="max-w-2xl">
          Kami membantu transformasi digital bisnis Anda melalui pengembangan
          perangkat lunak yang skalabel, desain yang intuitif, dan teknologi
          terkini
        </p>
      </div>

      {/* Illustration */}
      <div className="">
        <Image
          src="/logo-hero.png"
          alt="Hero"
          width={600}
          height={600}
          priority
        />
      </div>

      {/* Floating Cards
      <div className="absolute top-[25%] left-[5%] w-56 h-32 bg-gray-300 rounded-2xl shadow-md"></div>
      <div className="absolute top-[55%] left-[15%] w-40 h-28 bg-gray-300 rounded-2xl shadow-md"></div>
      <div className="absolute top-[35%] right-[12%] w-40 h-40 bg-gray-300 rounded-2xl shadow-md"></div> */}

      {/* Tags */}
      <div className="flex items-center gap-3 ">
        {["Web design", "Branding", "Marketing", "SEO", "Consulting"].map(
          (item, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-white/70 rounded-full shadow text-sm text-gray-700"
            >
              {item}
            </span>
          ),
        )}
      </div>

      {/* Button */}
      <button className="mt-10 bg-gray-300 text-black px-4 py-2 rounded-full flex items-center gap-3 transition">
        Konsultasi Strategi Digital
        <ArrowDown className="w-4 h-4 text-black rounded-full"></ArrowDown>
      </button>

      {/* Circle Decoration */}
      <Link
        href="https://wa.me/628XXXXXXXXXX"
        target="_blank"
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full z-50 hover:scale-110 transition"
      >
        <Image src="/icon-WhatsApp.png" alt="WhatsApp" width={60} height={60} />
      </Link>
    </section>
  );
}
