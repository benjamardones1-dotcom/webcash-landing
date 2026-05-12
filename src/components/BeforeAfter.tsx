"use client";

import { motion } from "framer-motion";

const comparisons = [
  { label: "Tiempo por web", before: "2-4 semanas", after: "15 minutos" },
  { label: "Costo de aprender", before: "$2,000+ en cursos", after: "$9.99" },
  { label: "Herramientas", before: "Figma + código + hosting", after: "1 prompt de IA" },
  { label: "Clientes necesarios", before: "Portfolio + años de experiencia", after: "1 mensaje de WhatsApp" },
];

export default function BeforeAfter() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#39FF14]/20 bg-[#39FF14]/5 text-[#39FF14] text-xs font-medium mb-4">
            COMPARACIÓN
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)]">
            Antes vs. <span className="text-[#39FF14]">Después de la IA</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {comparisons.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="grid grid-cols-3 items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 md:p-5"
            >
              <div className="text-right">
                <div className="text-sm md:text-base text-red-400/80 font-[family-name:var(--font-inter)]">
                  {c.before}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs text-white/40 mb-1 font-[family-name:var(--font-inter)]">
                  {c.label}
                </div>
                <div className="w-full h-px bg-gradient-to-r from-red-500/30 via-white/10 to-[#39FF14]/30" />
              </div>
              <div>
                <div className="text-sm md:text-base text-[#39FF14] font-semibold font-[family-name:var(--font-inter)]">
                  {c.after}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
