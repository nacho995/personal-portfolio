import { useEffect, useMemo, useState } from 'react'

const DEFAULT_LABEL = 'Ignacio “Nacho” Dalesio · React · Node · IA aplicada'

const KNOWLEDGE_BADGES = [
  { id: 'react', text: 'React 19', accent: 'var(--neon-cyan)' },
  { id: 'node', text: 'Node.js + APIs', accent: 'var(--neon-green)' },
  { id: 'ai', text: 'AI Delivery', accent: 'var(--neon-purple)' }
]

const isAnnotatedTarget = (target) => target?.dataset?.cursorLabel

const findIntent = (target) => {
  if (!target) return 'neutral'
  if (target.closest('[data-cursor-intent="skill"]')) return 'skill'
  if (target.closest('[data-cursor-intent="cta"]')) return 'cta'
  if (target.closest('a, button, [role="button"]')) return 'cta'
  return 'neutral'
}

export default function CustomCursor() {
  const coarsePointer = useMemo(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false
    return window.matchMedia('(pointer: coarse)').matches
  }, [])

  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [intent, setIntent] = useState('neutral')
  const [label, setLabel] = useState(DEFAULT_LABEL)
  const [isVisible, setIsVisible] = useState(!coarsePointer)

  useEffect(() => {
    if (coarsePointer) {
      return () => {}
    }

    const handlePointerMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })

      const annotated = event.target.closest('[data-cursor-label]')
      if (isAnnotatedTarget(annotated)) {
        setLabel(annotated.dataset.cursorLabel)
      } else {
        setLabel(DEFAULT_LABEL)
      }
      setIntent(findIntent(event.target))

      setIsVisible(true)
    }

    const handlePointerLeave = () => setIsVisible(false)
    const handlePointerEnter = () => setIsVisible(true)

    document.body.classList.add('cursor-enhanced')
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerleave', handlePointerLeave)
    window.addEventListener('pointerenter', handlePointerEnter)

    return () => {
      document.body.classList.remove('cursor-enhanced')
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
      window.removeEventListener('pointerenter', handlePointerEnter)
    }
  }, [coarsePointer])

  if (coarsePointer || !isVisible) {
    return null
  }

  return (
    <div
      data-testid="cursor-root"
      data-intent={intent}
      className="custom-cursor"
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      aria-hidden="true"
    >
      <div className="custom-cursor__halo">
        {KNOWLEDGE_BADGES.map((badge, index) => (
          <span
            key={badge.id}
            className="custom-cursor__badge"
            style={{
              transform: `rotate(${index * 120}deg) translateY(-48px) rotate(-${index * 120}deg)`,
              color: badge.accent,
              borderColor: `${badge.accent}55`
            }}
          >
            {badge.text}
          </span>
        ))}
      </div>
      <span data-testid="cursor-ring" className="custom-cursor__ring" data-layer="ring" />
      <span data-testid="cursor-core" className="custom-cursor__core" />
      <span data-testid="cursor-label" className="custom-cursor__label">
        {label}
      </span>
    </div>
  )
}

