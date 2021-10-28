import { RefObject, ReactNode, useState, useEffect } from 'react'

interface FocusTrapProps {
  parentElement: RefObject<HTMLElement>
  onClose?: () => void
  children: ReactNode
}

const FocusTrap = ({ parentElement, onClose, children }: FocusTrapProps) => {
  const [firstFocusElement, setFirstFocusElement] = useState<HTMLElement>()
  const [lastFocusElement, setLastFocusElement] = useState<HTMLElement>()

  useEffect(() => {
    if (parentElement.current) {
      const focusableElements = parentElement.current.querySelectorAll(
        'button, input'
        // eslint-disable-next-line no-undef
      ) as NodeListOf<HTMLElement>

      const firstFocusElement = focusableElements[0]

      setFirstFocusElement(firstFocusElement)
      setLastFocusElement(focusableElements[focusableElements.length - 1])

      firstFocusElement?.focus()
    }
  }, [parentElement.current])

  const handleKeyDown = (e: KeyboardEvent) => {
    const { key, shiftKey } = e
    if (key === 'Tab') {
      const focus = document.activeElement

      if (focus === firstFocusElement && shiftKey) {
        e.preventDefault()
        lastFocusElement?.focus()
      } else if (focus === lastFocusElement && !shiftKey) {
        e.preventDefault()
        firstFocusElement?.focus()
      }
    } else if (key === 'Escape') {
      onClose && onClose()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return <>{children}</>
}

export default FocusTrap
