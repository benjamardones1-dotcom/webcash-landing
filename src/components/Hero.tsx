"use client";

import { motion } from "framer-motion";

function GlowOrb({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full blur-[120px] ${className}`}
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 6, repeat: Infinity, delay }}
    />
  );
}

function BrowserMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      className="relative mx-auto mt-16 max-w-3xl perspective-[1200px]"
    >
      <div className="absolute -inset-4 rounded-2xl bg-gradient-to-b from-[#39FF14]/10 to-transparent blur-2xl" />
      <div className="relative rounded-xl border border-white/[0.08] bg-[#0a0a0a] shadow-2xl shadow-black/60 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#0d0d0d]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 text-center text-xs text-white/30 font-[family-name:var(--font-inter)]">
            mi-primer-cliente.com
          </div>
        </div>
        <div className="p-8 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0c4a6e] min-h-[260px] flex flex-col items-center justify-center text-center">
          <div className="text-3xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-2">
            Aroma Café
          </div>
          <p className="text-white/40 text-sm mb-4">
            Café de especialidad en el corazón de la ciudad
          </p>
          <div className="inline-block px-5 py-2 rounded-lg border border-white/10 bg-white/5 text-white/60 text-sm">
            Ver nuestro menú
          </div>
          <div className="grid grid-cols-4 gap-3 mt-6 w-full max-w-xs">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-lg bg-white/[0.03] border border-white/[0.05]"
              />
            ))}
          </div>
        </div>
      </div>
      <motion.div
        className="absolute -right-8 -top-6 rounded-xl border border-white/[0.08] bg-[#0d0d0d]/90 backdrop-blur-sm p-4 shadow-xl"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="text-[10px] text-white/40 font-[family-name:var(--font-inter)]">
          Ingreso hoy
        </div>
        <div className="text-xl font-bold text-[#39FF14] font-[family-name:var(--font-space-grotesk)]">
          +$450 USD
        </div>
      </motion.div>
      <motion.div
        className="absolute -left-6 bottom-8 rounded-xl border border-white/[0.08] bg-[#0d0d0d]/90 backdrop-blur-sm p-3 shadow-xl"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <div className="text-[10px] text-white/40 font-[family-name:var(--font-inter)]">
          Tiempo
        </div>
        <div className="text-lg font-bold text-white font-[family-name:var(--font-space-grotesk)]">
          15 min
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 overflow-hidden">
      <GlowOrb className="w-[500px] h-[500px] bg-[#39FF14]/20 top-[-10%] left-[20%]" />
      <GlowOrb
        className="w-[400px] h-[400px] bg-[#39FF14]/10 bottom-[10%] right-[10%]"
        delay={2}
      />
      <GlowOrb
        className="w-[300px] h-[300px] bg-emerald-500/10 top-[40%] left-[60%]"
        delay={4}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#39FF14]/20 bg-[#39FF14]/5 text-[#39FF14] text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse" />
          Edición 2026 — Disponible ahora
        </motion.div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight font-[family-name:var(--font-space-grotesk)] leading-[0.95]">
          <span className="block text-white">Crea webs con IA.</span>
          <span className="block bg-gradient-to-r from-[#39FF14] via-[#84cc16] to-[#39FF14] bg-clip-text text-transparent">
            Cobra por ellas.
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-[family-name:var(--font-inter)] leading-relaxed">
          Sin saber programar. Sin experiencia previa. Con IA puedes crear
          páginas web profesionales y cobrar entre $200 y $1,000 USD por cada
          una.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <motion.a
            href="https://pay.hotmart.com/F105781523K"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-black bg-[#39FF14] text-lg shadow-[0_0_30px_rgba(57,255,20,0.3)] hover:shadow-[0_0_50px_rgba(57,255,20,0.5)] transition-shadow duration-300"
          >
            Acceder Ahora — $9.99
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </motion.a>
          <span className="text-sm text-white/30">
            +2,400 copias vendidas
          </span>
        </div>
      </motion.div>

      <BrowserMockup />
    </section>
  );
}
