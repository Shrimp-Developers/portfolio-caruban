"use client";

import { motion } from "framer-motion";

export default function SectionReview() {
  const reviews = [
    {
      text: "Websitenya keren parah, gue suka banget sama desainnya! Worth it lah pokoknya",
      name: "miyaa anifah",
    },
    {
      text: "Timnya asik-asik, ga ribet, langsung ngerti maunya kita. Hasilnya juga mantap!",
      name: "Rizky Pratama",
    },
    {
      text: "Revisinya sabar banget ngeladenin request gue yang banyak. Makasih ya",
      name: "Farhan Alif",
    },
    {
      text: "Pelayanan cepat dan hasil sesuai ekspektasi, recommended banget!",
      name: "Andi Saputra",
    },
    {
      text: "Pelayanan cepat dan hasil sesuai ekspektasi, recommended banget!",
      name: "Andi Saputra",
    },
    {
      text: "Pelayanan cepat dan hasil sesuai ekspektasi, recommended banget!",
      name: "Andi Saputra",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-100 text-black overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Apa kata mereka ?
        </h2>

        {/* DRAG CONTAINER */}
        <motion.div
          className="flex gap-6 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -300, right: 0 }}
        >
          {reviews.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{
                rotate: i % 2 === 0 ? -6 : 6,
                scale: 1.05,
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="min-w-[280px] bg-white border border-gray-300 rounded-2xl p-6 shadow-md"
            >
              {/* Text */}
              <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                “{item.text}”
              </p>

              {/* Avatar */}
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              </div>

              {/* Name */}
              <p className="text-sm font-semibold text-center">{item.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
