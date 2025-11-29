"use client"

import { useState } from "react"

interface PlayerCardProps {
  player: {
    id: string
    name: string
    position: string
    image: string
    bio: string
  }
}

export function PlayerCard({ player }: PlayerCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
        <img
          src={player.image || "/placeholder.svg"}
          alt={player.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-card-foreground mb-1">{player.name}</h3>
        <p className="text-sm font-semibold text-primary mb-3">{player.position}</p>
        <p className="text-sm text-card-foreground/70 line-clamp-2">{player.bio}</p>
      </div>
    </div>
  )
}
