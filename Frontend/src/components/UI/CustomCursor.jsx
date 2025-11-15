import { useEffect, useMemo, useRef, useState } from 'react'

const DEFAULT_LABEL = 'Ignacio "Nacho" Dalesio · React · Node · IA aplicada'

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

  const cursorRef = useRef(null)
  const targetPosition = useRef({ x: 0, y: 0 })
  const currentPosition = useRef({ x: 0, y: 0 })
  const rafId = useRef(null)

  const [intent, setIntent] = useState('neutral')
  const [label, setLabel] = useState(DEFAULT_LABEL)
  const [isVisible, setIsVisible] = useState(!coarsePointer)

  useEffect(() => {
    if (coarsePointer) {
      return () => {}
    }

    const lerp = (start, end, factor) => start + (end - start) * factor

    const animate = () => {
      const dx = targetPosition.current.x - currentPosition.current.x
      const dy = targetPosition.current.y - currentPosition.current.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance > 0.5) {
        currentPosition.current.x = lerp(currentPosition.current.x, targetPosition.current.x, 0.15)
        currentPosition.current.y = lerp(currentPosition.current.y, targetPosition.current.y, 0.15)

        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${currentPosition.current.x}px, ${currentPosition.current.y}px, 0)`
        }
      }

      rafId.current = requestAnimationFrame(animate)
    }

    const handlePointerMove = (event) => {
      targetPosition.current.x = event.clientX
      targetPosition.current.y = event.clientY

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
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerleave', handlePointerLeave)
    window.addEventListener('pointerenter', handlePointerEnter)

    rafId.current = requestAnimationFrame(animate)

    return () => {
      document.body.classList.remove('cursor-enhanced')
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
      window.removeEventListener('pointerenter', handlePointerEnter)
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
    }
  }, [coarsePointer])

  if (coarsePointer || !isVisible) {
    return null
  }

  return (
    <div
      ref={cursorRef}
      data-testid="cursor-root"
      data-intent={intent}
      className="custom-cursor"
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

