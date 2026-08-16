# Joff's Portfolio — How to Use This

This site is plain HTML/CSS/JS — no build step, no framework, no `npm install`.
That's on purpose: you already deploy static sites with GitHub Pages, so this
should feel familiar.

## File map

```
index.html        → page structure (sections, IDs). You rarely need to touch this.
css/styles.css     → all visual styling, colors, layout.
js/data.js         → ALL YOUR CONTENT LIVES HERE. Edit this to update the site.
js/render.js       → turns data.js into HTML. Only touch if you want to change
                     HOW something displays, not WHAT is shown.
js/main.js         → theme toggle, mobile menu, scroll animations.
```

## The one file you'll usually edit: `js/data.js`

Everything — your projects, skills, timeline, learning log, achievements — is
a plain JavaScript array of objects near the top of that file, heavily
commented. To add a new project, copy an existing object inside `PROJECTS`,
paste it below itself, and change the values. Leave any field as `""` if it
doesn't apply — empty fields are hidden automatically, so the layout never
breaks.

Fields marked `// NEEDS CONFIRMATION` are placeholders I left because I
wasn't certain of the real detail (exact dates, year level, email, project
years). Fill these in whenever you have the real info — nothing is broken by
leaving them blank in the meantime.

## Adding a new timeline / journey entry

Add a new object to the `TIMELINE` array, in chronological order. Each ring
in the "Journey" section gets slightly bigger than the last automatically —
you don't need to manage that.

## Updating a skill level

Find the skill in the `SKILLS` array and change `level` to one of:
`"Exploring"`, `"Beginner"`, `"Developing"`, `"Comfortable"`, `"Advanced"`.
The progress bar updates automatically.

## Logging something you figured out

Add an entry to `LEARNING_LOG` any time you solve a real problem — a bug, a
deployment issue, a concept that finally clicked. Use the template already
in the file (`what` / `why` / `wentWrong` / `howSolved` / `nowUnderstand`).
This section is what makes the site feel like a real record instead of a
resume.

## Updating "Last updated" and the changelog

At the top of `data.js`, change `PROFILE.lastUpdated`. Then add a new line
to the **top** of the `CHANGELOG` array describing what changed, e.g.:

```js
{ date: "December 2026", note: "Added new Arduino project and updated Python skill level." },
```

## Deploying (same workflow you already know)

1. Push this folder to a GitHub repo (e.g. `yourname.github.io` for a root
   domain, or any repo name with Pages enabled).
2. In the repo's **Settings → Pages**, set the source to the branch/folder
   containing `index.html`.
3. Done — no build step required, it's already static HTML/CSS/JS.

## If you outgrow the single-page layout

Right now the whole site is one scrolling page (`index.html`) with anchor
links (`#work`, `#skills`, etc.) in the nav. Because content and rendering
are already separated into `data.js` / `render.js`, splitting a section into
its own page later (e.g. a dedicated `projects.html`) mostly means:

1. Copy the relevant `<section>` into a new HTML file with its own `<head>`.
2. Include `data.js`, `render.js`, and `main.js` the same way.
3. Update the nav links across all pages.

No data needs to move — it already lives in one place.

## Notes on what was intentionally left out

- No email or LinkedIn is published yet — add them in
  `PROFILE.socials` in `data.js` when you're ready.
- Some project years/dates are blank (`""`) because I didn't want to guess.
- The "Next" entry in the timeline is a placeholder — replace its
  description as your BSIT path becomes clearer. That's meant to happen.
