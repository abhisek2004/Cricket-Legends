<a name="readme-top"></a>

# 🏏 Cricket-Legends

**India’s Cricket Legends (Men's & Women's)** – a tribute to the greatest cricketers who have shaped Indian cricket across eras, formats, and generations.

> A clean, modern, TypeScript-based web app to explore iconic Indian cricket legends from both the **Men’s** and **Women’s** teams – their profiles, roles, eras, and contributions to the game.

---

## 📌 Table of Contents

- [About the Project](#about-the-project)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Setup](#installation--setup)
  - [Available Scripts](#available-scripts)
- [Data Model – Legends](#data-model--legends)
- [How It Works (Concept)](#how-it-works-concept)
- [Planned Enhancements](#planned-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## 🧾 About the Project

**Cricket-Legends** is a curated collection of India’s greatest cricket players – **both Men’s and Women’s** – presented in a simple, elegant, and developer-friendly way.

The idea of this project is to:

- Celebrate legendary Indian cricketers (Test, ODI, T20I).
- Give equal spotlight to **Women’s cricket legends** alongside Men’s.
- Provide an easy starting point for:
  - Frontend practice with TypeScript,
  - Data handling & filtering on the client side,
  - Contributions from the open-source community (adding more legends, stats, and features).

At its core, this repository aims to be:

- A **learning project** (TypeScript + frontend basics),
- A **showcase / mini-portfolio project**,
- And potentially, a **public reference app** for Indian cricket legends.

---

## ✨ Key Features

> Note: Some of these are present or partially present; others can be implemented as the project evolves.

- ✅ **Legends Listing**
  - A list/grid of Indian cricket legends (Men & Women).
  - Shows key info like: **Name, Role, Era, Format(s)**.

- ✅ **Dedicated Legend Profiles** (planned / in progress)
  - Each legend can have a detail view page or card with:
    - Short bio / description  
    - Primary role (Batsman, Bowler, All-rounder, Wicket-keeper)  
    - Formats played (Test / ODI / T20I)  
    - Key highlights / achievements  

- ✅ **Clear Separation: Men’s & Women’s Legends**
  - Ability to:
    - Filter by **Men’s** / **Women’s** categories.
    - Or show **All** together.

- ✅ **Search & Filters** (recommended)
  - Filter legends by:
    - Role (Batsman / Bowler / All-rounder / WK)
    - Format (Test / ODI / T20I)
    - Era (e.g., 1980s, 1990s, 2000s, Modern)

- ✅ **Responsive UI**
  - The frontend is built with **TypeScript + CSS**, which can be easily styled to work well on:
    - Desktop
    - Tablet
    - Mobile

- ✅ **Developer-Friendly**
  - Simple TypeScript data structures.
  - Easy to extend:
    - Add new legends,
    - Add new fields,
    - Integrate with APIs later (e.g., stats APIs).

---

## 🛠 Tech Stack

Based on the repository languages and structure, the project uses:

- **Language**
  - 🟦 TypeScript (primary – ~97%)
  - 🟨 JavaScript (utility / glue code)
  - 🎨 CSS (styling)

- **Core Concepts**
  - Component-based or modular frontend structure.
  - Clean separation between **data** (legends info) and **UI** (display).

As the project grows, it can easily adopt or already use:
- A frontend framework (e.g., **React**, **Vite + TS**, etc.).
- Modern build tooling (ES modules, bundlers, dev server).

---

## 📁 Project Structure

At the top level, the repository is organized like this:

```bash
Cricket-Legends/
├── cricket/          # Frontend application (TypeScript + CSS)
├── LICENSE           # MIT License
└── README.md         # Project documentation (you are here)
````

Inside the `cricket/` folder, a typical structure (or recommended layout) could look like:

```bash
cricket/
├── src/
│   ├── data/
│   │   └── legends.ts         # All legends data (Men's & Women's)
│   ├── components/
│   │   ├── LegendCard.tsx     # Card component for a single legend
│   │   ├── LegendList.tsx     # List/grid of legend cards
│   │   └── Filters.tsx        # Filters for role, format, gender, era
│   ├── pages/
│   │   ├── Home.tsx           # Main landing page with legends
│   │   └── LegendDetail.tsx   # Optional: details page for a legend
│   ├── styles/
│   │   └── styles.css         # Global styles / basic layout
│   ├── main.tsx / main.ts     # Application entry point
│   └── index.html             # Root HTML template (if applicable)
├── package.json               # Dependencies & scripts
└── tsconfig.json              # TypeScript configuration
```

> 📌 If your actual structure is slightly different, just adjust the folder names in this section to match your implementation.

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### ✅ Prerequisites

Make sure you have:

* [Node.js](https://nodejs.org/) (recommended: **LTS version**)
* A package manager:

  * `npm` (comes with Node), or
  * `yarn`, or
  * `pnpm`

Verify installation:

```bash
node -v
npm -v
```

### 🔧 Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/abhisek2004/Cricket-Legends.git
cd Cricket-Legends
```

2. **Move into the frontend directory**

```bash
cd cricket
```

3. **Install dependencies**

Using npm:

```bash
npm install
```

Or with pnpm:

```bash
pnpm install
```

### 📜 Available Scripts

> Check your `package.json` inside `cricket/` for the exact script names.
> A common TypeScript frontend setup often includes:

#### Start the development server

```bash
npm run dev
```

This typically:

* Runs the app in development mode.
* Opens `http://localhost:5173` or `http://localhost:3000` (depending on setup).
* Reloads automatically when you edit source files.

#### Create a production build

```bash
npm run build
```

This usually:

* Compiles TypeScript to optimized JavaScript.
* Outputs static assets into a `dist/` or `build/` folder.

#### Preview the production build (optional)

```bash
npm run preview
```

---

## 🧩 Data Model – Legends

The legends can be represented in TypeScript as a simple array of objects.

A typical `Legend` interface could look like:

```ts
export interface Legend {
  id: string;
  name: string;
  gender: "Male" | "Female";
  role: "Batsman" | "Bowler" | "All-rounder" | "Wicket-keeper";
  formats: ("Test" | "ODI" | "T20I")[];
  era: string;              // e.g. "1989–2013", "2002–2017"
  country: string;          // "India"
  shortBio: string;
  imageUrl?: string;        // Optional: player image
  majorAchievements?: string[];
}
```

Example entries (you can extend):

```ts
export const legends: Legend[] = [
  {
    id: "sachin-tendulkar",
    name: "Sachin Tendulkar",
    gender: "Male",
    role: "Batsman",
    formats: ["Test", "ODI"],
    era: "1989–2013",
    country: "India",
    shortBio: "Widely regarded as one of the greatest batsmen in the history of cricket.",
    majorAchievements: [
      "100 international centuries",
      "Most runs in Tests and ODIs",
      "2011 ICC Cricket World Cup winner"
    ]
  },
  {
    id: "mithali-raj",
    name: "Mithali Raj",
    gender: "Female",
    role: "Batsman",
    formats: ["ODI", "Test", "T20I"],
    era: "1999–2022",
    country: "India",
    shortBio: "Former captain of the Indian women's national cricket team and one of the leading run-scorers in women's international cricket.",
    majorAchievements: [
      "Highest run-scorer in Women's ODIs",
      "Led India to multiple World Cup finals"
    ]
  },
  // Add more legends here...
];
```

---

## ⚙️ How It Works (Concept)

A simple conceptual flow of the app:

1. **Load Legends Data**

   * Import the `legends` array from `src/data/legends.ts`.

2. **Render Legends List**

   * Map through the `legends` array.
   * Render each legend as a card using `LegendCard` component.

3. **Filtering / Searching**

   * State variables for selected filters:

     * `gender`, `role`, `format`, `era`, `searchQuery`.
   * Filter the legends array based on active filters before rendering.

4. **Legend Details (Optional)**

   * On click of a legend card:

     * Show a modal / navigate to `/legend/:id`.
     * Display detailed info, achievements, and stats.

This keeps the app:

* **Simple** (static data + client-side filtering),
* **Fast** (no backend calls needed),
* **Easy to contribute to** (just add objects to the data file).

---

## 📈 Planned Enhancements

You (or contributors) can extend **Cricket-Legends** with:

* 📊 **Stats & Records**

  * Add fields like: matches, runs, wickets, averages, strike rates, etc.
* 🖼 **Image Gallery**

  * Include official photos or artwork of legends.
* 🧮 **Comparisons**

  * Compare two legends side by side (e.g., stats comparison).
* 🌐 **Multiformat Views**

  * Tabs for Test, ODI, T20I legends.
* 🔎 **Advanced Filters**

  * Filter by:

    * Captaincy,
    * World Cup participation,
    * Awards (Arjuna, Padma Shri, ICC Awards, etc.).
* 🌍 **API Integration**

  * In future, connect to public cricket APIs to fetch live/updated stats.
* 💾 **Persistent Favourites**

  * Allow users to "star" their favourite legends (localStorage).

Feel free to open issues or discussions in the repo for new idea suggestions.

---

## 🤝 Contributing

Contributions are **welcome and appreciated**!

If you’d like to contribute:

1. **Fork** the repository.

2. Create a new branch:

   ```bash
   git checkout -b feature/add-new-legend
   ```

3. Make your changes:

   * Add new legends in the data file.
   * Improve UI/UX.
   * Add new filters or pages.

4. Commit your changes:

   ```bash
   git commit -m "Add legend: [Player Name]"
   ```

5. **Push** to your fork and open a **Pull Request**.

Please try to:

* Keep code clean and readable.
* Use TypeScript types/interfaces consistently.
* Add comments where needed.
* Maintain a respectful tone in issues & PRs.

---

## 📜 License

This project is licensed under the **MIT License**.

See the [`LICENSE`](./LICENSE) file for full license text.

---

## 🙌 Acknowledgements

* All the **Indian cricket legends** – Men’s and Women’s – who have inspired generations.
* Open-source tools & libraries that make TypeScript-based frontend development smooth.
* Future contributors who will help expand this project’s data and features.

---

> 🏏 *If you like this idea, don’t forget to star the repo and share it with fellow cricket lovers!*

<a href="#readme-top">⬆ Back to top</a>
