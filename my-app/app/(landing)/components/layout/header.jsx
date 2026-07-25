"use client"
import { useState } from "react";


export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { n: "01", label: "About", href: "#about" },
    { n: "02", label: "Projects", href: "#projects" },
    { n: "03", label: "Certifications", href: "#certifications" },
  ];

  return (
    <header
      className="sticky top-0 z-50 border-b border-[#2A362F] bg-[#15201C]/95 backdrop-blur-sm"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        {/* Nameplate */}
        <a href="#" className="group flex items-baseline gap-3">
          <span
            className="text-lg font-semibold tracking-tight text-[#F5F3EC] md:text-xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Yafa Nanda Putra
          </span>
          <span
            className="hidden text-[11px] uppercase tracking-[0.15em] text-[#5DCAA5] sm:inline"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Dev.001
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.n}>
                <a
                  href={l.href}
                  className="group flex items-center gap-2 rounded-md px-3 py-2 text-sm text-[#B7B4A8] transition-colors duration-200 hover:text-[#F5F3EC]"
                >
                  <span
                    className="text-[11px] text-[#5DCAA5]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {l.n}
                  </span>
                  <span className="relative">
                    {l.label}
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#F5F3EC] transition-all duration-200 group-hover:w-full" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-md border border-[#F5F3EC] px-5 py-2 text-sm font-medium text-[#F5F3EC] transition-colors duration-200 hover:bg-[#5DCAA5] hover:border-[#5DCAA5] hover:text-[#04342C] md:inline-block"
          >
            Hire Me
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-md border border-[#2A362F] md:hidden"
          >
            <span
              className={`block h-px w-4 bg-[#F5F3EC] transition-transform duration-200 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-4 bg-[#F5F3EC] transition-transform duration-200 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-[#2A362F] bg-[#15201C] px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.n}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-md px-2 py-3 text-[#B7B4A8]"
                >
                  <span
                    className="text-[11px] text-[#5DCAA5]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {l.n}
                  </span>
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-md border border-[#F5F3EC] px-5 py-2 text-center text-sm font-medium text-[#F5F3EC]"
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