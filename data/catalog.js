// Services, comparison pages, FAQ bank, and resource articles.

const services = [
  {
    slug: 'mca-email-leads',
    name: 'MCA Email Leads',
    tagline: 'Verified merchant email data built for merchant cash advance offers.',
    category: 'Core Data',
    summary:
      'Our core product. Permission-based, verified business email records for merchants that match MCA underwriting criteria — revenue band, time in business, industry, and geography — delivered ready to send.',
    bullets: [
      'Records filtered to businesses with provable monthly revenue',
      'Real-time and rolling verification before delivery',
      'Filterable by state, metro, NAICS/SIC, revenue band, and time in business',
      'Delivered as CSV, or pushed straight into your CRM'
    ],
    deliver: ['CSV / XLSX export', 'CRM push (GoHighLevel, HubSpot, Salesforce, Close)', 'API or SFTP drop', 'Webhook per record'],
    fields: ['Business name', 'Owner / decision-maker name', 'Verified business email', 'Phone (where available)', 'Street, city, state, ZIP', 'Industry code', 'Estimated annual revenue', 'Employee count', 'Years in business', 'Website'],
    who: 'ISOs, MCA brokers, and direct funders running outbound email at volume.',
    faqKeys: ['verification', 'exclusivity', 'delivery', 'minimums']
  },
  {
    slug: 'exclusive-mca-leads',
    name: 'Exclusive MCA Email Leads',
    tagline: 'Sold once. To you. Never resold to another shop.',
    category: 'Core Data',
    summary:
      'Exclusive records are suppressed from every other buyer permanently. When a merchant replies, you are the only shop in their inbox from us — no race to the phone against three other ISOs working the same file.',
    bullets: [
      'Permanent suppression across all other accounts',
      'Higher cost per record, materially higher close rate',
      'Best for shops with real follow-up capacity',
      'Territory and vertical locks available'
    ],
    deliver: ['CSV / XLSX export', 'CRM push', 'API or SFTP drop', 'Real-time webhook'],
    who: 'Shops with enough closers to actually work a file properly.',
    faqKeys: ['exclusivity', 'pricing', 'replacement']
  },
  {
    slug: 'aged-mca-leads',
    name: 'Aged MCA Leads',
    tagline: 'Previously-generated merchant records at a fraction of fresh pricing.',
    category: 'Core Data',
    summary:
      'Merchants who previously raised their hand for funding, aged 30 to 180+ days. Lower cost per record, lower contact rate, and a genuinely strong ROI for shops with a disciplined multi-touch sequence.',
    bullets: [
      'Age buckets: 30, 60, 90, 180, and 365+ days',
      'Priced for volume sending',
      'Re-verified for deliverability before release',
      'Strong performer for renewal and second-position offers'
    ],
    deliver: ['CSV / XLSX export', 'CRM push', 'Bulk SFTP'],
    who: 'Shops running high-volume sequences and reactivation plays.',
    faqKeys: ['aged', 'pricing', 'verification']
  },
  {
    slug: 'mca-renewal-leads',
    name: 'MCA Renewal & Second-Position Leads',
    tagline: 'Merchants already carrying an advance and inside the renewal window.',
    category: 'Core Data',
    summary:
      'Records signalling an existing advance — UCC activity, funding recency, and stated position — segmented so you can target merchants approaching 50%+ paydown rather than cold first-position prospects.',
    bullets: [
      'Segmented by estimated paydown position',
      'UCC-informed filing signals where available',
      'Ideal for second, third, and consolidation offers',
      'Highest intent tier we carry'
    ],
    deliver: ['CSV / XLSX export', 'CRM push', 'API'],
    who: 'Shops with lender appetite for second position and consolidations.',
    faqKeys: ['ucc', 'exclusivity', 'delivery']
  },
  {
    slug: 'business-loan-email-leads',
    name: 'Business Loan Email Leads',
    tagline: 'Broader small-business borrowing intent beyond the MCA box.',
    category: 'Adjacent Verticals',
    summary:
      'Businesses actively researching financing of any type. Wider funnel than pure MCA data, useful when you have term, SBA, or line-of-credit options to place a file that will not fit an advance.',
    bullets: ['Wider revenue and credit band', 'Good source for a multi-product shop', 'Filterable to MCA-qualifying subsets', 'Blends well with renewal data'],
    deliver: ['CSV / XLSX export', 'CRM push', 'API'],
    who: 'Brokers placing more than one product.',
    faqKeys: ['verification', 'minimums']
  },
  {
    slug: 'equipment-financing-leads',
    name: 'Equipment Financing Email Leads',
    tagline: 'Businesses buying trucks, machines, and heavy equipment.',
    category: 'Adjacent Verticals',
    summary:
      'Merchants in equipment-heavy verticals with active purchase signals. Strong crossover with MCA — the merchant who cannot get equipment paper often takes an advance instead.',
    bullets: ['Vertical-weighted to trucking, construction, manufacturing', 'Purchase-intent signals where available', 'High crossover to working capital offers', 'Larger average ticket'],
    deliver: ['CSV / XLSX export', 'CRM push'],
    who: 'Shops with equipment lenders plus a working-capital fallback.',
    faqKeys: ['verification', 'pricing']
  },
  {
    slug: 'sba-loan-email-leads',
    name: 'SBA Loan Email Leads',
    tagline: 'Higher-credit businesses that will also entertain fast capital.',
    category: 'Adjacent Verticals',
    summary:
      'Better-credit merchants exploring SBA 7(a) and 504 financing. Long timelines on SBA mean many of these files convert to an advance when the borrower needs money before the process finishes.',
    bullets: ['Stronger credit profile than core MCA data', 'Longer sales cycle, larger deals', 'Reliable source of bridge-to-SBA advance files', 'Filterable by revenue and time in business'],
    deliver: ['CSV / XLSX export', 'CRM push'],
    who: 'Shops with SBA relationships or a bridge product.',
    faqKeys: ['verification', 'minimums']
  },
  {
    slug: 'business-line-of-credit-leads',
    name: 'Business Line of Credit Leads',
    tagline: 'Revolving-capital intent, competitive with advance offers.',
    category: 'Adjacent Verticals',
    summary:
      'Merchants shopping for a revolving facility. Many will not qualify at a bank and will end up in an advance or a revenue-based product — which makes this a productive top-of-funnel source.',
    bullets: ['Revolving-credit intent signals', 'Frequently converts to advance offers', 'Mid-size ticket range', 'Blends with business loan data'],
    deliver: ['CSV / XLSX export', 'CRM push'],
    who: 'Brokers with LOC and advance options side by side.',
    faqKeys: ['verification', 'pricing']
  },
  {
    slug: 'custom-merchant-list-building',
    name: 'Custom Merchant List Building',
    tagline: 'You define the box. We build the list to match it.',
    category: 'Data Services',
    summary:
      'Give us your lender box — revenue floor, time in business, industry inclusions and exclusions, states, position — and we build a list to that exact specification instead of you filtering down a generic file.',
    bullets: [
      'Built to your lender submission criteria',
      'Restricted-industry exclusions applied up front',
      'Geographic and territory carve-outs',
      'Suppression against your existing CRM'
    ],
    deliver: ['CSV / XLSX export', 'CRM push', 'SFTP'],
    who: 'Shops with a specific, repeatable lender box.',
    faqKeys: ['minimums', 'suppression', 'delivery']
  },
  {
    slug: 'email-appending-data-enrichment',
    name: 'Email Appending & Data Enrichment',
    tagline: 'Turn the list you already own into a list you can actually email.',
    category: 'Data Services',
    summary:
      'Send us a file of business names, addresses, phone numbers, or UCC records. We append verified business emails, decision-maker names, and firmographics, then hand it back deliverable.',
    bullets: [
      'Email append against your existing records',
      'Owner and decision-maker name append',
      'Revenue, employee count, and industry enrichment',
      'Bounce-risk scoring before you send'
    ],
    deliver: ['Enriched CSV / XLSX', 'CRM write-back', 'SFTP round trip'],
    who: 'Shops sitting on dead UCC or dialer lists with no email coverage.',
    faqKeys: ['append', 'verification', 'suppression']
  },
  {
    slug: 'ucc-data-email-append',
    name: 'UCC Data & Email Append',
    tagline: 'UCC filings, matched to a deliverable inbox.',
    category: 'Data Services',
    summary:
      'UCC filing records are the backbone of MCA prospecting and almost never include a usable email. We pull filings by state and date range, then append verified business emails so the file is sendable, not just dialable.',
    bullets: ['Filings by state, secured party, and date range', 'Verified email append on matched records', 'Match-rate reported before you pay', 'Deduped against your suppression list'],
    deliver: ['CSV / XLSX export', 'CRM push', 'SFTP'],
    who: 'Shops already buying UCC data and burning it on the phone only.',
    faqKeys: ['ucc', 'append', 'verification']
  },
  {
    slug: 'done-for-you-email-campaigns',
    name: 'Done-For-You Email Campaigns',
    tagline: 'We write it, we send it, you take the replies.',
    category: 'Managed',
    summary:
      'A fully managed outbound program: data, copy, sending infrastructure, sequencing, and reply routing. Positive replies land in your CRM or inbox as booked conversations rather than raw records.',
    bullets: [
      'Multi-touch sequences written for MCA offers',
      'Sending from dedicated domains, not yours',
      'Reply handling and routing to your team',
      'Weekly reporting on sends, opens, replies, and booked calls'
    ],
    deliver: ['Replies routed to your inbox or CRM', 'Booked appointments on your calendar', 'Weekly performance report'],
    who: 'Shops that want appointments, not a spreadsheet.',
    faqKeys: ['managed', 'deliverability', 'pricing']
  },
  {
    slug: 'cold-email-infrastructure',
    name: 'Cold Email Infrastructure Setup',
    tagline: 'Domains, inboxes, authentication, warmup. Built to survive volume.',
    category: 'Managed',
    summary:
      'Most MCA shops burn their primary domain within a month. We build a separate sending estate — secondary domains, authenticated inboxes, staged warmup, and rotation — so your outbound scales without torching your main email.',
    bullets: [
      'Secondary sending domains registered and configured',
      'SPF, DKIM, and DMARC set correctly',
      'Staged inbox warmup before real volume',
      'Rotation and daily send-cap management'
    ],
    deliver: ['Configured sending estate', 'Documentation and handover', 'Ongoing monitoring option'],
    who: 'Any shop sending more than a few hundred emails a day.',
    faqKeys: ['deliverability', 'managed']
  },
  {
    slug: 'crm-integration-lead-delivery',
    name: 'CRM Integration & Lead Delivery',
    tagline: 'Records land in your pipeline, tagged and assigned.',
    category: 'Managed',
    summary:
      'We deliver directly into the system you already work in — GoHighLevel, HubSpot, Salesforce, Close, Pipedrive — with tagging, source attribution, owner assignment, and duplicate suppression handled on our side.',
    bullets: [
      'Native GoHighLevel delivery, including sub-accounts',
      'Tagging and pipeline stage on arrival',
      'Round-robin or rules-based owner assignment',
      'Duplicate suppression against existing contacts'
    ],
    deliver: ['Direct CRM records', 'Webhook per record', 'API pull'],
    who: 'Shops that want zero manual CSV handling.',
    faqKeys: ['delivery', 'suppression']
  }
];

