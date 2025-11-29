"use client"

import { useState } from "react"
import Link from "next/link"

const playersList = [
  {
    id: 1,
    name: "Smriti Mandhana",
    role: "Opening Batter",
    stats: "ODI Runs: 4500+",
    emoji: "🇮🇳",
  },
  { id: 2, name: "Harleen Deol", role: "All-rounder", stats: "T20 Appearances: 50+", emoji: "🏏" },
  {
    id: 3,
    name: "Radha Yadav",
    role: "Left-arm Spinner",
    stats: "Wickets: 80+",
    emoji: "⚡",
  },
  {
    id: 4,
    name: "Renuka Singh",
    role: "Pacer",
    stats: "Speed: 130+ kmph",
    emoji: "💨",
  },
  {
    id: 5,
    name: "Rohit Sharma",
    role: "Captain",
    stats: "T20I Runs: 4000+",
    emoji: "👑",
  },
  { id: 6, name: "Virat Kohli", role: "Star Batter", stats: "ODI Runs: 13000+", emoji: "⭐" },
  {
    id: 7,
    name: "Hardik Pandya",
    role: "All-rounder",
    stats: "Matches: 150+",
    emoji: "🔥",
  },
  {
    id: 8,
    name: "Jasprit Bumrah",
    role: "Pace Bowler",
    stats: "Wickets: 150+",
    emoji: "🎯",
  },
]

export function FeaturedPlayers() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Featured Legends</h2>
        <p className="text-center text-foreground/60 mb-16 text-lg">Hover to see player statistics</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {playersList.map((player) => (
            <Link key={player.id} href={`/players/${player.id}`}>
              <div
                className={`relative group cursor-pointer transform transition-all duration-300 ${
                  hoveredId === player.id ? "scale-105 -rotate-1" : "scale-100"
                }`}
                onMouseEnter={() => setHoveredId(player.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className="h-64 bg-gradient-to-br from-primary to-primary/60 rounded-xl overflow-hidden shadow-lg
                  group-hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center justify-center p-6 text-center"
                >
                  <div className="text-6xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                    {player.emoji}
                  </div>
                  <h3 className="text-xl font-bold text-primary-foreground mb-2">{player.name}</h3>
                  <p className="text-sm text-primary-foreground/80 mb-4">{player.role}</p>

                  <div
                    className={`absolute inset-0 bg-accent rounded-xl flex items-center justify-center font-semibold text-accent-foreground text-center p-4 transition-opacity duration-300 ${
                      hoveredId === player.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span>{player.stats}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
