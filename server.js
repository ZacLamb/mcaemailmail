const path = require('path');
const express = require('express');
const compression = require('compression');

const site = require('./data/site');
const { industries, byIndustrySlug } = require('./data/industries');
const catalog = require('./data/catalog');
const images = require('./data/images');
const content = require('./lib/content');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('trust proxy', 1);
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  express.static(path.join(__dirname, 'public'), {
    maxAge: process.env.NODE_ENV === 'production' ? '7d' : 0
  })
);

// Force canonical host + https in production (helps SEO consolidation)
app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production' && process.env.FORCE_CANONICAL === 'true') {
    const host = req.headers.host || '';
    const proto = req.headers['x-forwarded-proto'] || req.protocol;
    const canonicalHost = site.baseUrl.replace(/^https?:\/\//, '');
    if (host !== canonicalHost || proto !== 'https') {
      return res.redirect(301, `${site.baseUrl}${req.originalUrl}`);
    }
  }
  next();
});

// Shared locals for every render
app.use((req, res, next) => {
  res.locals.site = site;
  res.locals.path = req.path;
  res.locals.canonical = site.baseUrl + (req.path === '/' ? '' : req.path.replace(/\/$/, ''));
  res.locals.year = new Date().getFullYear();
  res.locals.nav = site.nav;
  res.locals.industries = industries;
  res.locals.services = catalog.services;
  res.locals.faqBank = catalog.faqBank;
  res.locals.c = content;
  res.locals.img = images;
  res.locals.breadcrumbs = [];
  res.locals.schema = null;
  res.locals.ogType = 'website';
  next();
});

const render = (res, view, data) => res.render(view, data);

/* ---------------------------------- core --------------------------------- */

app.get('/', (req, res) => {
  render(res, 'home', {
    title: `${site.name} — Verified Merchant Email Data for MCA Brokers`,
    description: site.description,
    featuredServices: catalog.services.slice(0, 6),
    topIndustries: industries.filter((i) => i.combo).slice(0, 8),
    faqs: catalog.generalFaqOrder.slice(0, 6).map((k) => catalog.faqBank[k]),
    articles: catalog.articles.slice(0, 3),
    comparisons: catalog.comparisons.slice(0, 4)
  });
});

app.get('/services', (req, res) => {
  render(res, 'services', {
    title: `MCA Lead Generation Services | ${site.name}`,
    description:
      'Every MCA data and outbound service we offer — exclusive and aged merchant email leads, UCC email appends, renewal data, custom list building, and fully managed campaigns.',
    categories: catalog.serviceCategories,
    breadcrumbs: [{ label: 'Services', href: '/services' }]
  });
});

app.get('/services/:slug', (req, res, next) => {
  const service = catalog.byServiceSlug[req.params.slug];
  if (!service) return next();
  const faqs = (service.faqKeys || []).map((k) => catalog.faqBank[k]).filter(Boolean);
  render(res, 'service', {
    title: `${service.name} | ${site.name}`,
    description: service.summary.slice(0, 300),
    service,
    faqs,
    related: catalog.services.filter((s) => s.slug !== service.slug && s.category === service.category).slice(0, 3),
    angles: content.serviceAngles(service),
    ctaLine: content.ctaLine(service.slug),
    breadcrumbs: [
      { label: 'Services', href: '/services' },
      { label: service.name, href: `/services/${service.slug}` }
    ],
    schema: faqSchema(faqs)
  });
});

/* -------------------------------- industries ------------------------------ */

app.get('/industries', (req, res) => {
  render(res, 'industries', {
    title: `MCA Leads by Industry | ${site.name}`,
    description:
      'Merchant email data segmented by vertical — restaurants, trucking, construction, retail, auto repair, medical, staffing, e-commerce and more, each with its own funding triggers and ticket sizes.',
    breadcrumbs: [{ label: 'Industries', href: '/industries' }]
  });
});

