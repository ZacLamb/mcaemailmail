// State-level data powering /mca-email-leads/:state and its industry combos.
// tuple: [name, abbr, [metros], [topIndustrySlugs], disclosureLaw, marketTier(1=largest..4)]

const RAW = [
  ['Alabama', 'AL', ['Birmingham', 'Huntsville', 'Montgomery', 'Mobile', 'Tuscaloosa'], ['trucking', 'construction', 'auto-repair', 'restaurants'], false, 3],
  ['Alaska', 'AK', ['Anchorage', 'Fairbanks', 'Juneau'], ['construction', 'trucking', 'hotels-motels'], false, 4],
  ['Arizona', 'AZ', ['Phoenix', 'Tucson', 'Mesa', 'Scottsdale', 'Chandler'], ['construction', 'hvac', 'restaurants', 'landscaping'], false, 2],
  ['Arkansas', 'AR', ['Little Rock', 'Fayetteville', 'Fort Smith', 'Springdale'], ['trucking', 'manufacturing', 'restaurants'], false, 3],
  ['California', 'CA', ['Los Angeles', 'San Diego', 'San Jose', 'San Francisco', 'Sacramento', 'Fresno', 'Long Beach', 'Oakland'], ['restaurants', 'construction', 'trucking', 'retail', 'e-commerce'], true, 1],
  ['Colorado', 'CO', ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Lakewood'], ['construction', 'restaurants', 'landscaping', 'gyms-fitness'], false, 2],
  ['Connecticut', 'CT', ['Bridgeport', 'New Haven', 'Hartford', 'Stamford', 'Waterbury'], ['restaurants', 'construction', 'medical-dental'], true, 3],
  ['Delaware', 'DE', ['Wilmington', 'Dover', 'Newark'], ['retail', 'construction', 'restaurants'], false, 4],
  ['District of Columbia', 'DC', ['Washington'], ['restaurants', 'staffing-agencies', 'cleaning-janitorial'], false, 3],
  ['Florida', 'FL', ['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'Fort Lauderdale', 'St. Petersburg', 'Hialeah', 'West Palm Beach'], ['restaurants', 'construction', 'trucking', 'auto-repair', 'e-commerce'], true, 1],
  ['Georgia', 'GA', ['Atlanta', 'Augusta', 'Savannah', 'Columbus', 'Macon', 'Athens'], ['trucking', 'construction', 'restaurants', 'staffing-agencies'], true, 2],
  ['Hawaii', 'HI', ['Honolulu', 'Hilo', 'Kailua'], ['restaurants', 'hotels-motels', 'retail'], false, 4],
  ['Idaho', 'ID', ['Boise', 'Meridian', 'Nampa', 'Idaho Falls'], ['construction', 'trucking', 'landscaping'], false, 3],
  ['Illinois', 'IL', ['Chicago', 'Aurora', 'Naperville', 'Joliet', 'Rockford', 'Springfield'], ['trucking', 'restaurants', 'manufacturing', 'wholesale-distribution'], false, 1],
  ['Indiana', 'IN', ['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend', 'Carmel'], ['trucking', 'manufacturing', 'construction'], false, 2],
  ['Iowa', 'IA', ['Des Moines', 'Cedar Rapids', 'Davenport', 'Sioux City'], ['trucking', 'manufacturing', 'construction'], false, 3],
  ['Kansas', 'KS', ['Wichita', 'Overland Park', 'Kansas City', 'Topeka'], ['trucking', 'manufacturing', 'auto-repair'], true, 3],
  ['Kentucky', 'KY', ['Louisville', 'Lexington', 'Bowling Green', 'Owensboro'], ['trucking', 'manufacturing', 'restaurants'], false, 3],
  ['Louisiana', 'LA', ['New Orleans', 'Baton Rouge', 'Shreveport', 'Lafayette'], ['restaurants', 'construction', 'trucking'], false, 3],
  ['Maine', 'ME', ['Portland', 'Lewiston', 'Bangor'], ['restaurants', 'construction', 'hotels-motels'], false, 4],
  ['Maryland', 'MD', ['Baltimore', 'Columbia', 'Germantown', 'Silver Spring', 'Frederick'], ['construction', 'restaurants', 'medical-dental', 'cleaning-janitorial'], false, 2],
  ['Massachusetts', 'MA', ['Boston', 'Worcester', 'Springfield', 'Cambridge', 'Lowell', 'Quincy'], ['restaurants', 'construction', 'medical-dental', 'staffing-agencies'], false, 2],
  ['Michigan', 'MI', ['Detroit', 'Grand Rapids', 'Warren', 'Sterling Heights', 'Ann Arbor', 'Lansing'], ['auto-repair', 'manufacturing', 'trucking', 'restaurants'], false, 2],
  ['Minnesota', 'MN', ['Minneapolis', 'St. Paul', 'Rochester', 'Duluth', 'Bloomington'], ['construction', 'trucking', 'medical-dental'], false, 2],
  ['Mississippi', 'MS', ['Jackson', 'Gulfport', 'Southaven', 'Hattiesburg'], ['trucking', 'construction', 'restaurants'], false, 4],
  ['Missouri', 'MO', ['Kansas City', 'St. Louis', 'Springfield', 'Columbia', 'Independence'], ['trucking', 'construction', 'restaurants', 'auto-repair'], true, 2],
  ['Montana', 'MT', ['Billings', 'Missoula', 'Great Falls', 'Bozeman'], ['construction', 'trucking', 'hotels-motels'], false, 4],
  ['Nebraska', 'NE', ['Omaha', 'Lincoln', 'Bellevue'], ['trucking', 'construction', 'manufacturing'], false, 3],
  ['Nevada', 'NV', ['Las Vegas', 'Henderson', 'Reno', 'North Las Vegas'], ['restaurants', 'hotels-motels', 'construction', 'retail'], false, 3],
  ['New Hampshire', 'NH', ['Manchester', 'Nashua', 'Concord'], ['construction', 'restaurants', 'retail'], false, 4],
  ['New Jersey', 'NJ', ['Newark', 'Jersey City', 'Paterson', 'Elizabeth', 'Edison', 'Trenton'], ['wholesale-distribution', 'construction', 'restaurants', 'trucking'], false, 1],
  ['New Mexico', 'NM', ['Albuquerque', 'Las Cruces', 'Santa Fe', 'Rio Rancho'], ['construction', 'restaurants', 'auto-repair'], false, 4],
  ['New York', 'NY', ['New York City', 'Buffalo', 'Rochester', 'Yonkers', 'Syracuse', 'Albany', 'Brooklyn', 'Queens'], ['restaurants', 'retail', 'construction', 'wholesale-distribution', 'e-commerce'], true, 1],
  ['North Carolina', 'NC', ['Charlotte', 'Raleigh', 'Greensboro', 'Durham', 'Winston-Salem', 'Fayetteville'], ['construction', 'trucking', 'restaurants', 'landscaping'], false, 2],
  ['North Dakota', 'ND', ['Fargo', 'Bismarck', 'Grand Forks'], ['construction', 'trucking', 'manufacturing'], false, 4],
  ['Ohio', 'OH', ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron', 'Dayton'], ['trucking', 'manufacturing', 'restaurants', 'auto-repair'], false, 1],
  ['Oklahoma', 'OK', ['Oklahoma City', 'Tulsa', 'Norman', 'Broken Arrow'], ['trucking', 'construction', 'auto-repair'], false, 3],
  ['Oregon', 'OR', ['Portland', 'Salem', 'Eugene', 'Gresham', 'Beaverton'], ['restaurants', 'construction', 'landscaping'], false, 3],
  ['Pennsylvania', 'PA', ['Philadelphia', 'Pittsburgh', 'Allentown', 'Erie', 'Reading', 'Scranton'], ['restaurants', 'construction', 'trucking', 'manufacturing'], false, 1],
  ['Rhode Island', 'RI', ['Providence', 'Warwick', 'Cranston', 'Pawtucket'], ['restaurants', 'construction', 'auto-repair'], false, 4],
  ['South Carolina', 'SC', ['Charleston', 'Columbia', 'North Charleston', 'Greenville', 'Myrtle Beach'], ['construction', 'restaurants', 'landscaping', 'hotels-motels'], false, 3],
  ['South Dakota', 'SD', ['Sioux Falls', 'Rapid City'], ['construction', 'trucking', 'restaurants'], false, 4],
  ['Tennessee', 'TN', ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga', 'Clarksville'], ['trucking', 'construction', 'restaurants', 'medical-dental'], false, 2],
  ['Texas', 'TX', ['Houston', 'Dallas', 'San Antonio', 'Austin', 'Fort Worth', 'El Paso', 'Arlington', 'Corpus Christi'], ['trucking', 'construction', 'restaurants', 'auto-repair', 'hvac'], false, 1],
  ['Utah', 'UT', ['Salt Lake City', 'West Valley City', 'Provo', 'Ogden', 'St. George'], ['construction', 'e-commerce', 'trucking'], true, 3],
  ['Vermont', 'VT', ['Burlington', 'Rutland', 'Montpelier'], ['restaurants', 'construction', 'retail'], false, 4],
  ['Virginia', 'VA', ['Virginia Beach', 'Richmond', 'Norfolk', 'Arlington', 'Chesapeake', 'Alexandria'], ['construction', 'restaurants', 'staffing-agencies', 'cleaning-janitorial'], true, 2],
  ['Washington', 'WA', ['Seattle', 'Spokane', 'Tacoma', 'Vancouver', 'Bellevue', 'Everett'], ['construction', 'restaurants', 'e-commerce', 'landscaping'], false, 2],
  ['West Virginia', 'WV', ['Charleston', 'Huntington', 'Morgantown'], ['construction', 'trucking', 'restaurants'], false, 4],
  ['Wisconsin', 'WI', ['Milwaukee', 'Madison', 'Green Bay', 'Kenosha', 'Appleton'], ['manufacturing', 'trucking', 'construction', 'restaurants'], false, 2],
  ['Wyoming', 'WY', ['Cheyenne', 'Casper', 'Laramie'], ['construction', 'trucking', 'auto-repair'], false, 4]
];

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/\./g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const TIER_LABEL = {
  1: 'Tier 1 — highest merchant density',
  2: 'Tier 2 — high merchant density',
  3: 'Tier 3 — mid-market density',
  4: 'Tier 4 — emerging / lower density'
};

const states = RAW.map(([name, abbr, metros, topIndustries, disclosureLaw, tier]) => ({
  name,
  abbr,
  slug: slugify(name),
  metros,
  metroSlugs: metros.map((m) => ({ name: m, slug: slugify(m) })),
  topIndustries,
  disclosureLaw,
  tier,
  tierLabel: TIER_LABEL[tier]
}));

const byStateSlug = Object.fromEntries(states.map((s) => [s.slug, s]));

// Flattened, de-duplicated metro list -> /locations/:city-slug
const cityMap = new Map();
for (const s of states) {
  for (const m of s.metros) {
    const slug = `${slugify(m)}-${s.abbr.toLowerCase()}`;
    cityMap.set(slug, { name: m, slug, state: s.name, stateAbbr: s.abbr, stateSlug: s.slug, tier: s.tier, topIndustries: s.topIndustries });
  }
}
const cities = [...cityMap.values()].sort((a, b) => a.tier - b.tier || a.name.localeCompare(b.name));
const byCitySlug = Object.fromEntries(cities.map((c) => [c.slug, c]));

module.exports = { states, byStateSlug, cities, byCitySlug, slugify };
