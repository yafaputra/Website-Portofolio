"use client"
import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { n: "01", label: "About", href: "#about" },
    { n: "02", label: "Projects", href: "#projects" },
    { n: "03", label: "Certificates", href: "#certificates" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "border-b border-teal-500/10 bg-[#060a08]/85 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(6,10,8,0.7)]" 
          : "border-b border-[#14241e] bg-[#060a08]/50 backdrop-blur-sm"
      }`}
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        {/* Nameplate */}
        <a href="#" className="group flex items-baseline gap-3">
          <span
            className="text-lg font-bold tracking-tight text-[#f0f7f4] md:text-xl transition-all duration-300"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Yafa <span className="text-gradient">Nanda Putra</span>
          </span>
          <span
            className="hidden text-[10px] uppercase tracking-[0.2em] text-[#2dd4bf]/70 sm:inline bg-[#2dd4bf]/5 px-2 py-0.5 rounded border border-[#2dd4bf]/20"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            v1.0.0
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-2">
            {links.map((l) => (
              <li key={l.n}>
                <a
                  href={l.href}
                  className="group flex items-center gap-2 rounded-md px-3.5 py-2 text-sm text-[#b2bfb9] transition-all duration-300 hover:text-[#f0f7f4] hover:bg-[#2dd4bf]/5"
                >
                  <span
                    className="text-[10px] text-[#2dd4bf] font-medium"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {l.n}
                  </span>
                  <span className="relative">
                    {l.label}
                    <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#2dd4bf] transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-md bg-[#2dd4bf]/10 hover:bg-[#2dd4bf] border border-[#2dd4bf]/40 px-5 py-2 text-sm font-semibold text-[#f0f7f4] hover:text-[#060a08] transition-all duration-300 shadow-[0_0_15px_rgba(45,212,191,0.05)] hover:shadow-[0_0_25px_rgba(45,212,191,0.25)] md:inline-block"
          >
            Hire Me
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-md border border-[#14241e] bg-[#09110e]/80 text-[#f0f7f4] transition-colors duration-200 hover:border-[#2dd4bf]/40 md:hidden"
          >
            <span
              className={`block h-0.5 w-4.5 bg-[#f0f7f4] transition-all duration-300 ${
                open ? "translate-y-[4.5px] rotate-45 bg-[#2dd4bf]" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-4.5 bg-[#f0f7f4] transition-all duration-300 ${
                open ? "-translate-y-[4.5px] -rotate-45 bg-[#2dd4bf]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-[#14241e] bg-[#060a08]/95 backdrop-blur-lg px-6 py-6 md:hidden animate-[subtleMove_0.3s_ease-out]">
          <ul className="flex flex-col gap-2">
            {links.map((l) => (
              <li key={l.n} className="opacity-0 animate-[float_0.4s_ease-out_forwards]" style={{ animationDelay: `${parseInt(l.n)*100}ms` }}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-md px-3 py-3.5 text-[#b2bfb9] hover:text-[#f0f7f4] hover:bg-[#2dd4bf]/5 transition-all duration-200"
                >
                  <span
                    className="text-[11px] text-[#2dd4bf] font-medium"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {l.n}
                  </span>
                  <span className="font-medium text-base">{l.label}</span>
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-md bg-[#2dd4bf] hover:bg-[#22bca7] px-5 py-3 text-center text-sm font-semibold text-[#060a08] transition-all duration-200 shadow-[0_4px_20px_rgba(45,212,191,0.2)]"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}