# Sharukesh K — Portfolio 🍥

A personal software-engineer portfolio with a **Naruto "Konoha Night"** theme —
deep charcoal, Naruto orange, Rasengan blue, Uzumaki spirals, chakra glow, and
elemental "chakra nature" skills.

Built with **React + Vite** and **Framer Motion**.

---

## Prerequisites

- [Node.js](https://nodejs.org) 18+ (tested on v22) and npm.

## Run locally

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the dev server
```

Then open the printed URL — usually **http://localhost:5173/**.
Press `Ctrl+C` in the terminal to stop it.

To preview on other devices on your network (e.g. your phone):

```bash
npm run dev -- --host
```

## Build for production

```bash
npm run build    # outputs the static site to the dist/ folder
npm run preview  # (optional) locally preview the production build
```

Everything needed for hosting ends up in **`dist/`** — HTML, CSS/JS bundles,
your photo (`sharukesh.jpg`), and your résumé PDF.

---

## Deploy to Netlify (drag & drop)

The fastest way — no CLI, no login required to publish:

1. Build the site: `npm run build`
2. Open **https://app.netlify.com/drop**
3. **Drag the `dist` folder** onto the dashed circle
   _(or click **“choose folder”** → select `dist` → confirm the upload)._
   ⚠️ Upload the **`dist`** folder — **not** the whole project folder.
   `dist` is the compiled site; the root folder would only show source code.
4. Netlify uploads in a few seconds and gives you a live URL like
   `something-random.netlify.app`.
5. To keep the site permanently (and rename it, e.g. `sharukesh.netlify.app`,
   or add a custom domain), click **“Claim your site”** and sign up / log in
   (free). Unclaimed drop sites expire.

### Updating the live site later

1. Make your edits.
2. `npm run build`
3. Re-drop the new **`dist`** folder on https://app.netlify.com/drop
   (or, on a claimed site: **Deploys → Drag and drop** to keep the same URL).

### Optional: auto-deploy from GitHub

Push this project to a GitHub repo, then in Netlify choose
**Add new site → Import an existing project → GitHub**. The included
`netlify.toml` already sets the build command (`npm run build`) and publish
directory (`dist`), so every `git push` redeploys automatically.

---

## Editing content

All text lives in **`src/data.js`** — profile, experience, projects, skills,
education, certifications, and your links.

- **Profile / links:** `github`, `linkedin`, `email`, `phone`, `resume`, `photo`.
- **Replace your photo:** drop a new image in `public/` and point
  `profile.photo` at it (e.g. `"/me.jpg"`).
- **Replace your résumé:** put the PDF in `public/` and update `profile.resume`.
- **Project links:** each project has a `link`. Some are still `"#"` placeholders
  — replace them with real repo/live URLs when ready.

Styling / theme lives in **`src/index.css`** (CSS variables at the top control
the whole colour palette). Layout and animations are in **`src/App.jsx`**.

---

## Project structure

```
sharukesh-portfolio/
├─ public/                 # static assets copied as-is
│  ├─ sharukesh.jpg        # portrait photo
│  └─ Sharukesh_K_Software_Engineer_Resume.pdf
├─ src/
│  ├─ App.jsx              # all sections + animations
│  ├─ data.js              # ← edit your content here
│  ├─ index.css            # theme + styles
│  └─ main.jsx             # app entry
├─ index.html              # fonts + root
├─ netlify.toml            # Netlify build settings
└─ vite.config.js
```
