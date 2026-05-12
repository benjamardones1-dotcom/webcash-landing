"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "¿Necesito saber programar?",
    a: "No. Cero código. El ebook te enseña a usar herramientas de IA como Bolt.new, Lovable y v0 que generan webs completas a partir de un texto. Tú describes lo que quieres, la IA lo construye.",
  },
  {
    q: "¿Cuánto puedo ganar realmente?",
    a: "Depende de tu dedicación. Un freelancer que sigue el sistema puede cobrar entre $200 y $1,000 USD por web. Con 4-5 clientes al mes ya tienes un ingreso significativo. Algunos estudiantes reportan $2,000+ mensuales.",
  },
  {
    q: "¿Funciona en mi país?",
    a: "Sí. Las herramientas de IA son globales y los negocios locales de cualquier país necesitan presencia web. Los scripts de venta están diseñados para el mercado latinoamericano pero funcionan en cualquier idioma.",
  },
  {
    q: "¿Qué recibo exactamente?",
    a: "El ebook completo en PDF (34 páginas premium), 50+ prompts listos para copiar y pegar, scripts de venta por WhatsApp y email, contratos, templates de pricing, lista de 50 nichos rentables y checklist de entrega profesional.",
  },
  {
    q: "¿Tiene garantía?",
    a: "Sí. Tienes 7 días de garantía incondicional. Si no te sirve, te devolvemos el 100% de tu dinero. Sin preguntas.",
  },
  {
    q: "¿Por qué tan barato?",
    a: "Porque queremos que el precio no sea una excusa. El valor real del contenido supera los $130 USD en recursos. El precio de $9.99 es una estrategia de accesibilidad — queremos que miles de personas apliquen esto.",
  },
];

function FAQItem({ q, a, isOpen, toggle }: { q: string; a: string; isOpen: boolean; toggle: () => void }) {
  return (
    <div
      className="border border-white/[0.06] bg-white/[0.02] rounded-xl overflow-hidden hover:border-white/[0.1] transition-colors duration-200"
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
      >
        <span className="text-sm md:text-base font-medium pr-4 font-[family-name:var(--font-space-grotesk)]">
          {q}
        </span>
        <motion.svg
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-5 h-5 text-[#39FF14] flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm text-white/50 leading-relaxed font-[family-name:var(--font-inter)]">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-6" id="faq">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#39FF14]/20 bg-[#39FF14]/5 text-[#39FF14] text-xs font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)]">
            Preguntas <span className="text-[#39FF14]">frecuentes</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
            >
              <FAQItem
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                toggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
