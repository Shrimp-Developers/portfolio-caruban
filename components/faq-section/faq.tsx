"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    question:
      "Bagaimana cara memulai konsultasi proyek dengan Caruban Technology?",
    answer:
      "Anda bisa menghubungi kami melalui halaman kontak atau langsung via WhatsApp. Tim kami akan merespons dalam 1x24 jam untuk mendiskusikan kebutuhan proyek Anda.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-20 px-6 overflow-hidden bg-white text-[var(--foreground)]">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[var(--primary)] opacity-[0.02] blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto z-10 relative">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          <div className="md:w-[35%] md:sticky md:top-32 md:h-fit shrink-0 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="w-10 h-1.5 rounded-full bg-[var(--primary)]" />
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter leading-tight">
                FAQ & <br />
                <span className="text-[var(--primary)] italic">
                  Informasi Layanan
                </span>
              </h2>
              <p className="text-sm md:text-base opacity-65 font-medium leading-relaxed">
                Temukan jawaban atas pertanyaan umum atau hubungi tim kami untuk
                konsultasi langsung.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-full h-56 rounded-[1.5rem] overflow-hidden border border-[var(--border)] bg-zinc-50 shadow-sm"
            >
              <Image
                src="/image-contoh.jpg"
                alt="FAQ Caruban Technology"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          <div className="flex-1 flex flex-col">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`border-b border-[var(--border)] transition-all duration-300 ${isOpen ? "py-6" : "py-4"}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-start justify-between gap-4 text-left group"
                  >
                    <span
                      className={`text-base md:text-lg tracking-tight leading-snug transition-colors duration-300 flex-1 ${
                        isOpen
                          ? "text-[var(--primary)]"
                          : "text-[var(--brand-dark)] group-hover:text-[var(--primary)]"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <div
                      className={`mt-1 w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                        isOpen
                          ? "bg-[var(--primary)] text-white border-[var(--primary)] rotate-90"
                          : "bg-zinc-50 border-[var(--border)] text-[var(--brand-dark)] group-hover:border-[var(--primary)]/30 group-hover:bg-[var(--primary)]/5"
                      }`}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm md:text-base opacity-70 leading-relaxed font-medium pt-4 max-w-2xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
