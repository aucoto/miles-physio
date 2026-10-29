# Miles Physio — Astro

A static Astro rebuild of the Miles Physio website, with the existing design, images, videos and booking/contact links retained. The four pages share a layout and header/footer components; their content lives in `src/pages/`. Existing styles and browser scripts are in `public/`.

## Local development

Use Node.js 24 or newer.

```sh
npm ci
npm run dev
```

Build with `npm run build` and preview with `npm run preview`.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds the site and deploys it to GitHub Pages on pushes to `main`. In the repository's **Settings → Pages**, select **GitHub Actions** as the source. The Astro configuration derives the correct site and base path from GitHub Actions environment variables, so the site works at `https://<owner>.github.io/<repository>/`. A custom domain served from the root will require the `base` setting to be changed.

Booking and email links point to their original destinations. The Apos video embeds load when a visitor selects play.