const byServiceSlug = Object.fromEntries(services.map((s) => [s.slug, s]));

const serviceCategories = [...new Set(services.map((s) => s.category))].map((cat) => ({
  name: cat,
  services: services.filter((s) => s.category === cat)
}));

const comparisons = [
  {
    slug: 'mca-email-leads-vs-cold-calling',
    title: 'MCA Email Leads vs. Cold Calling',
    a: 'Email Leads',
    b: 'Cold Calling',
    verdict: 'Email scales without headcount. Calling closes faster on the files it reaches. Most profitable shops run both.',
    intro:
      'Cold calling has been the default MCA prospecting motion for two decades. It still works — but the cost per conversation has climbed as spam labelling, mobile screening, and merchant fatigue have all gotten worse. Email is not a replacement for the phone. It is the layer that keeps your closers on live conversations instead of dialing dead numbers.',
    rows: [
      ['Cost to scale', 'Data cost only — no additional headcount', 'Linear with dialer seats and salaries'],
      ['Reach per rep per day', 'Thousands of merchants', '80–150 dials, far fewer connects'],
      ['Merchant control', 'Reads and replies on their schedule', 'Interruptive, often at a bad moment'],
      ['Regulatory surface', 'CAN-SPAM: honest headers, real address, working opt-out', 'TCPA, state do-not-call, consent, call recording'],
      ['Speed to first response', 'Hours to days', 'Immediate when connected'],
      ['Best use', 'Top of funnel and reactivation at volume', 'Working replies and warm files']
    ],
    when: ['You want coverage across states without adding dialer seats', 'Your reps are burning hours on unanswered calls', 'You need a reactivation motion for old data'],
    against: ['You have a large floor already producing on the phone', 'Your only offer needs live rapport to sell']
  },
  {
    slug: 'mca-email-leads-vs-ucc-lists',
    title: 'MCA Email Leads vs. UCC Lists',
    a: 'Email Leads',
    b: 'Raw UCC Lists',
    verdict: 'UCC tells you who already took money. Email data tells you how to reach them. Appending one to the other beats either alone.',
    intro:
      'UCC filings are the most-worked data in this industry — which is exactly the problem. A raw UCC list gives you a business name, a secured party, and a filing date. It rarely gives you a deliverable email, and every other shop bought the same file the same week.',
    rows: [
      ['What it tells you', 'Firmographics plus a reachable inbox', 'That a lien was filed and by whom'],
      ['Contact data quality', 'Verified email, often direct owner name', 'Address only, phone sometimes, email rarely'],
      ['Saturation', 'Depends on exclusivity tier chosen', 'Very high — sold widely and repeatedly'],
      ['Best channel', 'Email sequences at scale', 'Phone and direct mail'],
      ['Renewal targeting', 'Filterable by estimated position', 'Strong — filing date implies position'],
      ['Ideal combination', 'Append email to UCC and sequence both channels', 'Use as the seed list for the append']
    ],
    when: ['You already buy UCC and only work it by phone', 'You want to add an email channel to existing data', 'You need renewal timing signals'],
    against: ['You need first-position, never-funded merchants only']
  },
  {
    slug: 'mca-email-leads-vs-live-transfers',
    title: 'MCA Email Leads vs. Live Transfers',
    a: 'Email Leads',
    b: 'Live Transfers',
    verdict: 'Live transfers cost 20–60x more per unit and convert far better per unit. The right mix depends on your closer capacity, not on which is "better".',
    intro:
      'A live transfer is a merchant already on the phone. That is genuinely valuable, and priced accordingly. The trap is treating cost per lead as the metric that matters. Cost per funded deal is the only number that decides this, and it moves entirely with how well your floor works a file.',
    rows: [
      ['Cost per unit', 'Low — cents to low dollars per record', 'High — typically triple digits per transfer'],
      ['Conversion per unit', 'Low per record, high per campaign', 'High per transfer'],
      ['Closer capacity required', 'Modest — replies arrive asynchronously', 'High — must staff to answer instantly'],
      ['Volume ceiling', 'Very high', 'Constrained by supplier capacity'],
      ['Quality control', 'Filter and verify before send', 'Depends entirely on supplier screening'],
      ['Predictability', 'Improves as your sequence data matures', 'Immediate but supplier-dependent']
    ],
    when: ['You want a predictable top of funnel you control', 'Your budget will not absorb triple-digit CPL', 'You have follow-up discipline'],
    against: ['You have closers idle right now and need conversations today']
  },
  {
    slug: 'exclusive-vs-shared-mca-leads',
    title: 'Exclusive vs. Shared MCA Leads',
    a: 'Exclusive',
    b: 'Shared',
    verdict: 'Exclusive wins on close rate. Shared wins on cost per record. Shops with weak follow-up should not pay for exclusivity — they will not use it.',
    intro:
      'Exclusivity is the single biggest price driver in lead data, and the most misunderstood. Paying for exclusivity only pays back if you actually work the file. A shop that sends one email and moves on gets no more value from an exclusive record than a shared one.',
    rows: [
      ['Cost per record', 'Higher', 'Lower'],
      ['Competing shops in the inbox', 'None from us', 'Several, often simultaneously'],
      ['Close rate', 'Materially higher', 'Lower per record'],
      ['Speed pressure', 'Low — you set the pace', 'High — first responder usually wins'],
      ['Best for', 'Shops with real multi-touch follow-up', 'High-volume shops working on speed'],
      ['Territory locks', 'Available', 'Not available']
    ],
    when: ['Your reps run a 5+ touch sequence', 'You are protecting a specific territory or vertical', 'Your average deal size justifies the premium'],
    against: ['You send once and move on', 'You are testing a new vertical on a small budget']
  },
  {
    slug: 'mca-email-leads-vs-aged-leads',
    title: 'Fresh MCA Leads vs. Aged MCA Leads',
    a: 'Fresh',
    b: 'Aged',
    verdict: 'Fresh converts faster. Aged converts cheaper. Aged data is the most under-used profit source in most MCA shops.',
    intro:
      'The instinct is that aged data is worse data. On a per-record basis, that is true. On a cost-per-funded-deal basis it is frequently the opposite, because the price difference is far larger than the conversion difference — provided you sequence it properly instead of sending once.',
    rows: [
      ['Cost per record', 'Higher', 'Substantially lower'],
      ['Contact rate', 'Higher', 'Lower but far from zero'],
      ['Intent recency', 'Current', '30–365+ days old'],
      ['Competition on the file', 'Moderate to high', 'Lower — most shops abandon aged data'],
      ['Best sequence length', '3–5 touches', '7–12 touches over weeks'],
      ['Renewal fit', 'Weaker', 'Strong — many have funded since']
    ],
    when: ['You need volume on a fixed budget', 'You have automation to run long sequences', 'You want a second at-bat on merchants who already funded'],
    against: ['You need conversations this week', 'You have no follow-up automation']
  },
  {
    slug: 'mca-email-leads-vs-direct-mail',
    title: 'MCA Email Leads vs. Direct Mail',
    a: 'Email Leads',
    b: 'Direct Mail',
    verdict: 'Mail cuts through where inboxes are saturated, but costs 50–100x more per touch and cannot be iterated weekly. Email is the testing ground; mail is the finisher.',
    intro:
      'Direct mail still produces in MCA, particularly on renewal and consolidation offers where a physical check-style piece gets opened. The economics are simply different: you cannot A/B test a mail drop on Tuesday and change the copy on Thursday.',
    rows: [
      ['Cost per touch', 'Fractions of a cent', 'Roughly $0.50–$1.50 delivered'],
      ['Iteration speed', 'Same day', '2–4 weeks per cycle'],
      ['Attribution', 'Clean — opens, clicks, replies', 'Requires unique numbers or codes'],
      ['Inbox competition', 'High', 'Lower — mailbox is less crowded'],
      ['Scale ceiling', 'Very high', 'Budget-bound'],
      ['Best offer type', 'Anything testable', 'Renewal and consolidation offers']
    ],
    when: ['You want fast iteration on offer and copy', 'Your budget is fixed and volume matters', 'You need clean attribution'],
    against: ['Your list has poor email coverage', 'You are targeting owners who genuinely do not use email']
  },
  {
    slug: 'mca-email-leads-vs-google-ads',
    title: 'MCA Email Leads vs. Google Ads',
    a: 'Email Leads',
    b: 'Google Ads',
    verdict: 'Paid search captures merchants already looking. Email creates demand among merchants who are not. Search is expensive and restricted in this vertical.',
    intro:
      'Search intent for business funding is genuinely high quality — and genuinely expensive, with competition from funders spending far more than a typical ISO can. Financial services advertising also carries verification requirements and policy risk that make search a fragile sole channel.',
    rows: [
      ['Cost per lead', 'Low and predictable', 'High and rising, bid-dependent'],
      ['Intent level', 'Created by your offer', 'Already searching'],
      ['Policy risk', 'CAN-SPAM compliance you control', 'Account suspension risk in financial verticals'],
      ['Scale control', 'You choose volume directly', 'Capped by search volume'],
      ['Ramp time', 'Days', 'Weeks of learning and spend'],
      ['Competition', 'Depends on exclusivity tier', 'Direct funders with larger budgets']
    ],
    when: ['You want predictable volume at a known cost', 'You cannot outbid direct funders on search', 'You want channel diversification'],
    against: ['You have budget and want the highest-intent traffic available']
  },
  {
    slug: 'buying-mca-leads-vs-building-in-house',
    title: 'Buying MCA Leads vs. Building In-House',
    a: 'Buying',
    b: 'Building In-House',
    verdict: 'Building is cheaper per record at scale and far more expensive to start. Most shops should buy until volume justifies the infrastructure.',
    intro:
      'Every shop eventually asks whether to build data and sending infrastructure internally. It is a real option — and it is a full operational function: data sourcing, verification, domain estate, warmup, deliverability monitoring, and compliance, staffed continuously.',
    rows: [
      ['Time to first send', 'Days', '6–12 weeks minimum'],
      ['Upfront cost', 'Data spend only', 'Tooling, domains, headcount, data sources'],
      ['Cost per record at scale', 'Higher', 'Lower once volume is real'],
      ['Compliance burden', 'Shared with vendor', 'Entirely yours'],
      ['Deliverability risk', 'Vendor-managed sending available', 'Yours to monitor and fix'],
      ['Flexibility', 'Change filters instantly', 'Total control, slower to change']
    ],
    when: ['You are not yet sending consistent daily volume', 'You want to prove the channel before investing', 'You do not have a data or deliverability owner on staff'],
    against: ['You already send high daily volume and have technical staff']
  }
];

