# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Core Commands

### Installation and Dev Server
- Install dependencies:
  - `npm install`
- Run the dev server (Next.js 15 App Router with Turbopack):
  - `npm run dev`
- Start a production build locally:
  - Build: `npm run build`
  - Start: `npm start`

### Linting
- Run the Next.js lint pipeline:
  - `npm run lint`

> Note: There is currently **no test script** defined in `package.json` and no test runner configured. If you introduce a test framework (e.g. Jest, Vitest, Playwright), add appropriate `npm` scripts and update this file with how to run the full suite and a single test.

## High-Level Architecture

### Framework & Conventions
- The site is a **Next.js 15 App Router** project using **TypeScript** and **Tailwind CSS 4**.
- All routing is handled via the `app/` directory; there is no `pages/` directory.
- Global styling and theming are defined in `app/globals.css`, with Tailwind imported at the top and custom CSS variables for the color palette and typography.

### Layout & Theming
- `app/layout.tsx`
  - Defines the root layout for all routes.
  - Loads Google fonts (`Bricolage_Grotesque` for headings via `--font-headings`, `Crimson_Pro` for body via `--font-body`).
  - Wraps all page content in the `SubtleGradient` component to apply the animated, soft gradient background.
  - Sets shared `<html>` and `<body>` structure and the global `metadata` (title, description, OpenGraph) for the portfolio.
- `app/components/SubtleGradient.tsx`
  - Provides the background gradient and slow animation using CSS keyframes.
  - All route content is rendered as `children` inside this wrapper, so changes here affect the entire visual frame.
- `app/components/LiquidGlass.tsx` and `app/components/LiquidElement.tsx`
  - Utility layout components for “glassmorphism” / liquid-glass style surfaces.
  - Currently not wired into the main route, but useful building blocks for future visual exploration or alternative layouts.

### Primary Routes
- `/` → `app/page.tsx`
  - Main portfolio landing page.
  - Uses a simple **two-column grid**:
    - Left column: name and tagline ("Megan Pearson – Strategic Engineering").
    - Right column: introductory narrative about role, location, and philosophy.
  - Below the intro, it sections into **Projects** and **Experience** using the `Projects` and `Experience` components.
- `/lab` → `app/lab/page.tsx`
  - Marked as a **client component** (`"use client"`).
  - Experimental layout around the “useful / scalable / private” AI triad.
  - Uses React state (`hoveredWord`) to drive a large right-hand placeholder panel that changes color and label based on which word is hovered.
  - Serves as an interactive “now/then” narrative and design lab page.
- `/pilot` → `app/pilot/page.tsx`
  - Client-side route showcasing aviation background.
  - Uses `Header` for navigation and `ImageMarquee` for an animated strip of pilot-related images pinned to the bottom of the viewport.
- `/testing` → `app/testing/page.tsx`
  - Alternate version of the main layout used for layout/content experimentation.
  - Mirrors `/` conceptually (intro + Projects + Experience) but with additional copy about long-term goals.
- `app/AI_slop_page.tsx`
  - A **non-routed** page component (filename is not in its own route folder) that contains a more traditional, long-form landing page.
  - Includes navigation, hero, detailed "About", and experience sections.
  - Integrates the `AISecurityManifesto` component and is a good reference if you want to re-integrate the AI security manifesto into the live routes.

### Reusable Components
- `app/components/Header.tsx`
  - Minimal header that links back to `/lab` and displays the name. Used on “lab” and “pilot” style pages.
- `app/components/Experience.tsx`
  - Renders the work history as a stylized list.
  - Data source is `app/data/experience.json` (titles, companies, dates, locations).
  - Layout and typography are handled via global CSS utility classes (`bold-text`, `italic-text`, `uppercase-text`).
- `app/components/Projects.tsx`
  - Hard-coded project narratives for key work (Raycast AI, Pitch animations, Påfyll).
  - Structured as sequential blocks within a single section; this is the main place to update project descriptions and add or reorder items.
- `app/components/AISecurityManifesto.tsx`
  - Client component with tabbed content for four pillars: **privacy**, **security**, **ethics**, **governance**.
  - Internally stores manifesto text in an object keyed by tab; switching tabs swaps both heading and body copy.
  - Designed to be embedded inside a section on a route (e.g. the non-routed `AI_slop_page`); can be dropped into any page for an instant AI security section.
- `app/components/ImageMarquee.tsx`
  - Client component that creates a horizontally-scrolling, looping marquee of images using `next/image`.
  - Accepts props: `images` (string array of paths), `speed` (interval duration), and `direction` ("left" or "right").
  - Duplicates the image array several times for seamless looping and uses simple interval-based animation.

### Styling & Theming Details
- `app/globals.css`
  - Imports Tailwind (`@import "tailwindcss";`).
  - Defines CSS custom properties for the color palette (e.g. `--beige`, `--tea-green`, `--pearl`, `--fawn`).
  - Sets up a light/dark background/foreground scheme and exposes them through Tailwind’s `@theme inline` variables.
  - Establishes typography rules:
    - Headings (`h1`–`h4`) use `--font-headings`.
    - Body text uses `--font-body` with relatively large base font size (24px) and generous line height.
  - Adds custom classes (`.bold-text`, `.italic-text`, `.uppercase-text`, `.content-container`) used by various components.
  - Defines keyframe animations used by `SubtleGradient`, `LiquidGlass`, and the shimmer effect in the lab page.
- `tailwind.config.js`
  - Standard Tailwind 3/4 config pointing content scanning to `pages`, `components`, and `app` directories.
  - Currently relies on Tailwind defaults with no major theme extensions.

### Configuration
- `tsconfig.json`
  - Standard Next.js TypeScript config with `strict` mode enabled and `"moduleResolution": "bundler"`.
  - Defines a simple path alias `@/*` → project root (`./*`).
- `next.config.ts`
  - Currently uses the default Next.js config object with no custom options.
- `package.json`
  - Scripts:
    - `dev`: `next dev --turbopack`
    - `build`: `next build`
    - `start`: `next start`
    - `lint`: `next lint`
  - Dependencies are minimal: `next`, `react`, `react-dom`, plus Tailwind 4 and TypeScript-related devDependencies.

## README Highlights
- The README identifies this repository as **"Megan Pearson - AI Leadership Portfolio"**.
- Emphasizes:
  - 20+ years of experience from pilot to technology leader.
  - Current role and leadership in AI engineering and infrastructure.
  - Focus on AI security, privacy, governance, and ethical deployment.
- Confirms the tech stack already reflected above: **Next.js 15 App Router**, **Tailwind CSS**, **TypeScript**, and deployment targeting **Vercel** or similar platforms.
