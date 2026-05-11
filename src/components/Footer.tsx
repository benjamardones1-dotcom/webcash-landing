export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/30 font-[family-name:var(--font-inter)]">
        <div>
          <span className="font-semibold text-white/50 font-[family-name:var(--font-space-grotesk)]">
            WEB CASH AI
          </span>{" "}
          — Todos los derechos reservados © {new Date().getFullYear()}
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white/50 transition-colors">
            Términos
          </a>
          <a href="#" className="hover:text-white/50 transition-colors">
            Privacidad
          </a>
          <a href="#" className="hover:text-white/50 transition-colors">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
