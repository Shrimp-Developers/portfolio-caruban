import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Aplikasi Buwuhan",
    description:
      "Sistem Buwuhan adalah platform manajemen catatan keuangan yang dirancang khusus untuk memodernisasi tradisi pemberian sumbangan (kondangan/buwuhan) pada acara hajatan. Aplikasi ini menggantikan pencatatan manual di buku besar menjadi sistem basis data yang terorganisir, akurat, dan mudah diakses secara real-time.",
    image: "/image-contoh.jpg",
    slug: "https://www.google.com",
    imageLeft: true,
  },
  {
    id: "02",
    title: "Aplikasi Buwuhan",
    description:
      "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    image: "/image-contoh.jpg",
    slug: "https://www.google.com",
    imageLeft: false,
  },
];

export default function ProjectSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        {/* Garis dekoratif atas */}
        <div className="flex justify-center mb-4">
          <div className="w-10 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Portofolio Proyek
        </h2>
      </div>

      {/* Project List */}
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`flex flex-col ${
              project.imageLeft ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-8 md:gap-12`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 shrink-0">
              <div className="relative w-full h-60 md:h-72 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                {project.description}
              </p>
              <div>
                <Link
                  target="_blank"
                  href={project.slug}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 dark:border-gray-600 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                >
                  Lihat Detail Proyek
                  <span className="w-6 h-6 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-3.5 h-3.5 text-white dark:text-gray-900" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Button */}
      <div className="max-w-5xl mx-auto flex justify-end mt-16">
        <Link
          href="/proyek"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Lihat semua project
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
