/* ============================================================
   PORTFOLIO DATA
   ------------------------------------------------------------
   This is the ONLY file you should need to edit to update your
   portfolio. Everything on the site is generated from what's
   in here. index.html and render.js just display it.

   HOW TO ADD THINGS:
   - To add a project, copy an existing object inside PROJECTS,
     paste it as a new one, and change the values.
   - Leave a field as "" (empty string) or delete it if it
     doesn't apply yet — empty fields are automatically hidden.
   - Dates use plain text ("2025", "Sem 1, 2026", "Ongoing") —
     no special format required.

   Fields marked  // NEEDS CONFIRMATION  are placeholders I was
   not certain about. Replace them with the real info whenever
   you're ready — nothing breaks if you leave them as-is.
   ============================================================ */

const PROFILE = {
  name: "Joff Yap Verdejo",
  tagline: "BSIT Student • Builder • Learner • Creative",
  location: "Caloocan, Philippines", // NEEDS CONFIRMATION — ok to leave general, avoid exact address
  program: "BSc in Information Technology (BSIT)",
  yearLevel: "", // NEEDS CONFIRMATION — e.g. "1st Year" — leave blank to hide
  lastUpdated: "August 2026",

  intro: [
    "I'm starting my BSIT journey, and this site is where I'm keeping track of it as it happens — not a highlight reel, more like a running notebook.",
    "I like understanding how things work before I trust that they work — that's shown up in school research, in a science project I built from scratch, and lately in trying to make sense of code and circuits on my own time.",
    "Outside of school, I write and play guitar, and I picked up video editing over a summer break almost by accident. None of it is polished yet. That's kind of the point of the site."
  ],

  strengths: [
    "I stick with a problem once I've decided to figure it out, even when the fix takes a while to find.",
    "I'd rather understand why something works than just get it working.",
    "I've taught myself things outside of class when something caught my interest — Arduino, video editing, this website."
  ],

  improving: [
    "Turning half-finished ideas (like a few school project concepts) into things I actually build and ship.",
    "Getting more comfortable with programming fundamentals — I'm still early here and I'd rather say that than oversell it.",
    "Writing about my own work clearly, instead of assuming people can tell what I did just by looking at it."
  ],

  now: {
    focus: [
      "Learning core programming and web development as part of BSIT coursework",
      "Getting more comfortable with GitHub as a normal part of how I build things",
      "Slowly formalizing what I picked up from Arduino experiments"
    ],
    interests: [
      "Guitar and music composition",
      "Editing video for Whop clipping",
      "Learning Japanese"
    ],
    note: "" // NEEDS CONFIRMATION — add current semester / short "what I'm doing right now" note
  },

  socials: {
    github: "https://github.com/yukariee", // NEEDS CONFIRMATION — confirm this is your handle
    email: "", // NEEDS CONFIRMATION — add if you want it public
    linkedin: "" // leave blank until you have one
  }
};

