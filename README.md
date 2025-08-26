# Metal Prices Dashboard — Simplify Money | Software Engg Intern Submission
**Author:** Jas Singh  
**Role Applied:** Software Engg Intern - AI/FE  
**Date:** <YYYY-MM-DD>

---

## Project Overview
A responsive React web application that displays current metal prices per gram (INR) for a set of metals, shows historical price charts for selected metals, and gracefully falls back to a bundled static dataset when APIs are unavailable.

Key features:
- Live data fetch from metal price API (optional)
- Fallback static dataset (`fallbackMetalData`) with 30 metals + historical data
- Historical charts for metals (sampled for Gold, Silver, Platinum, Palladium)
- Search & filter metals, responsive UI for mobile & desktop
- Easy-to-run dev and production builds
- Clear separation of data (API / static fallback) and UI

---

## Repo Contents
- `src/` — React source code
  - `api/` — data fetching helpers (`fetchMetalPrices`, `getMetalHistory`)
  - `data/` — `fallbackMetalData.js` (static dataset) and `historicalData.js`
  - `components/` — UI components (MetalCard, Chart, SearchBar, etc.)
  - `pages/` or `App.js` — main app entry
- `public/` — static assets
- `README.md` — this file
- `package.json` — scripts & dependencies

---

## Deployment Notes
**Recommended host:** Vercel (free tier). Alternative: Netlify, Surge, or any static host for React apps.

**Environment variables**
- `METAL_API_KEY` — optional. If present the app will attempt live fetch from the metal price API. If not set or the API fails, the app uses `fallbackMetalData`.

**Vercel Deploy Steps**
1. Push repo to GitHub.
2. Import project at https://vercel.com/new.
3. Set `METAL_API_KEY` in Vercel Environment Variables (if you want live data).
4. Build command: `npm run build` (or `yarn build`)
5. Output directory: `build` (for CRA) or `.next` (for Next.js)

---

## How to run locally

1. Clone the repo:
   ```bash
   git clone <YOUR_REPO_URL>
   cd your-repo
