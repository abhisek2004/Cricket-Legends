"use client"

import { useState, useEffect } from "react"

const players = [
  { name: "Smriti Mandhana", role: "Women's Cricket Legend", color: "from-pink-500" },
  { name: "Virat Kohli", role: "Men's Cricket Legend", color: "from-blue-600" },
  { name: "Harleen Deol", role: "Rising Star", color: "from-purple-500" },
  { name: "Rohit Sharma", role: "Captain Magnificent", color: "from-cyan-500" },
]

export function PlayerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % players.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 px-4 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Featured Players Carousel</h2>

        <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
          {players.map((player, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-gradient-to-r ${player.color} to-transparent flex items-center justify-center transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="text-center text-white">
                <div className="text-6xl md:text-7xl mb-4">🏏</div>
                <h3 className="text-4xl md:text-5xl font-bold mb-2">{player.name}</h3>
                <p className="text-xl md:text-2xl font-light">{player.role}</p>
              </div>
            </div>
          ))}

          {/* Carousel indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {players.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
