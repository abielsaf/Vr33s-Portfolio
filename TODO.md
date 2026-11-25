# TODO

## Content (from Víctor)

- [ ] **About page**: bio in Spanish and English, skills list (currently "Skill 1–4"), and a portrait photo in the Cloudinary `profile` folder.
- [ ] **Home photo**: put the chosen photo in the Cloudinary `hero` folder. Check it on a phone and a laptop.
- [ ] **Web3Forms key**: add `WEB3FORMS_ACCESS_KEY` to `.env`, then send a test message from the contact page.
- [ ] **Alt text and captions** (optional): add contextual metadata keys `alt` and `caption` to photos in Cloudinary.
- [ ] **Gallery names**: decide whether galleries need English names. Default: the folder name is shown in both languages.

## Cloudinary cleanup

- [ ] Delete the 53 Cloudinary demo images at the top level.
- [ ] Delete test folders (e.g. `Prueba`) before launch.

## Launch

- [ ] Merge `redesign` into `main`.
- [ ] Create the Vercel project. Set `PUBLIC_CLOUDINARY_CLOUD_NAME`, `PUBLIC_CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` and `WEB3FORMS_ACCESS_KEY` for Production and Preview.
- [ ] Custom domain (if any).
- [ ] Link previews: once the domain is known, set `site` in `astro.config.mjs` and add `og:url`. Test a shared link on WhatsApp.

## Cloudinary → Vercel auto-deploy

Photos load at build time, so changes in Cloudinary need a rebuild.

- [ ] Create a Vercel Deploy Hook for `main` (Project Settings → Git → Deploy Hooks).
- [ ] Avoid one build per photo when uploading in bulk. Options, simplest first:
  - [ ] Check whether Vercel cancels a queued build when a newer one is triggered. If so, Cloudinary can call the hook directly.
  - [ ] Otherwise, a small Vercel function receives Cloudinary's notifications and triggers the deploy only after X minutes without new uploads.
  - [ ] Fallback: scheduled rebuild (e.g. hourly or nightly) with no Cloudinary hook.
- [ ] In Cloudinary (Settings → Webhook Notifications), send upload, delete and move events to the hook or function.