/* ------------------------------------------------------------
   PROJECTS
   category: "Web" | "Research" | "Hardware" | "Creative" | "Concept"
   status:   "Completed" | "Ongoing" | "Concept" | "School Activity"
------------------------------------------------------------ */
const PROJECTS = [
  {
    id: "sip-navigation",
    name: "Science Investigatory Project — Navigation",
    year: "2026",
    category: "Research",
    status: "Completed",
    tag: "Best in SIP",
    description: "My Senior High School Science Investigatory Project, recognized as Best in SIP. Built and presented as a hands-on research project rather than a coding exercise first — the site documents the work.",
    role: "Researcher & developer",
    whatILearned: "How to take an idea from a question to something I could actually demonstrate and defend in front of judges.",
    challenges: "", // NEEDS CONFIRMATION — add specifics once reviewed
    repo: "https://github.com/yukariee/sip-navigation",
    demo: "https://yukariee.github.io/sip-navigation/",
    relatedCourse: "Senior High School — Science Investigatory Project"
  },
  {
    id: "hasc-3d-viewer",
    name: "HASC Navigation System — 3D Model Viewer",
    year: "2026",
    category: "Web / 3D",
    status: "Completed",
    tag: "3D visualization",
    description: "An interactive 3D model viewer created as part of the HASC Navigation System. It provides a visual representation of the navigation environment and allows the model to be explored interactively in the browser.",
    role: "Developer",
    whatILearned: "How to present a 3D model as an interactive web experience and how visual technology can be used to support a navigation system.",
    challenges: "",
    repo: "https://github.com/yukariee/hasc-viewer/",
    demo: "https://yukariee.github.io/hasc-viewer/",
    relatedCourse: "Science Investigatory Project"
  },
  {
    id: "intcomp-activity",
    name: "SIP Navigation (Interactive Computing Activity)",
    year: "2026", // NEEDS CONFIRMATION
    category: "Web",
    status: "School Activity",
    tag: "First college web project",
    description: "An early BSIT interactive computing activity, deployed with GitHub Pages. My first real experience taking something from local files to a live link.",
    role: "Developer",
    whatILearned: "The basics of deploying a static site with GitHub Pages, and how much smoother development gets once you can just refresh a live link.",
    challenges: "",
    repo: "https://github.com/yukariee/intcomp-activity",
    demo: "https://yukariee.github.io/intcomp-activity/",
    relatedCourse: "BSIT — Introduction to Computing"
  },
  {
    id: "practical-research-2-stem-club",
    name: "Assessment of STEM Students’ Interests and Needs for a Responsive STEM Club",
    year: "2025",
    category: "Research",
    status: "Completed",
    tag: "Practical Research 2",
    description: "A group research study assessing the interests, needs, and academic challenges of STEM students at Holy Angel School of Caloocan, Inc. The study aimed to provide a foundation for establishing a student-centered and responsive STEM Club.",
    role: "Researcher",
    whatILearned: "How to contribute to a full research study, work with a research team, gather and analyze data, and present findings in a structured academic paper.",
    challenges: "",
    repo: "",
    demo: "",
    relatedCourse: "Practical Research 2"
  },
  {
    id: "arduino-ldr",
    name: "Light-Sensing Alert (Arduino)",
    year: "2026", // NEEDS CONFIRMATION
    category: "Hardware",
    status: "Completed",
    tag: "Hands-on electronics",
    description: "A small Arduino project using an LDR (light sensor) to trigger an LED and buzzer based on light conditions — my first time connecting code to something physical instead of just a screen.",
    role: "Builder",
    whatILearned: "Reading sensor input, writing conditional logic for hardware, and using the serial monitor to actually see what my circuit was doing instead of guessing.",
    challenges: "Getting the LDR threshold to behave consistently — solved through repeated testing and adjusting the trigger value.",
    repo: "",
    demo: "",
    relatedCourse: ""
  },
  {
    id: "connectglobal",
    name: "ConnectGlobal",
    year: "2024", // NEEDS CONFIRMATION
    category: "Concept",
    status: "School Activity",
    tag: "Pitch project",
    description: "A concept for a global SIM card, developed for a persuasive-communication / \"Shark Tank\"-style class activity. More about building and pitching an idea than building the product itself.",
    role: "Concept developer & presenter",
    whatILearned: "How to frame a problem, structure a pitch, and defend an idea in front of an audience.",
    challenges: "",
    repo: "",
    demo: "",
    relatedCourse: "Persuasive Communication"
  },
];

/* ------------------------------------------------------------
   SKILLS
   level: "Exploring" | "Beginner" | "Developing" | "Comfortable" | "Advanced"
   category: "Programming" | "Web" | "Hardware" | "Tools" | "Creative" | "Research"
------------------------------------------------------------ */
const SKILLS = [
  { name: "Python", category: "Programming", level: "Beginner", note: "Coursework and self-guided practice." },
  { name: "JavaScript", category: "Web", level: "Exploring", note: "Concepts more than fluency so far." },
  { name: "HTML & CSS", category: "Web", level: "Developing", note: "Built this site and my SIP navigation project with it." },
  { name: "Git & GitHub", category: "Tools", level: "Developing", note: "Comfortable pushing, deploying to GitHub Pages, still learning branching workflows." },
  { name: "Arduino / Basic Electronics", category: "Hardware", level: "Beginner", note: "LDR, LED, buzzer, and basic conditional circuits." },
  { name: "Networking & Storage Concepts", category: "Programming", level: "Exploring", note: "FTP, servers, NAS — explored, not yet applied in a real project." },
  { name: "Video Editing (CapCut)", category: "Creative", level: "Developing", note: "Learned by doing, through Whop clipping." },
  { name: "Academic Research & Writing", category: "Research", level: "Comfortable", note: "Built through SHS research papers and my SIP project." },
  { name: "Guitar / Music Composition", category: "Creative", level: "Developing", note: "Personal, ongoing." }
];

