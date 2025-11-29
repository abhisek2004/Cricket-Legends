"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary">
      <div className="absolute inset-0">
        {/* Animated stadium lights */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl bg-secondary/20 animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-accent/20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)",
            backgroundSize: "100% 70px",
          }}
        ></div>
      </div>

      <div className="relative z-10 text-center px-4 py-20">
        <div className="mb-8 flex justify-center">
          <div className="text-7xl sm:text-8xl md:text-9xl font-bold text-accent drop-shadow-lg animate-bounce">🏏</div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary-foreground mb-6 text-balance leading-tight">
          Cricket Legends Universe
        </h1>

        <p className="text-lg sm:text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto text-balance font-light">
          Celebrating Cricket Legends Forever
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="/men-players">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto text-base font-semibold px-8"
            >
              Explore Players
            </Button>
          </Link>
          <Link href="#highlights">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto text-base font-semibold px-8 bg-transparent"
            >
              Watch Highlights
            </Button>
          </Link>
        </div>

        {/* Scroll indicator with animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
