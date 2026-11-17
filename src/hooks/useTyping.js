import { useEffect, useState } from 'react'

/** Typewriter loop through `words`. Respects reduced-motion by showing the first word statically. */
export default function useTyping(words, { type = 85, erase = 45, hold = 1400 } = {}) {
  const [text, setText] = useState('')
  const reduced =
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (reduced) {
      setText(words[0])
      return
    }
    let w = 0
    let i = 0
    let deleting = false
    let t
    const tick = () => {
      const word = words[w]
      if (!deleting) {
        i++
        setText(word.slice(0, i))
        if (i === word.length) {
          deleting = true
          t = setTimeout(tick, hold)
          return
        }
        t = setTimeout(tick, type)
      } else {
        i--
        setText(word.slice(0, i))
        if (i === 0) {
          deleting = false
          w = (w + 1) % words.length
          t = setTimeout(tick, 350)
          return
        }
        t = setTimeout(tick, erase)
      }
    }
    t = setTimeout(tick, 600)
    return () => clearTimeout(t)
  }, [words, type, erase, hold, reduced])

  return text
}
