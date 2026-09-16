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
  pulse: number
  pulseSpeed: number
}

interface Orb {
  x: number
  y: number
  radius: number
  vx: number
  vy: number
  opacity: number
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", checkMobile)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const dotCount = isMobile ? 30 : 55
    const connectionDistance = isMobile ? 180 : 240
    const minRadius = isMobile ? 1.5 : 2
    const maxRadius = isMobile ? 3 : 4.5
    const baseSpeed = 0.35
    const speedVariation = 0.25
    const directionChangeInterval = 200
    const directionChangeRate = 0.04

    let dots: Dot[] = []
    let orbs: Orb[] = []
    let animationFrameId: number
    let frameCount = 0

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()

      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = rect.width + "px"
      canvas.style.height = rect.height + "px"
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

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
          vx,
          vy,
          radius,
          targetVx: vx,
          targetVy: vy,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.02,
        })
      }
    }

    const initOrbs = () => {
      const rect = canvas.getBoundingClientRect()
      orbs = [
        {
          x: rect.width * 0.2,
          y: rect.height * 0.3,
          radius: isMobile ? 120 : 220,
          vx: 0.15,
          vy: 0.1,
          opacity: 0.04,
        },
        {
          x: rect.width * 0.75,
          y: rect.height * 0.65,
          radius: isMobile ? 100 : 180,
          vx: -0.12,
          vy: -0.08,
          opacity: 0.03,
        },
      ]
    }

    resizeCanvas()
    initDots()
    initOrbs()

    const animate = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      frameCount++

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, rect.width, rect.height)

      // Floating gradient orbs
      orbs.forEach((orb) => {
        orb.x += orb.vx
        orb.y += orb.vy

        if (orb.x < -orb.radius) orb.x = rect.width + orb.radius
        if (orb.x > rect.width + orb.radius) orb.x = -orb.radius
        if (orb.y < -orb.radius) orb.y = rect.height + orb.radius
        if (orb.y > rect.height + orb.radius) orb.y = -orb.radius

        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius)
        gradient.addColorStop(0, `rgba(0, 0, 0, ${orb.opacity})`)
        gradient.addColorStop(1, "transparent")
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Subtle mouse influence
      const mouse = mouseRef.current
      const mouseInfluence = isMobile ? 0 : 0.015

      dots.forEach((dot) => {
        if (frameCount % directionChangeInterval === 0) {
          const angle = Math.random() * Math.PI * 2
          const speed = baseSpeed + (Math.random() - 0.5) * speedVariation
          dot.targetVx = Math.cos(angle) * speed
          dot.targetVy = Math.sin(angle) * speed
        }

        dot.vx += (dot.targetVx - dot.vx) * directionChangeRate
        dot.vy += (dot.targetVy - dot.vy) * directionChangeRate

        if (!isMobile && mouse.x > 0) {
          const dx = mouse.x - dot.x
          const dy = mouse.y - dot.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 200 && dist > 0) {
            dot.vx -= (dx / dist) * mouseInfluence
            dot.vy -= (dy / dist) * mouseInfluence
          }
        }

        dot.x += dot.vx
        dot.y += dot.vy
        dot.pulse += dot.pulseSpeed

        if (dot.x < 0) dot.x = rect.width
        if (dot.x > rect.width) dot.x = 0
        if (dot.y < 0) dot.y = rect.height
        if (dot.y > rect.height) dot.y = 0
      })

      // Connection lines
      ctx.lineWidth = 1

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x
          const dy = dots[i].y - dots[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = Math.pow(1 - distance / connectionDistance, 2) * 0.12
            ctx.strokeStyle = `rgba(0, 0, 0, ${opacity})`
            ctx.beginPath()
            ctx.moveTo(dots[i].x, dots[i].y)
            ctx.lineTo(dots[j].x, dots[j].y)
            ctx.stroke()
          }
        }
      }

      // Dots with pulse
      dots.forEach((dot) => {
        const pulseScale = 1 + Math.sin(dot.pulse) * 0.15
        const r = dot.radius * pulseScale

        ctx.fillStyle = `rgba(0, 0, 0, ${0.15 + Math.sin(dot.pulse) * 0.05})`
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, r, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      resizeCanvas()
      initDots()
      initOrbs()
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isMobile])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ background: "transparent" }}
      aria-hidden="true"
    />
  )
}
