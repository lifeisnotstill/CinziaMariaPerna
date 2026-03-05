# Cinzia Maria Perna — Official Website

**Live site:** https://cinziamariaperna.com
**Repository:** https://github.com/lifeisnotstill/CinziaMariaPerna

---

## Project Overview

Professional website for jazz/soul vocalist **Cinzia Maria Perna**, showcasing her two musical projects:

1. **Perna & Nerozzi** — Jazz/world duo with album "Old, New, Boundless, & Blue" (released Sept 2025)
2. **Black Honey** — Soul/R&B band based in Italy

---

## What We Built (March 1, 2026)

### Features
- Single-page responsive website (mobile-first)
- Bilingual support (English/Italian) with language toggle
- Built-in audio player for all 12 album tracks
- Streaming service links with analytics tracking ready
- Project tabs to switch between Perna & Nerozzi and Black Honey
- Collapsible track credits
- Shows section (past + upcoming placeholder)
- Merch section (coming soon placeholder)
- Contact form via FormSubmit.co (free)
- Piano keys visual motif from album artwork

### Design
- Dark theme (#0d0d0d / #1a1a1a background)
- Pink accent (#e0337a) for Perna & Nerozzi
- Gold accent (#c9a84c) for Black Honey
- Cormorant Garamond for headings
- Inter for body text
- Smooth scroll animations

---

## Tech Stack

- **Frontend:** Static HTML, CSS, vanilla JavaScript (no build step)
- **Hosting:** Cloudflare Pages (free tier)
- **Domain:** cinziamariaperna.com (Cloudflare Registrar)
- **Contact form:** FormSubmit.co (free)
- **Analytics:** Plausible (ready to enable)
- **Version control:** GitHub

---

## File Structure

```
cinzia-perna-website/
├── site/                      # Deployed to Cloudflare Pages
│   ├── index.html             # Main page
│   ├── css/
│   │   └── styles.css         # All styles
│   ├── js/
│   │   └── main.js            # Language toggle, audio player, etc.
│   └── assets/
│       ├── images/            # Hero photo, album cover, Black Honey logo
│       └── tracks/            # All 12 MP3s
├── 0_claude/
│   ├── SITE_CONTENT.md        # Original content reference
│   └── CLAUDE_CODE_PROMPT.md  # Original build prompt
├── 1_Cinzia-Perna/            # Source hero photo
├── 2_Old-New-Boundless-Blue/  # Source album art, tracks, UPC
├── 3_Black-Honey/             # Source logo, event poster
├── .gitignore
└── README.md                  # This file
```

---

## How to Make Changes

### Local Development
```bash
cd "/Users/lifeisnotstill/Documents/PROJECTS/ONBB - website/cinzia-perna-website/site"
python3 -m http.server 8000
# Open http://localhost:8000
```

### Deploy Changes
```bash
cd "/Users/lifeisnotstill/Documents/PROJECTS/ONBB - website/cinzia-perna-website"
git add .
git commit -m "Description of changes"
git push
# Cloudflare auto-deploys in ~30 seconds
```

---

## Accounts & Services

| Service | Purpose | Account |
|---------|---------|---------|
| GitHub | Code repository | lifeisnotstill |
| Cloudflare | Hosting + Domain | Lifeisnotstill@gmail.com |
| FormSubmit.co | Contact form | cinzia.perlingieri@gmail.com |

---

## Configuration

### Contact Form
- Submissions go to: cinzia.perlingieri@gmail.com
- First submission requires email confirmation (one-time)
- Includes spam protection (honeypot + captcha)

### Analytics (Not Yet Enabled)
To enable Plausible analytics, uncomment this line in `site/index.html`:
```html
<!-- <script defer data-domain="cinziamariaperna.com" src="https://plausible.io/js/script.js"></script> -->
```
Requires Plausible account ($9/mo or self-hosted).

### Streaming Links
Links are in the HTML with `onclick="trackStreamingClick('ServiceName')"` for analytics.
Currently tracks to console; will send to Plausible when enabled.

---

## Still To Do

- [ ] Add social media URLs (Instagram, Facebook) when available
- [ ] Enable Plausible analytics (optional, paid)
- [ ] Add upcoming shows as they're booked
- [ ] Set up merch store when ready
- [ ] Consider adding a press/EPK section

---

## Black Honey Band Members

- **Cinzia Maria Perna** — Voice
- **Stefano Italiano** — Guitar
- **Antonello Rapuano** — Piano
- **Giulio Boniello** — Bass
- **Aldo Galasso** — Percussion

---

## Album: Old, New, Boundless, & Blue

**Artist:** Perna & Nerozzi
**Released:** September 29, 2025
**Tracks:** 12
**Runtime:** ~50 minutes
**Genre:** Jazz / World / Mediterranean

### Streaming Links
- [Spotify](https://open.spotify.com/album/78ZfmKfB7PBcLDLWaofjT2)
- [Apple Music](https://music.apple.com/us/album/old-new-boundless-blue/1842943133)
- [Amazon Music](https://music.amazon.co.uk/albums/B0FT69DSKL)
- [YouTube Music](https://youtube.com/playlist?list=OLAK5uy_nY92vZteYLF_IradNfwCsxI6nHNj_qZAM)

---

## Session History

### March 1, 2026
- Initial site build (all sections)
- GitHub repo setup
- Cloudflare Pages deployment
- Custom domain connection
- Contact form setup (FormSubmit.co)
- Fixed: Italian language toggle
- Fixed: Cinzia's quote translation
- Fixed: Asset paths for deployment
- Added: Black Honey member instruments
