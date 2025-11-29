"use client"

import { useState, useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { PlayerCarousel } from "@/components/player-carousel"
import { SponsorsCarousel } from "@/components/sponsors-carousel"
import { FeaturedPlayers } from "@/components/featured-players"
import { StatsCounter } from "@/components/stats-counter"
import { LatestNews } from "@/components/latest-news"
import { HighlightVideos } from "@/components/highlight-videos"
import { Testimonials } from "@/components/testimonials"
import { Confetti } from "@/components/confetti"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    setShowConfetti(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen overflow-hidden">
      {showConfetti && <Confetti />}

      {/* Hero Section */}
      <HeroSection />

      {/* Auto Carousel Slider */}
      <PlayerCarousel />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Sponsors Logos Section */}
      <SponsorsCarousel />

      {/* Featured Player Cards */}
      <FeaturedPlayers />

      {/* Stats Counter Animation */}
      <StatsCounter />

      {/* Latest News Section */}
      <LatestNews />

      {/* Highlight Videos Section */}
      <HighlightVideos />

      {/* Testimonials Section */}
      <Testimonials />
    </main>
  )
}
