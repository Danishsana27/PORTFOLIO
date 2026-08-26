# Danish Sana — AI/ML Engineer Portfolio

A modern, dark-themed developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion — designed to
present AI/ML and software engineering work to recruiters.

---

## 1. Project Structure

```
danish-sana-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/        # UI components (Navbar, Hero, Skills, ProjectCard, etc.)
│   ├── pages/              # Home.jsx (all sections) and NotFound.jsx (404 page)
│   ├── data/                # ← EDIT THESE FILES to update content
│   │   ├── profile.js       # Name, role, tagline, about text, stats
│   │   ├── socialLinks.js   # GitHub / LinkedIn / Instagram / Email links
│   │   ├── skills.js        # Categorized skills
│   │   ├── projects.js      # Project showcase data + filter categories
│   │   ├── learning.js      # "Currently Learning" cards
│   │   └── journey.js       # Developer journey timeline
│   ├── hooks/
│   │   └── useActiveSection.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

Content lives in `src/data/*` and is completely separate from the UI components — you should rarely (if ever) need
to touch component code just to update text, links, or projects.

---

## 2. Installation

Requires **Node.js 18+**.

```bash
npm install
```

## 3. Run Locally

```bash
npm run dev
```

This starts a local dev server (Vite will print the URL — typically `http://localhost:5173`) with hot reload.

## 4. Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder. Preview the production build locally with:

```bash
npm run preview
```

---

## 5. How to Add a New Project

Open `src/data/projects.js` and append a new object to the `projects` array:

```js
{
  id: 'my-new-project',
  title: 'Project Name',
  description: 'One or two sentence summary shown on the card.',
  technologies: ['Python', 'PyTorch'],
  image: null, // or '/images/your-screenshot.png'
  github: 'https://github.com/YOUR_GITHUB/project-repo',
  demo: '', // leave empty string if there's no live demo
  category: 'AI/ML', // one of: 'AI/ML' | 'Deep Learning' | 'Computer Vision' | 'Java/DSA' | 'Other'
  details: {
    overview: '...',
    problem: '...',
    solution: '...',
    features: ['...', '...'],
    results: '...'
  }
}
```

That's it — the project grid, filter buttons, and detail modal all pick it up automatically. No other file needs to
change.

**Adding a real screenshot:** drop the image into `public/images/`, then set `image: '/images/your-file.png'` on
the project. Leaving `image: null` renders a clean auto-generated gradient thumbnail instead of a broken image.

---

## 6. How to Change Your Social Media Links

Open `src/data/socialLinks.js` — this is the **only file** you need to edit. It powers the links in the Contact
section's "Find me elsewhere" panel and the Footer icons.

```js
export const socialLinks = [
  { id: 'github', label: 'GitHub', url: 'https://github.com/YOUR_GITHUB', icon: 'Github', show: true },
  { id: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com/in/YOUR_LINKEDIN', icon: 'Linkedin', show: true },
  { id: 'instagram', label: 'Instagram', url: 'https://instagram.com/YOUR_INSTAGRAM', icon: 'Instagram', show: true },
  { id: 'email', label: 'Email', url: 'mailto:danishsana2019@gmail.com', icon: 'Mail', show: true }
];
```

Just replace each `url` with your real profile link. Set `show: false` on any entry to hide it without deleting it.

Your email (`danishsana2019@gmail.com`) is already wired in as the mailto link and appears throughout the site.

## 6a. Other Content to Personalize

- `src/data/profile.js` — set `university`, `location`, and `resumeUrl` (link to a hosted PDF of your resume).
- `src/data/profile.js` → `stats` — replace the `[X]` placeholders with real numbers once you have them.
- `src/data/projects.js` — replace `YOUR_GITHUB` in each project's `github` link, and fill in the `[ADD YOUR
  RESULTS]` placeholders with real outcomes/metrics.

## 6b. Making the Contact Form Actually Send Email

The contact form in `src/components/Contact.jsx` is currently **frontend-only** (it logs the submission to the
console). To wire it up:

- **Formspree** — sign up at formspree.io, get a form endpoint, and point the form's submit handler (or a plain
  `<form action="https://formspree.io/f/YOUR_ID" method="POST">`) at it.
- **EmailJS** — install `@emailjs/browser` and call `emailjs.send(...)` inside `handleSubmit` with your service,
  template, and public key.
- **Your own backend** — replace the `console.log` in `handleSubmit` with a `fetch()` POST request to your API
  endpoint.

The relevant spot is clearly marked with a `TODO` comment inside `handleSubmit` in `Contact.jsx`.

---

## 7. Deployment

### Option A — Vercel (recommended, zero-config)

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo.
3. Vercel auto-detects Vite. Keep the defaults (Build Command: `npm run build`, Output Directory: `dist`).
4. Click **Deploy**.

Or via CLI:

```bash
npm install -g vercel
vercel
```

### Option B — GitHub Pages

This project includes a ready-to-use GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Push the project to a GitHub repository.
2. In the repo, go to **Settings → Pages** and set **Source** to "GitHub Actions".
3. Push to the `main` branch — the workflow builds and deploys automatically.

Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`.

> Note: if deploying to a GitHub Pages *project* page (not a custom domain), the `base: './'` setting already in
> `vite.config.js` ensures asset paths resolve correctly.

---

## 8. Tech Stack

- **React 18** + **Vite** — fast dev server and build tooling
- **Tailwind CSS** — utility-first styling with a custom dark design system (see `tailwind.config.js`)
- **Framer Motion** — scroll reveals, page transitions, hero animation
- **React Router** — client-side routing (enables the custom 404 page)
- **lucide-react** — icon set

## 9. Features Checklist

- [x] Sticky navbar with scroll-spy active section indicator + mobile hamburger menu
- [x] Hero section with animated neural-network visual and terminal-style panel
- [x] About section with editable stats
- [x] Categorized, data-driven Skills section
- [x] Filterable Projects grid (All / AI-ML / Deep Learning / Computer Vision / Java-DSA / Other)
- [x] Project detail modal (overview, problem, solution, features, results)
- [x] Currently Learning section
- [x] Developer journey timeline
- [x] Contact section with a social-links hub + frontend contact form
- [x] Footer with social icons
- [x] Back-to-top button
- [x] Loading screen on initial load
- [x] Custom 404 page
- [x] Fully responsive, keyboard-accessible, respects `prefers-reduced-motion`

## 10. Before You Ship

Double-check these placeholders have been replaced:

- [ ] `src/data/socialLinks.js` — GitHub, LinkedIn, Instagram URLs
- [ ] `src/data/profile.js` — university, location, resume link, stats
- [ ] `src/data/projects.js` — GitHub repo links per project, live demo links (if any), results text
- [ ] `index.html` — update the Open Graph description if desired
