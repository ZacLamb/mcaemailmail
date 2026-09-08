# MCA Email Leads

Node/Express + EJS site for a merchant cash advance lead/data provider.
Deploys to Railway from GitHub with no build step.

## Deploy

1. Create a new GitHub repo and upload everything in this folder (skip `node_modules`).
2. In Railway: New Project -> Deploy from GitHub repo -> pick it. Nixpacks detects Node and runs `npm start`.
3. Add the environment variables below under Variables.
4. Add your custom domain under Settings -> Networking.

## Environment variables

| Variable | Required | Notes |
|---|---|---|
| `GHL_WEBHOOK_URL` | yes | Inbound webhook trigger from your GHL sub-account workflow. Form posts land here. |
| `GHL_CALENDAR_URL` | yes | Booking widget URL, e.g. `https://api.leadconnectorhq.com/widget/booking/XXXX`. Until set, `/book` shows a placeholder panel instead of breaking. |
| `BASE_URL` | yes | Full canonical origin, no trailing slash. Drives canonicals + sitemap. |
| `SITE_NAME` / `LEGAL_NAME` | no | Brand strings. |
| `SITE_PHONE` / `SITE_EMAIL` | no | Shown in header, footer, contact. |
| `ADDR_LINE1` / `ADDR_LINE2` | no | Physical address. Required in commercial email under CAN-SPAM, so keep it real. |
| `GA4_ID` | no | Injects gtag. Fires `generate_lead` on form submit. |
| `NODE_ENV` | no | Set to `production` on Railway. |
| `FORCE_CANONICAL` | no | `true` forces https + apex host redirect. Turn on after DNS is settled. |

See `.env.example`.

## Structure

```
data/site.js         brand, contact, stats, nav — env-overridable
data/catalog.js      14 services, 8 comparisons, FAQ bank, 6 articles
data/industries.js   25 verticals (ticket size, capital uses, triggers, subject angles)
lib/content.js       hash-seeded copy variation so templated pages aren't duplicates
server.js            all routes, sitemap, /api/lead
views/               EJS templates + partials
public/              CSS, JS, favicon
```

## Adding pages

Push a new object into `data/catalog.js` (`services`, `comparisons`, `articles`) or
`data/industries.js`. Routes, nav, footer links, internal linking and `sitemap.xml`
pick it up automatically. No template edits needed.

## Lead flow

Form (`partials/leadform.ejs`) -> `POST /api/lead` -> validation + honeypot ->
forward to `GHL_WEBHOOK_URL` -> redirect to `/book?submitted=1` with the calendar embed.
If the webhook is unset or fails, the submission is logged to stdout and the user still
reaches the calendar — the form never dead-ends.

## Notes

- `/healthz` returns uptime and page count (Railway healthcheck target).
- Nothing geo-targeted. This is a national B2B data business; state and metro pages were removed.
- Legal pages and the compliance section are drafts written around CAN-SPAM. Have counsel review before launch.
