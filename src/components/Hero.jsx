import { motion, useReducedMotion } from 'framer-motion'
import { Rocket, Download, ArrowRight } from 'lucide-react'
import useTyping from '../hooks/useTyping'
import Icon from './Icon'
import { site, typedWords, techStack } from '../data/content'

export default function Hero() {
  const typed = useTyping(typedWords)
  const reduce = useReducedMotion()
  const fade = (d) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] } }

  return (
    <section id="home" aria-labelledby="hero-title" className="relative flex min-h-screen items-center pt-28 pb-16 lg:pt-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
        {/* ---------- left column ---------- */}
        <div className="order-2 lg:order-1">
          <motion.span
            {...fade(0.05)}
            className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-[#190844]/70 px-4 py-2 text-[10px] font-medium uppercase tracking-wider text-white/90 sm:text-xs"
          >
            <Rocket size={14} className="shrink-0 text-cyan-neon" aria-hidden="true" />
            Passionate about technology &amp; innovation
          </motion.span>

          <motion.h1
            id="hero-title"
            {...fade(0.15)}
            className="heading-xl mt-6 text-[2.15rem] text-white drop-shadow-[0_0_30px_rgba(0,217,233,0.15)] min-[420px]:text-5xl sm:text-6xl lg:text-[3.4rem] xl:text-[4rem]"
          >
            Welcome to my
            <span className="grad-text-animated block drop-shadow-[0_0_24px_rgba(0,230,184,0.45)]">Portfolio</span>
          </motion.h1>

          <motion.p {...fade(0.25)} className="mt-6 font-heading text-xl font-bold sm:text-2xl lg:text-3xl">
            I am an Informatics Student
          </motion.p>
          <motion.p {...fade(0.3)} className="mt-2 min-h-[2rem] font-mono text-lg font-bold text-cyan-neon sm:text-2xl" aria-live="off">
            <span className="text-white/60">&gt; </span>
            {typed}
            <span className="ml-0.5 inline-block h-[1.1em] w-[3px] translate-y-[3px] bg-cyan-neon animate-blink" aria-hidden="true" />
          </motion.p>

          <motion.p {...fade(0.38)} className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Student at Universitas Gunadarma with an active track record in scientific writing, public speaking, and
            programming. Turning curiosity into research, and ideas into working technology.
          </motion.p>

          <motion.div {...fade(0.46)} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              Explore My Work <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href={site.cvUrl} download className="btn-ghost">
              <Download size={16} aria-hidden="true" /> Download CV
            </a>
          </motion.div>

          <motion.ul {...fade(0.54)} aria-label="Technologies" className="mt-8 flex flex-wrap gap-2.5">
            {techStack.map((t) => (
              <li key={t.name} className="chip">
                <Icon name={t.icon} size={15} className="text-cyan-neon" />
                {t.name}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* ---------- right column: photo ---------- */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={reduce ? {} : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 mx-auto w-full max-w-[340px] sm:max-w-[420px] lg:order-2 lg:max-w-[460px]"
        >
          {/* glow behind */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-[55%] h-[85%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl animate-glow-pulse"
            style={{ background: 'radial-gradient(circle, rgba(0,150,255,0.45), rgba(110,50,255,0.18) 50%, transparent 72%)' }}
          />
          {/* corner frames */}
          <span aria-hidden="true" className="absolute -right-3 -top-4 h-20 w-20 rounded-tr-3xl border-r-2 border-t-2 border-cyan-neon sm:h-24 sm:w-24" />
          <span aria-hidden="true" className="absolute -bottom-4 -left-3 h-20 w-20 rounded-bl-3xl border-b-2 border-l-2 border-cyan-neon sm:h-24 sm:w-24" />

          <div className="animate-float-slow relative aspect-[4/5] w-full">
            <picture>
              <source srcSet={site.photo} type="image/webp" />
              <img
                src={site.photoFallback}
                alt="Portrait of Raja Denata in a black blazer and white shirt"
                width="1000"
                height="1726"
                fetchpriority="high"
                decoding="async"
                className="h-full w-full object-cover object-top drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]"
                style={{
                  maskImage: 'linear-gradient(to bottom, #000 82%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, #000 82%, transparent 100%)',
                }}
              />
            </picture>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
