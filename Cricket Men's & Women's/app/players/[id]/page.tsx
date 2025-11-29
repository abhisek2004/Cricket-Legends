"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface PlayerDetails {
  [key: string]: {
    name: string
    position: string
    image: string
    bio: string
    joinedYear: number
    nationality: string
    height: string
    role: string
    battingStyle: string
    bowlingStyle?: string
    biography: string
    careerHighlights: string[]
    icc: {
      matches: number
      runs: number
      wickets: number
    }
    ipl: {
      matches: number
      runs: number
      wickets: number
    }
    test: {
      matches: number
      runs: number
      wickets: number
    }
    achievements: string[]
    famousMoments: string[]
    videoLinks: string[]
    socialMedia: {
      instagram?: string
      twitter?: string
      facebook?: string
    }
  }
}

const playerDetails: PlayerDetails = {
  "rohit-sharma": {
    name: "Rohit Sharma",
    position: "Opener / Captain",
    image: "https://images.icc-cricket.com/icc-web/image/upload/t_player-headshot-portrait/prd/assets/players/generic/colored/3852.png",
    bio: "Indian cricket captain known for his aggressive batting and leadership",
    joinedYear: 2007,
    nationality: "India",
    height: "5'11\"",
    role: "Batsman",
    battingStyle: "Right-handed",
    biography:
      "Rohit Gurunath Sharma is an Indian international cricketer and the current captain of the Indian national cricket team in all formats. Known for his elegant stroke-play and powerful hitting, Rohit has established himself as one of the most successful batsmen in modern cricket.",
    careerHighlights: [
      "3× ODI World Cup champion (2011, 2015, 2019)",
      "T20 World Cup 2024 winner & captain",
      "Champions Trophy 2025 winning captain",
      "5× IPL champion as Mumbai Indians captain",
      "Highest individual ODI score: 264 vs SL",
      "Most international sixes: 600+",
      "7 World Cup hundreds",
      "3 double-centuries in ODIs",
    ],
    icc: { matches: 478, runs: 19484, wickets: 9 },
    ipl: { matches: 257, runs: 6623, wickets: 15 },
    test: { matches: 59, runs: 4017, wickets: 2 },
    achievements: [
      "Fastest to 500 sixes in international cricket",
      "Only player with 3 ODI double-centuries",
      "ICC ODI Cricketer of the Year 2019",
    ],
    famousMoments: [
      "264 vs Sri Lanka (2014)",
      "Leading India to T20WC 2024 glory",
      "209 vs Australia, Bengaluru 2013",
    ],
    videoLinks: ["https://www.youtube.com/embed/1bI6iCj3M7k"],
    socialMedia: {
      instagram: "https://instagram.com/rohitsharma45",
      twitter: "https://twitter.com/rohitsharma45",
    },
  },
  "virat-kohli": {
    name: "Virat Kohli",
    position: "Top-order Batsman",
    image: "https://static-files.cricket-australia.pulselive.com/headshots/288/10917-camedia.png",
    bio: "One of the greatest batsmen of all time",
    joinedYear: 2008,
    nationality: "India",
    height: "5'9\"",
    role: "Batsman",
    battingStyle: "Right-handed",
    biography:
      "Virat Kohli is a former Indian captain and the most consistent batsman of his era. Known for his chase-master reputation and unmatched fitness, he holds numerous batting records across formats.",
    careerHighlights: [
      "50 ODI centuries – most by any player",
      "Fastest to 8,000 / 9,000 / 10,000 / 12,000 / 13,000 ODI runs",
      "Most runs in a single IPL season (973 in 2016)",
      "ICC Cricketer of the Decade (2011-20)",
      "71 international centuries",
    ],
    icc: { matches: 525, runs: 26848, wickets: 5 },
    ipl: { matches: 252, runs: 7263, wickets: 4 },
    test: { matches: 113, runs: 8848, wickets: 0 },
    achievements: [
      "No.1 Test & ODI batsman for record periods",
      "ICC Player of the Year: 2017, 2018",
      "Padma Shri & Rajiv Gandhi Khel Ratna",
    ],
    famousMoments: [
      "183* vs Pakistan, Asia Cup 2012",
      "Twin hundreds vs Australia, Perth 2018",
      "82* vs Pakistan, T20WC 2022",
    ],
    videoLinks: ["https://www.youtube.com/embed/5zL3u3oOwkA"],
    socialMedia: {
      instagram: "https://instagram.com/virat.kohli",
      twitter: "https://twitter.com/virat.kohli",
    },
  },
  "hardik-pandya": {
    name: "Hardik Pandya",
    position: "All-rounder",
    image: "https://static-files.cricket-australia.pulselive.com/headshots/440/10911-camedia.png",
    bio: "Explosive all-rounder & T20 finisher",
    joinedYear: 2015,
    nationality: "India",
    height: "6'0\"",
    role: "All-rounder",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm fast-medium",
    biography:
      "Hardik Pandya is India’s premier pace-bowling all-rounder. His ability to hit massive sixes and bowl crucial overs makes him a match-winner in limited-overs cricket.",
    careerHighlights: [
      "T20 World Cup 2024 winner",
      "2× IPL champion (GT 2022 captain, MI 2025)",
      "Fastest Indian to 1000 runs + 50 wickets in T20Is",
      "Match-winning 3/17 vs Pakistan, T20WC 2024",
    ],
    icc: { matches: 165, runs: 3087, wickets: 141 },
    ipl: { matches: 138, runs: 2309, wickets: 65 },
    test: { matches: 11, runs: 532, wickets: 17 },
    achievements: [
      "First Indian to score a century & take a fifer in same Test",
      "IPL 2022 winning captain (GT)",
    ],
    famousMoments: [
      "60* off 33 vs SRH, IPL 2019",
      "3 wickets vs PAK, T20WC 2024",
      "All-round show in 2022 IPL final",
    ],
    videoLinks: ["https://www.youtube.com/embed/9t2pL1q9M2k"],
    socialMedia: {
      instagram: "https://instagram.com/hardikpandya93",
      twitter: "https://twitter.com/hardikpandya7",
    },
  },
  "jasprit-bumrah": {
    name: "Jasprit Bumrah",
    position: "Pace Bowler",
    image: "https://static-files.cricket-australia.pulselive.com/headshots/440/10982-camedia.png",
    bio: "World’s best fast bowler with lethal yorkers",
    joinedYear: 2016,
    nationality: "India",
    height: "5'10\"",
    role: "Bowler",
    bowlingStyle: "Right-arm fast",
    biography:
      "Jasprit Bumrah’s unorthodox action and pinpoint yorkers have redefined modern death bowling. He is the cornerstone of India’s pace attack across formats.",
    careerHighlights: [
      "No.1 ranked Test & ODI bowler multiple times",
      "Player of the Tournament – T20WC 2024",
      "5/21 vs England, 2022 Edgbaston Test",
      "First bowler to top ICC rankings in all formats",
    ],
    icc: { matches: 179, runs: 284, wickets: 359 },
    ipl: { matches: 133, runs: 68, wickets: 165 },
    test: { matches: 38, runs: 101, wickets: 171 },
    achievements: [
      "Polly Umrigar Award 4 times",
      "ICC Test Team of the Year 2022-24",
      "Fastest Indian pacer to 150 Test wickets",
    ],
    famousMoments: [
      "6/33 vs Australia, MCG 2018",
      "Death-over masterclass vs SL, Asia Cup 2023",
      "3/14 vs PAK, T20WC 2024",
    ],
    videoLinks: ["https://www.youtube.com/embed/3kLm8oP8z7M"],
    socialMedia: {
      instagram: "https://instagram.com/jaspritbumrah93",
      twitter: "https://twitter.com/Jaspritbumrah93",
    },
  },
  "smriti-mandhana": {
    name: "Smriti Mandhana",
    position: "Opening Batswoman",
    image: "https://static-files.cricket-australia.pulselive.com/headshots/440/418-camedia.png",
    bio: "Elegant left-handed opener & vice-captain",
    joinedYear: 2013,
    nationality: "India",
    height: "5'4\"",
    role: "Batsman",
    battingStyle: "Left-handed",
    biography:
      "Smriti Mandhana is India’s premier women’s opener. Her graceful cover drives and aggressive intent have made her a global superstar in women’s cricket.",
    careerHighlights: [
      "Fastest Indian woman to 3000 ODI runs",
      "2× ICC Women’s Cricketer of the Year (2021, 2023)",
      "WPL 2023 Orange Cap winner",
      "Century on Test debut vs Australia",
    ],
    icc: { matches: 149, runs: 6692, wickets: 0 },
    ipl: { matches: 30, runs: 987, wickets: 0 },
    test: { matches: 8, runs: 489, wickets: 0 },
    achievements: [
      "Arjuna Award 2021",
      "Only Indian woman with 2 ODI 150+ scores",
    ],
    famousMoments: [
      "127 vs SA, 2018",
      "Test century at Perth vs AUS",
      "90* in WPL final 2023",
    ],
    videoLinks: ["https://www.youtube.com/embed/0sY8zR5v5kY"],
    socialMedia: {
      instagram: "smriti_mandhana",
      twitter: "https://twitter.com/smriti_mandhana",
    },
  },
  "harleen-deol": {
    name: "Harleen Deol",
    position: "Middle-order / Off-spin All-rounder",
    image: "https://static-files.cricket-australia.pulselive.com/headshots/440/3535-camedia.png",
    bio: "Dynamic batter & brilliant fielder",
    joinedYear: 2019,
    nationality: "India",
    height: "5'5\"",
    role: "All-rounder",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm off-break",
    biography:
      "Harleen Deol is known for her stunning boundary catch that went viral. A stylish batter and handy off-spinner, she adds energy to the Indian middle order.",
    careerHighlights: [
      "Viral one-handed catch vs ENG 2021",
      "Half-century on T20I debut",
      "Consistent WPL performer for GG",
    ],
    icc: { matches: 28, runs: 412, wickets: 6 },
    ipl: { matches: 22, runs: 435, wickets: 4 },
    test: { matches: 1, runs: 27, wickets: 0 },
    achievements: [
      "ICC Women’s Catch of the Year 2021",
      "Rising star in domestic circuit",
    ],
    famousMoments: [
      "Flying catch at deep mid-wicket",
      "52* vs WI, 2019",
    ],
    videoLinks: ["https://www.youtube.com/embed/8zL3u3oOwkA"],
    socialMedia: {
      instagram: "deol.harleen304",
    },
  },
  "radha-yadav": {
    name: "Radha Yadav",
    position: "Left-arm Spinner",
    image: "https://static-files.cricket-australia.pulselive.com/headshots/440/1868-camedia.png",
    bio: "Clever left-arm orthodox bowler",
    joinedYear: 2018,
    nationality: "India",
    height: "5'6\"",
    role: "Bowler",
    bowlingStyle: "Slow left-arm orthodox",
    biography:
      "Radha Yadav’s deceptive flight and sharp turn make her a vital cog in India’s spin department, especially in T20 cricket.",
    careerHighlights: [
      "Player of the Match – 4/23 vs AUS, CWG 2022",
      "Key role in 2020 T20WC final run",
      "WPL 2023 winner with MI",
    ],
    icc: { matches: 72, runs: 64, wickets: 82 },
    ipl: { matches: 38, runs: 38, wickets: 41 },
    test: { matches: 2, runs: 0, wickets: 2 },
    achievements: [
      "Most wickets for India in a T20I bilateral series",
      "Consistent middle-over strangler",
    ],
    famousMoments: [
      "4/23 vs Australia, Commonwealth Games",
      "3/11 vs SA, 2024",
    ],
    videoLinks: ["https://www.youtube.com/embed/5zL3u3oOwkA"],
    socialMedia: {
      instagram: "radhay21",
    },
  },
  "renuka-singh-thakur": {
    name: "Renuka Singh Thakur",
    position: "Swing Bowler",
    image: "https://static-files.cricket-australia.pulselive.com/headshots/440/3881-camedia.png",
    bio: "New-ball swing specialist",
    joinedYear: 2021,
    nationality: "India",
    height: "5'7\"",
    role: "Bowler",
    bowlingStyle: "Right-arm medium-fast",
    biography:
      "Renuka’s ability to swing the new ball both ways has made her India’s go-to pacer in white-ball cricket.",
    careerHighlights: [
      "4/18 vs AUS – Best figures by Indian woman in T20Is",
      "Leading wicket-taker – Commonwealth Games 2022",
      "WPL 2024 Purple Cap runner-up",
    ],
    icc: { matches: 52, runs: 22, wickets: 68 },
    ipl: { matches: 28, runs: 12, wickets: 34 },
    test: { matches: 3, runs: 0, wickets: 6 },
    achievements: [
      "ICC Emerging Women’s Cricketer of the Year 2022",
      "Fastest Indian woman to 50 T20I wickets",
    ],
    famousMoments: [
      "4/18 vs Australia, CWG 2022",
      "3/10 vs ENG, 2022",
    ],
    videoLinks: ["https://www.youtube.com/embed/9t2pL1q9M2k"],
    socialMedia: {
      instagram: "renuka2196/",
    },
  },
};

