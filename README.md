# Creator Portfolio

Ein modernes Portfolio-Website-Projekt, gebaut mit Next.js, React und TypeScript.

## 🚀 Voraussetzungen

Bevor du beginnst, stelle sicher, dass du folgendes installiert hast:

- **Node.js** (Version 18 oder höher)
- **pnpm** (Package Manager)

### pnpm installieren

Falls pnpm noch nicht installiert ist:

```bash
npm install -g pnpm
```

## 📦 Installation

1. Klone das Repository oder navigiere zum Projektverzeichnis:

```bash
cd creator-portfolio
```

2. Installiere die Dependencies:

```bash
pnpm install
```

## 🛠️ Lokales Starten

Starte den Entwicklungsserver:

```bash
pnpm dev
```

Die Anwendung läuft dann auf [http://localhost:3000](http://localhost:3000).

Öffne [http://localhost:3000](http://localhost:3000) im Browser, um die Website zu sehen.

## 📝 Verfügbare Scripts

- `pnpm dev` - Startet den Entwicklungsserver
- `pnpm build` - Erstellt einen Production-Build
- `pnpm start` - Startet den Production-Server (nach `pnpm build`)
- `pnpm lint` - Führt ESLint aus

## 🏗️ Build für Production

Erstelle einen optimierten Production-Build:

```bash
pnpm build
```

Starte dann den Production-Server:

```bash
pnpm start
```

## 🚢 Deployment

Das Projekt ist für Vercel konfiguriert. Um zu deployen:

### Option 1: Vercel CLI

```bash
vercel
```

### Option 2: Vercel Dashboard

1. Gehe zu [vercel.com](https://vercel.com)
2. Verbinde dein GitHub Repository
3. Vercel erkennt automatisch die Next.js-Konfiguration

## 🛠️ Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📁 Projektstruktur

```
creator-portfolio/
├── app/                # Next.js App Router
│   ├── layout.tsx      # Root Layout
│   ├── page.tsx        # Homepage
│   └── globals.css     # Globale Styles
├── components/         # React Components
│   ├── about.tsx       # About Section
│   ├── contact.tsx     # Contact Section
│   ├── footer.tsx      # Footer
│   ├── header.tsx      # Header/Navigation
│   ├── hero.tsx        # Hero Section
│   ├── projects.tsx    # Projects Section
│   ├── skills.tsx      # Skills Section
│   └── ui/             # UI Components (shadcn/ui)
├── lib/                # Utility Functions
├── public/             # Statische Assets
└── styles/             # Zusätzliche Styles
```

## 🔗 Links

- **Live Version:** [Creator Portfolio auf Vercel](https://creator-portfolio-1nvlduv5s-fabianschuck13-3589s-projects.vercel.app)
- **GitHub Repository:** [fabianschuck/creator-portfolio](https://github.com/Fabischu2008/creator-portfolio)

## 📄 Lizenz

Dieses Projekt ist privat.
