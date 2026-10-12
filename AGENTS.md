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
- **Logo**: the footer now uses the original atrya.ir logo, bundled at `public/atrya-site-footer-logo.png` from
  `https://www.atrya.ir/wp-content/uploads/2019/08/atrya-logo2-min.png`. The owner's previous upload is retained but unused.
  The header still hotlinks its logo via `LOGO_URL` in `src/lib.ts`; do not change it as part of footer-only requests.
- **Trust badges**: `TrustBadges` uses the original site's Enamad image and certificate link (id 366005) with
  `referrerPolicy="origin"`. Keep this image live, not a copied seal that could hide certificate changes. If the service
  is unreachable, the badge shows a readable certificate link instead of an empty/broken image. In this sandbox,
  direct requests, the website-fetch browser and an image relay all timed out reaching trustseal.enamad.ir; the
  actual Enamad image and provider verification pages could not be verified here. The static
  Zarinpal graphic is bundled at `public/zarinpal-trust.png` from `https://cdn.zarinpal.com/badges/trustLogo/1.png`.
  Zarinpal's original TrustCode opens `/trustPage/<hostname>`; our link deliberately uses `www.atrya.ir`, not the
  preview's domain. These badges refer to the original site, not to certification of the development preview.
- If the fetch tool's HTML omits the original site's header/footer, raw reference HTML can be retrieved into `/tmp`
  with `curl -H 'X-Return-Format: html' https://r.jina.ai/https://www.atrya.ir/`. Static image downloads used the
  public image relay `https://images.weserv.nl/?url=<original-host-and-path>&output=png` without resizing or cropping.
- **Street address**: no verified address was found on atrya.ir, so none is shown. Add it in `src/components/Footer.tsx`.
- Cart is client-side only (counter in header); there is no checkout. Product/category/article links open atrya.ir.

## Sandbox notes
`vite.config.ts` enables file-watch polling only when `BASE44_PREVIEW_MODE === "1"`. Vite's host allowlist is extended by the
platform via `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` (passed through in compose). With the flag unset, behaviour is stock Vite.

## Checks
`docker compose -f docker-compose.base44.yml exec -T web npx tsc -p tsconfig.json --noEmit`
