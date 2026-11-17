export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#10052D]/60 py-8 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-center sm:flex-row sm:px-8 sm:text-left">
        <p className="font-heading text-lg font-bold">
          Raja Denata<span className="text-cyan-neon">.</span>
        </p>
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Raja Denata. Informatics Student · Universitas Gunadarma.
        </p>
      </div>
    </footer>
  )
}
