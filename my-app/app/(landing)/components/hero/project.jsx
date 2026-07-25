import Image from "next/image";

const projects = [
  {
    image: "/Sistem-Magang-Website.png",
    title: "Sistem Informasi Pemagangan Mahasiswa",
    description:
      "Aplikasi web untuk mengelola pendaftaran, persetujuan, monitoring, dan pelaporan kegiatan magang mahasiswa.",
    tags: ["Next.js", "Tailwind CSS", "MySQL", "Express.js"],
    href: "#",
  },
  {
    image: "/Sport-On-Website.png",
    title: "SportOn Web",
    description:
      "Aplikasi e-commerce perlengkapan olahraga dengan fitur katalog produk, keranjang belanja, dan checkout.",
    tags: ["Next.js", "Tailwind CSS", "MongoDB", "Express.js"],
    href: "https://sport-on-web-jeqo.vercel.app/",
  },
  {
    image: null,
    title: "Website Toko UMKM",
    description:
      "Website katalog produk UMKM untuk memudahkan promosi, pengelolaan produk, dan proses pemesanan secara online.",
    tags: ["Next.js", "Tailwind CSS", "MongoDB", "Express.js"],
    href: "#",
  },
  {
    image: "/Course-Online.png",
    title: "Website Course Online",
    description:
      "Platform pembelajaran online dengan fitur autentikasi, manajemen course, dan pengelolaan materi pembelajaran.",
    tags: ["Vue.js", "Tailwind CSS", "MySQL", "Laravel"],
    href: "#",
  },
  {
    image: "/Ecommerce-UI-UX.png",
    title: "UI/UX Design - Mobile E-Commerce",
    description:
      "Perancangan antarmuka aplikasi e-commerce mobile dengan fokus pada pengalaman pengguna yang sederhana dan intuitif.",
    tags: ["Figma"],
    href: "#",
  },
  {
    image: "/Payment-Campus-UI-UX.png",
    title: "UI/UX Design - Aplikasi Pembayaran Kampus",
    description:
      "Perancangan antarmuka aplikasi pembayaran UKT dan administrasi kampus yang mudah digunakan dan efisien.",
    tags: ["Figma"],
    href: "#",
  },
];

function ProjectCard({ project }) {
  return (
    <div className="group flex flex-col">
      <div
        className="relative aspect-[4/3] w-full overflow-hidden border border-[#2A362F] bg-[#1A2620] transition-colors duration-200 group-hover:border-[#5DCAA5]"
        style={{ borderRadius: "8px 8px 40px 8px" }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : null}
      </div>

      <h3
        className="mt-5 text-xl font-semibold leading-snug text-[#F5F3EC]"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {project.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-[#B7B4A8]">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#2A362F] px-2.5 py-1 text-[11px] text-[#B7B4A8]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={project.href}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#F5F3EC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5DCAA5]"
      >
        View Project
        <span className="transition-transform duration-200 group-hover:translate-x-1">
          &rarr;
        </span>
      </a>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
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
          Work
        </p>
        <h2
          className="mt-2 text-3xl font-semibold text-[#F5F3EC] md:text-4xl"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Projects
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#B7B4A8] md:text-base">
          Kumpulan proyek akademik, bootcamp, dan proyek pribadi yang
          menampilkan pengalaman serta kemampuan saya dalam mengembangkan
          aplikasi web modern menggunakan berbagai teknologi.
        </p>

        <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}