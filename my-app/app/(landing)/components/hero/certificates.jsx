import Image from "next/image";

const certificates = [
  {
    image: null,
    title: "Belajar Fundamental Front-End Web Development",
    issuer: "Dicoding Indonesia",
    description:
      "Sertifikasi pengembangan Front-End modern menggunakan HTML, CSS, JavaScript, DOM, dan Web API.",
    href: "#",
  },
  {
    image: "/Belajar-Back-End-Pemula-dengan-JavaScript.png",
    title: "Belajar Back-End Pemula dengan JavaScript",
    issuer: "Dicoding Indonesia",
    description:
      "Sertifikasi pengembangan RESTful API menggunakan Node.js, Hapi, dan Postman.",
    href: "https://www.dicoding.com/certificates/72ZDJOWKLZYW",
  },
  {
    image: "/Belajar-Membuat-Front-End-Web-untuk-Pemula.png",
    title: "Belajar Membuat Front-End Web untuk Pemula",
    issuer: "Dicoding Indonesia",
    description:
      "Mempelajari dasar pengembangan website responsif menggunakan HTML, CSS, dan JavaScript.",
    href: "https://www.dicoding.com/certificates/JMZVVW133ZN9",
  },
  {
    image: "/Belajar-Dasar-Pemrograman-JavaScript.png",
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    description:
      "Memahami dasar-dasar JavaScript, logika pemrograman, fungsi, objek, dan manipulasi DOM.",
    href: "https://www.dicoding.com/certificates/53XEK35QKXRN",
  },
  {
    image: "/Belajar-Dasar-Pemrograman-Web.png",
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    description:
      "Mempelajari dasar HTML, CSS, serta konsep dasar pengembangan website.",
    href: "https://www.dicoding.com/certificates/RVZKGM5KOXD5",
  },
];

function CertificateCard({ certificate }) {
  return (
    <div className="group flex gap-5">
      <div className="relative aspect-[4/3] w-32 shrink-0 overflow-hidden rounded-md border h-fit bg-transparent transition-colors duration-200 group-hover:border-[#5DCAA5] sm:w-44">
        {certificate.image ? (
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            sizes="(min-width: 640px) 176px, 128px"
            className="object-contain p-1.5"
          />
        ) : null}
      </div>

      <div className="min-w-0">
        <h3
          className="text-lg font-semibold leading-snug text-[#F5F3EC]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {certificate.title}
        </h3>
        <p
          className="mt-0.5 text-[11px] uppercase tracking-[0.1em] text-[#5DCAA5]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {certificate.issuer}
        </p>

        <p className="mt-3 text-sm leading-relaxed text-[#B7B4A8]">
          {certificate.description}
        </p>

        <a
          href={certificate.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#F5F3EC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5DCAA5]"
        >
          View Credential
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            &rarr;
          </span>
        </a>
      </div>
    </div>
  );
}

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative overflow-hidden bg-[#15201C]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* same quiet drafting grid used across sections */}
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
          Credentials
        </p>
        <h2
          className="mt-2 text-3xl font-semibold text-[#F5F3EC] md:text-4xl"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Certificates
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#B7B4A8] md:text-base">
Berbagai sertifikat yang saya peroleh melalui proses belajar untuk meningkatkan pengetahuan dan keterampilan dalam pengembangan aplikasi web.
        </p>

        <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2">

          {certificates.map((certificate, i) => (
            <CertificateCard key={i} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
}