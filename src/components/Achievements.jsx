import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Trophy, Medal, Award, ChevronDown, Calendar } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import ImageSlot from './ImageSlot'
import { achievements } from '../data/content'

const levelStyle = {
  International: 'border-amber-300/50 text-amber-200 bg-amber-300/10',
  National: 'border-cyan-neon/50 text-cyan-neon bg-cyan-neon/10',
  University: 'border-fuchsia-400/50 text-fuchsia-200 bg-fuchsia-400/10',
  Regency: 'border-turq/50 text-turq bg-turq/10',
  School: 'border-white/20 text-muted bg-white/5',
  Competition: 'border-violet-300/40 text-violet-200 bg-violet-300/10',
}

const KindIcon = ({ kind, ...p }) => {
  if (kind.includes('Gold') || kind.includes('Bronze') || kind === 'Medal') return <Medal {...p} />
  if (kind.includes('Place') || kind.includes('Runner')) return <Trophy {...p} />
  return <Award {...p} />
}

function Level({ level }) {
  return (
    <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] ${levelStyle[level] || levelStyle.School}`}>{level}</span>
  )
}

function FeaturedCard({ a, i }) {
  return (
    <Reveal delay={(i % 2) * 0.08} className="h-full">
      <article className="card flex h-full flex-col sm:flex-row">
        <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden border-b border-white/10 sm:aspect-auto sm:w-44 sm:border-b-0 sm:border-r">
          <ImageSlot src={a.doc} alt={`Documentation: ${a.title}`} label="Add documentation" />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex flex-wrap items-center gap-2">
            <Level level={a.level} />
            <span className="inline-flex items-center gap-1 font-mono text-xs text-muted">
              <Calendar size={12} aria-hidden="true" /> {a.year}
            </span>
          </div>
          <h3 className="mt-3 flex items-start gap-2 font-heading text-base font-bold leading-snug text-white sm:text-lg">
            <KindIcon kind={a.kind} size={20} className="mt-0.5 shrink-0 text-turq" aria-hidden="true" />
            {a.title}
          </h3>
          <p className="mt-2 text-sm text-white/70">{a.organizer}</p>
          {a.note && <p className="mt-2 font-mono text-xs text-cyan-neon">{a.note}</p>}
        </div>
      </article>
    </Reveal>
  )
}

function CompactCard({ a, i }) {
  return (
    <Reveal delay={(i % 3) * 0.05} className="h-full">
      <article className="card flex h-full flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <Level level={a.level} />
          <span className="font-mono text-xs text-muted">{a.year}</span>
        </div>
        <h3 className="mt-3 flex items-start gap-2 text-sm font-semibold leading-snug text-white">
          <KindIcon kind={a.kind} size={16} className="mt-0.5 shrink-0 text-cyan-neon" aria-hidden="true" />
          {a.title}
        </h3>
        {a.organizer && <p className="mt-2 text-xs text-muted">{a.organizer}</p>}
      </article>
    </Reveal>
  )
}

export default function Achievements() {
  const [showAll, setShowAll] = useState(false)
  const featured = achievements.filter((a) => a.featured)
  const rest = achievements.filter((a) => !a.featured)
  const shown = showAll ? rest : rest.slice(0, 3)

  return (
    <section id="achievements" aria-labelledby="ach-title" className="section-pad !pt-4">
      <SectionHeading id="ach-title" path="C:/Users/RajaDenata/Achievements" white="My" grad="Achievements.">
        Recognition across scientific writing, language, public speaking, and programming — from school level up to international.
      </SectionHeading>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {featured.map((a, i) => (
          <FeaturedCard key={a.id} a={a} i={i} />
        ))}
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence initial={false}>
          {shown.map((a, i) => (
            <motion.div key={a.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <CompactCard a={a} i={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-10 flex justify-center">
        <button type="button" onClick={() => setShowAll((s) => !s)} aria-expanded={showAll} className="btn-ghost">
          {showAll ? 'Show Fewer' : `Show All Achievements (${rest.length - 3} More)`}
          <ChevronDown size={16} className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
