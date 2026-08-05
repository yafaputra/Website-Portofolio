import Image from "next/image";

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

const certificates = [
  {
    image: "/Belajar-Fundamental-Front-End-Web-Development.png",
    title: "Belajar Fundamental Front-End Web Development",
    issuer: "Dicoding Indonesia",
    description:
      "Sertifikasi pengembangan Front-End modern menggunakan HTML, CSS, JavaScript, DOM, dan Web API.",
    href: "https://www.dicoding.com/certificates/JLX1VL3W5Z72",
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
    <div className="group flex flex-col sm:flex-row gap-5 p-5 glass-panel rounded-xl border border-[#14241e] hover:border-[#2dd4bf]/30 shadow-[0_8px_25px_-10px_rgba(6,10,8,0.7)] transition-all duration-300 hover:shadow-[0_12px_30px_-8px_rgba(45,212,191,0.08)]">
      <div className="relative aspect-[4/3] w-full sm:w-44 shrink-0 overflow-hidden rounded-lg border border-[#14241e] bg-[#070d0b]/80 flex items-center justify-center p-2 transition-colors duration-300 group-hover:border-[#2dd4bf]/30">
        {certificate.image ? (
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            sizes="(min-width: 640px) 176px, 100vw"
            className="object-contain p-2 transition-transform duration-500 group-hover:scale-105 brightness-[1.05] hover:brightness-[1.10]"
          />
        ) : null}
      </div>

      <div className="min-w-0 flex flex-col justify-between">
        <div>
          <h3
            className="text-base font-bold leading-snug text-[#f0f7f4] group-hover:text-[#2dd4bf] transition-colors duration-300"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {certificate.title}
          </h3>
          <p
            className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#2dd4bf] bg-[#2dd4bf]/5 px-2.5 py-0.5 rounded border border-[#2dd4bf]/15 w-fit"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {certificate.issuer}
          </p>

          <p className="mt-3 text-xs leading-relaxed text-[#b2bfb9]">
            {certificate.description}
          </p>
        </div>

        <a
          href={certificate.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#f0f7f4] hover:text-[#2dd4bf] transition-colors duration-300 w-fit"
        >
          View Credential
          <span className="transition-transform duration-300 group-hover:translate-x-1">
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
          Credentials
        </p>
        <h2
          className="mt-2 text-3xl font-bold text-[#f0f7f4] md:text-4xl"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Certificates
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#b2bfb9] md:text-base">
          Berbagai sertifikat yang saya peroleh melalui proses belajar untuk meningkatkan pengetahuan dan keterampilan dalam pengembangan aplikasi web.
        </p>

        <div className="mt-16 grid gap-x-8 gap-y-8 md:grid-cols-2">
          {certificates.map((certificate, i) => (
            <CertificateCard key={i} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
}