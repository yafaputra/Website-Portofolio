
"use client"
import { useState, useEffect } from "react";

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
    className={`h-4 w-4 text-[#2dd4bf]/40 ${className}`}
  >
    <path d="M12 2v6M12 16v6M2 12h6M16 12h6" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.4" fill="none" />
  </svg>
);

const TerminalConsole = () => {
  const [activeTab, setActiveTab] = useState("profile.json");
  const files = {
    "profile.json": null,
    "skills.sh": null,
  };

  return (
    <div className="glass-panel w-full rounded-xl border border-[#2dd4bf]/15 shadow-[0_20px_50px_-15px_rgba(6,10,8,0.9)] overflow-hidden font-mono text-xs animate-float">
      <div className="flex items-center justify-between bg-[#070c0a] px-4 py-3 border-b border-[#14241e]">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]/90 inline-block cursor-pointer hover:opacity-80" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]/90 inline-block cursor-pointer hover:opacity-80" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]/90 inline-block cursor-pointer hover:opacity-80" />
        </div>
        <span className="text-[10px] tracking-wide text-[#b2bfb9]/50 select-none">terminal://yafanandaputra</span>
        <div className="w-12" />
      </div>
      <div className="flex bg-[#040806] border-b border-[#14241e] text-[10px]">
        {Object.keys(files).map((file) => (
          <button
            key={file}
            onClick={() => setActiveTab(file)}
            className={`px-4 py-2 border-r border-[#14241e] transition-colors ${
              activeTab === file 
                ? "bg-[#070d0b] text-[#2dd4bf] font-medium border-t border-t-[#2dd4bf]/80" 
                : "text-[#b2bfb9]/40 hover:bg-[#070d0b]/40 hover:text-[#b2bfb9]/70"
            }`}
          >
            {file}
          </button>
        ))}
      </div>
      <pre className="p-5 bg-[#070d0b]/90 overflow-x-auto text-[#b2bfb9] max-h-[220px] custom-scrollbar text-[11px] leading-relaxed">
        <code>
          {activeTab === "profile.json" ? (
            <div>
              <span className="text-emerald-500">{"{"}</span>
              <br />
              &nbsp;&nbsp;<span className="text-teal-400">"name"</span>: <span className="text-emerald-300">"Yafa Nanda Putra"</span>,
              <br />
              &nbsp;&nbsp;<span className="text-teal-400">"role"</span>: <span className="text-emerald-300">"Web Developer"</span>,
              <br />
              &nbsp;&nbsp;<span className="text-teal-400">"location"</span>: <span className="text-emerald-300">"Yogyakarta, ID"</span>,
              <br />
              &nbsp;&nbsp;<span className="text-teal-400">"interests"</span>: <span className="text-[#2dd4bf]">[</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-300">"Clean Code"</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-300">"User Experience"</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-300">"Web Architecture"</span>
              <br />
              &nbsp;&nbsp;<span className="text-[#2dd4bf]">]</span>
              <br />
              <span className="text-emerald-500">{"}"}</span>
            </div>
          ) : (
            <div>
              <span className="text-[#2dd4bf]">$</span> <span className="text-yellow-400/90 font-semibold">bash skills.sh</span>
              <br />
              <span className="text-gray-500">Loading capability indices...</span>
              <br />
              <span className="text-teal-400">React.js :</span> <span className="text-green-400 font-bold">ONLINE (v19)</span>
              <br />
              <span className="text-teal-400">Next.js  :</span> <span className="text-green-400 font-bold">ONLINE (v16)</span>
              <br />
              <span className="text-teal-400">Express  :</span> <span className="text-green-400 font-bold">ACTIVE</span>
              <br />
              <span className="text-teal-400">Laravel  :</span> <span className="text-green-400 font-bold">ACTIVE</span>
              <br />
              <span className="text-emerald-400 font-medium">✨ All modules successfully loaded!</span>
            </div>
          )}
        </code>
      </pre>
    </div>
  );
};

