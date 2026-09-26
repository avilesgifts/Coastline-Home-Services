# Coastline Referral Co.

A standalone website for a business-to-business referral company serving home service businesses in South Surrey, White Rock and Langley. It's separate from Little Explorers and just shares this repository.

"Coastline Referral Co." is a working name. Change it in `site.js` (`SITE.NAME`) and in each page's `<title>`.

## What the business sells

| Service | What the client gets |
| --- | --- |
| **Referral Network** | An exclusive seat (one business per trade) in a managed local referral group: vetting, monthly meetups, referral tracking and accountability |
| **24/7 Smart System** | Instant replies to missed calls, texts, forms and referrals; qualifying questions, optional ballpark pricing, calendar booking, reminders and review requests |
| **Systems Consulting** | An assessment and setup of lead handling, quoting, scheduling, invoicing, reviews and a simple KPI dashboard |

The revenue model is a flat monthly membership with no per-lead fees, a 90-day founding period, then month-to-month. Prices are left as `$___` on `referral-network.html` for you to fill in.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home: hero, problem, services, how it works, trades, referrals vs. paid leads, FAQ |
| `referral-network.html` | Network details, a sample network, pricing tiers, partner standards |
| `smart-system.html` | 24/7 automated lead response and booking |
| `consulting.html` | Systems consulting services and process |
| `book.html` | Strategy call booking form |
| `styles.css` | Shared styles |
| `site.js` | Shared nav, footer, form handling and **site config** |

## Setup checklist

1. In `site.js`, set `SITE.EMAIL`, and optionally `SITE.PHONE`.
2. Forms currently open a pre-filled email. To collect submissions directly, add a form endpoint (Formspree, Basin, or a Google Apps Script that writes to a Sheet) to `SITE.FORM_ENDPOINT`. You could also swap `book.html`'s form for a Calendly or TidyCal embed.
3. Fill in the pricing on `referral-network.html`.
4. Add real testimonials and results once you have founding members. Don't publish placeholder or made-up reviews.
5. Before promising the Smart System's features to clients, pick the tool that will run it (e.g. GoHighLevel, Jobber plus a text-back add-on, or a custom setup), and make sure the listed integrations match what that tool supports.

## Hosting on its own domain

GitHub Pages serves one custom domain per repository, and this repo's `CNAME` is `littleexplorers-events.com`. Options:

- **Quickest:** it's live at `littleexplorers-events.com/coastline/` once merged. That works for previewing, but it isn't ideal for a separate brand.
- **Recommended:** point the new domain at this folder with Netlify, Cloudflare Pages or Vercel (connect this repo and set the publish directory to `coastline/`). This keeps everything in one repo, as requested.
- **Alternative:** move the folder to its own GitHub repository with its own `CNAME`.

Preview locally with `npx serve -l 4173 .` from the repo root, then open `http://localhost:4173/coastline/`.

## Running the network (operations)

- **Launch target:** 8–12 partners in the first network (South Surrey / White Rock), then a second one in Langley.
- **Recruit order:** realtor, plumber, electrician, HVAC, roofer, painter, landscaper, cleaner. Realtors and property managers generate the most cross-trade referrals.
- **Vetting:** business registration, trade licence where required (e.g. Technical Safety BC), liability insurance, WorkSafeBC clearance letter, Google reviews.
- **Referral tracker columns:** `date | from partner | to partner | homeowner | area | job type | status | job value | notes`
- **Monthly meetup agenda (60 min):** wins and scoreboard (10), partner spotlight (10), referral asks (20), open referrals follow-up (15), housekeeping (5).
- **Before launch:** a partner agreement reviewed by a lawyer, a privacy policy (BC PIPA, since homeowner details are shared between partners), and CASL-compliant consent for automated texts and emails.
