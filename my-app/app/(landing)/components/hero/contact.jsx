"use client"
import { useState } from "react";
import { MapPin, Mail, Copy, Check } from "lucide-react";

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

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:yafaputra94@gmail.com?subject=${encodeURIComponent(
      `Collaboration inquiry from ${form.name || "your portfolio"}`
    )}&body=${encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    )}`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("yafaputra94@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fieldClasses =
    "w-full rounded-lg border border-[#14241e] bg-[#070c0a]/60 px-4 py-3 text-sm text-[#f0f7f4] placeholder:text-[#b2bfb9]/30 transition-all duration-200 focus:border-[#2dd4bf] focus:ring-1 focus:ring-[#2dd4bf]/20 focus:outline-none";

  return (
    <section
      id="contact"
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
          Get in touch
        </p>
        <h2
          className="mt-2 text-3xl font-bold text-[#f0f7f4] md:text-4xl"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Contact
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#b2bfb9] md:text-base">
          Memiliki pertanyaan, ide proyek, atau tertarik untuk berkolaborasi? Silakan kirimkan pesan Anda melalui formulir di bawah.
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-12">
          {/* Info Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#f0f7f4]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Let&apos;s Collaborate
              </h3>
              <p className="mt-3 text-xs md:text-sm leading-relaxed text-[#b2bfb9]">
                Silakan hubungi saya melalui formulir di samping, atau hubungi saya langsung melalui kontak di bawah ini. Saya selalu terbuka untuk diskusi proyek baru, peluang magang, atau sekadar bertukar pikiran.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#14241e] bg-[#070c0a]/50 text-[#2dd4bf]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.1em] text-[#b2bfb9]/40 font-semibold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Location</span>
                    <span className="text-sm text-[#b2bfb9] font-medium">Sleman, Yogyakarta, Indonesia</span>
                  </div>
                </div>
                
                {/* Copy Email Button */}
                <div className="flex items-center gap-4 group w-fit">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#14241e] bg-[#070c0a]/50 text-[#2dd4bf]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.1em] text-[#b2bfb9]/40 font-semibold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Email</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-[#b2bfb9] font-medium">yafaputra94@gmail.com</span>
                      <button
                        onClick={handleCopyEmail}
                        type="button"
                        className="p-1.5 rounded-lg border border-[#14241e] hover:border-[#2dd4bf]/40 bg-[#070c0a]/50 text-[#b2bfb9] hover:text-[#2dd4bf] transition-all cursor-pointer"
                        title={copied ? "Copied!" : "Copy email"}
                      >
                        {copied ? <Check className="h-3.5 w-3.5 text-[#2dd4bf]" /> : <Copy className="h-3.5 w-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            </div>

          {/* Form Column */}
          <div className="md:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 p-6 sm:p-8 glass-panel rounded-xl border border-[#14241e] shadow-[0_15px_35px_-15px_rgba(6,10,8,0.8)]"
            >
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#2dd4bf] mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className={fieldClasses}
                />
              </div>
              
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#2dd4bf] mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className={fieldClasses}
                />
              </div>
              
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#2dd4bf] mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  required
                  className={`${fieldClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-lg bg-[#2dd4bf] hover:bg-[#22bca7] px-6 py-3.5 text-sm font-semibold text-[#060a08] transition-all duration-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf] cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}