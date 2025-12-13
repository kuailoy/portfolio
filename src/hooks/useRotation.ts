import { useState, useRef } from 'react'

export function useRotation(duration = 600) {
  const [isRotating, setIsRotating] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleClick = () => {
    if (isRotating) return // Prevent multiple clicks during animation

    setIsRotating(true)

    // Clear existing timeout if any
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    // Reset after animation completes
    timeoutRef.current = setTimeout(() => {
      setIsRotating(false)
    }, duration)
  }

  return {
    isRotating,
    handleClick
  }
}