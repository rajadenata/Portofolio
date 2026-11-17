import { useState } from 'react'
import { ImageIcon } from 'lucide-react'

/**
 * Shows `src` if the file exists in /public, otherwise a clearly-labelled placeholder.
 * No fake documentation is ever generated.
 */
export default function ImageSlot({ src, alt, label, className = '', imgClass = 'object-cover' }) {
  const [failed, setFailed] = useState(false)
  if (src && !failed) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className={`h-full w-full ${imgClass} ${className}`}
      />
    )
  }
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#2a1670]/60 to-[#10052D] text-center ${className}`}
      role="img"
      aria-label={`${alt} (placeholder)`}
    >
      <ImageIcon className="text-cyan-neon/70" size={28} aria-hidden="true" />
      <span className="px-3 font-mono text-[10px] uppercase tracking-wider text-muted">{label || 'Image placeholder'}</span>
      {src && <span className="px-3 font-mono text-[9px] text-white/30 break-all">{src.replace('/assets/', '')}</span>}
    </div>
  )
}
