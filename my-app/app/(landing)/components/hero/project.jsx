"use client"
import { useState } from "react";
import Image from "next/image";
import sistemMagangImg from "../../../../public/Sistem-Magang-Website.png";
import sportOnImg from "../../../../public/Sport-On-Website.png";
import UmkmImg from "../../../../public/Website-Toko-Umkm.png";
import courseOnlineImg from "../../../../public/Course.png";
import ecommerceUiUxImg from "../../../../public/Mobile-Ecomerce-app.png";
import paymentCampusUiUxImg from "../../../../public/Payment-Campus-UI-UX.png";
import sportVenueImg from "../../../../public/Sport-Venue-Website.png";

const RegistrationMark = ({ className = "" }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className={`h-4 w-4 text-[#2dd4bf]/40 ${className}`}
  >
    <path d="M12 2v6M12 16v6M2 12h6M16 12h6" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.4" fill="none" />
  </svg>
);

const projects = [
  {
    image: sportVenueImg,
    title: "SportVenue - Web Booking Lapangan Olahraga & Sparring",
    description:
      "Aplikasi penyewaan lapangan olahraga (futsal, badminton, basket) secara online lengkap dengan sistem booking, pilih waktu, manajemen status pemesanan, integrasi instruksi pembayaran bank/e-wallet, serta fitur cari sparring partner.",
    tags: ["Laravel", "Tailwind CSS", "MySQL", "JavaScript", "Alpine.js"],
    href: "https://github.com/yafaputra/SportVenue.git",
    category: "website",
  },
  {
    image: sistemMagangImg,
    title: "Sistem Informasi Pemagangan Mahasiswa",
    description:
      "Aplikasi web untuk mengelola pendaftaran, persetujuan, monitoring, dan pelaporan kegiatan magang mahasiswa.",
    tags: ["Next.js", "Tailwind CSS", "MySQL", "Express.js"],
    href: "https://github.com/yafaputra/Sistem-Magang.git",
    category: "website",
  },
  {
    image: sportOnImg,
    title: "SportOn Web",
    description:
      "Aplikasi e-commerce perlengkapan olahraga dengan fitur katalog produk, keranjang belanja, dan checkout.",
    tags: ["Next.js", "Tailwind CSS", "MongoDB", "Express.js"],
    href: "https://sport-on-web-jeqo.vercel.app/",
    category: "website",
  },
  {
    image: UmkmImg,
    title: "Website Toko UMKM",
    description:
      "Website katalog produk UMKM untuk memudahkan promosi, pengelolaan produk, dan proses pemesanan secara online.",
    tags: ["Next.js", "Tailwind CSS", "MongoDB", "Express.js"],
    href: "https://github.com/AgunaCourse/toko-bu-har.git",
    category: "website",
  },
  {
    image: courseOnlineImg,
    title: "Website Course Online",
    description:
      "Platform pembelajaran online dengan fitur autentikasi, manajemen course, dan pengelolaan materi pembelajaran.",
    tags: ["Vue.js", "Tailwind CSS", "MySQL", "Laravel"],
    href: "https://github.com/yafaputra/itqom-education.git",
    category: "website",
  },
  {
    image: ecommerceUiUxImg,
    title: "UI/UX Design - Mobile E-Commerce",
    description:
      "Perancangan antarmuka aplikasi e-commerce mobile dengan fokus pada pengalaman pengguna yang sederhana dan intuitif.",
    tags: ["Figma"],
    href: "https://www.figma.com/design/5DTC0crNLEkoaW7daW0nQz/UTS---UAS-IMK?node-id=0-1&t=LyO5glGWmu7btcSq-1",
    category: "ui-ux",
  },
  {
    image: paymentCampusUiUxImg,
    title: "UI/UX Design - Aplikasi Pembayaran Kampus",
    description:
      "Perancangan antarmuka aplikasi pembayaran UKT dan administrasi kampus yang mudah digunakan dan efisien.",
    tags: ["Figma"],
    href: "#",
    category: "ui-ux",
  },
];

