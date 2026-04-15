import Image from "next/image";
import { Cpu, Palette, HeadphonesIcon, Layers } from "lucide-react";

export default function ServiceSection() {
  const services = [
    {
      image: "/image-contoh.jpg",
      icon: <Cpu className="w-5 h-5" />,
      title: "Teknologi Terbaru",
      description:
        "Menggunakan stack teknologi modern untuk memastikan performa sistem yang optimal dan keamanan data yang terjamin.",
      accent: "#6EE7F7",
      number: "01",
    },
    {
      image: "/image-contoh.jpg",
      icon: <Palette className="w-5 h-5" />,
      title: "Desain Intuitif",
      description:
        "Riset UI/UX yang mendalam untuk menciptakan pengalaman pengguna yang mulus di berbagai perangkat dan platform.",
      accent: "#A78BFA",
      number: "02",
    },
    {
      image: "/image-contoh.jpg",
      icon: <HeadphonesIcon className="w-5 h-5" />,
      title: "Penuh Dukungan",
      description:
        "Layanan pemeliharaan dan dukungan teknis pasca-rilis untuk menjamin stabilitas aplikasi Anda.",
      accent: "#34D399",
      number: "03",
    },
    {
      image: "/image-contoh.jpg",
      icon: <Layers className="w-5 h-5" />,
      title: "Efisiensi & Skalabilitas",
      description:
        "Sistem yang dirancang secara modular sehingga mudah dikembangkan seiring pertumbuhan bisnis Anda.",
      accent: "#FB923C",
      number: "04",
    },
  ];

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Header */}
      <div className="relative z-10 max-w-6xl mx-auto text-center mb-16">
        <div className="flex justify-center mb-4">
          <div className="w-10 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Mengapa Memilih{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Layanan Kami?
          </span>
        </h2>
        <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed mt-4">
          Kami tidak hanya sekadar membangun kode, tetapi menciptakan solusi
          digital yang dirancang khusus untuk mempercepat pertumbuhan bisnis
          Anda dan memberikan pengalaman pengguna yang tak terlupakan.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden border flex flex-col p-5 gap-4"
          >
            {/* Card image */}
            <div className="relative h-44 overflow-hidden rounded-xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Card body */}
            <div className="flex flex-col flex-1 gap-3">
              {/* Icon + Title */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${service.accent}20` }}
                >
                  {service.icon}
                </div>
                <h3 className="text-base font-semibold leading-snug">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
