// Deterministic content variation. Same slug always renders the same copy,
// but different slugs get different phrasing, ordering, and framing —
// which keeps programmatic pages from reading as duplicate templates.

function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

// Pick one item from a list, seeded by key + salt.
function pick(list, key, salt = '') {
  return list[hash(key + '::' + salt) % list.length];
}

// Rotate a list into a stable but varied order.
function rotate(list, key, salt = '') {
  const n = hash(key + '::' + salt) % list.length;
  return list.slice(n).concat(list.slice(0, n));
}

const TIER_PHRASE = {
  1: 'one of the deepest merchant markets in the country',
  2: 'a high-density merchant market',
  3: 'a solid mid-market territory',
  4: 'a smaller, far less contested market'
};

const STATE_OPENERS = [
  (s) =>
    `${s.name} is ${TIER_PHRASE[s.tier]}, and that changes how the file should be worked. This page covers what our ${s.name} merchant email data includes, how it is filtered, and how it gets delivered into your pipeline.`,
  (s) =>
    `Every shop works ${s.name} a little differently, but the constraint is the same one everywhere: reaching an owner who actually qualifies. Our ${s.abbr} records are filtered against a real lender box before they reach you, not after.`,
  (s) =>
    `Verified merchant email data across ${s.name}, from ${s.metros[0]} down to the smaller markets most list vendors ignore. Scope it statewide, narrow it to a metro, or layer a vertical filter on top.`,
  (s) =>
    `If you are prospecting merchant cash advance deals across ${s.name}, the constraint is almost never the offer — it is reaching decision-makers who actually qualify. Our ${s.abbr} data is filtered to businesses with provable revenue before it ever reaches you.`,
  (s) =>
    `${s.name} email data, built to a lender box rather than pulled from a generic business directory. Filter by metro, industry code, revenue band, and time in business, then take delivery as a CSV or straight into your CRM.`,
  (s) =>
    `Working ${s.name}? The merchant base here concentrates around ${s.metros.slice(0, 3).join(', ')}, and the verticals that fund most consistently are not the ones a generic list pull surfaces. Here is what our ${s.abbr} file covers.`
];

const CITY_OPENERS = [
  (c) =>
    `${c.name} merchant email data for MCA brokers and ISOs — verified business inboxes, filtered to revenue and time-in-business criteria that match a real lender box, and deliverable the same day in most cases.`,
  (c) =>
    `Prospecting merchants in ${c.name}, ${c.stateAbbr}? Generic business directories give you a switchboard number and a contact form. We give you a verified decision-maker inbox and the firmographics to qualify before you send.`,
  (c) =>
    `Our ${c.name} file covers independent operators across the metro — the businesses that carry consistent card and deposit volume, get declined by their bank on industry code, and take a call about working capital.`,
  (c) =>
    `${c.name} sits inside our ${c.state} coverage, and can be pulled on its own or as part of a wider ${c.stateAbbr} campaign. Records are verified before delivery and suppressed against your existing CRM on request.`
];

const ANGLES = [
  'Filter tight, then send wide. A narrow box with high volume beats a broad box you have to hand-sort.',
  'Sequence everything. Single-send campaigns waste the majority of a file, regardless of how good the data is.',
  'Route replies instantly. The gap between a merchant replying and a rep responding is the single biggest leak in most shops.',
  'Suppress against your CRM before you buy. Paying twice for a contact you already own is the quietest way to inflate your cost per deal.',
  'Test verticals in pairs. Running two industries side by side on the same copy tells you more than five at once.',
  'Send from a secondary domain. Cold volume on your primary domain is a short-term gain and a long-term outage.'
];

const PROOF_FRAMES = [
  'Records are filtered against your lender box before they are pulled, not after you have paid for them.',
  'Every file is verified at the mailbox level and deduped against your suppression list prior to delivery.',
  'You choose exclusivity per order — the same box can be pulled shared for volume or exclusive for close rate.',
  'Delivery goes wherever you work: CSV, direct CRM push, webhook per record, or a scheduled SFTP drop.'
];

