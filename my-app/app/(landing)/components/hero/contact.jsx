"use client"
import { useState } from "react";

/**
 * Contact — get-in-touch form.
 *
 * Continues the "technical nameplate" language from the rest of the page:
 * deep olive background, cream text, teal accent, JetBrains Mono for
 * labels, Space Grotesk for display type, quiet drafting grid.
 */
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:hello@example.com?subject=${encodeURIComponent(
      `Hire me — from ${form.name || "your site"}`
    )}&body=${encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    )}`;
  };

  const fieldClasses =
    "w-full rounded-md border border-[#2A362F] bg-[#1A2620] px-4 py-3 text-sm text-[#F5F3EC] placeholder:text-[#7A7A73] transition-colors duration-200 focus:border-[#5DCAA5] focus:outline-none";

  return (
    <section
      id="contact"
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
          Get in touch
        </p>
        <h2
          className="mt-2 text-3xl font-semibold text-[#F5F3EC] md:text-4xl"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Contact
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#B7B4A8] md:text-base">
          Have a project in mind or just want to say hi? Fill out the form
          below and I&apos;ll get back to you as soon as I can.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex max-w-xl flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className={fieldClasses}
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            required
            className={fieldClasses}
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message"
            rows={5}
            required
            className={`${fieldClasses} resize-none`}
          />

          <button
            type="submit"
            className="mt-2 rounded-md border border-[#F5F3EC] bg-[#F5F3EC] px-6 py-3 text-sm font-medium text-[#15201C] transition-colors duration-200 hover:bg-[#5DCAA5] hover:border-[#5DCAA5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5DCAA5]"
          >
            Hire me
          </button>
        </form>
      </div>
    </section>
  );
}