"use client";

const testimonials = [
  // === WOMEN ===
  {
    name: "Abhisek Panda",
    quote: "Harleen Deol’s fearless sixes light up the stadium!",
    emoji: "🏏",
  },
  {
    name: "Abhisek Panda",
    quote: "Smriti Mandhana — every cover drive is pure art",
    emoji: "✨",
  },
  {
    name: "Abhisek Panda",
    quote: "Radha Yadav spins webs no batter can escape",
    emoji: "🌀",
  },
  {
    name: "Abhisek Panda",
    quote: "Renuka Singh Thakur swings it like a dream",
    emoji: "🔥",
  },

  // === MEN ===
  {
    name: "Abhisek Panda",
    quote: "Rohit Sharma — The Hitman owns the powerplay!",
    emoji: "💣",
  },
  {
    name: "Abhisek Panda",
    quote: "Virat Kohli is emotion, chase, and victory",
    emoji: "💙",
  },
  {
    name: "Abhisek Panda",
    quote: "Hardik Pandya — sixes, wickets, pure energy",
    emoji: "💪",
  },
  {
    name: "Abhisek Panda",
    quote: "Bumrah’s yorkers? Death bowling masterpiece",
    emoji: "🎨",
  },
];

const gloryMoments = [
  {
    id: 1,
    year: "1983",
    title: "ODI World Cup",
    gender: "Men",
    trophy: "https://www.pngguru.in/storage/uploads/images/Icc%20men's%20world%20cup%20trophy%20HD%20PNG_1696183427_2106810967.webp",
  },
  {
    id: 2,
    year: "2002",
    title: "Champions Trophy",
    gender: "Men",
    trophy: "https://cdn.renderhub.com/arupsaha/icc-champions-trophy/icc-champions-trophy-02.jpg",
  },
  {
    id: 3,
    year: "2007",
    title: "T20 World Cup",
    gender: "Men",
    trophy: "https://png.pngtree.com/png-vector/20220413/ourmid/pngtree-icc-t20-world-cup-vector-design-png-image_4524768.png",
  },
  {
    id: 4,
    year: "2011",
    title: "ODI World Cup",
    gender: "Men",
    trophy: "https://www.pngguru.in/storage/uploads/images/Icc%20men's%20world%20cup%20trophy%20HD%20PNG_1696183427_2106810967.webp",
  },
  {
    id: 5,
    year: "2013",
    title: "Champions Trophy",
    gender: "Men",
    trophy: "https://cdn.renderhub.com/arupsaha/icc-champions-trophy/icc-champions-trophy-02.jpg",
  },
  {
    id: 6,
    year: "2024",
    title: "T20 World Cup",
    gender: "Men",
    trophy: "https://png.pngtree.com/png-vector/20220413/ourmid/pngtree-icc-t20-world-cup-vector-design-png-image_4524768.png",
  },
  {
    id: 7,
    year: "2025",
    title: "Champions Trophy",
    gender: "Men",
    trophy: "https://cdn.renderhub.com/arupsaha/icc-champions-trophy/icc-champions-trophy-02.jpg",
  },
  {
    id: 8,
    year: "2025",
    title: "ODI World Cup",
    gender: "Women",
    trophy: "https://femalecricket.com/wp-content/uploads/2025/06/icc-womens-cricket-world-cup-schedule-venues-600x600.jpg",
  },
];

const asiaCupWins = [
  { edition: "#1", year: "1984" },
  { edition: "#2", year: "1988" },
  { edition: "#3", year: "1990-91" },
  { edition: "#4", year: "1995" },
  { edition: "#5", year: "2010" },
  { edition: "#6", year: "2016" },
  { edition: "#7", year: "2018" },
  { edition: "#8", year: "2023" },
  { edition: "#9", year: "2025" },
];

export function Testimonials() {
  return (
    <>
      {/* ==== India’s ICC Glory Moments ==== */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-indigo-900">
            India’s ICC Glory Moments 🏆
          </h2>
          <p className="text-center text-indigo-700 mb-12 text-lg">
            Every ICC trophy that made a billion hearts beat louder
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {gloryMoments.map((moment) => (
              <div
                key={moment.id}
                className="group bg-white rounded-lg overflow-hidden shadow-md border border-indigo-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-32 bg-gradient-to-b from-gold-100 to-gold-200 flex items-center justify-center p-2">
                  <img
                    src={moment.trophy}
                    alt={`${moment.title} Trophy`}
                    className="max-h-full max-w-full object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="font-bold text-indigo-900 text-lg">{moment.year}</p>
                  <p className="text-sm text-indigo-700 font-medium">{moment.title}</p>
                  <p className="text-xs text-indigo-500 mt-1">{moment.gender}’s</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==== India’s Asia Cup Dominance ==== */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-teal-900">
            India’s Asia Cup Wins 🏆
          </h2>
          <p className="text-center text-teal-700 mb-12 text-lg">
            9 times champions – ruling the continent!
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-9 gap-4">
            {asiaCupWins.map((win, i) => (
              <div
                key={i}
                className="group bg-white rounded-lg p-4 shadow-md border border-teal-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="text-3xl mb-1">🏆</div>
                <p className="font-bold text-teal-900 text-sm">{win.year}</p>
                <p className="text-xs text-teal-600 font-medium">{win.edition}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-2xl font-bold text-teal-900">
              🇮🇳 Total: 9 Asia Cups (Men's ODI & T20I)
            </p>
            <p className="text-sm text-teal-600 mt-2">
              Plus multiple Women's Asia Cups!
            </p>
          </div>
        </div>
      </section>

      {/* ==== Original Fan Testimonials ==== */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Fan Testimonials
          </h2>
          <p className="text-center text-foreground/60 mb-16 text-lg">
            What fans love about cricket legends
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl mb-4">{testimonial.emoji}</div>
                <p className="text-lg italic text-foreground/80 mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="font-semibold text-foreground">
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}