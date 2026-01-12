"use client"

import { useEffect, useRef, useState } from "react"

interface Dot {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  targetVx: number
  targetVy: number
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for dark mode
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"))
    }
    checkDarkMode()

    // Watch for dark mode changes
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    // Dot configuration
    const dotCount = 50
    const connectionDistance = 280
    const minRadius = 3
    const maxRadius = 7
    const baseSpeed = 0.7
    const speedVariation = 0.4
    const directionChangeInterval = 180 // frames
    const directionChangeRate = 0.05 // how fast direction changes

    let dots: Dot[] = []
    let animationFrameId: number
    let frameCount = 0

    // Set canvas size for high DPI displays
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      
      canvas.style.width = rect.width + "px"
      canvas.style.height = rect.height + "px"
      
      ctx.scale(dpr, dpr)
    }

    // Initialize dots with dynamic properties
    const initDots = () => {
      const rect = canvas.getBoundingClientRect()
      dots = []
      for (let i = 0; i < dotCount; i++) {
        const radius = minRadius + Math.random() * (maxRadius - minRadius)
        const speed = baseSpeed + (Math.random() - 0.5) * speedVariation
        const angle = Math.random() * Math.PI * 2
        const vx = Math.cos(angle) * speed
        const vy = Math.sin(angle) * speed
        
        dots.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: vx,
          vy: vy,
          radius: radius,
          targetVx: vx,
          targetVy: vy,
        })
      }
    }

    // Initial setup
    resizeCanvas()
    initDots()

    // Animation loop
    const animate = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      
      frameCount++
      
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, rect.width, rect.height)

      // Update dots with dynamic movement
      dots.forEach((dot, index) => {
        // Change direction periodically for more dynamic movement
        if (frameCount % directionChangeInterval === 0) {
          const angle = Math.random() * Math.PI * 2
          const speed = baseSpeed + (Math.random() - 0.5) * speedVariation
          dot.targetVx = Math.cos(angle) * speed
          dot.targetVy = Math.sin(angle) * speed
        }
        
        // Smoothly interpolate to target velocity
        dot.vx += (dot.targetVx - dot.vx) * directionChangeRate
        dot.vy += (dot.targetVy - dot.vy) * directionChangeRate
        
        // Update position
        dot.x += dot.vx
        dot.y += dot.vy

        // Wrap around edges
        if (dot.x < 0) dot.x = rect.width
        if (dot.x > rect.width) dot.x = 0
        if (dot.y < 0) dot.y = rect.height
        if (dot.y > rect.height) dot.y = 0
      })

      // Draw connections
      ctx.lineWidth = 2.5

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x
          const dy = dots[i].y - dots[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = Math.pow(1 - distance / connectionDistance, 1.5)
            const color = isDark
              ? `rgba(148, 163, 184, ${opacity * 0.2})`
              : `rgba(71, 85, 105, ${opacity * 0.25})`
            ctx.strokeStyle = color
            ctx.beginPath()
            ctx.moveTo(dots[i].x, dots[i].y)
            ctx.lineTo(dots[j].x, dots[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw dots with varying sizes
      dots.forEach((dot) => {
        // Glow effect
        const gradient = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, dot.radius * 2)
        const dotColor = isDark ? "rgba(148, 163, 184, 0.3)" : "rgba(71, 85, 105, 0.35)"
        gradient.addColorStop(0, dotColor)
        gradient.addColorStop(1, "transparent")
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.radius * 2, 0, Math.PI * 2)
        ctx.fill()
        
        // Dot
        ctx.fillStyle = isDark ? "rgba(148, 163, 184, 0.7)" : "rgba(71, 85, 105, 0.75)"
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      resizeCanvas()
      initDots()
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isDark])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ background: "transparent" }}
    />
  )
}
