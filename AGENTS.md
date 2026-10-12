# Atrya Electronic — storefront redesign

Vite + React + TypeScript, RTL (Persian). No backend, no database, no secrets.

## Run
`docker compose -f docker-compose.base44.yml up -d` → preview on host port 3000 (Vite on 5173 inside the container).
`node_modules` lives in a named Docker volume and is synced with `npm install` on every container start.

## Content source
All products, prices, categories, articles and phone numbers are in `src/data.ts`, copied from https://www.atrya.ir.
Images are **hotlinked** from `https://www.atrya.ir/wp-content/uploads/...` (exact URLs from the live site), so the
preview needs internet access to atrya.ir from the *browser*. The sandbox itself cannot reach atrya.ir (curl fails), so
content was gathered via the fetch tool, not scraped from the sandbox.

## Known gaps (need the owner's input)
- **Logo**: the footer uses the owner's supplied logo bundled at `public/atrya-footer-logo.png`; it does not depend on atrya.ir.
  The header still hotlinks its logo via `LOGO_URL` in `src/lib.ts`. The sandbox cannot fetch that remote header logo.
- **Street address**: no verified address was found on atrya.ir, so none is shown. Add it in `src/components/Footer.tsx`.
- Cart is client-side only (counter in header); there is no checkout. Product/category/article links open atrya.ir.

## Sandbox notes
`vite.config.ts` enables file-watch polling only when `BASE44_PREVIEW_MODE === "1"`. Vite's host allowlist is extended by the
platform via `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` (passed through in compose). With the flag unset, behaviour is stock Vite.

## Checks
`docker compose -f docker-compose.base44.yml exec -T web npx tsc -p tsconfig.json --noEmit`
