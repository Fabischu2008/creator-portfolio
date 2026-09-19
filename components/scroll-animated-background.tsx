"use client"

import { useEffect, useRef } from "react"

interface Vertex {
  // Position in the lat/long mesh, reused as the flat grid target at the end
  row: number
  col: number
  // Unit sphere position
  sx: number
  sy: number
  sz: number
  // Free-floating position during the network phase
  freeX: number
  freeY: number
  vx: number
  vy: number
  // Per-vertex burst characteristics so the explosion scatters unevenly
  burstSpeed: number
  burstJitter: number
  radius: number
  pulse: number
  pulseSpeed: number
  // Computed each frame
  x: number
  y: number
  depth: number
}

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)))
  return t * t * (3 - 2 * t)
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

export function ScrollAnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const scrollRef = useRef(0)
  const rotationRef = useRef(0)
  const mouseRef = useRef({ x: -1, y: -1 })
  const inkRef = useRef("0, 0, 0")

  useEffect(() => {
    const syncInk = () => {
      inkRef.current = document.documentElement.classList.contains("dark")
        ? "255, 255, 255"
        : "0, 0, 0"
    }
    syncInk()
    const observer = new MutationObserver(syncInk)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      scrollRef.current = docHeight > 0 ? window.scrollY / docHeight : 0
    }
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("mousemove", onMouseMove, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const isMobile = window.innerWidth < 768

    // Lat/long grid resolution — this defines the wireframe mesh
    const latBands = isMobile ? 7 : 9
    const lonSegments = isMobile ? 12 : 18
    const vertexCount = latBands * lonSegments

    const baseSpeed = 0.26
    const tilt = -0.32

    let vertices: Vertex[] = []
    // Third value marks the longitude seam, which has to disappear once the
    // globe unrolls — otherwise it spans the whole screen as a stray line.
    const edges: Array<[number, number, boolean]> = []
    let animationFrameId: number
    let frameCount = 0
    let viewW = 0
    let viewH = 0

    // Mesh topology: rings along latitude, meridians along longitude
    for (let i = 0; i < latBands; i++) {
      for (let j = 0; j < lonSegments; j++) {
        const index = i * lonSegments + j
        edges.push([index, i * lonSegments + ((j + 1) % lonSegments), j === lonSegments - 1])
        if (i < latBands - 1) {
          edges.push([index, (i + 1) * lonSegments + j, false])
        }
      }
    }

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      // Measured from the viewport, never from the canvas itself — writing an
      // inline pixel width would freeze the element at its first size and it
      // could never shrink back on rotation or a narrower screen.
      viewW = document.documentElement.clientWidth || window.innerWidth
      viewH = document.documentElement.clientHeight || window.innerHeight
      canvas.width = Math.round(viewW * dpr)
      canvas.height = Math.round(viewH * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const initVertices = () => {
      vertices = []

      for (let i = 0; i < latBands; i++) {
        const theta = ((i + 1) / (latBands + 1)) * Math.PI
        for (let j = 0; j < lonSegments; j++) {
          const phi = (j / lonSegments) * Math.PI * 2
          const speed = baseSpeed + Math.random() * 0.16
          const angle = Math.random() * Math.PI * 2

          vertices.push({
            row: i,
            col: j,
            sx: Math.sin(theta) * Math.cos(phi),
            sy: Math.cos(theta),
            sz: Math.sin(theta) * Math.sin(phi),
            freeX: Math.random() * viewW,
            freeY: Math.random() * viewH,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            burstSpeed: 0.45 + Math.random() * 1.25,
            burstJitter: (Math.random() - 0.5) * 0.9,
            radius: isMobile ? 1.5 + Math.random() * 1.1 : 1.9 + Math.random() * 1.4,
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: 0.014 + Math.random() * 0.018,
            x: 0,
            y: 0,
            depth: 1,
          })
        }
      }
    }

    resizeCanvas()
    initVertices()

    const animate = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const progress = scrollRef.current
      frameCount++

      // Mesh is formed by ~30%, bursts at ~70–84%, then unrolls into a flat
      // perspective net towards the bottom of the page.
      const networkT = 1 - smoothstep(0.02, 0.17, progress)
      const convergeT = smoothstep(0.04, 0.28, progress)
      const meshT = smoothstep(0.16, 0.4, progress)
      const burstT = smoothstep(0.7, 0.85, progress)
      const gridT = smoothstep(0.81, 0.97, progress)
      // Mesh dims through the burst and comes back as the net assembles
      const meshVisibility = 1 - burstT * 0.8 * (1 - gridT)

      const sphereRadius = lerp(0, isMobile ? 104 : 162, smoothstep(0.05, 0.36, progress))
      const centerX = viewW / 2
      const centerY = lerp(viewH * 0.46, viewH * 0.56, smoothstep(0.4, 0.9, progress))

      rotationRef.current += prefersReduced ? 0 : 0.0028 + meshT * 0.0042
      const rotY = rotationRef.current

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, viewW, viewH)

      // Halo behind the mesh
      if (meshT > 0.05 && burstT < 0.7) {
        const glowAlpha = meshT * (1 - burstT) * 0.05
        const gradient = ctx.createRadialGradient(
          centerX,
          centerY,
          sphereRadius * 0.2,
          centerX,
          centerY,
          sphereRadius * 2.2
        )
        gradient.addColorStop(0, `rgba(0, 0, 0, ${glowAlpha})`)
        gradient.addColorStop(1, "transparent")
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(centerX, centerY, sphereRadius * 2.2, 0, Math.PI * 2)
        ctx.fill()
      }

      const mouse = mouseRef.current
      const cosRot = Math.cos(rotY)
      const sinRot = Math.sin(rotY)
      const cosTilt = Math.cos(tilt)
      const sinTilt = Math.sin(tilt)
      const burstDistance = isMobile ? 320 : 520

      vertices.forEach((v) => {
        if (networkT > 0.02 && !prefersReduced) {
          v.freeX += v.vx * networkT
          v.freeY += v.vy * networkT

          if (frameCount % 210 === 0) {
            const angle = Math.random() * Math.PI * 2
            v.vx = Math.cos(angle) * baseSpeed
            v.vy = Math.sin(angle) * baseSpeed
          }

          if (!isMobile && mouse.x > 0) {
            const mdx = mouse.x - v.freeX
            const mdy = mouse.y - v.freeY
            const mdist = Math.sqrt(mdx * mdx + mdy * mdy)
            if (mdist < 170 && mdist > 0) {
              v.freeX -= (mdx / mdist) * 0.7 * networkT
              v.freeY -= (mdy / mdist) * 0.7 * networkT
            }
          }

          if (v.freeX < 0) v.freeX = viewW
          if (v.freeX > viewW) v.freeX = 0
          if (v.freeY < 0) v.freeY = viewH
          if (v.freeY > viewH) v.freeY = 0
        }

        v.pulse += v.pulseSpeed

        // Rotate around Y, then tilt around X
        const rx = v.sx * cosRot - v.sz * sinRot
        const rz0 = v.sx * sinRot + v.sz * cosRot
        const ry = v.sy * cosTilt - rz0 * sinTilt
        const rz = v.sy * sinTilt + rz0 * cosTilt

        // Perspective so the mesh reads as a real globe
        const perspective = 2.4 / (2.4 - rz * 0.55)
        let sphereX = centerX + rx * sphereRadius * perspective
        let sphereY = centerY + ry * sphereRadius * perspective

        if (burstT > 0 && gridT < 1) {
          // Each vertex flies out along its own direction at its own speed,
          // so the mesh scatters instead of collapsing onto a ring. The offset
          // fades out again while the flat net assembles.
          const dirLen = Math.max(Math.sqrt(rx * rx + ry * ry), 0.0001)
          const jitterCos = Math.cos(v.burstJitter)
          const jitterSin = Math.sin(v.burstJitter)
          const nx = (rx / dirLen) * jitterCos - (ry / dirLen) * jitterSin
          const ny = (rx / dirLen) * jitterSin + (ry / dirLen) * jitterCos

          const travel = burstT * burstT * burstDistance * v.burstSpeed * (1 - gridT)
          sphereX += nx * travel
          sphereY += ny * travel
        }

        // Flat grid target: rows bunch up towards the horizon, columns fan out
        // towards the viewer — the globe literally unrolls into a net.
        const rowT = latBands > 1 ? v.row / (latBands - 1) : 0
        const gridY = viewH * (0.28 + 0.66 * rowT * rowT)
        const spread = 0.42 + 0.75 * rowT
        const gridX =
          centerX + ((v.col + 0.5) / lonSegments - 0.5) * viewW * spread * 1.8

        // Shading follows the grid's own depth once it has unrolled
        v.depth = lerp((rz + 1) / 2, 0.15 + rowT * 0.85, gridT)

        const targetX = lerp(sphereX, gridX, gridT)
        const targetY = lerp(sphereY, gridY, gridT)

        v.x = lerp(v.freeX, targetX, convergeT)
        v.y = lerp(v.freeY, targetY, convergeT)
      })

      // Network lines (hero phase) — clearly visible
      // Scale the link radius with actual point spacing so the web stays equally
      // sparse on any viewport instead of clumping on small screens.
      const spacing = Math.sqrt((viewW * viewH) / vertexCount)
      const networkDistance = spacing * 1.12

      const networkAlpha = networkT * 0.55
      if (networkAlpha > 0.005) {
        ctx.lineWidth = 1.2
        for (let i = 0; i < vertices.length; i++) {
          for (let j = i + 1; j < vertices.length; j++) {
            const dx = vertices[i].x - vertices[j].x
            const dy = vertices[i].y - vertices[j].y
            const distSq = dx * dx + dy * dy
            if (distSq < networkDistance * networkDistance) {
              const distance = Math.sqrt(distSq)
              const opacity = Math.pow(1 - distance / networkDistance, 1.4) * networkAlpha
              if (opacity > 0.005) {
                ctx.strokeStyle = `rgba(${inkRef.current}, ${opacity})`
                ctx.beginPath()
                ctx.moveTo(vertices[i].x, vertices[i].y)
                ctx.lineTo(vertices[j].x, vertices[j].y)
                ctx.stroke()
              }
            }
          }
        }
      }

      // Wireframe mesh lines — the actual Gitternetz
      const meshAlpha = meshT * meshVisibility
      if (meshAlpha > 0.005) {
        for (const [a, b, isSeam] of edges) {
          const va = vertices[a]
          const vb = vertices[b]
          const avgDepth = (va.depth + vb.depth) / 2
          // Front edges darker, back edges faint — gives the globe volume
          let opacity = meshAlpha * (0.07 + avgDepth * 0.34)
          if (isSeam) opacity *= 1 - gridT
          if (opacity > 0.005) {
            ctx.strokeStyle = `rgba(${inkRef.current}, ${opacity})`
            ctx.lineWidth = 0.7 + avgDepth * 0.8
            ctx.beginPath()
            ctx.moveTo(va.x, va.y)
            ctx.lineTo(vb.x, vb.y)
            ctx.stroke()
          }
        }
      }

      // Shockwave rings, only during the burst itself
      if (burstT > 0.02 && gridT < 0.85) {
        for (let ring = 0; ring < 3; ring++) {
          const ringT = Math.max(0, burstT - ring * 0.1)
          if (ringT > 0) {
            const ringRadius = sphereRadius + ringT * burstDistance * 0.8 + ring * 45
            const ringAlpha = (1 - ringT) * (1 - gridT) * 0.12
            ctx.strokeStyle = `rgba(${inkRef.current}, ${ringAlpha})`
            ctx.lineWidth = 2 - ring * 0.5
            ctx.beginPath()
            ctx.arc(centerX, centerY, ringRadius, 0, Math.PI * 2)
            ctx.stroke()
          }
        }
      }

      // Vertices
      vertices.forEach((v) => {
        const pulseScale = 1 + Math.sin(v.pulse) * 0.16
        const depthScale = lerp(1, 0.6 + v.depth * 0.75, convergeT)
        const r = v.radius * pulseScale * depthScale

        // Hero dots are strong; on the sphere they follow depth
        const heroAlpha = 0.38
        const meshDotAlpha = 0.1 + v.depth * 0.34
        const alpha = lerp(heroAlpha, meshDotAlpha, convergeT) * meshVisibility

        if (alpha > 0.005) {
          ctx.fillStyle = `rgba(${inkRef.current}, ${alpha})`
          ctx.beginPath()
          ctx.arc(v.x, v.y, Math.max(r, 0.4), 0, Math.PI * 2)
          ctx.fill()
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      const prevW = viewW
      const prevH = viewH
      resizeCanvas()
      if (!prevW || !prevH) return

      // Mobile address bars fire resize on almost every scroll, so rescale the
      // drifting points instead of re-seeding them — otherwise the hero network
      // visibly jumps around while scrolling.
      const scaleX = viewW / prevW
      const scaleY = viewH / prevH
      vertices.forEach((v) => {
        v.freeX *= scaleX
        v.freeY *= scaleY
      })
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("orientationchange", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("orientationchange", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ background: "transparent" }}
      aria-hidden="true"
    />
  )
}
