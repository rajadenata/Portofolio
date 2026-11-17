import { Download, GraduationCap } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { education, site } from '../data/content'

export default function Resume() {
  return (
    <section id="resume" aria-labelledby="resume-title" className="section-pad">
      <SectionHeading id="resume-title" path="C:/Users/RajaDenata/Education" white="My" grad="Education.">
        Where my learning journey has taken place so far.
      </SectionHeading>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
        {/* timeline */}
        <ol className="relative ml-3 border-l border-cyan-neon/30 pl-8 sm:ml-4 sm:pl-10">
          {education.map((e, i) => (
            <Reveal as="li" key={e.id} delay={i * 0.08} className="relative pb-10 last:pb-0">
              <span
                aria-hidden="true"
                className={`absolute -left-[41px] top-1.5 grid h-5 w-5 place-items-center rounded-full border-2 border-cyan-neon bg-[#10052D] sm:-left-[49px] ${
                  e.current ? 'shadow-[0_0_18px_2px_rgba(0,217,233,0.7)]' : ''
                }`}
              >
                <span className={`h-2 w-2 rounded-full ${e.current ? 'bg-turq' : 'bg-cyan-neon/60'}`} />
              </span>
              <div className="card p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-cyan-neon">{e.period}</span>
                  {e.current && (
                    <span className="rounded-full border border-turq/50 bg-turq/10 px-2.5 py-0.5 font-mono text-[10px] text-turq">Current</span>
                  )}
                </div>
                <h3 className="mt-2 flex items-center gap-2 font-heading text-lg font-bold text-white">
                  <GraduationCap size={18} className="text-turq" aria-hidden="true" />
                  {e.school}
                </h3>
                <p className="mt-1 text-sm text-muted">{e.detail}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        {/* CV card */}
        <Reveal delay={0.1} className="self-start">
          <aside className="card p-7 text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-neon">Resume</p>
            <h3 className="mt-3 font-heading text-2xl font-extrabold">Want the full picture?</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Download my CV for complete details on education, courses, extracurricular activities, and achievements.
            </p>
            <a href={site.cvUrl} download className="btn-primary mt-6 w-full">
              <Download size={16} aria-hidden="true" /> Download CV
            </a>
          </aside>
        </Reveal>
      </div>
    </section>
  )
}
