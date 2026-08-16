/* ============================================================
   RENDER
   ------------------------------------------------------------
   Reads the data in data.js and builds the page. You shouldn't
   need to edit this file to update your content — edit data.js
   instead. Edit this file only if you want to change HOW
   something is displayed, not WHAT is displayed.
   ============================================================ */

const LEVEL_ORDER = ["Exploring", "Beginner", "Developing", "Comfortable", "Advanced"];
const LEVEL_WIDTH = { Exploring: "20%", Beginner: "40%", Developing: "60%", Comfortable: "80%", Advanced: "100%" };

function el(tag, opts = {}) {
  const node = document.createElement(tag);
  if (opts.className) node.className = opts.className;
  if (opts.text) node.textContent = opts.text;
  if (opts.html) node.innerHTML = opts.html;
  if (opts.attrs) Object.entries(opts.attrs).forEach(([k, v]) => node.setAttribute(k, v));
  return node;
}

function field(container, tag, className, value) {
  if (!value) return; // hide empty fields automatically
  const node = el(tag, { className, text: value });
  container.appendChild(node);
}

/* ---------- HERO / PROFILE ---------- */
function renderProfile() {
  const nameEls = document.querySelectorAll("[data-field='name']");
  nameEls.forEach(n => (n.textContent = PROFILE.name));

  document.querySelectorAll("[data-field='tagline']").forEach(n => (n.textContent = PROFILE.tagline));
  document.querySelectorAll("[data-field='lastUpdated']").forEach(n => (n.textContent = PROFILE.lastUpdated));

  const introHost = document.getElementById("intro-copy");
  if (introHost) {
    PROFILE.intro.forEach(p => introHost.appendChild(el("p", { text: p })));
  }

  const metaHost = document.getElementById("profile-meta");
  if (metaHost) {
    const bits = [PROFILE.program, PROFILE.yearLevel, PROFILE.location].filter(Boolean);
    metaHost.textContent = bits.join(" · ");
  }

  // strengths / improving
  const strengthsHost = document.getElementById("strengths-list");
  if (strengthsHost) PROFILE.strengths.forEach(s => strengthsHost.appendChild(el("li", { text: s })));
  const improvingHost = document.getElementById("improving-list");
  if (improvingHost) PROFILE.improving.forEach(s => improvingHost.appendChild(el("li", { text: s })));

  // now section
  const focusHost = document.getElementById("now-focus");
  if (focusHost) PROFILE.now.focus.forEach(s => focusHost.appendChild(el("li", { text: s })));
  const interestsHost = document.getElementById("now-interests");
  if (interestsHost) PROFILE.now.interests.forEach(s => interestsHost.appendChild(el("li", { text: s })));

  // socials
  const socialHost = document.getElementById("social-links");
  if (socialHost) {
    if (PROFILE.socials.github) {
      socialHost.appendChild(linkChip("GitHub", PROFILE.socials.github));
    }
    if (PROFILE.socials.linkedin) {
      socialHost.appendChild(linkChip("LinkedIn", PROFILE.socials.linkedin));
    }
    if (PROFILE.socials.email) {
      socialHost.appendChild(linkChip("Email", "mailto:" + PROFILE.socials.email));
    }
    if (!socialHost.children.length) {
      socialHost.appendChild(el("span", { className: "muted small", text: "Contact links coming soon." }));
    }
  }
}

function linkChip(label, href) {
  const a = el("a", { className: "chip", text: label, attrs: { href, target: "_blank", rel: "noopener" } });
  return a;
}

/* ---------- PROJECTS ---------- */
function renderProjects() {
  const host = document.getElementById("projects-grid");
  if (!host) return;
  PROJECTS.forEach(p => {
    const card = el("article", { className: "card project-card" });

    const top = el("div", { className: "project-card__top" });
    top.appendChild(el("span", { className: "eyebrow mono", text: p.category }));
    if (p.status) top.appendChild(el("span", { className: "pill", text: p.status }));
    card.appendChild(top);

    card.appendChild(el("h3", { text: p.name }));
    if (p.tag) card.appendChild(el("p", { className: "muted small mono", text: p.tag }));
    field(card, "p", "project-card__desc", p.description);

    const detailList = el("dl", { className: "project-card__details" });
    addDetail(detailList, "My role", p.role);
    addDetail(detailList, "What I learned", p.whatILearned);
    addDetail(detailList, "Challenges", p.challenges);
    addDetail(detailList, "Related to", p.relatedCourse);
    if (detailList.children.length) card.appendChild(detailList);

    const links = el("div", { className: "project-card__links" });
    if (p.demo) links.appendChild(el("a", { className: "text-link", text: "Live →", attrs: { href: p.demo, target: "_blank", rel: "noopener" } }));
    if (p.repo) links.appendChild(el("a", { className: "text-link", text: "Repository →", attrs: { href: p.repo, target: "_blank", rel: "noopener" } }));
    if (links.children.length) card.appendChild(links);

    host.appendChild(card);
  });
}

function addDetail(dl, label, value) {
  if (!value) return;
  dl.appendChild(el("dt", { text: label }));
  dl.appendChild(el("dd", { text: value }));
}

