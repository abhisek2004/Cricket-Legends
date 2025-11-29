"use client"

import { useState } from "react"
import { X } from "lucide-react"

const videos = [
  {
    id: 1,
    title: "ODI World Cup 1983",
    emoji: "🏆",
    youtubeId: "GcarXhyDx8A?si=zpnx_lI18yCOMPpY" // ← Replace with your ICC video
  },
  {
    id: 1,
    title: "Champions Trophy 2002",
    emoji: "🏆",
    youtubeId: "1ayTaz6VgQk?si=C_pvxVg489FmEK51" // ← Replace with your ICC video
  },
  {
    id: 1,
    title: "T20 World Cup 2007",
    emoji: "🏆",
    youtubeId: "MAI5VwUxPCg?si=bd5rcNBuhbCZ7-fL" // ← Replace with your ICC video
  },
  {
    id: 1,
    title: "ODI World Cup 2011",
    emoji: "🏆",
    youtubeId: "YphL3Whh5B0?si=L6kvKzoOaZ3I1qAx" // ← Replace with your ICC video
  },
  {
    id: 1,
    title: "Champions Trophy 2013",
    emoji: "🏆",
    youtubeId: "bSGSBJV8TIo?si=YRRW2Q4SyZv-HumO" // ← Replace with your ICC video
  },
  {
    id: 2,
    title: "Asia Cup 2018",
    emoji: "🥇",
    youtubeId: "zTsahJSOw3g?si=Qx5FT150m5rfYwT4" // ← Replace with your Asia Cup video
  },
  {
    id: 2,
    title: "Asia Cup 2023",
    emoji: "🥇",
    youtubeId: "vdNrPdeEuYQ?si=u6RdjqjYbYgqhlGX" // ← Replace with your Asia Cup video
  },
  {
    id: 1,
    title: "T20 World Cup 2024",
    emoji: "🏆",
    youtubeId: "3yiWqnKl7lQ?si=ORraEzGndYtcjtEg" // ← Replace with your ICC video
  },
  {
    id: 1,
    title: "Champions Trophy 2025",
    emoji: "🏆",
    youtubeId: "bccilink/videos/IpEyaCo6" // ← Replace with your ICC video
  },
  {
    id: 2,
    title: "Asia Cup 2025",
    emoji: "🥇",
    youtubeId: "MAm0RLQpYas?si=8vV014sF4vOihorQ" // ← Replace with your Asia Cup video
  },
  {
    id: 1,
    title: "ODI World Cup Women 2025",
    emoji: "🏆",
    youtubeId: "fQzZtqcVoTg?si=5UpzqWPVvCcAmosA" // ← Replace with your ICC video
  },
]

export function HighlightVideos() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  return (
    <>
      <section id="highlights" className="py-20 px-4 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Highlight Reels
          </h2>
          <p className="text-center text-foreground/60 mb-16 text-lg">
            Click to relive India’s greatest cricketing triumphs!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video.youtubeId)}
                className="group relative h-64 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 rounded-2xl overflow-hidden shadow-2xl cursor-pointer transform hover:scale-105 transition-all duration-300 border border-white/10"
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center">
                  <div className="text-7xl transform group-hover:scale-125 transition-transform duration-300 drop-shadow-2xl">
                    {video.emoji}
                  </div>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-md border-4 border-white shadow-2xl">
                    <svg className="w-10 h-10 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Title Bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6">
                  <p className="text-white font-bold text-xl drop-shadow-xl tracking-wide">
                    {video.title}
                  </p>
                  <p className="text-white/80 text-sm mt-1">Click to Watch →</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Modal Player */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-black rounded-3xl overflow-hidden shadow-3xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-200 border border-white/30"
            >
              <X className="w-7 h-7 text-white" />
            </button>

            {/* Video Title */}
            <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <p className="text-white font-semibold text-sm">
                {videos.find(v => v.youtubeId === selectedVideo)?.title}
              </p>
            </div>

            {/* YouTube Embed */}
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title="Cricket Highlight"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}