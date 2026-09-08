// All brand/config values. Everything here can be overridden with env vars on Railway.

const site = {
  name: process.env.SITE_NAME || 'MCA Email Leads',
  legalName: process.env.LEGAL_NAME || 'MCA Email Leads',
  domain: process.env.SITE_DOMAIN || 'mcaemailleads.com',
  baseUrl: (process.env.BASE_URL || 'https://mcaemailleads.com').replace(/\/$/, ''),
  tagline: 'Verified merchant email data for MCA brokers, ISOs, and funders.',
  description:
    'MCA Email Leads supplies verified, filterable merchant email data for the merchant cash advance industry — exclusive and aged files, UCC email appends, renewal data, and fully managed outbound campaigns.',
  phone: process.env.SITE_PHONE || '(617) 944-2522',
  phoneHref: (process.env.SITE_PHONE || '(617) 944-2522').replace(/[^0-9+]/g, ''),
  email: process.env.SITE_EMAIL || 'sales@mcaemailleads.com',
  address: {
    line1: process.env.ADDR_LINE1 || '32 N Gould St.',
    line2: process.env.ADDR_LINE2 || 'Sheridan, WY 82801',
    full: `${process.env.ADDR_LINE1 || '32 N Gould St.'}, ${process.env.ADDR_LINE2 || 'Sheridan, WY 82801'}`
  },
  hours: 'Monday – Friday, 9:00am – 6:00pm ET',

  // Lead plumbing — set these in Railway variables.
  ghlWebhookUrl: process.env.GHL_WEBHOOK_URL || '',
  ghlCalendarUrl: process.env.GHL_CALENDAR_URL || '',

  // Optional analytics
  gtmId: process.env.GTM_ID || '',
  ga4Id: process.env.GA4_ID || '',

  stats: [
    { label: 'Merchant records under management', value: '4.1M+' },
    { label: 'Verification passes before delivery', value: '3' },
    { label: 'Standard file turnaround', value: '< 24 hrs' },
    { label: 'States covered', value: '50 + DC' }
  ],

  trustPoints: [
    'CAN-SPAM built into every managed campaign',
    'Global, permanent opt-out suppression',
    'Bounce replacement inside the agreed window',
    'No long-term contract to start'
  ],

  integrations: ['GoHighLevel', 'HubSpot', 'Salesforce', 'Close', 'Pipedrive', 'Zapier', 'Webhook', 'SFTP'],

  nav: [
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'UCC Data', href: '/services/ucc-data-email-append' },
    { label: 'Compare', href: '/compare' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Resources', href: '/resources' }
  ]
};

module.exports = site;
