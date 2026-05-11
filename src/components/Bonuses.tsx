"use client";

import { motion } from "framer-motion";

const bonuses = [
  {
    tag: "BONUS #1",
    title: "PromptVault AI",
    description: "50+ prompts listos para Claude, ChatGPT, Gemini y Devin. Copia, pega, genera. Para restaurantes, barberías, dentistas, portfolios, coaches, gyms y más.",
    value: "$47",
  },
  {
    tag: "BONUS #2",
    title: "Sales Kit Completo",
    description: "Scripts de WhatsApp, email de prospección, script de llamada en frío, script de demo en vivo. Todo listo para copiar y enviar.",
    value: "$37",
  },
  {
    tag: "BONUS #3",
    title: "Contratos + Templates",
    description: "Contrato freelancer profesional, formulario de onboarding, checklist de entrega, template de pricing para tu web de servicios.",
    value: "$29",
  },
  {
    tag: "BONUS #4",
    title: "Lista de 50 Nichos",
    description: "Los 50 nichos más rentables para vender webs con IA. Con precio promedio, nivel de competencia y tipo de web recomendado.",
    value: "$19",
  },
];

export default function Bonuses() {
  return (
    <section className="relative py-24 px-6" id="bonus">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#39FF14]/[0.015] to-transparent" />
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#39FF14]/20 bg-[#39FF14]/5 text-[#39FF14] text-xs font-medium mb-4">
            INCLUIDO
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)]">
            Bonus que <span className="text-[#39FF14]">valen más</span> que el
            ebook
          </h2>
          <p className="text-white/40 mt-4 text-lg font-[family-name:var(--font-inter)]">
            Valor total: $132 USD — Incluido gratis con tu compra
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {bonuses.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-[#39FF14]/20 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#39FF14]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold tracking-wider text-[#39FF14] font-[family-name:var(--font-space-grotesk)]">
                    {b.tag}
                  </span>
                  <span className="text-sm text-white/30 line-through font-[family-name:var(--font-inter)]">
                    Valor: {b.value}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)]">
                  {b.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed font-[family-name:var(--font-inter)]">
                  {b.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
