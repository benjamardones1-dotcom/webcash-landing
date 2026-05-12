"use client";

import { motion } from "framer-motion";

const included = [
  "Ebook completo (34 páginas premium)",
  "50+ prompts de IA listos para usar",
  "Scripts de venta por WhatsApp y email",
  "Contrato freelancer profesional",
  "Template de pricing",
  "Lista de 50 nichos rentables",
  "Checklist de entrega profesional",
  "Formulario de onboarding",
  "Actualizaciones gratuitas",
  "Garantía de 7 días",
];

export default function Pricing() {
  return (
    <section className="relative py-24 px-6" id="precio">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#39FF14]/[0.02] to-transparent" />
      <div className="max-w-2xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#39FF14]/20 bg-[#39FF14]/5 text-[#39FF14] text-xs font-medium mb-4">
            OFERTA ESPECIAL
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)]">
            Empieza <span className="text-[#39FF14]">hoy</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-[#39FF14]/20 bg-white/[0.02] p-8 md:p-10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#39FF14]/[0.04] to-transparent" />
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#39FF14]/10 blur-[80px]" />

          <div className="relative text-center">
            <div className="text-sm text-white/40 mb-1 font-[family-name:var(--font-inter)]">
              Precio de lanzamiento
            </div>
            <div className="flex items-end justify-center gap-2 mb-2">
              <span className="text-6xl md:text-7xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                $9
              </span>
              <span className="text-3xl font-bold text-white/60 mb-2 font-[family-name:var(--font-space-grotesk)]">
                .99
              </span>
              <span className="text-lg text-white/30 mb-2.5 font-[family-name:var(--font-inter)]">
                USD
              </span>
            </div>
            <div className="text-sm text-white/30 line-through mb-6 font-[family-name:var(--font-inter)]">
              Valor real: $131+ USD en recursos
            </div>

            <motion.a
              href="https://pay.hotmart.com/F105781523K"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 w-full max-w-sm mx-auto px-8 py-4 rounded-xl font-semibold text-black bg-[#39FF14] text-lg shadow-[0_0_30px_rgba(57,255,20,0.3)] hover:shadow-[0_0_50px_rgba(57,255,20,0.5)] transition-shadow duration-300"
            >
              Descargar WEB CASH AI
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>

            <p className="text-xs text-white/30 mt-4 font-[family-name:var(--font-inter)]">
              Pago seguro · Acceso inmediato · Garantía 7 días
            </p>
          </div>

          <div className="relative mt-10 pt-8 border-t border-white/[0.06]">
            <div className="text-sm font-medium text-white/60 mb-4 font-[family-name:var(--font-space-grotesk)]">
              Incluye:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {included.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 text-sm text-white/50 font-[family-name:var(--font-inter)]"
                >
                  <svg className="w-4 h-4 text-[#39FF14] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