app.get('/industries/:slug', (req, res, next) => {
  const ind = byIndustrySlug[req.params.slug];
  if (!ind) return next();
  const faqs = ['verification', 'exclusivity', 'delivery', 'pricing'].map((k) => catalog.faqBank[k]);
  render(res, 'industry', {
    title: `${ind.name} MCA Email Leads | ${site.name}`,
    description: `Verified email data for ${ind.noun}. Typical advance ${ind.ticket}. Filter by state, revenue band, and time in business, then deliver to CSV or your CRM.`,
    ind,
    faqs,
    angles: content.angleFor(ind.slug),
    proof: content.proofFor(ind.slug),
    ctaLine: content.ctaLine(ind.slug),
    related: industries.filter((i) => i.slug !== ind.slug).slice(0, 6),
    breadcrumbs: [
      { label: 'Industries', href: '/industries' },
      { label: ind.short, href: `/industries/${ind.slug}` }
    ],
    schema: faqSchema(faqs)
  });
});

/* -------------------------------- comparisons ----------------------------- */

app.get('/compare', (req, res) => {
  render(res, 'compare-index', {
    title: `MCA Lead Channel Comparisons | ${site.name}`,
    description: 'Honest side-by-side breakdowns of email leads against cold calling, UCC lists, live transfers, direct mail, paid search, and building in-house.',
    comparisons: catalog.comparisons,
    breadcrumbs: [{ label: 'Compare', href: '/compare' }]
  });
});

app.get('/compare/:slug', (req, res, next) => {
  const cmp = catalog.byComparisonSlug[req.params.slug];
  if (!cmp) return next();
  render(res, 'compare', {
    title: `${cmp.title} | ${site.name}`,
    description: cmp.verdict,
    cmp,
    others: catalog.comparisons.filter((c) => c.slug !== cmp.slug).slice(0, 4),
    ctaLine: content.ctaLine(cmp.slug),
    breadcrumbs: [
      { label: 'Compare', href: '/compare' },
      { label: cmp.title, href: `/compare/${cmp.slug}` }
    ]
  });
});

/* --------------------------------- resources ------------------------------ */

app.get('/resources', (req, res) => {
  render(res, 'resources', {
    title: `MCA Outbound Resources & Guides | ${site.name}`,
    description: 'Practical guides on deliverability, sequencing, compliance, and lead economics for merchant cash advance shops running outbound email.',
    articles: catalog.articles,
    breadcrumbs: [{ label: 'Resources', href: '/resources' }]
  });
});

app.get('/resources/:slug', (req, res, next) => {
  const article = catalog.byArticleSlug[req.params.slug];
  if (!article) return next();
  render(res, 'article', {
    title: `${article.title} | ${site.name}`,
    description: article.dek,
    article,
    more: catalog.articles.filter((a) => a.slug !== article.slug).slice(0, 3),
    ogType: 'article',
    breadcrumbs: [
      { label: 'Resources', href: '/resources' },
      { label: article.title, href: `/resources/${article.slug}` }
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.dek,
      datePublished: article.date,
      author: { '@type': 'Organization', name: site.name },
      publisher: { '@type': 'Organization', name: site.name }
    }
  });
});

/* ------------------------------ static pages ------------------------------ */

app.get('/pricing', (req, res) => {
  const faqs = ['pricing', 'minimums', 'exclusivity', 'replacement', 'turnaround'].map((k) => catalog.faqBank[k]);
  render(res, 'pricing', {
    title: `Pricing & How We Quote | ${site.name}`,
    description: 'How MCA email lead pricing actually works — what moves cost per record, what a test pull looks like, and how to get a quote against your lender box.',
    faqs,
    breadcrumbs: [{ label: 'Pricing', href: '/pricing' }],
    schema: faqSchema(faqs)
  });
});

