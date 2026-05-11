"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Aprende",
    description: "Lee el ebook en una tarde. Entiende cómo funcionan las herramientas de IA para crear webs profesionales sin código.",
    accent: "from-[#39FF14] to-[#84cc16]",
  },
  {
    num: "02",
    title: "Construye",
    description: "Crea tu primera web en 15 minutos con un prompt. Usa los templates y prompts del ebook para generar sitios que parecen de agencia.",
    accent: "from-[#84cc16] to-[#22d3ee]",
  },
  {
    num: "03",
    title: "Vende",
    description: "Usa los scripts de venta incluidos. Manda mensajes por WhatsApp, prospecta en redes sociales y cierra clientes en días.",
    accent: "from-[#22d3ee] to-[#818cf8]",
  },
  {
    num: "04",
    title: "Escala",
    description: "Sube tus precios, agrega servicios de mantenimiento mensual y construye una agencia digital con IA como tu equipo.",
    accent: "from-[#818cf8] to-[#c084fc]",
  },
];

export default function HowItWorks() {
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
            PROCESO
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)]">
            Cómo <span className="text-[#39FF14]">funciona</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#39FF14]/40 via-[#39FF14]/20 to-transparent" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative pl-16 md:pl-20"
              >
                <div className={`absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${step.accent} flex items-center justify-center`}>
                  <span className="text-lg md:text-xl font-bold text-black font-[family-name:var(--font-space-grotesk)]">
                    {step.num}
                  </span>
                </div>
                <div className="pt-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)]">
                    {step.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed font-[family-name:var(--font-inter)]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
