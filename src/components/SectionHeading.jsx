import { Sparkles } from 'lucide-react'
import Reveal from './Reveal'

/** Reference-style heading: optional pill badge, mono path label, huge "WHITE GRADIENT." title. */
export default function SectionHeading({ badge, path, white, grad, id, align = 'left', children }) {
  const center = align === 'center'
  return (
    <div className={center ? 'text-center' : ''}>
      {badge && (
        <Reveal className={`mb-6 flex ${center ? 'justify-center' : ''}`}>
          <span className="inline-flex items-center gap-3 rounded-full border border-cyan-neon/30 bg-[#190844]/70 px-5 py-2 font-mono text-[11px] font-medium uppercase tracking-wider text-white/90 sm:text-xs">
            <Sparkles size={14} className="text-cyan-neon" aria-hidden="true" />
            {badge}
            <Sparkles size={14} className="text-cyan-neon" aria-hidden="true" />
          </span>
        </Reveal>
      )}
      {path && (
        <Reveal className={`mb-2 flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-cyan-neon ${center ? 'justify-center' : ''}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-neon" aria-hidden="true" />
          {path}
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 id={id} className="heading-xl text-4xl text-white sm:text-6xl md:text-7xl">
          {white} <span className="grad-text-animated">{grad}</span>
        </h2>
      </Reveal>
      <Reveal delay={0.1} className={`mt-5 flex ${center ? 'justify-center' : ''}`}>
        <span className="h-1 w-24 rounded-full bg-gradient-to-r from-cyan-neon to-transparent" aria-hidden="true" />
      </Reveal>
      {children && (
        <Reveal delay={0.15} className={`mt-6 text-base leading-relaxed text-muted sm:text-lg ${center ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
          {children}
        </Reveal>
      )}
    </div>
  )
}
