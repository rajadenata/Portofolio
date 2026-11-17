import { memo } from 'react'
import { Code2, Braces, Terminal, Cpu, FileCode2, Binary } from 'lucide-react'

// Deterministic "random" dots so SSR/hydration & re-renders stay stable.
const dots = Array.from({ length: 26 }, (_, i) => ({
  id: i,
  left: (i * 37 + 11) % 100,
  top: (i * 53 + 7) % 100,
  size: 2 + (i % 3),
  delay: (i % 7) * 0.7,
  cyan: i % 4 === 0,
}))

const icons = [
  { I: Code2, left: '4%', top: '18%', size: 54, cls: 'animate-float' },
  { I: Braces, left: '90%', top: '14%', size: 48, cls: 'animate-float-slow' },
  { I: Terminal, left: '7%', top: '62%', size: 46, cls: 'animate-float-slow' },
  { I: Cpu, left: '92%', top: '70%', size: 50, cls: 'animate-float' },
  { I: FileCode2, left: '48%', top: '90%', size: 42, cls: 'animate-float-slow' },
  { I: Binary, left: '70%', top: '40%', size: 40, cls: 'animate-float' },
]

function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(160deg, #10052D 0%, #190844 45%, #0d0425 100%)',
        }}
      />
      {/* ambient glows */}
      <div
        className="absolute -left-40 top-[8%] h-[560px] w-[560px] rounded-full animate-glow-pulse"
        style={{ background: 'radial-gradient(circle, rgba(110,50,255,0.28), transparent 65%)' }}
      />
      <div
        className="absolute -right-32 top-[30%] h-[620px] w-[620px] rounded-full animate-glow-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(0,160,255,0.22), transparent 65%)',
          animationDelay: '2s',
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[25%] h-[520px] w-[520px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(0,230,184,0.10), transparent 65%)' }}
      />
      {/* grid */}
      <div className="grid-bg absolute inset-0" />
      {/* vertical neon rails (like the reference) */}
      <div className="absolute left-4 top-[22%] hidden h-[40vh] w-px bg-gradient-to-b from-transparent via-cyan-neon/60 to-transparent md:block" />
      <div className="absolute right-4 top-[18%] hidden h-[45vh] w-px bg-gradient-to-b from-transparent via-white/40 to-transparent md:block" />
      {/* programming icons */}
      {icons.map(({ I, left, top, size, cls }, i) => (
        <I
          key={i}
          className={`absolute text-cyan-neon/[0.09] ${cls}`}
          style={{ left, top, width: size, height: size, animationDelay: `${i * 0.9}s` }}
          strokeWidth={1.4}
        />
      ))}
      {/* floating dots */}
      {dots.map((d) => (
        <span
          key={d.id}
          className={`absolute rounded-full animate-twinkle ${d.cyan ? 'bg-cyan-neon' : 'bg-white'}`}
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            animationDelay: `${d.delay}s`,
            opacity: 0.3,
          }}
        />
      ))}
      {/* vignette keeps text readable */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 55%, rgba(8,2,28,0.55) 100%)' }}
      />
    </div>
  )
}

export default memo(Background)
