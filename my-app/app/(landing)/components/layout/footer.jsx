const Footer = () => {
  const links = [
    { label: "GitHub", href: "https://github.com/yafaputra" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/yafa-nanda-putra-60739a28b/" },
    { label: "Instagram", href: "https://instagram.com/yafaputra" },
  ];

  return (
    <footer
      className="border-t border-[#14241e] bg-[#060a08] text-[#f0f7f4]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <div className="flex flex-col gap-6 border-b border-[#14241e] pb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p
              className="text-lg font-bold tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Yafa <span className="text-gradient">Nanda Putra</span>
            </p>
            <p
              className="mt-1 text-[11px] uppercase tracking-[0.15em] text-[#2dd4bf]"
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
                  className="group relative text-sm text-[#b2bfb9] transition-colors duration-200 hover:text-[#f0f7f4]"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#2dd4bf] transition-all duration-200 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-xs text-[#b2bfb9]/40 md:flex-row md:items-center md:justify-between">
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