const byComparisonSlug = Object.fromEntries(comparisons.map((c) => [c.slug, c]));

const faqBank = {
  verification: {
    q: 'How are the email addresses verified?',
    a: 'Records run through syntax and domain checks, MX validation, and mailbox-level verification before delivery, with a rolling re-verification pass on anything held in inventory. Any record that fails verification is removed before the file reaches you rather than counted against your order.'
  },
  exclusivity: {
    q: 'Are these leads exclusive to my shop?',
    a: 'Both options exist. Exclusive records are suppressed permanently from every other account, so no other shop receives them from us. Shared records cost less per unit and go to a limited number of buyers. Exclusivity is chosen per order, and territory or vertical locks can be arranged on ongoing programs.'
  },
  delivery: {
    q: 'How do I receive the leads?',
    a: 'CSV or XLSX download, direct push into your CRM (GoHighLevel, HubSpot, Salesforce, Close, Pipedrive), a webhook per record, or an SFTP drop on a schedule. CRM delivery includes tagging, source attribution, and owner assignment.'
  },
  minimums: {
    q: 'Is there a minimum order?',
    a: 'Orders start small enough to test a vertical before committing budget. Pricing improves with volume and with ongoing programs rather than one-off pulls. The exact minimum depends on how tightly filtered the request is — a narrow single-state, single-vertical box has a different floor than a national pull.'
  },
  pricing: {
    q: 'What does it cost?',
    a: 'Cost per record moves with exclusivity, age, filter tightness, and volume. Exclusive fresh data in a narrow box sits at the top of the range; aged shared data at the bottom. We quote against your actual lender box on the call rather than publishing a rate card that will not match what you need.'
  },
  replacement: {
    q: 'What happens with bad records?',
    a: 'Hard bounces and invalid records inside the agreed window are replaced, not argued about. Report them in bulk and the credit is applied to your next pull. What is not covered is a merchant who is simply not interested — that is a normal outcome of outbound, not a data defect.'
  },
  aged: {
    q: 'How old is "aged" data?',
    a: 'Buckets run 30, 60, 90, 180, and 365+ days from the original intent event. Every aged file is re-verified for deliverability before release, so age affects contact rate and intent recency, not bounce rate.'
  },
  ucc: {
    q: 'Do you work with UCC filing data?',
    a: 'Yes — both as a source and as an append target. We pull filings by state, secured party, and date range, and we append verified business emails onto UCC records you already own. Match rate is reported before you pay so you know what you are getting.'
  },
  append: {
    q: 'Can you append emails to my existing list?',
    a: 'Send a file with business names and addresses, phone numbers, or UCC records. We return it with verified business emails, decision-maker names where available, and firmographic enrichment. You are billed on matched records only.'
  },
  suppression: {
    q: 'Can you suppress against my existing CRM?',
    a: 'Yes. Upload your current contacts or connect your CRM and we dedupe against it before delivery, so you are not paying for records already sitting in your pipeline. Opt-out and do-not-contact lists are suppressed globally and permanently.'
  },
  deliverability: {
    q: 'Will this hurt my domain reputation?',
    a: 'It can, if you send cold volume from your primary domain — which is why we do not recommend it. Our infrastructure service builds a separate sending estate with its own domains, authentication, and warmup so your main email stays clean. On managed campaigns, sending happens on our estate, not yours.'
  },
  managed: {
    q: 'What is included in a managed campaign?',
    a: 'Data, copywriting, sending infrastructure, sequence build, send management, reply handling, and routing of positive replies into your CRM or onto your calendar. You receive conversations and booked calls plus a weekly report on sends, opens, replies, and appointments.'
  },
  compliance: {
    q: 'Is cold email to businesses legal?',
    a: 'Business-to-business email in the United States is governed primarily by CAN-SPAM, which permits cold outreach provided headers and sender identity are accurate, the subject line is not deceptive, a valid physical postal address appears, and a working opt-out is honored promptly. Several states and other countries impose stricter rules. We build to CAN-SPAM and expect clients to send responsibly, but we are not a law firm — confirm your own program with counsel.'
  },
  crm: {
    q: 'Do you integrate with GoHighLevel?',
    a: 'Yes, including delivery into a specific sub-account with tags, pipeline stage, custom field mapping, and round-robin assignment applied on arrival. HubSpot, Salesforce, Close, and Pipedrive are also supported, along with a generic webhook for anything else.'
  },
  turnaround: {
    q: 'How fast can I get a file?',
    a: 'Standard pulls typically deliver within one business day of the box being confirmed. Custom builds and large appends take longer depending on match volume. Managed campaigns need a warmup runway before real sending begins, so plan two to three weeks from kickoff to meaningful volume.'
  }
};

