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
      role: "Back-End developer",
      name: "HARIS GUNAWAN RAMADAN",
      instagram: "#",
      github: "#",
      linkedin: "#",
    },
    {
      role: "Front-End developer",
      name: "HADI BUDI HARDOYO",
      instagram: "#",
      github: "#",
      linkedin: "#",
    },
    {
      role: "Front-End developer",
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
    <section className="py-20 px-6 bg-gray-100 text-black">
      {" "}
      <div className="max-w-6xl mx-auto text-center">
        {" "}
        {/* Title */}{" "}
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          {" "}
          Informasi tim developer{" "}
        </h2>{" "}
        {/* Grid */}{" "}
        <div className="grid md:grid-cols-4 gap-10">
          {" "}
          {teams.map((item, i) => (
            <div key={i} className="flex flex-col items-center group">
              {" "}
              {/* Avatar */}{" "}
              <div className="w-40 h-40 bg-gray-300 rounded-full mb-6 group-hover:scale-105 transition"></div>{" "}
              {/* Info Card */}{" "}
              <div className="bg-[#8B7B7B] text-white px-6 py-4 rounded-2xl w-full shadow-md group-hover:shadow-xl transition">
                {" "}
                <p className="text-xs opacity-80">{item.role}</p>{" "}
                <p className="text-sm font-bold mt-1">{item.name}</p>{" "}
              </div>{" "}
              {/* Social Icons (Font Awesome) */}{" "}
              <div className="flex gap-4 mt-4">
                {" "}
                <Link
                  href={item.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-full shadow hover:scale-110 transition"
                >
                  {" "}
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-pink-500"
                  />{" "}
                </Link>{" "}
                <Link
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-full shadow hover:scale-110 transition"
                >
                  {" "}
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-black"
                  />{" "}
                </Link>{" "}
                <Link
                  href={item.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-full shadow hover:scale-110 transition"
                >
                  {" "}
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-blue-600"
                  />{" "}
                </Link>{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
