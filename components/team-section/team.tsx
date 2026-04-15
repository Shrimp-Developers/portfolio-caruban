"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function TeamSection() {
  const teams = [
    {
      role: "Back-End Developer",
      name: "HARIS GUNAWAN R",
      instagram: "#",
      github: "#",
      linkedin: "#",
    },
    {
      role: "Front-End Developer",
      name: "HADI BUDI HARDOYO",
      instagram: "#",
      github: "#",
      linkedin: "#",
    },
    {
      role: "Front-End Developer",
      name: "LUFTAN HADI",
      instagram: "#",
      github: "#",
      linkedin: "#",
    },
    {
      role: "UI/UX Designer",
      name: "DAMAYANTI",
      instagram: "#",
      github: "#",
      linkedin: "#",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-2 rounded-full bg-[var(--primary)]" />
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-20 tracking-tight">
          Informasi Tim Developer
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teams.map((item, i) => (
            <div key={i} className="flex flex-col items-center group">
              {/* Avatar Container */}
              <div className="relative z-10">
                <div className="w-40 h-40 bg-[var(--muted)] rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-[var(--primary)] transition-all duration-300 group-hover:scale-105">
                  <div className="w-full h-full flex items-center justify-center text-[var(--primary)] opacity-20">
                    <svg
                      className="w-20 h-20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Info Card */}
              <div
                className="bg-[var(--brand-dark)] text-white  px-6 py-5 rounded-tr-[80px] rounded-bl-[80px] rounded-tl-none rounded-br-none -mt-8  relative z-20 w-full shadow-lg transform transition-all duration-300  group-hover:-translate-y-3 group-hover:shadow-2xl"
              >
                <p className="text-[10px] uppercase tracking-widest text-[var(--primary)] font-bold">
                  {item.role}
                </p>
                <p className="text-sm font-black mt-1 tracking-tight uppercase">
                  {item.name}
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 mt-6">
                <Link
                  href={item.instagram}
                  target="_blank"
                  className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-sm" />
                </Link>
                <Link
                  href={item.github}
                  target="_blank"
                  className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-sm" />
                </Link>
                <Link
                  href={item.linkedin}
                  target="_blank"
                  className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="text-sm" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