const CTA_LINES = [
  'Bring your lender box to the call and we will tell you what the file looks like before you spend anything.',
  'Fifteen minutes is enough to scope a test pull, confirm coverage, and price it.',
  'We will pull counts against your exact criteria on the call so you are not buying blind.',
  'Book a slot, walk through your criteria, and get counts and pricing the same day.'
];

function stateIntro(state) {
  return pick(STATE_OPENERS, state.slug, 'intro')(state);
}
function cityIntro(city) {
  return pick(CITY_OPENERS, city.slug, 'intro')(city);
}
function angleFor(key) {
  return rotate(ANGLES, key, 'angle').slice(0, 3);
}
function proofFor(key) {
  return rotate(PROOF_FRAMES, key, 'proof').slice(0, 3);
}
function ctaLine(key) {
  return pick(CTA_LINES, key, 'cta');
}

// State + industry combo copy
function comboIntro(state, ind) {
  const variants = [
    `${ind.name} in ${state.name} is one of the more consistently fundable segments we carry. Typical advance sizes land around ${ind.ticket}, and the decision cycle runs ${ind.cycle.toLowerCase()}. This page covers what our ${state.abbr} ${ind.short.toLowerCase()} file includes and how to work it.`,
    `If you are targeting ${ind.noun} across ${state.name}, the merchants worth your rep hours cluster in ${state.metros.slice(0, 3).join(', ')} and carry the revenue consistency that underwrites cleanly. Our ${state.abbr} ${ind.short.toLowerCase()} data is filtered on exactly that.`,
    `${state.name} ${ind.short.toLowerCase()} operators take advances for a narrow set of reasons — ${ind.capitalUses.slice(0, 2).join(' and ').toLowerCase()} chief among them. Copy that names the reason outperforms generic funding language by a wide margin, and our data is segmented to let you do it.`,
    `Verified email data for ${ind.noun} in ${state.name}. Filtered to businesses with provable revenue, deduped against your CRM, and delivered as a CSV or pushed straight into your pipeline with tags and owner assignment applied.`
  ];
  return pick(variants, state.slug + ind.slug, 'combo');
}

function comboWhy(state, ind) {
  const seasonalNorth = ['MN', 'WI', 'MI', 'ND', 'SD', 'MT', 'ME', 'VT', 'NH', 'AK', 'ID', 'WY', 'IA', 'NE'].includes(state.abbr);
  const notes = [];
  if (seasonalNorth && ['construction', 'landscaping', 'hvac', 'moving-companies', 'roofing'].includes(ind.slug)) {
    notes.push(
      `${state.name} runs a compressed season for this vertical. Timing matters more than copy — the pre-season ramp is when ${ind.noun} are buying, and a campaign that lands mid-winter reads as noise.`
    );
  }
  if (state.disclosureLaw) {
    notes.push(
      `${state.name} has enacted commercial financing disclosure legislation. It does not prevent you working the state, but it changes what has to be presented and by whom on a funded transaction — confirm current requirements with your counsel and your lenders.`
    );
  }
  if (state.tier === 1) {
    notes.push(
      `As a top-tier merchant market, ${state.name} is also the most heavily worked. Exclusivity and a differentiated first touch matter more here than in a thinner market where you are one of few shops in the inbox.`
    );
  }
  if (state.tier === 4) {
    notes.push(
      `${state.name} is a thinner market by volume, which cuts both ways: smaller counts, but far less competition in the inbox and noticeably higher reply rates on the same copy.`
    );
  }
  notes.push(ind.objection);
  return notes;
}

// Service page contextual blocks
function serviceAngles(service) {
  return rotate(ANGLES, service.slug, 'svc').slice(0, 3);
}

function titleCase(s) {
  return s.replace(/\b\w/g, (c) => c.toUpperCase());
}

module.exports = { hash, pick, rotate, stateIntro, cityIntro, angleFor, proofFor, ctaLine, comboIntro, comboWhy, serviceAngles, titleCase };
