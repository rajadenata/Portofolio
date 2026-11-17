import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Calendar } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import Icon from './Icon'
import { experiences, accents } from '../data/content'

function ExperienceCard({ item, index }) {
  const a = accents[item.category] || accents.Activity
  return (
    <Reveal delay={(index % 3) * 0.07} className="h-full">
      <article className="card h-full p-6">
        <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${a.bar}`} />
        <div className="flex items-start justify-between gap-3">
          <span className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${a.icon} text-white shadow-lg`}>
            <Icon name={item.icon} size={20} />
          </span>
          <span className="rounded-md border border-white/15 px-2 py-0.5 font-mono text-[10px] text-muted">{item.category}</span>
        </div>
        <h3 className="mt-5 font-heading text-base font-bold leading-snug text-white sm:text-lg">{item.title}</h3>
        <p className="mt-1 text-sm text-white/70">{item.org}</p>
        <p className="mt-4 flex items-center gap-2 font-mono text-xs text-muted">
          <Calendar size={13} aria-hidden="true" />
          {item.period}
        </p>
      </article>
    </Reveal>
  )
}

export default function Experience() {
  const [showAll, setShowAll] = useState(false)
  const main = experiences.filter((e) => !e.extra)
  const extra = experiences.filter((e) => e.extra)

  return (
    <section id="experience" aria-labelledby="exp-title" className="section-pad">
      <SectionHeading id="exp-title" path="C:/Users/RajaDenata/Experience" white="My" grad="Journey.">
        Organizations, extracurricular activities, trainings, and courses that shaped how I lead, speak, and learn.
      </SectionHeading>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {main.map((item, i) => (
          <ExperienceCard key={item.id} item={item} index={i} />
        ))}
      </div>

      <AnimatePresence initial={false}>
        {showAll && (
          <motion.div
            id="more-experiences"
            key="extra"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="grid gap-5 pt-5 sm:grid-cols-2 lg:grid-cols-3">
              {extra.map((item, i) => (
                <ExperienceCard key={item.id} item={item} index={i} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-10 flex justify-center">
        <button
          type="button"
          onClick={() => setShowAll((s) => !s)}
          aria-expanded={showAll}
          aria-controls="more-experiences"
          className="btn-ghost !px-6"
        >
          {showAll ? 'Show Fewer Experiences' : `Show More Experiences (${extra.length} Hidden)`}
          <ChevronDown size={16} className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