const generalFaqOrder = ['verification', 'exclusivity', 'pricing', 'delivery', 'minimums', 'turnaround', 'replacement', 'suppression', 'deliverability', 'compliance', 'crm', 'ucc'];

const articles = [
  {
    slug: 'mca-email-deliverability-checklist',
    title: 'The MCA Cold Email Deliverability Checklist',
    dek: 'Everything that has to be true before you send the first thousand emails.',
    date: '2026-08-14',
    readMins: 8,
    tags: ['Deliverability', 'Infrastructure'],
    body: [
      ['Do not send from your primary domain', 'This is the mistake that ends most MCA email programs in week three. Cold volume from the domain your contracts and lender submissions run through puts your entire business communication at risk. Register secondary domains — close variants of your brand — and send from those. If they burn, you replace a $12 domain instead of rebuilding your business email.'],
      ['Authenticate properly before any volume', 'SPF, DKIM, and DMARC are not optional. Every sending domain needs all three configured correctly, and DMARC should start at p=none while you monitor reports before tightening. Providers increasingly reject unauthenticated bulk mail outright, so an unauthenticated domain does not get a slow decline — it gets a wall.'],
      ['Warm up on a real schedule', 'A new inbox sending 500 emails on day one is a spam signal. Start at 10 to 20 sends per inbox per day and ramp over two to four weeks. Warmup tools help, but the ramp discipline matters more than the tool. Plan on three weeks before real volume.'],
      ['Cap per-inbox daily volume', 'Keep each inbox under roughly 50 cold sends per day and add inboxes rather than raising the cap. Ten inboxes at 40 sends beats two inboxes at 200 every time, and it means a single flagged inbox does not take the program down.'],
      ['Verify before every send, not once a quarter', 'Business email decays fast — people leave, domains lapse, catch-alls change behavior. Verification at delivery is a starting point, not a guarantee for a file you send six weeks later. Re-verify anything older than 30 days before it goes out.'],
      ['Watch reply rate, not just open rate', 'Open tracking is increasingly unreliable thanks to privacy proxies inflating opens. Reply rate and bounce rate are the signals that actually correlate with inbox placement. A bounce rate over 3 percent means stop sending and fix the list.'],
      ['Keep the copy plain', 'Heavy HTML, image-heavy templates, multiple links, and link shorteners all raise filtering risk. Plain-text-style emails with a single link, or none at all, land more reliably and — in this industry specifically — read as a real person rather than a blast.'],
      ['Honor opt-outs immediately and permanently', 'One-click removal, processed globally, suppressed forever. Beyond the legal requirement, a merchant who asks out and gets emailed again will report you as spam, and complaint rate is the fastest way to lose a domain.']
    ]
  },
  {
    slug: 'mca-email-subject-lines-that-work',
    title: 'What Actually Gets an MCA Email Opened',
    dek: 'Subject line patterns that survive contact with a merchant inbox.',
    date: '2026-08-02',
    readMins: 6,
    tags: ['Copy', 'Campaigns'],
    body: [
      ['Specific beats clever every time', 'Merchants get dozens of funding emails. "Unlock your business potential" reads as a blast. "Working capital before your slow season" reads as someone who knows what business they are in. Specificity is the entire game — vertical, timing, and use of funds all outperform benefit language.'],
      ['Lead with the merchant situation, not your product', 'The subject line should describe something happening in their business, not something you sell. "Truck down? Same-day working capital" works because the first three words are their problem. "Merchant cash advance available" is about you.'],
      ['Keep it short enough to survive mobile', 'Most business owners read on a phone. Aim for under 45 characters so the line does not truncate mid-thought. If the meaning dies when the last three words are cut, rewrite it.'],
      ['Avoid the words that trip filters and merchants alike', 'Guaranteed, no credit check, instant approval, free money, act now. These trigger both spam filters and the merchant reflex that this is a scam. This industry has a reputation problem; do not write copy that confirms it.'],
      ['Match subject to sequence position', 'The first touch introduces a situation. The third references the earlier email. The sixth changes the angle entirely rather than repeating. Sending the same subject with "Re:" prepended is a transparent trick, and merchants have seen it.'],
      ['Test in pairs, not in bulk', 'Two variants, meaningful sample, one variable changed. Testing five subject lines across a small list produces noise you will misread as signal.']
    ]
  },
  {
    slug: 'structuring-an-mca-email-sequence',
    title: 'How to Structure a 7-Touch MCA Email Sequence',
    dek: 'The touch-by-touch framework that gets replies from merchants who ignored touch one.',
    date: '2026-07-19',
    readMins: 9,
    tags: ['Campaigns', 'Strategy'],
    body: [
      ['Why one email is a wasted list', 'The majority of replies to cold B2B email arrive after the first message. Shops that send once and judge the data by that result are measuring their sequence, not the data. If your program is one email, your cost per funded deal is roughly four times what it should be.'],
      ['Touch 1 — the situation', 'Short, plain, no attachment, no pitch deck. Name the situation their business is probably in and ask one question. Under 90 words. The only goal is a reply, not an application.'],
      ['Touch 2 — the specific', 'Two to three days later. Add one concrete detail: a ticket range, a turnaround time, a use of funds relevant to their vertical. Still short. Still one question.'],
      ['Touch 3 — the objection', 'Around day seven. Name the thing they are actually thinking. In MCA that is usually cost, or a bad experience with a previous funder. Addressing it directly outperforms pretending it does not exist.'],
      ['Touch 4 — the proof', 'Day twelve or so. A real example, anonymized: vertical, amount, timeline, what it was used for. No logos, no invented testimonials. Merchants can smell fabricated social proof.'],
      ['Touch 5 — the angle change', 'Around day eighteen. If working capital has not landed, try a different product or a different use case entirely — equipment, a renewal, a consolidation. The merchant who ignored five capital emails may need something adjacent.'],
      ['Touch 6 — the breakup', 'Day twenty-five. Short, no guilt, easy exit. Breakup emails reliably produce a meaningful share of a sequence total replies, largely from people who meant to respond earlier.'],
      ['Touch 7 — the long re-engage', 'Sixty to ninety days later, fresh angle, new subject thread. Business conditions change. The merchant who did not need capital in March may be desperate in June.'],
      ['Route replies to a human immediately', 'Every touch above is worthless if a positive reply sits for six hours. Route replies straight into the CRM with an assignment and an alert. Speed on the reply matters more than anything in the sequence.']
    ]
  },
  {
    slug: 'can-spam-compliance-for-mca-brokers',
    title: 'CAN-SPAM Compliance for MCA Brokers',
    dek: 'A plain-language walkthrough of what the rules require of an outbound email program.',
    date: '2026-07-08',
    readMins: 7,
    tags: ['Compliance'],
    body: [
      ['What CAN-SPAM actually covers', 'CAN-SPAM governs commercial email in the United States, including business-to-business. It does not require prior consent — which is why cold B2B email is legal — but it imposes firm requirements on how that email is sent, and penalties apply per individual email.'],
      ['Accurate headers and sender identity', 'The from name, from address, reply-to, and routing information must identify the actual sender. Sending as a different company, or through obscured routing, is a direct violation regardless of the content.'],
      ['Non-deceptive subject lines', 'The subject must reflect the content. "Re: our conversation" to someone you have never spoken to is deceptive. So is implying an approval, an existing account, or a pending application that does not exist.'],
      ['Identify the message as an advertisement', 'The message must be identifiable as commercial. This can be handled naturally in the copy rather than with a legal banner, but it must be clear.'],
      ['A valid physical postal address', 'Every commercial email needs a genuine physical address for the sender — a street address, a registered agent address, or a registered post office box. A missing address is one of the most common violations in this industry.'],
      ['A clear, working opt-out', 'Recipients must be able to opt out easily, the mechanism must work for at least 30 days after sending, and requests must be honored within 10 business days. In practice, process them immediately and globally.'],
      ['You are responsible for what a vendor sends for you', 'Hiring an agency does not transfer liability. If a third party sends on your behalf and violates the rules, you can still be held responsible. Ask any vendor how they handle suppression and opt-outs before signing.'],
      ['State and international rules go further', 'Several states impose additional requirements, and Canada CASL and EU GDPR are materially stricter — consent-based rather than opt-out-based. If you send outside the US, get specific advice. None of this is legal advice; confirm your program with counsel.']
    ]
  },
  {
    slug: 'how-to-qualify-mca-leads-before-you-call',
    title: 'How to Qualify an MCA Lead Before You Pick Up the Phone',
    dek: 'The filters that separate a fundable file from a wasted hour.',
    date: '2026-06-24',
    readMins: 6,
    tags: ['Strategy', 'Underwriting'],
    body: [
      ['Time in business is the first cut', 'Most lenders want at least six months, and appetite improves sharply past twelve. Filtering on time in business before you send removes a large share of files that will never place, regardless of how interested the merchant sounds.'],
      ['Monthly revenue floor drives everything else', 'A merchant under roughly $15,000 in monthly deposits will not place with most funders no matter how good the story is. Set your revenue floor to your actual lender box, not to your optimism.'],
      ['Industry restrictions are lender-specific and non-negotiable', 'Every funder has a restricted list. Filter these out at the data level rather than discovering it after you have worked the file. Nothing wastes a rep hour faster than a great conversation with a merchant nobody will fund.'],
      ['Position matters more than most shops account for', 'A merchant with three existing advances is a different conversation and a different lender set. Segment by estimated position before you write copy — the offer that works on first position insults someone in fourth.'],
      ['Geography affects both appetite and disclosure obligations', 'Several states have enacted commercial financing disclosure requirements. This does not stop you working those states, but it changes what has to be presented and by whom. Know which states your lenders will actually fund.'],
      ['Score the file before it reaches a rep', 'Combine time in business, revenue band, industry fit, and position into a simple score and route only the top tiers to live calling. Everything else stays in an automated sequence until it earns attention.']
    ]
  },
  {
    slug: 'cost-per-funded-deal-not-cost-per-lead',
    title: 'Stop Buying on Cost Per Lead',
    dek: 'The only metric that decides which data source is actually working.',
    date: '2026-06-10',
    readMins: 5,
    tags: ['Strategy', 'Economics'],
    body: [
      ['The metric that misleads everyone', 'Cost per lead is the easiest number to compare and the least useful. A source at a fraction of a cent per record and a source at hundreds of dollars per transfer can produce identical cost per funded deal. Comparing the input price tells you nothing about the output.'],
      ['Build the actual chain', 'Records purchased, deliverable rate, reply rate, qualified rate, application rate, submission rate, approval rate, funded rate, average commission. Every source has different numbers at every stage. Only the end of the chain is comparable.'],
      ['Follow-up discipline swamps data quality', 'The difference between a one-touch and a seven-touch sequence on the same file is usually larger than the difference between two data vendors. Before you change suppliers, check whether you are actually working the data you have.'],
      ['Track by cohort, not by month', 'Records bought in March produce funded deals in May. Blending everything into a monthly number hides which purchase actually performed. Tag every record with its source and pull date and report on the cohort.'],
      ['Give a source enough volume to read', 'Judging a data source on a small test with one email is a coin flip dressed as a decision. Run enough volume through a full sequence before concluding anything.']
    ]
  }
];

const byArticleSlug = Object.fromEntries(articles.map((a) => [a.slug, a]));

module.exports = {
  services,
  byServiceSlug,
  serviceCategories,
  comparisons,
  byComparisonSlug,
  faqBank,
  generalFaqOrder,
  articles,
  byArticleSlug
};