export default function Hero() {
  const socials = [
    { icon: IconGithub, href: "https://github.com/yafaputra", label: "GitHub", color: "hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-400" },
    { icon: IconInstagram, href: "https://instagram.com/yafaputra", label: "Instagram", color: "hover:border-pink-500 hover:bg-pink-500/10 hover:text-pink-400" },
    { icon: IconLinkedin, href: "https://www.linkedin.com/in/yafa-nanda-putra-60739a28b/", label: "LinkedIn", color: "hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400" },
    { icon: IconMail, href: "mailto:yafaputra94@gmail.com", label: "Email", color: "hover:border-teal-500 hover:bg-teal-500/10 hover:text-teal-400" },
  ];

  // Typewriter parameters
  const words = ["Web Developer", "Frontend Engineer", "Fullstack Enthusiast", "UI/UX Designer"];
  const [wordIdx, setWordIdx] = useState(0);
  const [subIdx, setSubIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [cursor, setCursor] = useState(true);

  // Typewriter effect
  useEffect(() => {
    if (subIdx === words[wordIdx].length + 1 && !deleting) {
      const timeout = setTimeout(() => setDeleting(true), 2500);
      return () => clearTimeout(timeout);
    }
    if (subIdx === 0 && deleting) {
      setDeleting(false);
      setWordIdx((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIdx((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 50 : 120);

    return () => clearTimeout(timeout);
  }, [subIdx, deleting, wordIdx]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setCursor((c) => !c), 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#060a08] py-20 md:py-32" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-60" />

      <RegistrationMark className="absolute left-6 top-6 md:left-8 md:top-8" />
      <RegistrationMark className="absolute right-6 top-6 md:right-8 md:top-8" />
      <RegistrationMark className="absolute left-6 bottom-6 md:left-8 md:bottom-8" />
      <RegistrationMark className="absolute bottom-6 right-6 md:bottom-8 md:right-8" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-12 items-center">
          {/* Main info column */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-3.5 py-1.5 w-fit mb-6"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2dd4bf]">
                Available for new projects
              </span>
            </div>

            <p
              className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#2dd4bf]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Hi, I am
            </p>

            <h2
              className="mt-2 text-2xl font-bold tracking-tight text-[#f0f7f4] md:text-3xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Yafa Nanda Putra
            </h2>

            <h1
              className="mt-3 text-4xl font-extrabold leading-tight text-[#f0f7f4] md:text-5xl lg:text-6xl min-h-[90px] md:min-h-[130px]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              I&apos;m a{" "}
              <span className="relative inline-block text-gradient">
                {words[wordIdx].substring(0, subIdx)}
                <span className={`inline-block w-[3px] ml-1 bg-[#2dd4bf] ${cursor ? "opacity-100" : "opacity-0"}`}>|</span>
              </span>
            </h1>

            <div className="mt-2 flex max-w-xl items-center gap-3">
              <span aria-hidden="true" className="text-[#2dd4bf]/40 text-xs">⊢</span>
              <span aria-hidden="true" className="h-px flex-1 bg-teal-500/20" />
              <span
                className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.2em] text-[#2dd4bf]/80"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                front-end & back-end development · UI/UX Design
              </span>
              <span aria-hidden="true" className="h-px flex-1 bg-teal-500/20" />
              <span aria-hidden="true" className="text-[#2dd4bf]/40 text-xs">⊣</span>
            </div>

            <p className="mt-6 max-w-xl text-sm md:text-base leading-relaxed text-[#b2bfb9]">
              Saya adalah mahasiswa Informatika yang memiliki ketertarikan mendalam di bidang Web Development. Saya menikmati proses membangun website mulai dari perancangan antarmuka hingga pengembangan fitur backend. Saat ini saya terus mengembangkan kemampuan melalui berbagai proyek nyata, bootcamp, dan pembelajaran mandiri.
            </p>

            {/* Social handles */}
            <div className="mt-8 flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex h-10 w-10 items-center justify-center rounded-lg border border-[#14241e] bg-[#070c0a]/50 text-[#f0f7f4] transition-all duration-300 ${color}`}
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                </a>
              ))}
            </div>

            {/* Call to actions */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="rounded-lg bg-[#2dd4bf] hover:bg-[#22bca7] px-6 py-3.5 text-sm font-semibold text-[#060a08] transition-all duration-300 hover:shadow-[0_0_25px_rgba(45,212,191,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf]"
              >
                Hire me
              </a>
              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-lg border border-[#14241e] bg-[#070c0a]/30 px-6 py-3.5 text-sm font-semibold text-[#f0f7f4] hover:text-[#2dd4bf] hover:border-[#2dd4bf]/35 transition-all duration-300"
              >
                View projects
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
          </div>

          {/* Terminal Console Column */}
          <div className="md:col-span-5 hidden md:block">
            <TerminalConsole />
          </div>
        </div>
      </div>
    </section>
  );
}