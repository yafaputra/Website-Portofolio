
const IconGithub = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.73.5.99 5.24.99 11.5c0 4.98 3.23 9.2 7.71 10.69.56.1.77-.24.77-.54 0-.27-.01-1.15-.02-2.09-3.14.68-3.8-1.34-3.8-1.34-.51-1.31-1.25-1.66-1.25-1.66-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.51-.29-5.15-1.26-5.15-5.6 0-1.24.44-2.25 1.16-3.04-.12-.29-.5-1.44.11-3 0 0 .95-.3 3.11 1.16a10.8 10.8 0 0 1 5.66 0c2.16-1.46 3.11-1.16 3.11-1.16.61 1.56.23 2.71.11 3 .72.79 1.16 1.8 1.16 3.04 0 4.35-2.65 5.31-5.17 5.59.4.35.76 1.04.76 2.09 0 1.51-.01 2.72-.01 3.09 0 .3.2.65.78.54A11.03 11.03 0 0 0 23 11.5C23 5.24 18.27.5 12 .5Z" />
  </svg>
);
const IconInstagram = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const IconLinkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.5 9h3v11.5h-3V9Zm6.5 0h2.87v1.57h.04c.4-.76 1.38-1.57 2.85-1.57 3.05 0 3.61 2 3.61 4.61v6.89h-3v-6.11c0-1.46-.03-3.33-2.03-3.33-2.04 0-2.35 1.59-2.35 3.23v6.21h-3V9Z" />
  </svg>
);
const IconMail = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

const RegistrationMark = ({ className = "" }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className={`h-4 w-4 text-[#5DCAA5]/60 ${className}`}
  >
    <path d="M12 2v6M12 16v6M2 12h6M16 12h6" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.4" fill="none" />
  </svg>
);

export default function Hero() {
  const socials = [
    { icon: IconGithub, href: "https://github.com/yafaputra", label: "GitHub" },
    { icon: IconInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: IconLinkedin, href: "https://www.linkedin.com/in/yafa-nanda-putra-60739a28b/", label: "LinkedIn" },
    { icon: IconMail, href: "mailto:yafaputra94@gmail.com", label: "Email" },
  ];

  return (
    <section
      className="relative overflow-hidden bg-[#15201C]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @keyframes heroRise {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .35; }
        }
        .hero-rise {
          animation: heroRise .6s ease-out both;
        }
        .hero-rise:nth-child(1) { animation-delay: 0ms; }
        .hero-rise:nth-child(2) { animation-delay: 60ms; }
        .hero-rise:nth-child(3) { animation-delay: 120ms; }
        .hero-rise:nth-child(4) { animation-delay: 180ms; }
        .hero-rise:nth-child(5) { animation-delay: 240ms; }
        .hero-rise:nth-child(6) { animation-delay: 300ms; }
        .status-dot { animation: dotPulse 2.2s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .hero-rise { animation: none; }
          .status-dot { animation: none; }
        }
      `}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #2A362F 0, #2A362F 1px, transparent 1px, transparent 80px)",
        }}
      />

      <RegistrationMark className="absolute left-4 top-4 md:left-6 md:top-6" />
      <RegistrationMark className="absolute bottom-4 right-4 md:bottom-6 md:right-6" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div
          className="hero-rise mb-8 inline-flex items-center gap-2 rounded-full border border-[#2A362F] bg-[#1A2620] px-3 py-1.5"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <span className="status-dot h-1.5 w-1.5 rounded-full bg-[#5DCAA5]" />
          <span className="text-[11px] uppercase tracking-[0.15em] text-[#B7B4A8]">
            Available for new projects
          </span>
        </div>

        <p
          className="hero-rise text-[11px] uppercase tracking-[0.2em] text-[#5DCAA5]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Hi, I am
        </p>

        <h2
          className="hero-rise mt-2 text-2xl font-medium text-[#F5F3EC] md:text-3xl"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Yafa Nanda Putra
        </h2>

        <h1
          className="hero-rise mt-3 text-4xl font-semibold leading-tight text-[#F5F3EC] md:text-6xl"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          I&apos;m a{" "}
          <span className="relative inline-block">
            Web Developer
            <span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-[#5DCAA5]/25 md:h-4" />
          </span>
        </h1>

        <div className="hero-rise mt-5 flex max-w-xl items-center gap-3">
          <span aria-hidden="true" className="text-[#5DCAA5]">⊢</span>
          <span aria-hidden="true" className="h-px flex-1 bg-[#5DCAA5]/50" />
          <span aria-hidden="true" className="text-[#5DCAA5]">⊣</span>
          <span
            className="whitespace-nowrap text-[10px] uppercase tracking-[0.15em] text-[#7FBFA0]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            ui/ux design & front-end development · full-stack web applications
          </span>
          <span aria-hidden="true" className="text-[#5DCAA5]">⊢</span>
            <span aria-hidden="true" className="h-px flex-1 bg-[#5DCAA5]/50" />
            <span aria-hidden="true" className="text-[#5DCAA5]">⊣</span>
          </div>

        <p className="hero-rise mt-6 max-w-xl text-base leading-relaxed text-[#B7B4A8] md:text-lg">
          Saya adalah mahasiswa Informatika yang memiliki ketertarikan di bidang Web Development. Saya menikmati proses membangun website mulai dari perancangan antarmuka hingga pengembangan fitur backend. Saat ini saya terus mengembangkan kemampuan melalui berbagai proyek nyata, bootcamp, dan pembelajaran mandiri.
        </p>

        <div className="hero-rise mt-8 flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-[#2A362F] text-[#F5F3EC] transition-colors duration-200 hover:border-[#5DCAA5] hover:bg-[#5DCAA5] hover:text-[#04342C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5DCAA5]"
            >
              <Icon size={18} strokeWidth={1.75} />
            </a>
          ))}
        </div>

        <div className="hero-rise mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="rounded-md border border-[#F5F3EC] px-6 py-3 text-sm font-medium text-[#F5F3EC] transition-colors duration-200 hover:bg-[#5DCAA5] hover:border-[#5DCAA5] hover:text-[#04342C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5DCAA5]"
          >
            Hire me
          </a>
          <a
            href="#projects"
            className="group flex items-center gap-2 text-sm font-medium text-[#F5F3EC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5DCAA5]"
          >
            View projects
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}