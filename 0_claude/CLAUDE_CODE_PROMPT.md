# Claude Code — Project Kickoff Prompt
## Cinzia Maria Perna — Artist Website

---

> **How to use this file:**
> 1. Open Terminal
> 2. `cd` into the root project folder (the one containing this file and SITE_CONTENT.md)
> 3. Type `claude` to start a Claude Code session
> 4. Paste the prompt below

---

## THE PROMPT

```
I want to build a professional music artist website for my wife, Cinzia Maria Perna.
She performs under two projects:
- Perna & Nerozzi — jazz/world album "Old, New, Boundless, & Blue" (released Sept 2025)
- Black Honey — her soul/R&B band (active, more shows coming)

I want to host it free on Cloudflare Pages via GitHub, with a custom domain pointed to it.

All site content, asset paths, streaming links, track data, credits, band info, show
history, and design notes are in SITE_CONTENT.md in this folder. Please read it fully
before writing a single line of code.

---

TECH STACK:
- Static site: HTML, CSS, vanilla JavaScript
  (If you think Astro would be meaningfully better for this use case, make the case
  and I'll decide — but default to plain HTML/CSS/JS unless there's a good reason)
- No server, no database
- Mobile-first, fully responsive
- Bilingual: English and Italian (language toggle in the nav)
- Deploy target: Cloudflare Pages via GitHub

---

FOLDER STRUCTURE (assets already organized — do not move or rename them):

project-root/
├── 0_claude/
│   ├── SITE_CONTENT.md       ← all content lives here
│   └── CLAUDE_CODE_PROMPT.md ← this file
├── 1_Cinzia-Perna/
│   └── MIKS8222 - HERO.jpg   ← hero/bio photo
├── 2_Old-New-Boundless-Blue/
│   ├── art/
│   │   ├── Perna_Nerozzi_Old-New-Boundless-Blue.jpg  ← album cover
│   │   └── digifile in visione - ONBB.jpg            ← CD spread (reference/press)
│   ├── tracks/               ← MP3 previews can go here later
│   └── UPC/
│       └── c2alb04208101-199800752476.jpg
└── 3_Black-Honey/
    ├── art/
    │   └── black_honey_logo.jpg
    └── events/
        └── Locandina Black Honey.pages.pdf

Please scaffold the site into a new folder alongside these (e.g. "site/" or "www/"),
keeping the asset folders intact and referencing them with relative paths.

---

SITE SECTIONS:

1. HOME
   - Full-width hero: artist name, short tagline, hero photo
     (file: 1_Cinzia-Perna/MIKS8222 - HERO.jpg)
   - Brief intro blurb
   - Featured album card (album cover + "Listen now" CTA)

2. BIO
   - Full English and Italian bio text (in SITE_CONTENT.md)
   - Language toggle
   - Artist photo (reuse hero image)

3. MUSIC — Old, New, Boundless, & Blue
   - Album cover, release date, description and Cinzia's personal note
   - STREAMING TAB WIDGET
     One tab per service: Spotify, Apple Music, Amazon Music, YouTube Music,
     Tidal, Deezer, CD Baby
     All URLs are in SITE_CONTENT.md
     IMPORTANT: Each tab click must fire a Plausible Analytics custom event
     named "Streaming Click - [Service]" so we can compare which platforms
     Italian listeners use most.
   - Full 12-track listing with durations and composers (all in SITE_CONTENT.md)
   - Per-track musician credits (collapsible/expandable — keep the page clean)
   - Full production credits block at the bottom

4. BLACK HONEY
   - Logo: 3_Black-Honey/art/black_honey_logo.jpg
   - Band description in Italian and English (in SITE_CONTENT.md)
   - Band member list (in SITE_CONTENT.md)
   - Past shows table (2 shows from December 2025, in SITE_CONTENT.md)
   - Upcoming shows placeholder

5. SHOWS
   - Combined shows page: both Perna & Nerozzi and Black Honey
   - Table/card layout for past and upcoming, with date, venue, city, project tag

6. MERCH
   - Placeholder section with a clean grid layout
   - "Coming soon" state — we'll wire up a real store later

7. CONTACT
   - Contact form using Formspree (free tier, static-site friendly)
   - Social media link placeholders (Instagram, Facebook — URLs TBD)

---

DESIGN:
See full design notes in SITE_CONTENT.md. Summary:
- Vibe: jazz club meets Mediterranean coast — warm, intimate, sophisticated
- Background: near-black #0d0d0d / #1a1a1a
- Primary accent: pink/magenta #e0337a (from album artwork piano keys motif)
- Gold accent #c9a84c for Black Honey section
- Text: off-white #f0ece4
- Headings: Playfair Display or Cormorant Garamond (Google Fonts)
- Body: Inter or Lato
- The album's piano-key strip (vertical black/white/pink bars) is a strong
  visual motif — use it as a section divider where appropriate
- B&W photography with color accents
- Subtle scroll animations and smooth hover states; nothing distracting

---

ANALYTICS:
- Plausible Analytics — add script tag (I'll fill in the domain after launch)
- Track: page views + custom events on each streaming tab click + show ticket clicks

---

CONTACT FORM:
- Formspree (https://formspree.io) — free tier works great for static sites
- Fields: Name, Email, Message
- I'll plug in the Formspree endpoint after creating a free account

---

DEPLOYMENT SETUP:
After the site is looking good locally, please:
1. Init a git repo with a proper .gitignore
2. Walk me step by step through creating the GitHub repo and pushing
3. Walk me through connecting it to Cloudflare Pages (free tier)
4. Explain how to point a custom domain once I buy it (likely via Cloudflare Registrar)

---

Start by reading SITE_CONTENT.md. Then scaffold the project structure.
Then build section by section and check in with me after each one so I can
review in the browser before you move on.
```

---

## TIPS FOR YOUR CLAUDE CODE SESSION

**Previewing the site**
Ask: *"Start a local server so I can preview in my browser"*
Claude Code will typically run `python3 -m http.server` or similar.

**Making changes**
Just describe what you want in plain English:
- *"The hero section feels too sparse — add a subtle gradient overlay on the photo"*
- *"The streaming tabs are too small on mobile"*
- *"Move the Black Honey section above Shows"*

**Adding content as you go**
- Adding a show: *"Add a Black Honey show on [date] at [venue], [city]"*
- Adding photos: Drop into the relevant asset folder and say *"Use this photo for the Black Honey section"*
- Adding MP3 previews: Put 30-second clips in `2_Old-New-Boundless-Blue/tracks/` and say *"Add audio previews to the track listing"*
- Updating streaming links: *"Add the Tidal link: [URL]"*

**When Black Honey has more content**
Open a new session in the same folder:
*"Let's flesh out the Black Honey section — I have new photos, a bio, and upcoming shows"*

**Domain + launch checklist**
1. Buy domain (Cloudflare Registrar recommended — at-cost pricing, ~$9/yr for .com)
2. Connect domain to Cloudflare Pages
3. Update Plausible Analytics script tag with the real domain
4. Set up Formspree endpoint for contact form
5. Submit sitemap to Google Search Console
