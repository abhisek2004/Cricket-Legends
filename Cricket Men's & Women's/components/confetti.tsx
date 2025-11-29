"use client"

import { useEffect } from "react"

export function Confetti() {
  useEffect(() => {
    const canvas = document.createElement("canvas")
    canvas.style.position = "fixed"
    canvas.style.top = "0"
    canvas.style.left = "0"
    canvas.style.pointerEvents = "none"
    canvas.style.zIndex = "9999"
    document.body.appendChild(canvas)

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      angle: number
      angularVel: number
      life: number
      maxLife: number
    }> = []

    // Create confetti particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        vx: (Math.random() - 0.5) * 6,
        vy: Math.random() * 4 + 2,
        angle: Math.random() * Math.PI * 2,
        angularVel: (Math.random() - 0.5) * 0.2,
        life: 0,
        maxLife: 3000 + Math.random() * 2000,
      })
    }

    const colors = ["#1e40af", "#fbbf24", "#dc2626", "#10b981", "#8b5cf6"]

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.life += 16
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.1 // gravity
        p.angle += p.angularVel

        const alpha = Math.max(0, 1 - p.life / p.maxLife)
        ctx.globalAlpha = alpha

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.angle)
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)]
        ctx.fillRect(-5, -5, 10, 10)
        ctx.restore()
      })

      if (particles.some((p) => p.life < p.maxLife)) {
        requestAnimationFrame(animate)
      } else {
        document.body.removeChild(canvas)
      }
    }

    animate()

    return () => {
      if (document.body.contains(canvas)) {
        document.body.removeChild(canvas)
      }
    }
  }, [])

  return null
}
