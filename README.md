# React + TypeScript + Vite

This is a Vite-powered React application.

## Local development

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

This repository is configured for Vercel as a Vite single-page application:

- **Install command:** `npm ci`
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node.js:** `20.19.0` or newer
- Client-side routes are rewritten to `index.html` so direct links and refreshes work.

To deploy, import `dondave042/the-hooks` in Vercel and keep the project root at the repository root. Vercel will use the checked-in `vercel.json` settings for preview and production deployments.

> The app currently stores demo state in browser `localStorage`; deploying it does not provide shared server-side persistence or authentication.