function ProjectCard({ project }) {
  return (
    <div className="group flex flex-col glass-panel rounded-xl overflow-hidden border border-[#14241e] hover:border-[#2dd4bf]/30 shadow-[0_10px_30px_-15px_rgba(6,10,8,0.7)] transition-all duration-300 hover:shadow-[0_15px_35px_-10px_rgba(45,212,191,0.1)]">
      <div className="relative overflow-hidden">
        {/* fake browser chrome */}
        <div className="flex items-center justify-between border-b border-[#14241e] bg-[#070c0a] px-4 py-3 transition-colors duration-300 group-hover:border-[#2dd4bf]/20">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]/90 inline-block cursor-pointer hover:opacity-80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/90 inline-block cursor-pointer hover:opacity-80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]/90 inline-block cursor-pointer hover:opacity-80" />
          </div>
          {project.href && project.href !== "#" ? (
            <span
              className="truncate text-[10px] text-[#b2bfb9]/40 max-w-[150px] sm:max-w-none"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {project.href.replace(/^https?:\/\//, "")}
            </span>
          ) : (
            <span
              className="truncate text-[10px] text-[#b2bfb9]/30"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              local.dev/preview
            </span>
          )}
          <div className="w-10" />
        </div>

        {project.image ? (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#040806]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-contain transition-transform duration-500 group-hover:scale-105 filter grayscale hover:grayscale-0 brightness-[1.05] hover:brightness-[1.10]"
            />
          </div>
        ) : (
          <div
            className="flex aspect-[16/10] w-full items-center justify-center bg-[#070d0b] text-[10px] uppercase tracking-[0.2em] text-[#b2bfb9]/30"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Preview soon
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3
          className="text-lg font-bold leading-snug text-[#f0f7f4] group-hover:text-[#2dd4bf] transition-colors duration-300"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {project.title}
        </h3>

        <p className="mt-2 text-xs md:text-sm leading-relaxed text-[#b2bfb9] flex-1">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-[#2dd4bf]/5 border border-[#2dd4bf]/10 px-2.5 py-0.5 text-[10px] font-semibold text-[#2dd4bf]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-[#14241e]/50 flex items-center justify-between">
          <a
            href={project.href}
            target={project.href !== "#" ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#f0f7f4] hover:text-[#2dd4bf] transition-colors duration-300"
          >
            View Project
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState("website");
  const filteredProjects = projects.filter((project) => project.category === activeTab);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#060a08] py-20 md:py-28"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-40" />

      <RegistrationMark className="absolute left-6 top-6 md:left-8 md:top-8" />
      <RegistrationMark className="absolute right-6 top-6 md:right-8 md:top-8" />
      <RegistrationMark className="absolute left-6 bottom-6 md:left-8 md:bottom-8" />
      <RegistrationMark className="absolute bottom-6 right-6 md:bottom-8 md:right-8" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <p
          className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#2dd4bf]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Work
        </p>
        <h2
          className="mt-2 text-3xl font-bold text-[#f0f7f4] md:text-4xl"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Projects
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#b2bfb9] md:text-base">
          Kumpulan proyek akademik, bootcamp, dan proyek pribadi yang menampilkan pengalaman serta kemampuan saya dalam mengembangkan aplikasi web modern menggunakan berbagai teknologi.
        </p>

        {/* Category Tabs */}
        <div className="mt-8 flex gap-3 border-b border-[#14241e] pb-4">
          <button
            onClick={() => setActiveTab("website")}
            type="button"
            className={`px-5 py-2 text-xs md:text-sm font-semibold rounded-lg border transition-all duration-300 cursor-pointer ${
              activeTab === "website"
                ? "bg-[#2dd4bf] border-[#2dd4bf] text-[#060a08] shadow-[0_0_15px_rgba(45,212,191,0.2)]"
                : "border-[#14241e] bg-[#070c0a]/50 text-[#b2bfb9] hover:border-[#2dd4bf]/40 hover:text-[#f0f7f4]"
            }`}
          >
            Website
          </button>
          <button
            onClick={() => setActiveTab("ui-ux")}
            type="button"
            className={`px-5 py-2 text-xs md:text-sm font-semibold rounded-lg border transition-all duration-300 cursor-pointer ${
              activeTab === "ui-ux"
                ? "bg-[#2dd4bf] border-[#2dd4bf] text-[#060a08] shadow-[0_0_15px_rgba(45,212,191,0.2)]"
                : "border-[#14241e] bg-[#070c0a]/50 text-[#b2bfb9] hover:border-[#2dd4bf]/40 hover:text-[#f0f7f4]"
            }`}
          >
            UI/UX Design
          </button>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}