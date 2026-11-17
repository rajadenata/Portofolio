import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navItems, site } from '../data/content'

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const isActive = (item) => item.match.includes(active)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Main navigation"
        className={`mx-auto max-w-5xl rounded-[2rem] border transition-all duration-300 ${
          scrolled
            ? 'border-white/15 bg-[#10052D]/70 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.7)] backdrop-blur-xl'
            : 'border-white/10 bg-[#190844]/40 backdrop-blur-lg'
        }`}
      >
        <div className="flex h-14 items-center justify-between px-5 sm:h-16 sm:px-8">
          <a href="#home" className="font-heading text-lg font-bold tracking-tight sm:text-xl" aria-label="Raja Denata — back to top">
            {site.name}
            <span className="text-cyan-neon">.</span>
          </a>

          {/* desktop */}
          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive(item) ? 'page' : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(item) ? 'text-cyan-neon' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {isActive(item) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full border border-cyan-neon/30 bg-cyan-neon/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* mobile toggle */}
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden md:hidden"
            >
              <ul className="flex flex-col gap-1 px-4 pb-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(item) ? 'page' : undefined}
                      className={`block rounded-2xl px-4 py-3 text-sm font-medium ${
                        isActive(item) ? 'bg-cyan-neon/10 text-cyan-neon' : 'text-white/85 hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
