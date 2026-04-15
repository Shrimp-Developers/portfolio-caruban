"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-center";
import { CheckCircle2 as CheckIcon } from "lucide-react";

interface PricingPlan {
  title: string;
  price: string;
  desc: string;
  features: string[];
  button: string;
  highlight?: boolean;
}

export default function PriceSection() {
  const [active, setActive] = useState<"gratis" | "berbayar">("gratis");

  const gratisPlans: PricingPlan[] = [
    {
      title: "Basic Web Profile",
      price: "Rp 0",
      desc: "Halaman web statis sederhana untuk menampilkan profil profesional Anda secara online.",
      features: [
        "1 Halaman Landing Page (Single Page)",
        "Setup Dasar Media Sosial",
        "Template Standar",
      ],
      button: "Daftar Program UMKM!",
    },
    {
      title: "UMKM Starter",
      price: "Rp 0",
      desc: "Katalog digital sederhana agar produk Anda dapat diakses pelanggan kapan saja.",
      features: [
        "Katalog Produk Statis",
        "Integrasi WhatsApp",
        "Optimasi Mobile",
      ],
      button: "Daftar Program UMKM!",
    },
    {
      title: "Landing Page Edukasi",
      price: "Rp 0",
      desc: "Solusi penyampaian informasi organisasi untuk instansi non-profit.",
      features: ["Desain Informatif", "Maintenance 3 Bulan", "Google Maps"],
      button: "Daftar Sekarang!",
    },
  ];

  const berbayarPlans: PricingPlan[] = [
    {
      title: "Business Website",
      price: "Rp 1.500.000",
      desc: "Website profesional untuk bisnis dengan fitur lengkap dan custom desain.",
      features: [
        "Multi Page Website",
        "Custom Design",
        "SEO Basic",
        "Support 3 Bulan",
      ],
      button: "Pesan Sekarang",
    },
    {
      title: "E-Commerce",
      price: "Rp 3.500.000",
      desc: "Toko online dengan sistem pembayaran otomatis (Payment Gateway).",
      features: [
        "Keranjang & Checkout",
        "Payment Gateway",
        "Dashboard Admin",
        "Manajemen Produk",
      ],
      button: "Pesan Sekarang",
      highlight: true,
    },
    {
      title: "Custom App",
      price: "Mulai Rp 5jt",
      desc: "Aplikasi web sesuai kebutuhan logika bisnis Anda yang kompleks.",
      features: [
        "Full Custom Logic",
        "API Integration",
        "Scalable System",
        "Maintenance Premium",
      ],
      button: "Konsultasi Gratis",
    },
  ];

  const plans = active === "gratis" ? gratisPlans : berbayarPlans;

  return (
    <section
      id="pricing"
      className="py-20 px-6 bg-white text-[var(--foreground)]"
    >
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <div className="w-10 h-1.5 rounded-full bg-[var(--primary)]" />
        </div>

        <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4 leading-tight">
          Paket Solusi Digital
        </h2>
        <p className="opacity-60 mb-10 max-w-lg mx-auto text-sm md:text-base font-medium">
          Pilih paket yang paling sesuai dengan skala bisnis Anda saat ini.
        </p>

        {/* Toggle - Gaya Modern Lebih Kecil */}
        <div className="flex justify-center mb-16">
          <div className="bg-[var(--brand-dark)] p-1 rounded-2xl flex shadow-xl">
            <button
              onClick={() => setActive("gratis")}
              className={`px-6 py-2 rounded-xl text-[11px] font-black tracking-widest transition-all duration-300 ${
                active === "gratis"
                  ? "bg-[var(--primary)] text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              PROGRAM GRATIS
            </button>
            <button
              onClick={() => setActive("berbayar")}
              className={`px-6 py-2 rounded-xl text-[11px] font-black tracking-widest transition-all duration-300 ${
                active === "berbayar"
                  ? "bg-[var(--primary)] text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              LAYANAN PROFESIONAL
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative flex flex-col bg-white border ${
                plan.highlight
                  ? "border-[var(--primary)] ring-4 ring-[var(--primary)]/5"
                  : "border-[var(--border)]"
              } rounded-[2rem] p-7 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1`}
            >
              {plan.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[var(--primary)] text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full z-10 shadow-md">
                  Paling Populer
                </span>
              )}

              <span className="text-[9px] uppercase tracking-[0.15em] font-black text-[var(--primary)] mb-3">
                {plan.title}
              </span>

              {/* Harga diperkecil sedikit agar tidak terlalu 'bulky' */}
              <h3 className="text-2xl font-black mb-2 tracking-tight">
                {plan.price}
              </h3>

              <p className="text-xs md:text-sm opacity-60 mb-6 min-h-[40px] leading-relaxed font-medium">
                {plan.desc}
              </p>

              <button
                className={`w-full rounded-xl py-3 text-[11px] font-black uppercase tracking-wider transition-all duration-300 ${
                  plan.highlight
                    ? "bg-[var(--primary)] text-white hover:bg-[#168a65] shadow-lg shadow-[var(--primary)]/20"
                    : "border-2 border-[var(--brand-dark)] text-[var(--brand-dark)] hover:bg-[var(--brand-dark)] hover:text-white"
                }`}
              >
                {plan.button}
              </button>

              <ul className="mt-8 space-y-3.5 text-xs md:text-sm text-left">
                {plan.features.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 opacity-70 font-medium"
                  >
                    <CheckIcon className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
