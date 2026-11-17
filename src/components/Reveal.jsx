import { motion, useReducedMotion } from 'framer-motion'

/** Fade + rise on scroll. Plays once. Falls back to static for reduced-motion users. */
export default function Reveal({ children, delay = 0, y = 28, x = 0, className = '', as = 'div', ...rest }) {
  const reduce = useReducedMotion()
  const Comp = motion[as] || motion.div
  if (reduce) return <Comp className={className} {...rest}>{children}</Comp>
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Comp>
  )
}
