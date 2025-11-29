"use client"

import { useEffect, useState, useRef } from "react"

const stats = [
  { label: "Total Matches Watched", value: 10000, icon: "👁️" },
  { label: "Trophies Won", value: 250, icon: "🏆" },
  { label: "Total Runs", value: 150000, icon: "🏃" },
  { label: "Total Wickets", value: 8000, icon: "🎯" },
]

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const increment = target / 50
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= target) {
          clearInterval(interval)
          return target
        }
        return Math.ceil(prev + increment)
      })
    }, 30)

    return () => clearInterval(interval)
  }, [isVisible, target])

  return <div ref={ref}>{count.toLocaleString()}</div>
}

export function StatsCounter() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary/80">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary-foreground">By The Numbers</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 rounded-xl p-8 text-center backdrop-blur-sm border border-primary-foreground/20 hover:border-primary-foreground/50 transition-colors"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                <Counter target={stat.value} />
              </div>
              <p className="text-primary-foreground/80 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
