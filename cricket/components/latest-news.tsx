"use client";

const newsItems = [
  {
    id: 1,
    title: "Smriti Mandhana smashes new ODI record",
    excerpt: "India's opening batter sets a new benchmark with her incredible performance in the latest ODI series.",
    date: "Nov 3, 2025",
    emoji: "📈",
  },
  {
    id: 2,
    title: "Rohit talks about World Cup strategy",
    excerpt: "Captain Sharma shares insights into the team's preparation and strategic approach for the upcoming tournament.",
    date: "Nov 2, 2025",
    emoji: "🎤",
  },
  {
    id: 3,
    title: "Jasprit Bumrah: A pacer's journey to greatness",
    excerpt: "Exclusive interview with India's pace spearhead discussing his evolution and impact on world cricket.",
    date: "Nov 1, 2025",
    emoji: "⚡",
  },
  {
    id: 4,
    title: "Women's cricket breaking barriers",
    excerpt: "The incredible growth of women's cricket and its impact on the next generation of athletes.",
    date: "Oct 31, 2025",
    emoji: "💪",
  },
];

const gloryMoments = [
  {
    id: 1,
    year: "1983",
    title: "ODI World Cup",
    captain: "Kapil Dev",
    emoji: "🏆",
    story:
      "Before 1983, Indian cricket was barely recognised. Kapil Dev’s fearless squad stunned West Indies at Lord’s, defending 183 to spark a cricketing revolution.",
  },
  {
    id: 2,
    year: "2002",
    title: "Champions Trophy",
    captain: "Sourav Ganguly",
    emoji: "🏆",
    story:
      "Rain couldn’t stop Ganguly’s unbeaten run. Both finals washed out — India declared joint winners with Sri Lanka. A milestone nonetheless!",
  },
  {
    id: 3,
    year: "2007",
    title: "T20 World Cup",
    captain: "MS Dhoni",
    emoji: "🏆",
    story:
      "Young Dhoni’s fearless T20 squad. Joginder Sharma’s last over & Misbah’s scoop — India beat Pakistan and turned T20 into a national obsession.",
  },
  {
    id: 4,
    year: "2011",
    title: "ODI World Cup",
    captain: "MS Dhoni",
    emoji: "🏆",
    story:
      "28 years of wait ended. Gambhir’s 97, Dhoni’s iconic six at Wankhede — India lifted the cup for Sachin and a billion fans.",
  },
  {
    id: 5,
    year: "2013",
    title: "Champions Trophy",
    captain: "MS Dhoni",
    emoji: "🏆",
    story:
      "Rain-shortened final, 129 to defend. Jadeja’s magic & Dhoni’s tactics beat England by 5 runs — only captain with all 3 ICC white-ball titles.",
  },
  {
    id: 6,
    year: "2024",
    title: "T20 World Cup",
    captain: "Rohit Sharma",
    emoji: "🏆",
    story:
      "After 2023 heartbreak, Rohit & Virat signed off in style. A tense 7-run win over South Africa ended an 11-year ICC trophy drought.",
  },
  {
    id: 7,
    year: "2025",
    title: "Champions Trophy",
    captain: "Rohit Sharma",
    emoji: "🏆",
    story:
      "Rohit’s fiery knock set the tone. India chased New Zealand’s total with ease — 7th ICC trophy, back-to-back glory!",
  },
  {
    id: 8,
    year: "2025",
    title: "Women's ODI World Cup",
    captain: "Harmanpreet Kaur",
    emoji: "🏆",
    story:
      "Jemimah Rodrigues’ epic century shocked Australia in the semi-final. India chased 339 & lifted their FIRST Women’s ODI World Cup!",
  },
];

export function LatestNews() {
  return (
    <>
      {/* ==== Latest News ==== */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Latest News
          </h2>
          <p className="text-center text-foreground/60 mb-16 text-lg">
            Stay updated with cricket legends
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsItems.map((news) => (
              <div
                key={news.id}
                className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border/50 cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{news.emoji}</div>
                  <div className="flex-1">
                    <p className="text-sm text-foreground/60 mb-2">{news.date}</p>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-foreground/70 line-clamp-2">{news.excerpt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==== India’s Historic Moments ==== */}
      <section className="py-20 px-4 bg-gradient-to-b from-indigo-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-indigo-900">
            India’s 8 Historic ICC Triumphs 🏆
          </h2>
          <p className="text-center text-indigo-700 mb-12 text-lg max-w-3xl mx-auto">
            From Kapil’s Devils to Harmanpreet’s Queens — every trophy that made a billion hearts roar.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gloryMoments.map((moment) => (
              <div
                key={moment.id}
                className="group bg-white rounded-2xl p-6 shadow-xl border border-indigo-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 cursor-default"
              >
                <div className="text-5xl mb-3">{moment.emoji}</div>
                <div className="text-3xl font-black text-indigo-900 mb-1">
                  {moment.year}
                </div>
                <h3 className="text-lg font-bold text-indigo-800 mb-2">
                  {moment.title}
                </h3>
                <p className="text-xs font-medium text-pink-600 mb-3">
                  Captain: {moment.captain}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed line-clamp-4">
                  {moment.story}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-bold text-indigo-600">
                    #{moment.id} ICC Trophy
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mini Summary */}
          <div className="mt-16 text-center bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg border border-indigo-200">
            <p className="text-2xl font-bold text-indigo-900">
              🇮🇳 India’s Trophy Cabinet
            </p>
            <p className="mt-4 text-lg text-indigo-700">
              2 ODI World Cups • 2 T20 World Cups • 3 Champions Trophies •{" "}
              <span className="font-bold text-pink-600">1 Women’s ODI World Cup</span>
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Plus U-19 Women’s T20 World Cup 2025 🏆
            </p>
          </div>
        </div>
      </section>
    </>
  );
}