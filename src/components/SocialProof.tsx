"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "2,400+", label: "Copias vendidas" },
  { value: "$200-1K", label: "Ingreso por web" },
  { value: "15 min", label: "Tiempo por web" },
  { value: "4.9/5", label: "Calificación" },
];

const testimonials = [
  {
    name: "Matías R.",
    role: "Freelancer, Chile",
    text: "En una semana ya tenía 3 clientes. Les cobré $300 por web y la hice en 20 minutos con Bolt.new. Absurdo.",
    revenue: "+$900 USD",
  },
  {
    name: "Valentina G.",
    role: "Estudiante, Colombia",
    text: "No sabía nada de código. Seguí el ebook paso a paso y ahora tengo un ingreso extra cada mes creando webs para negocios locales.",
    revenue: "+$1,200/mes",
  },
  {
    name: "Diego L.",
    role: "Emprendedor, México",
    text: "Los scripts de venta del ebook son oro. Copié el mensaje de WhatsApp, lo mandé a 20 negocios y cerré 4 en la primera semana.",
    revenue: "+$2,000 USD",
  },
];

export default function SocialProof() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#39FF14] font-[family-name:var(--font-space-grotesk)]">
                {m.value}
              </div>
              <div className="text-sm text-white/40 mt-1 font-[family-name:var(--font-inter)]">
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 font-[family-name:var(--font-space-grotesk)]"
        >
          Lo que dicen nuestros{" "}
          <span className="text-[#39FF14]">estudiantes</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm hover:border-[#39FF14]/20 transition-colors duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#39FF14]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg
                      key={s}
                      className="w-4 h-4 text-[#39FF14]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-4 font-[family-name:var(--font-inter)]">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {t.name}
                    </div>
                    <div className="text-xs text-white/30">{t.role}</div>
                  </div>
                  <div className="text-sm font-bold text-[#39FF14] font-[family-name:var(--font-space-grotesk)]">
                    {t.revenue}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
