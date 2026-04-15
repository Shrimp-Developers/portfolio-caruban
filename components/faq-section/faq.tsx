"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqs = [
  {
    question: "Mengapa bisnis saya membutuhkan website atau aplikasi khusus?",
    answer:
      "Website dan aplikasi meningkatkan kredibilitas, memperluas jangkauan pasar secara global, dan memungkinkan bisnis Anda beroperasi 24/7 tanpa batasan fisik.",
  },
  {
    question:
      "Berapa lama waktu yang dibutuhkan untuk menyelesaikan satu proyek?",
    answer:
      "Durasi proyek bergantung pada kompleksitas dan fitur yang dibutuhkan. Rata-rata proyek sederhana selesai dalam 2–4 minggu, sementara proyek kompleks bisa memakan waktu 1–3 bulan.",
  },
  {
    question: "Bagaimana dengan keamanan data dan pemeliharaan setelah rilis?",
    answer:
      "Kami menerapkan standar keamanan terkini dan menyediakan paket pemeliharaan pasca-rilis untuk memastikan aplikasi Anda tetap aman, stabil, dan terus diperbarui.",
  },
  {
    question: "Apakah ada biaya tersembunyi selain biaya pengembangan?",
    answer:
      "Tidak ada biaya tersembunyi. Semua biaya akan diuraikan secara transparan di awal sebelum proyek dimulai, termasuk biaya hosting, domain, dan pemeliharaan jika diperlukan.",
  },
  {
    question: "Apakah saya bisa mengajukan revisi jika hasil tidak sesuai?",
    answer:
      "Tentu saja. Kami menyediakan sesi revisi sesuai kesepakatan di awal proyek untuk memastikan hasil akhir sesuai dengan ekspektasi Anda.",
  },
  {
    question: "Bagaimana cara memulai konsultasi proyek dengan Shrimp Dev?",
    answer:
      "Anda bisa menghubungi kami melalui halaman kontak atau langsung via WhatsApp. Tim kami akan merespons dalam 1x24 jam untuk mendiskusikan kebutuhan proyek Anda.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Garis dekoratif */}
        <div className="flex mb-6">
          <div className="w-10 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          {/* Left — Judul + Gambar */}
          <div className="md:w-2/5 shrink-0 flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              <span className="text-gray-400"></span>FAQ &amp; Informasi
              <br />
              Layanan
            </h2>

            {/* Image card */}
            <div className="relative w-full h-52 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
              <Image
                src="/image-contoh.jpg"
                alt="FAQ Illustration"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right — FAQ Accordion */}
          <div className="flex-1 flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-4">
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex items-start justify-between gap-4 text-left group"
                  >
                    <span
                      className={`text-sm md:text-base font-semibold leading-snug transition-colors ${
                        isOpen
                          ? "text-blue-500"
                          : "text-gray-800 dark:text-gray-100"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 mt-0.5 shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "rotate-90 text-blue-500"
                          : "text-gray-400 group-hover:text-gray-600"
                      }`}
                    />
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed pr-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