app.get('/about', (req, res) => {
  render(res, 'about', {
    title: `About ${site.name}`,
    description: `${site.name} builds and verifies merchant email data for the MCA industry, and runs managed outbound for shops that would rather receive conversations than spreadsheets.`,
    breadcrumbs: [{ label: 'About', href: '/about' }]
  });
});

app.get('/faq', (req, res) => {
  const faqs = catalog.generalFaqOrder.map((k) => catalog.faqBank[k]);
  render(res, 'faq', {
    title: `Frequently Asked Questions | ${site.name}`,
    description: 'Answers on verification, exclusivity, pricing, delivery, compliance, CRM integration, and replacements.',
    faqs,
    breadcrumbs: [{ label: 'FAQ', href: '/faq' }],
    schema: faqSchema(faqs)
  });
});

app.get('/data-and-compliance', (req, res) => {
  const faqs = ['compliance', 'suppression', 'deliverability', 'verification'].map((k) => catalog.faqBank[k]);
  render(res, 'compliance', {
    title: `Data Sourcing & Compliance | ${site.name}`,
    description: 'How our data is sourced and verified, how suppression works, and how we approach CAN-SPAM in managed outbound campaigns.',
    faqs,
    breadcrumbs: [{ label: 'Data & Compliance', href: '/data-and-compliance' }],
    schema: faqSchema(faqs)
  });
});

app.get('/contact', (req, res) => {
  render(res, 'contact', {
    title: `Contact ${site.name}`,
    description: `Talk to ${site.name} about coverage, counts, and pricing against your lender box.`,
    breadcrumbs: [{ label: 'Contact', href: '/contact' }]
  });
});

app.get('/book', (req, res) => {
  render(res, 'book', {
    title: `Book a Data Strategy Call | ${site.name}`,
    description: 'Pick a time, bring your lender box, and get counts and pricing on the call.',
    ref: typeof req.query.ref === 'string' ? req.query.ref.slice(0, 80) : '',
    submitted: req.query.submitted === '1',
    breadcrumbs: [{ label: 'Book a call', href: '/book' }]
  });
});

app.get('/privacy', (req, res) =>
  render(res, 'legal', {
    title: `Privacy Policy | ${site.name}`,
    description: 'How we collect, use, and protect information submitted through this website.',
    doc: 'privacy',
    breadcrumbs: [{ label: 'Privacy Policy', href: '/privacy' }]
  })
);

app.get('/terms', (req, res) =>
  render(res, 'legal', {
    title: `Terms of Service | ${site.name}`,
    description: 'Terms governing use of this website and our data services.',
    doc: 'terms',
    breadcrumbs: [{ label: 'Terms of Service', href: '/terms' }]
  })
);

app.get('/opt-out', (req, res) =>
  render(res, 'legal', {
    title: `Opt Out & Do Not Contact | ${site.name}`,
    description: 'Request permanent removal from our data and all outbound campaigns.',
    doc: 'optout',
    breadcrumbs: [{ label: 'Opt Out', href: '/opt-out' }]
  })
);

/* --------------------------------- lead API ------------------------------- */

const RECENT = [];

app.post('/api/lead', async (req, res) => {
  const b = req.body || {};
  if (b.website) return res.status(200).json({ ok: true }); // honeypot

  const payload = {
    firstName: String(b.firstName || '').slice(0, 80),
    lastName: String(b.lastName || '').slice(0, 80),
    email: String(b.email || '').slice(0, 160),
    phone: String(b.phone || '').slice(0, 40),
    company: String(b.company || '').slice(0, 160),
    role: String(b.role || '').slice(0, 80),
    monthlyVolume: String(b.monthlyVolume || '').slice(0, 80),
    leadType: String(b.leadType || '').slice(0, 120),
    states: String(b.states || '').slice(0, 200),
    industries: String(b.industries || '').slice(0, 200),
    crm: String(b.crm || '').slice(0, 80),
    notes: String(b.notes || '').slice(0, 1200),
    source: String(b.source || 'website').slice(0, 200),
    pageUrl: String(b.pageUrl || '').slice(0, 400),
    submittedAt: new Date().toISOString()
  };

  if (!payload.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(payload.email)) {
    return res.status(400).json({ ok: false, error: 'A valid email is required.' });
  }

  RECENT.unshift(payload);
  if (RECENT.length > 200) RECENT.pop();

  if (site.ghlWebhookUrl) {
    try {
      const r = await fetch(site.ghlWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!r.ok) console.error('[lead] webhook responded', r.status);
    } catch (err) {
      console.error('[lead] webhook failed:', err.message);
    }
  } else {
    console.log('[lead] no GHL_WEBHOOK_URL set — logging only:', JSON.stringify(payload));
  }

  res.json({ ok: true, redirect: `/book?submitted=1&ref=${encodeURIComponent(payload.leadType || 'website')}` });
});

