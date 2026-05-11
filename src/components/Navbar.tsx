"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#contenido", label: "Contenido" },
  { href: "#bonus", label: "Bonus" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] tracking-tight"
        >
          WEB CASH <span className="text-[#39FF14]">AI</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/50 hover:text-white transition-colors font-[family-name:var(--font-inter)]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#precio"
            className="px-5 py-2 rounded-lg text-sm font-semibold text-black bg-[#39FF14] hover:bg-[#4dff33] transition-colors"
          >
            Acceder Ahora
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-white/60 cursor-pointer"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/[0.06] bg-[#050505]/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm text-white/50 hover:text-white transition-colors py-2 font-[family-name:var(--font-inter)]"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#precio"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-5 py-3 rounded-lg text-sm font-semibold text-black bg-[#39FF14]"
              >
                Acceder Ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
