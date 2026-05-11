"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#39FF14]/[0.04] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#39FF14]/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight mb-6">
            La IA ya está creando webs.
            <br />
            <span className="text-[#39FF14]">
              ¿Vas a cobrar por ellas?
            </span>
          </h2>

          <p className="text-lg text-white/40 max-w-xl mx-auto mb-10 font-[family-name:var(--font-inter)] leading-relaxed">
            Cada día que pasa, más personas descubren cómo generar ingresos con IA.
            No necesitas experiencia. No necesitas código. Solo necesitas empezar.
          </p>

          <motion.a
            href="#precio"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-10 py-5 rounded-xl font-bold text-black bg-[#39FF14] text-xl shadow-[0_0_40px_rgba(57,255,20,0.4)] hover:shadow-[0_0_60px_rgba(57,255,20,0.6)] transition-shadow duration-300"
          >
            Quiero Crear Webs con IA
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>

          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-white/30 font-[family-name:var(--font-inter)]">
            <span>Acceso inmediato</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>Garantía 7 días</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>$9.99 USD</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