/* ------------------------------------------------------------
   TIMELINE — chronological, oldest first
   category: "Academic" | "Achievement" | "Technology" | "Independent"
------------------------------------------------------------ */
const TIMELINE = [
  {
    era: "Senior High School",
    title: "Graduated With High Honors",
    category: "Academic",
    description: "Completed Senior High School with High Honors.",
    link: ""
  },
  {
    era: "Senior High School",
    title: "Best in SIP — Science Investigatory Project",
    category: "Achievement",
    description: "Recognized for Best in SIP for a Science Investigatory Project I researched, built, and presented.",
    link: "https://yukariee.github.io/sip-navigation/"
  },
  {
    era: "Summer Break",
    title: "Discovered Whop Clipping",
    category: "Independent",
    description: "Found Whop clipping on my own during summer break and started learning video editing through practice — no class required it.",
    link: ""
  },
  {
    era: "Now — BSIT",
    title: "Started BSIT & Began Building",
    category: "Technology",
    description: "Started my BSIT program, deployed my first interactive computing project with GitHub Pages, and kept experimenting with Arduino on the side.",
    link: "https://yukariee.github.io/intcomp-activity/"
  },
  {
    era: "Next",
    title: "Still being written",
    category: "Technology",
    description: "This entry updates as I go — more languages, bigger projects, maybe an internship or open-source work.", // NEEDS CONFIRMATION — replace as things happen
    link: ""
  }
];

/* ------------------------------------------------------------
   ACHIEVEMENTS
------------------------------------------------------------ */
const ACHIEVEMENTS = [
  {
    title: "Senior High School Graduate — With High Honors",
    date: "", // NEEDS CONFIRMATION
    category: "Academic",
    description: "Graduated Senior High School with High Honors.",
    link: ""
  },
  {
    title: "Best in SIP (Science Investigatory Project)",
    date: "", // NEEDS CONFIRMATION
    category: "Research",
    description: "Recognized for Best in SIP during Senior High School.",
    link: "https://yukariee.github.io/sip-navigation/"
  }
];

/* ------------------------------------------------------------
   LEARNING LOG — "Things I figured out"
   Add a new entry any time you solve something worth remembering.
------------------------------------------------------------ */
const LEARNING_LOG = [
  {
    title: "Getting an LDR sensor to trigger reliably",
    date: "", // NEEDS CONFIRMATION
    what: "I was building an Arduino circuit where an LDR should trigger an LED and buzzer under certain light conditions.",
    why: "Wanted to understand how sensor input translates into real conditional logic, not just theory.",
    wentWrong: "The trigger point kept firing inconsistently depending on the room's lighting.",
    howSolved: "Tested the sensor's actual analog readings under different conditions and adjusted the threshold value in code instead of guessing at a number.",
    nowUnderstand: "Sensors don't give clean thresholds — you calibrate against the real environment, not an assumed one.",
    relatedProject: "arduino-ldr"
  },
  {
    title: "Deploying a static site with GitHub Pages",
    date: "", // NEEDS CONFIRMATION
    what: "Needed to turn a local project folder into something with a live, shareable link.",
    why: "Wanted my interactive computing activity to be viewable outside of my own laptop.",
    wentWrong: "Wasn't sure at first why the site wasn't showing up after pushing to GitHub.",
    howSolved: "Learned that GitHub Pages needs to be pointed at the right branch/folder in the repo settings.",
    nowUnderstand: "Deployment is a settings problem as much as a code problem — the code can be fine and still not show up.",
    relatedProject: "intcomp-activity"
  }
  // Add new entries above this line — copy one of these objects as a template.
];

/* ------------------------------------------------------------
   BEYOND SCHOOL — independent, self-directed things
------------------------------------------------------------ */
const BEYOND_SCHOOL = [
  {
    title: "Whop Clipping",
    started: "Summer break", // NEEDS CONFIRMATION — add year if you want
    whatStartedIt: "Curiosity about an online opportunity I came across during summer break.",
    whatILearned: "Video editing, content selection, pacing, consistency, and working independently without a deadline set by someone else.",
    tool: "CapCut",
    outcome: "Turned into a side hustle that currently earns money while I keep improving my editing."
  }
  // Future independent work (freelance, personal projects, competitions,
  // certifications, etc.) can be added here the same way.
];

/* ------------------------------------------------------------
   CHANGELOG — a short record of updates to the site itself.
   Add a new entry at the TOP each time you make a real update.
------------------------------------------------------------ */
const CHANGELOG = [
  { date: "August 2026", note: "Portfolio created." }
];