export default function PlayerDetailPage({ params }: { params: { id: string } }) {
  const player = playerDetails[params.id]

  if (!player) {
    return (
      <main className="min-h-screen py-12 px-4 bg-background">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Player Not Found</h1>
          <Link href="/men-players">
            <Button>Back to Players</Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen py-12 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link href="/men-players">
          <Button variant="outline" className="mb-8 bg-transparent">
            ← Back
          </Button>
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Image */}
          <div className="md:col-span-1">
            <div className="rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-primary/10 to-secondary/10">
              <img src={player.image || "/placeholder.svg"} alt={player.name} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Info */}
          <div className="md:col-span-2">
            <h1 className="text-5xl font-bold mb-2">{player.name}</h1>
            <p className="text-2xl text-primary font-semibold mb-6">{player.position}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-card p-4 rounded-lg">
                <p className="text-sm text-card-foreground/70">Nationality</p>
                <p className="text-lg font-semibold text-card-foreground">{player.nationality}</p>
              </div>
              <div className="bg-card p-4 rounded-lg">
                <p className="text-sm text-card-foreground/70">Height</p>
                <p className="text-lg font-semibold text-card-foreground">{player.height}</p>
              </div>
              <div className="bg-card p-4 rounded-lg">
                <p className="text-sm text-card-foreground/70">Role</p>
                <p className="text-lg font-semibold text-card-foreground">{player.role}</p>
              </div>
              <div className="bg-card p-4 rounded-lg">
                <p className="text-sm text-card-foreground/70">Joined</p>
                <p className="text-lg font-semibold text-card-foreground">{player.joinedYear}</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {player.socialMedia.instagram && (
                <a
                  href={`https://instagram.com/${player.socialMedia.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition"
                >
                  Instagram
                </a>
              )}
              {player.socialMedia.twitter && (
                <a
                  href={`https://twitter.com/${player.socialMedia.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-semibold hover:bg-secondary/90 transition"
                >
                  Twitter
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Biography */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Biography</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">{player.biography}</p>
        </section>

        {/* Career Stats */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Career Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* ICC Stats */}
            <div className="bg-card rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-primary">ICC International</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-card-foreground/70">Matches:</span>
                  <span className="font-semibold">{player.icc.matches}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-card-foreground/70">Runs:</span>
                  <span className="font-semibold">{player.icc.runs}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-card-foreground/70">Wickets:</span>
                  <span className="font-semibold">{player.icc.wickets}</span>
                </div>
              </div>
            </div>

            {/* IPL Stats */}
            <div className="bg-card rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-secondary">IPL</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-card-foreground/70">Matches:</span>
                  <span className="font-semibold">{player.ipl.matches}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-card-foreground/70">Runs:</span>
                  <span className="font-semibold">{player.ipl.runs}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-card-foreground/70">Wickets:</span>
                  <span className="font-semibold">{player.ipl.wickets}</span>
                </div>
              </div>
            </div>

            {/* Test Stats */}
            <div className="bg-card rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Test Cricket</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-card-foreground/70">Matches:</span>
                  <span className="font-semibold">{player.test.matches}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-card-foreground/70">Runs:</span>
                  <span className="font-semibold">{player.test.runs}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-card-foreground/70">Wickets:</span>
                  <span className="font-semibold">{player.test.wickets}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Highlights */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Career Highlights</h2>
          <ul className="space-y-3">
            {player.careerHighlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">✓</span>
                <span className="text-lg text-foreground/80">{highlight}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Achievements */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {player.achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-lg">
                <p className="text-center font-semibold text-foreground/80">{achievement}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Video Section */}
        {player.videoLinks.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Famous Moments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {player.videoLinks.map((link, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    className="w-full h-64"
                    src={link}
                    title={`${player.name} Highlight ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
