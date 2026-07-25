import Image from "next/image";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiLaravel,
  SiMysql,
  SiMongodb,
  SiXampp,
  SiGithub,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

/**
 * About — bio, education, and skills section.
 *
 * Dark mode modern palette: deep olive background, warm cream text, teal
 * accent. Same structure as before (drafting grid, corner ticks on the
 * portrait, JetBrains Mono for labels/dates, Space Grotesk for display
 * type) just recolored to match Hero/Header.
 *
 * Skills now use real brand marks from react-icons/si (Simple Icons)
 * instead of generic lucide glyphs, so each tile is instantly
 * recognizable (React, Next.js, Tailwind, Express, Laravel, MySQL,
 * MongoDB, VS Code, XAMPP, GitHub).
 */

const education = [
  {
    school: "Universitas Amikom Yogyakarta",
    program: "S1 - Informatika",
    period: "2023 — 2027",
    location: "Sleman, Yogyakarta",
  },
  {
    school: "SMK Muhammadiyah Imogiri",
    program: "Teknik Komputer dan Jaringan",
    period: "2020 — 2023",
    location: "Bantul, Yogyakarta",
  },
];

const skills = [
  { label: "React", icon: SiReact },
  { label: "Next.js", icon: SiNextdotjs },
  { label: "Tailwind CSS", icon: SiTailwindcss },
  { label: "Express", icon: SiExpress },
  { label: "Laravel", icon: SiLaravel },
  { label: "MySQL", icon: SiMysql },
  { label: "MongoDB", icon: SiMongodb },
  { label: "VS Code", icon: VscVscode },
  { label: "XAMPP", icon: SiXampp },
  { label: "GitHub", icon: SiGithub },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#15201C]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #2A362F 0, #2A362F 1px, transparent 1px, transparent 80px)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-10">
        <p
          className="text-[11px] uppercase tracking-[0.2em] text-[#5DCAA5]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Profile
        </p>
        <h2
          className="mt-2 text-3xl font-semibold text-[#F5F3EC] md:text-4xl"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          About Me
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#B7B4A8] md:text-base">
          Mengenal lebih dekat tentang latar belakang, pendidikan, keterampilan, serta pengalaman saya dalam mengembangkan aplikasi web melalui proyek akademik dan bootcamp.
        </p>

        <div className="mt-16 grid gap-16 md:grid-cols-2 md:gap-12">
          <div>
            <div className="relative w-full max-w-sm">
              <span
                aria-hidden="true"
                className="absolute -left-2 -top-2 h-4 w-4 border-l border-t border-[#5DCAA5]"
              />
              <span
                aria-hidden="true"
                className="absolute -bottom-2 -right-2 h-4 w-4 border-b border-r border-[#5DCAA5]"
              />
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#2A362F] bg-[#1A2620]">
                <Image
                  src="/Yafa-Putra.jpg"
                  alt="Yafa Nanda Putra"
                  fill
                  sizes="(min-width: 768px) 384px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <h3
              className="mt-6 text-xl font-semibold uppercase tracking-wide text-[#F5F3EC]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Yafa Nanda Putra
            </h3>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#B7B4A8]">
              Halo! Saya adalah Yafa Nanda Putra, mahasiswa S1 Informatika Universitas AMIKOM Yogyakarta yang memiliki minat di bidang Web Development. Saya telah mengembangkan berbagai aplikasi web melalui proyek akademik, bootcamp, dan freelance menggunakan Next.js, React.js, Vue.js, Laravel, Express.js, MySQL, dan MongoDB.
            </p>

            <a
              href="/cv.pdf"
              download
              className="mt-6 inline-flex items-center rounded-md border border-[#F5F3EC] px-5 py-2.5 text-sm font-medium text-[#F5F3EC] transition-colors duration-200 hover:bg-[#5DCAA5] hover:border-[#5DCAA5] hover:text-[#04342C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5DCAA5]"
            >
              Download CV
            </a>
          </div>

          <div>
            <h3
              className="text-lg font-semibold text-[#F5F3EC]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Education
            </h3>

            <div className="mt-5 space-y-6">
              {education.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start justify-between gap-4 border-b border-[#2A362F] pb-6 last:border-b-0"
                >
                  <div>
                    <p className="text-sm font-medium text-[#F5F3EC] md:text-base">
                      {item.school}
                    </p>
                    <p className="mt-1 text-sm text-[#B7B4A8]">
                      {item.program}
                    </p>
                  </div>
                  <div
                    className="shrink-0 text-right text-[11px] text-[#7FBFA0]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    <p>{item.period}</p>
                    <p className="mt-1 text-[#8A8880]">{item.location}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3
              className="mt-12 text-lg font-semibold text-[#F5F3EC]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Skills
            </h3>

            <div className="mt-5 flex flex-wrap gap-3">
              {skills.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  title={label}
                  tabIndex={0}
                  className="group flex h-12 w-12 items-center justify-center rounded-md border border-[#2A362F] text-[#F5F3EC] transition-colors duration-200 hover:border-[#5DCAA5] hover:bg-[#5DCAA5] hover:text-[#04342C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5DCAA5]"
                >
                  <Icon size={20} />
                  <span className="sr-only">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}