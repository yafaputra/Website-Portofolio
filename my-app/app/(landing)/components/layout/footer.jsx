const Footer = () => {
  const links = [
    { label: "GitHub", href: "https://github.com/yafaputra" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/yafa-nanda-putra-60739a28b/" },
    { label: "Instagram", href: "https://instagram.com/yafaputra" },
  ];

  return (
    <footer
      className="border-t border-[#2A362F] bg-[#15201C] text-[#F5F3EC]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <div className="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p
              className="text-lg font-semibold tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Yafa Nanda Putra
            </p>
            <p
              className="mt-1 text-[11px] uppercase tracking-[0.15em] text-[#5DCAA5]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Building things, one commit at a time
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative text-sm text-[#F5F3EC]/80 transition-colors duration-200 hover:text-[#F5F3EC]"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#5DCAA5] transition-all duration-200 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-xs text-[#F5F3EC]/50 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Yafa Nanda Putra. All rights reserved.</p>
          <p style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Made with care in Yogyakarta
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;