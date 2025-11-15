import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import CustomCursor from './CustomCursor'

describe('CustomCursor', () => {
  afterEach(() => {
    cleanup()
    document.body.classList.remove('cursor-enhanced')
  })

  it('renders the Ignacio-branded cursor layers by default', () => {
    render(<CustomCursor />)

    expect(screen.getByTestId('cursor-ring')).toBeInTheDocument()
    expect(screen.getByTestId('cursor-core')).toBeInTheDocument()
    expect(screen.getByTestId('cursor-label')).toHaveTextContent(/Ignacio .*Dalesio/i)
  })

  it('updates the contextual label when hovering annotated elements', async () => {
    render(
      <>
        <button data-testid="cta" data-cursor-label="React + Node" data-cursor-intent="cta">
          call to action
        </button>
        <CustomCursor />
      </>
    )

    const cta = screen.getByTestId('cta')
    fireEvent.pointerMove(cta)

    await waitFor(() => {
      expect(screen.getByTestId('cursor-label')).toHaveTextContent('React + Node')
    })
    expect(screen.getByTestId('cursor-root')).toHaveAttribute('data-intent', 'cta')
  })

  it('adds and removes the body helper class to disable the default cursor', () => {
    const { unmount } = render(<CustomCursor />)

    expect(document.body.classList.contains('cursor-enhanced')).toBe(true)

    unmount()
    expect(document.body.classList.contains('cursor-enhanced')).toBe(false)
  })
})

