# Ever Grace Constructions

A construction company website built with React, Vite, TypeScript, Tailwind CSS, and shadcn/ui components.

## Project Structure

- `src/pages/` — Page components (Index, About, Services, Projects, Gallery, Testimonials, Contact, NotFound)
- `src/components/` — Reusable UI components including layout, sections, and shadcn/ui primitives
- `src/data/` — Static data files (gallery, projects)
- `src/hooks/` — Custom React hooks
- `src/lib/` — Utility functions
- `src/assets/` — Static assets (images, logo)
- `public/` — Public assets (favicon, robots.txt, sitemap)

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + shadcn/ui
- **Routing:** React Router DOM v6
- **State/Data:** TanStack React Query
- **Forms:** React Hook Form + Zod

## Running the App

The app runs on port 5000 via `npm run dev`. The workflow "Start application" handles this automatically.

## Deployment

Build with `npm run build` — outputs to `dist/`. Configured as a static deployment.