/* ---------- SKILLS ---------- */
function renderSkills() {
  const host = document.getElementById("skills-grid");
  if (!host) return;

  const byCategory = {};
  SKILLS.forEach(s => {
    byCategory[s.category] = byCategory[s.category] || [];
    byCategory[s.category].push(s);
  });

  Object.entries(byCategory).forEach(([category, list]) => {
    const group = el("div", { className: "skill-group" });
    group.appendChild(el("h3", { className: "skill-group__title mono", text: category }));
    list.forEach(s => {
      const row = el("div", { className: "skill-row" });
      const head = el("div", { className: "skill-row__head" });
      head.appendChild(el("span", { className: "skill-row__name", text: s.name }));
      head.appendChild(el("span", { className: "skill-row__level mono", text: s.level }));
      row.appendChild(head);

      const bar = el("div", { className: "skill-bar" });
      const fill = el("div", { className: "skill-bar__fill" });
      fill.style.width = LEVEL_WIDTH[s.level] || "10%";
      bar.appendChild(fill);
      row.appendChild(bar);

      if (s.note) row.appendChild(el("p", { className: "muted small", text: s.note }));
      group.appendChild(row);
    });
    host.appendChild(group);
  });
}

/* ---------- TIMELINE (growth rings) ---------- */
function renderTimeline() {
  const host = document.getElementById("timeline-rings");
  if (!host) return;

  TIMELINE.forEach((t, i) => {
    const item = el("div", { className: "ring-item" });

    const marker = el("div", { className: "ring-marker" });
    const ring = el("span", { className: "ring-marker__ring" });
    ring.style.setProperty("--ring-size", `${18 + i * 6}px`);
    marker.appendChild(ring);
    item.appendChild(marker);

    const body = el("div", { className: "ring-item__body" });
    const meta = el("div", { className: "ring-item__meta" });
    meta.appendChild(el("span", { className: "mono small", text: t.era }));
    meta.appendChild(el("span", { className: "pill pill--outline", text: t.category }));
    body.appendChild(meta);

    body.appendChild(el("h3", { text: t.title }));
    body.appendChild(el("p", { className: "muted", text: t.description }));
    if (t.link) {
      body.appendChild(el("a", { className: "text-link", text: "View →", attrs: { href: t.link, target: "_blank", rel: "noopener" } }));
    }
    item.appendChild(body);
    host.appendChild(item);
  });
}

/* ---------- ACHIEVEMENTS ---------- */
function renderAchievements() {
  const host = document.getElementById("achievements-list");
  if (!host) return;
  if (!ACHIEVEMENTS.length) {
    host.appendChild(el("p", { className: "muted", text: "Nothing listed yet — this section grows as achievements happen." }));
    return;
  }
  ACHIEVEMENTS.forEach(a => {
    const item = el("div", { className: "achievement" });
    item.appendChild(el("span", { className: "eyebrow mono", text: a.category }));
    item.appendChild(el("h3", { text: a.title }));
    field(item, "p", "muted small", a.date);
    field(item, "p", "", a.description);
    if (a.link) item.appendChild(el("a", { className: "text-link", text: "View →", attrs: { href: a.link, target: "_blank", rel: "noopener" } }));
    host.appendChild(item);
  });
}

/* ---------- LEARNING LOG ---------- */
function renderLearningLog() {
  const host = document.getElementById("learning-log-list");
  if (!host) return;
  LEARNING_LOG.forEach(log => {
    const details = el("details", { className: "log-entry" });
    const summary = el("summary");
    summary.appendChild(el("span", { text: log.title }));
    if (log.date) summary.appendChild(el("span", { className: "mono small muted", text: log.date }));
    details.appendChild(summary);

    const body = el("div", { className: "log-entry__body" });
    addLogBlock(body, "What I learned", log.what);
    addLogBlock(body, "Why I learned it", log.why);
    addLogBlock(body, "What went wrong", log.wentWrong);
    addLogBlock(body, "How I solved it", log.howSolved);
    addLogBlock(body, "What I understand now", log.nowUnderstand);
    details.appendChild(body);
    host.appendChild(details);
  });
}

function addLogBlock(host, label, value) {
  if (!value) return;
  const block = el("div", { className: "log-block" });
  block.appendChild(el("span", { className: "eyebrow mono", text: label }));
  block.appendChild(el("p", { text: value }));
  host.appendChild(block);
}

/* ---------- BEYOND SCHOOL ---------- */
function renderBeyondSchool() {
  const host = document.getElementById("beyond-school-list");
  if (!host) return;
  BEYOND_SCHOOL.forEach(b => {
    const card = el("article", { className: "card" });
    card.appendChild(el("span", { className: "eyebrow mono", text: b.started }));
    card.appendChild(el("h3", { text: b.title }));
    const dl = el("dl", { className: "project-card__details" });
    addDetail(dl, "What started it", b.whatStartedIt);
    addDetail(dl, "What I learned", b.whatILearned);
    addDetail(dl, "Tool", b.tool);
    addDetail(dl, "Where it's at now", b.outcome);
    card.appendChild(dl);
    host.appendChild(card);
  });
}

/* ---------- CHANGELOG ---------- */
function renderChangelog() {
  const host = document.getElementById("changelog-list");
  if (!host) return;
  CHANGELOG.forEach(c => {
    const row = el("div", { className: "changelog-row" });
    row.appendChild(el("span", { className: "mono small", text: c.date }));
    row.appendChild(el("span", { text: c.note }));
    host.appendChild(row);
  });
}

function renderAll() {
  renderProfile();
  renderTimeline();
  renderProjects();
  renderSkills();
  renderAchievements();
  renderLearningLog();
  renderBeyondSchool();
  renderChangelog();
}

document.addEventListener("DOMContentLoaded", renderAll);
