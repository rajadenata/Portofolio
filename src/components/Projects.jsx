import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Rocket, ExternalLink, FlaskConical, Layers } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import ImageSlot from './ImageSlot'
import Icon, { GithubIcon } from './Icon'
import { projects, projectTabs, certificates, techStack } from '../data/content'

function ProjectCard({ p, i }) {
  const [open, setOpen] = useState(false)

  if (p.placeholder) {
    return (
      <Reveal delay={i * 0.07} className="h-full">
        <article className="card flex h-full flex-col border-dashed">
          <div className="aspect-[16/9] overflow-hidden border-b border-dashed border-white/15">
            <ImageSlot src={p.image} alt={p.title} label="Project thumbnail" />
          </div>
          <div className="flex flex-1 flex-col p-6">
            <h3 className="font-heading text-lg font-bold text-white/80">{p.title}</h3>
            <p className="mt-2 text-sm text-muted">Placeholder — add your own project here. Edit it in <code className="font-mono text-cyan-neon/80">src/data/content.js</code>.</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              <span className="tag-mono">Tech tag</span>
              <span className="tag-mono">Tech tag</span>
            </div>
          </div>
        </article>
      </Reveal>
    )
  }

  return (
    <Reveal delay={i * 0.07} className="h-full">
      <article className="card flex h-full flex-col">
        <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10">
          <ImageSlot src={p.image} alt={`${p.title} thumbnail`} label="Add project screenshot" />
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-turq/50 bg-[#10052D]/80 px-3 py-1 font-mono text-[10px] font-medium text-turq backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-turq animate-pulse" aria-hidden="true" />
            {p.status}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="flex items-center gap-2 font-heading text-xl font-bold text-white">
            <FlaskConical size={20} className="text-cyan-neon" aria-hidden="true" />
            {p.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/75">{p.description}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span key={t} className="tag-mono">{t}</span>
            ))}
          </div>

          <AnimatePresence initial={false}>
            {open && (
              <motion.p
                id={`detail-${p.id}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mt-4 overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] p-3 font-mono text-xs leading-relaxed text-muted"
              >
                {p.detail}
              </motion.p>
            )}
          </AnimatePresence>

          <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls={`detail-${p.id}`}
              className="text-sm font-semibold text-cyan-neon transition-colors hover:text-turq"
            >
              {open ? 'Hide Details' : 'View Details'} →
            </button>
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white">
                <GithubIcon width={16} height={16} /> GitHub
              </a>
            )}
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white">
                <ExternalLink size={16} aria-hidden="true" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  )
}

function CertificatesPanel() {
  return (
    <div>
      <p className="mb-6 text-center font-mono text-xs text-muted">
        Drop images into <span className="text-cyan-neon">public/assets/certificates/</span> using the file names shown — they appear automatically.
      </p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c, i) => (
          <Reveal key={c.id} delay={(i % 3) * 0.06}>
            <figure className="card">
              <div className="aspect-[4/3] overflow-hidden">
                <ImageSlot src={c.file} alt={c.title} label="Certificate placeholder" imgClass="object-contain bg-white/5" />
              </div>
              <figcaption className="border-t border-white/10 px-4 py-3 text-sm text-white/80">{c.title}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

function TechPanel() {
  return (
    <ul className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {techStack.map((t, i) => (
        <Reveal as="li" key={t.name} delay={i * 0.06}>
          <div className="card flex items-center gap-4 p-5">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-neon/20 to-turq/10 text-cyan-neon ring-1 ring-cyan-neon/30">
              <Icon name={t.icon} size={26} />
            </span>
            <div>
              <p className="font-heading text-lg font-bold text-white">{t.name}</p>
              <p className="font-mono text-xs text-muted">{t.note}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </ul>
  )
}

export default function Projects() {
  const [tab, setTab] = useState(projectTabs[0])

  const onKey = (e) => {
    const i = projectTabs.indexOf(tab)
    if (e.key === 'ArrowRight') setTab(projectTabs[(i + 1) % projectTabs.length])
    if (e.key === 'ArrowLeft') setTab(projectTabs[(i - 1 + projectTabs.length) % projectTabs.length])
  }

  return (
    <section id="projects" aria-labelledby="proj-title" className="section-pad">
      <div className="text-center">
        <SectionHeading
          align="center"
          badge="Explore my project"
          id="proj-title"
          path="C:/Users/RajaDenata/Projects"
          white="My"
          grad="Project."
        >
          A collection of my research projects, certificates, and the technology stack I use to build digital solutions.
        </SectionHeading>
      </div>

      <div className="mt-10 flex justify-center">
        <div role="tablist" aria-label="Project categories" onKeyDown={onKey} className="glass inline-flex gap-1 rounded-full p-1.5">
          {projectTabs.map((t) => (
            <button
              key={t}
              role="tab"
              id={`tab-${t}`}
              aria-selected={tab === t}
              aria-controls={`panel-${t}`}
              tabIndex={tab === t ? 0 : -1}
              onClick={() => setTab(t)}
              className={`relative rounded-full px-5 py-2 text-xs font-semibold transition-colors sm:px-6 sm:text-sm ${
                tab === t ? 'text-[#10052D]' : 'text-white/75 hover:text-white'
              }`}
            >
              {tab === t && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-neon to-turq"
                  transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                />
              )}
              <span className="relative">{t}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12" role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`} tabIndex={0}>
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {tab === 'Projects' && (
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((p, i) => (
                  <ProjectCard key={p.id} p={p} i={i} />
                ))}
              </div>
            )}
            {tab === 'Certificates' && <CertificatesPanel />}
            {tab === 'Tech Stack' && <TechPanel />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
