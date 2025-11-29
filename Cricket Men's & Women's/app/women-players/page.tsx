"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { PlayerCard } from "@/components/player-card"
import { PlayerFilters } from "@/components/player-filters"

const womenPlayers = [
  {
    id: "smriti-mandhana",
    name: "Smriti Mandhana",
    position: "Opener / Batsman",
    image: "https://static-files.cricket-australia.pulselive.com/headshots/440/418-camedia.png",
    bio: "Indian women cricket star and dynamic left-handed opener",
  },
  {
    id: "harleen-deol",
    name: "Harleen Deol",
    position: "All-rounder",
    image: "https://static-files.cricket-australia.pulselive.com/headshots/440/3535-camedia.png",
    bio: "Talented all-rounder with impressive batting and fielding skills",
  },
  {
    id: "radha-yadav",
    name: "Radha Yadav",
    position: "Bowler",
    image: "https://static-files.cricket-australia.pulselive.com/headshots/440/1868-camedia.png",
    bio: "Left-arm spinner bringing innovation to women's cricket",
  },
  {
    id: "renuka-singh-thakur",
    name: "Renuka Singh Thakur",
    position: "Bowler",
    image: "https://static-files.cricket-australia.pulselive.com/headshots/440/3881-camedia.png",
    bio: "Fast bowler making impact in international women's cricket",
  },
]

const getWomenPositions = () => {
  const positions = [...new Set(womenPlayers.map((p) => p.position.split(" / ")[0]))]
  return positions
}

export default function WomenPlayersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null)

  const filteredPlayers = useMemo(() => {
    return womenPlayers.filter((player) => {
      const matchesSearch =
        player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        player.position.toLowerCase().includes(searchQuery.toLowerCase())

      const playerPosition = player.position.split(" / ")[0]
      const matchesPosition = !selectedPosition || playerPosition === selectedPosition

      return matchesSearch && matchesPosition
    })
  }, [searchQuery, selectedPosition])

  const handleClearFilters = () => {
    setSearchQuery("")
    setSelectedPosition(null)
  }

  return (
    <main className="min-h-screen py-12 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-4">Women Players</h1>
          <p className="text-xl text-foreground/70">Celebrate India's brilliant women cricket champions</p>
        </div>

        {/* Search and Filters */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {/* Search Input */}
          <div className="lg:col-span-3">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <Input
                type="text"
                placeholder="Search players by name or position..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
          </div>
        </div>

        {/* Filters and Results Container */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <PlayerFilters
              positions={getWomenPositions()}
              selectedPosition={selectedPosition}
              onPositionChange={setSelectedPosition}
              onClearAll={handleClearFilters}
            />
          </div>

          {/* Players Grid */}
          <div className="lg:col-span-3">
            {filteredPlayers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredPlayers.map((player) => (
                  <Link key={player.id} href={`/players/${player.id}`}>
                    <PlayerCard player={player} />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-card rounded-lg">
                <p className="text-lg text-foreground/70">
                  {searchQuery || selectedPosition ? `No players found matching your filters` : "No players available"}
                </p>
                {(searchQuery || selectedPosition) && (
                  <button
                    onClick={handleClearFilters}
                    className="mt-4 text-primary hover:text-primary/80 font-semibold"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Results Summary */}
        {filteredPlayers.length > 0 && (
          <div className="mt-8 text-center text-foreground/70">
            <p>
              Showing {filteredPlayers.length} of {womenPlayers.length} players
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
