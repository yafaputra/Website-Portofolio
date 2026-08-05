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
  { label: "React", icon: SiReact, style: "hover:text-[#61dafb] hover:border-[#61dafb]/40 hover:bg-[#61dafb]/5 hover:shadow-[0_0_20px_rgba(97,218,251,0.2)]" },
  { label: "Next.js", icon: SiNextdotjs, style: "hover:text-[#f0f7f4] hover:border-[#f0f7f4]/40 hover:bg-[#f0f7f4]/5 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]" },
  { label: "Tailwind CSS", icon: SiTailwindcss, style: "hover:text-[#38b2ac] hover:border-[#38b2ac]/40 hover:bg-[#38b2ac]/5 hover:shadow-[0_0_20px_rgba(56,178,172,0.2)]" },
  { label: "Express", icon: SiExpress, style: "hover:text-[#82dec9] hover:border-[#82dec9]/40 hover:bg-[#82dec9]/5 hover:shadow-[0_0_20px_rgba(130,222,201,0.2)]" },
  { label: "Laravel", icon: SiLaravel, style: "hover:text-[#ff2d20] hover:border-[#ff2d20]/40 hover:bg-[#ff2d20]/5 hover:shadow-[0_0_20px_rgba(255,45,32,0.2)]" },
  { label: "MySQL", icon: SiMysql, style: "hover:text-[#00758f] hover:border-[#00758f]/40 hover:bg-[#00758f]/5 hover:shadow-[0_0_20px_rgba(0,117,143,0.2)]" },
  { label: "MongoDB", icon: SiMongodb, style: "hover:text-[#47a248] hover:border-[#47a248]/40 hover:bg-[#47a248]/5 hover:shadow-[0_0_20px_rgba(71,162,72,0.2)]" },
  { label: "VS Code", icon: VscVscode, style: "hover:text-[#007acc] hover:border-[#007acc]/40 hover:bg-[#007acc]/5 hover:shadow-[0_0_20px_rgba(0,122,204,0.2)]" },
  { label: "XAMPP", icon: SiXampp, style: "hover:text-[#fb7a24] hover:border-[#fb7a24]/40 hover:bg-[#fb7a24]/5 hover:shadow-[0_0_20px_rgba(251,122,36,0.2)]" },
  { label: "GitHub", icon: SiGithub, style: "hover:text-[#a855f7] hover:border-[#a855f7]/40 hover:bg-[#a855f7]/5 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]" },
];

export default function About() {
  return (
    <section
      id="about"
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
          Profile
        </p>
        <h2
          className="mt-2 text-3xl font-bold text-[#f0f7f4] md:text-4xl"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          About Me
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#b2bfb9] md:text-base">
          Mengenal lebih dekat tentang latar belakang, pendidikan, keterampilan, serta pengalaman saya dalam mengembangkan aplikasi web melalui proyek akademik dan bootcamp.
        </p>

        <div className="mt-16 grid gap-16 md:grid-cols-2 md:gap-12">
          {/* Profile Picture Panel */}
          <div>
            <div className="relative w-full max-w-sm">
              <span
                aria-hidden="true"
                className="absolute -left-2 -top-2 h-4 w-4 border-l-2 border-t-2 border-[#2dd4bf] z-10"
              />
              <span
                aria-hidden="true"
                className="absolute -bottom-2 -right-2 h-4 w-4 border-b-2 border-r-2 border-[#2dd4bf] z-10"
              />
              <span
                aria-hidden="true"
                className="absolute -right-2 -top-2 h-4 w-4 border-r-2 border-t-2 border-[#2dd4bf] z-10"
              />
              <span
                aria-hidden="true"
                className="absolute -left-2 -bottom-2 h-4 w-4 border-l-2 border-b-2 border-[#2dd4bf] z-10"
              />
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#14241e] bg-[#070c0a]/60 shadow-[0_15px_30px_-10px_rgba(6,10,8,0.7)] group">
                <Image
                  src="/Yafa-Putra.jpg"
                  alt="Yafa Nanda Putra"
                  fill
                  sizes="(min-width: 768px) 384px, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale hover:grayscale-0 brightness-[1.05] hover:brightness-[1.10]"
                  priority
                />
              </div>
            </div>

            <h3
              className="mt-6 text-xl font-bold uppercase tracking-wide text-[#f0f7f4]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Yafa Nanda Putra
            </h3>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#b2bfb9]">
              Halo! Saya adalah Yafa Nanda Putra, mahasiswa S1 Informatika Universitas AMIKOM Yogyakarta yang memiliki minat tinggi di bidang Web Development. Saya telah mengembangkan berbagai aplikasi web melalui proyek akademik, bootcamp, dan freelance menggunakan Next.js, React.js, Vue.js, Laravel, Express.js, MySQL, dan MongoDB.
            </p>

            <a
              href="/cv.pdf"
              download
              className="mt-6 inline-flex items-center rounded-lg border border-[#f0f7f4]/20 hover:border-[#2dd4bf] bg-[#070c0a]/30 px-5 py-2.5 text-sm font-semibold text-[#f0f7f4] hover:text-[#060a08] hover:bg-[#2dd4bf] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf]"
            >
              Download CV
            </a>
          </div>

          {/* Education & Skills timeline */}
          <div>
            <h3
              className="text-lg font-bold text-[#f0f7f4]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Education
            </h3>

            {/* Timeline component */}
            <div className="mt-5 relative border-l border-[#14241e] ml-3 pl-6 space-y-8">
              {education.map((item, i) => (
                <div
                  key={i}
                  className="relative group pb-2 border-b border-[#14241e]/40 last:border-b-0"
                >
                  {/* Timeline dot */}
                  <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#2dd4bf] bg-[#060a08] group-hover:bg-[#2dd4bf] group-hover:shadow-[0_0_10px_rgba(45,212,191,0.8)] transition-all duration-300" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-[#f0f7f4] group-hover:text-[#2dd4bf] transition-colors duration-300 md:text-base">
                        {item.school}
                      </p>
                      <p className="mt-1 text-xs text-[#b2bfb9]">
                        {item.program}
                      </p>
                    </div>
                    <div
                      className="shrink-0 text-left sm:text-right text-[10px] text-[#2dd4bf] font-medium"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      <p className="bg-[#2dd4bf]/5 px-2 py-0.5 rounded border border-[#2dd4bf]/20 inline-block sm:block">{item.period}</p>
                      <p className="mt-1 text-[#b2bfb9]/60">{item.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3
              className="mt-12 text-lg font-bold text-[#f0f7f4]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Skills
            </h3>

            {/* Brand colored skill badges */}
            <div className="mt-5 flex flex-wrap gap-3">
              {skills.map(({ label, icon: Icon, style }) => (
                <div
                  key={label}
                  title={label}
                  tabIndex={0}
                  className={`group flex h-12 w-12 items-center justify-center rounded-lg border border-[#14241e] bg-[#070c0a]/50 text-[#b2bfb9] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf] ${style}`}
                >
                  <Icon size={22} className="transition-transform duration-300 group-hover:scale-110" />
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