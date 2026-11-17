import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { about } from '../data/content'

function Part({ p }) {
  if (typeof p === 'string') return p
  if (p.hl) return <span className="font-semibold text-cyan-neon">{p.hl}</span>
  if (p.strong) return <strong className="font-semibold text-white">{p.strong}</strong>
  if (p.box)
    return (
      <span className="mx-1 inline-block rounded-md border border-cyan-neon/25 bg-[#190844] px-2.5 py-0.5 font-semibold text-white">
        {p.box}
      </span>
    )
  return null
}

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-pad">
      <div className="mx-auto max-w-3xl">
        <SectionHeading id="about-title" path={about.directory} white="About" grad="Me." />

        <div className="mt-10 space-y-6 text-base leading-[1.85] text-white/80 sm:text-lg">
          {about.paragraphs.map((para, i) => (
            <Reveal key={para.id} delay={i * 0.05}>
              <p>
                {para.parts.map((p, j) => (
                  <Part key={j} p={p} />
                ))}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <blockquote className="mt-10 border-l-4 border-cyan-neon bg-[#190844]/70 px-6 py-5 font-mono text-sm italic text-white/75 sm:text-base">
            “{about.quote}”
          </blockquote>
        </Reveal>

        <Reveal delay={0.15}>
          <dl className="mt-10 grid gap-3 sm:grid-cols-3">
            {about.facts.map((f) => (
              <div key={f.label} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-neon">{f.label}</dt>
                <dd className="mt-1 text-sm text-white/85">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
