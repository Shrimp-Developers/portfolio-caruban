"use client";

import { useState } from "react";

export default function PriceSection() {
  const [active, setActive] = useState("gratis");

  const gratisPlans = [
    {
      title: "Basic Web Profile",
      price: "Rp 0",
      desc: "Halaman web statis sederhana untuk menampilkan profil profesional Anda secara online",
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
      desc: "Katalog digital sederhana agar produk Anda dapat diakses pelanggan kapan saja",
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
      desc: "Solusi penyampaian informasi organisasi",
      features: ["Desain Informatif", "Maintenance 3 Bulan", "Google Maps"],
      button: "Daftar Sekarang!",
    },
  ];

  const berbayarPlans = [
    {
      title: "Business Website",
      price: "Rp 1.500.000",
      desc: "Website profesional untuk bisnis dengan fitur lengkap",
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
      desc: "Toko online dengan sistem pembayaran",
      features: [
        "Keranjang & Checkout",
        "Payment Gateway",
        "Dashboard Admin",
        "Manajemen Produk",
      ],
      button: "Pesan Sekarang",
    },
    {
      title: "Custom App",
      price: "Mulai Rp 5.000.000",
      desc: "Aplikasi web sesuai kebutuhan bisnis Anda",
      features: [
        "Full Custom",
        "API Integration",
        "Scalable System",
        "Maintenance",
      ],
      button: "Konsultasi",
    },
  ];

  const plans = active === "gratis" ? gratisPlans : berbayarPlans;

  return (
    <section className="py-20 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <div className="w-10 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Paket Solusi Digital
        </h2>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="bg-gray-100 p-1 rounded-full flex">
            <button
              onClick={() => setActive("gratis")}
              className={`px-4 py-1 rounded-full text-sm transition ${
                active === "gratis" ? "bg-gray-300 text-black" : "text-gray-500"
              }`}
            >
              Gratis
            </button>
            <button
              onClick={() => setActive("berbayar")}
              className={`px-4 py-1 rounded-full text-sm transition ${
                active === "berbayar"
                  ? "bg-gray-300 text-black"
                  : "text-gray-500"
              }`}
            >
              Berbayar
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="border border-gray-300 rounded-2xl p-6 shadow-sm hover:shadow-md transition hover:scale-105"
            >
              <span className="text-xs bg-gray-200 px-3 py-1 rounded-full">
                {plan.title}
              </span>

              <h3 className="text-2xl font-bold mt-4 mb-2">{plan.price}</h3>

              <p className="text-sm text-gray-600 mb-4">{plan.desc}</p>

              <button className="w-full border border-gray-400 rounded-full py-2 text-sm font-medium hover:bg-gray-100 transition">
                {plan.button}
              </button>

              <ul className="mt-6 space-y-2 text-sm text-gray-700 text-left">
                {plan.features.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    ✔ {item}
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