app.get('/healthz', (req, res) => res.json({ ok: true, uptime: process.uptime(), pages: totalUrls() }));

/* ---------------------------------- SEO ----------------------------------- */

function allUrls() {
  const urls = [
    ['/', 1.0, 'daily'],
    ['/services', 0.9, 'weekly'],
    ['/industries', 0.9, 'weekly'],
    ['/compare', 0.8, 'weekly'],
    ['/pricing', 0.8, 'monthly'],
    ['/resources', 0.7, 'weekly'],
    ['/about', 0.5, 'monthly'],
    ['/faq', 0.6, 'monthly'],
    ['/data-and-compliance', 0.5, 'monthly'],
    ['/contact', 0.6, 'monthly'],
    ['/book', 0.9, 'monthly'],
    ['/privacy', 0.2, 'yearly'],
    ['/terms', 0.2, 'yearly'],
    ['/opt-out', 0.3, 'yearly']
  ];
  for (const s of catalog.services) urls.push([`/services/${s.slug}`, 0.9, 'monthly']);
  for (const i of industries) urls.push([`/industries/${i.slug}`, 0.8, 'monthly']);
  for (const c of catalog.comparisons) urls.push([`/compare/${c.slug}`, 0.7, 'monthly']);
  for (const a of catalog.articles) urls.push([`/resources/${a.slug}`, 0.6, 'monthly']);
  return urls;
}
const totalUrls = () => allUrls().length;

app.get('/sitemap.xml', (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const body = allUrls()
    .map(
      ([loc, priority, freq]) =>
        `  <url><loc>${site.baseUrl}${loc === '/' ? '/' : loc}</loc><lastmod>${today}</lastmod><changefreq>${freq}</changefreq><priority>${priority.toFixed(1)}</priority></url>`
    )
    .join('\n');
  res.type('application/xml').send(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`
  );
});

app.get('/robots.txt', (req, res) => {
  res.type('text/plain').send(`User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${site.baseUrl}/sitemap.xml
`);
});

function faqSchema(faqs) {
  if (!faqs || !faqs.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };
}

/* ---------------------------------- 404 ----------------------------------- */

app.use((req, res) => {
  res.status(404);
  render(res, '404', {
    title: `Page not found | ${site.name}`,
    description: 'That page does not exist.',
    popularServices: catalog.services.slice(0, 6),
    popularIndustries: industries.filter((i) => i.combo).slice(0, 8)
  });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).render('404', {
    site,
    title: 'Something went wrong',
    description: 'An unexpected error occurred.',
    path: req.path,
    canonical: site.baseUrl,
    year: new Date().getFullYear(),
    nav: site.nav,
    industries,
    services: catalog.services,
    faqBank: catalog.faqBank,
    c: content,
    breadcrumbs: [],
    schema: null,
    ogType: 'website',
    popularServices: catalog.services.slice(0, 6),
    popularIndustries: industries.filter((i) => i.combo).slice(0, 8)
  });
});

app.listen(PORT, () => {
  console.log(`${site.name} running on :${PORT} — ${totalUrls()} indexable URLs`);
});
