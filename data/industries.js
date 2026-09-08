// Vertical data powering /industries/:slug and /mca-email-leads/:state/:industry
// combo:true verticals get a page generated for every state.

const industries = [
  {
    slug: 'restaurants',
    name: 'Restaurants & Food Service',
    short: 'Restaurants',
    noun: 'restaurant owners',
    naics: '722',
    combo: true,
    ticket: '$15K – $150K',
    cycle: 'Fast — most owners decide inside 72 hours',
    capitalUses: ['Kitchen equipment replacement', 'Payroll gaps between slow weeks', 'Buildout for a second location', 'Vendor and food-cost prepayment'],
    pains: [
      'Razor-thin margins mean a single equipment failure becomes an emergency',
      'Card-processing volume is high and consistent, which underwrites well',
      'Banks routinely decline food service on industry code alone'
    ],
    triggers: ['New liquor or food-service license filings', 'Recent POS or processor switch', 'Seasonal revenue swing', 'Second-location lease signed'],
    subjects: ['Working capital before your slow season', 'Equipment down? Funding in 24 hours', 'Your processing volume already qualifies you'],
    objection: 'They have been burned by a stacked deal before, so lead with terms and total cost, not speed alone.'
  },
  {
    slug: 'trucking',
    name: 'Trucking & Freight',
    short: 'Trucking',
    noun: 'owner-operators and fleet owners',
    naics: '484',
    combo: true,
    ticket: '$20K – $250K',
    cycle: 'Fast — fuel and repair needs are immediate',
    capitalUses: ['Truck and trailer repairs', 'Fuel float while invoices age', 'Adding a unit to the fleet', 'Insurance down payments'],
    pains: [
      'Net-30 to net-60 broker payments create a permanent cash gap',
      'A blown engine parks revenue instantly',
      'Factoring lines cap out and owners look for a second source'
    ],
    triggers: ['New DOT or MC authority', 'Recent UCC filing from a factoring company', 'Fleet expansion', 'Insurance renewal window'],
    subjects: ['Cash before the invoice clears', 'Truck down? Same-day working capital', 'Second position on top of your factoring line'],
    objection: 'Many are already factoring — position the advance as complementary, not a replacement.'
  },
  {
    slug: 'construction',
    name: 'Construction & Contracting',
    short: 'Construction',
    noun: 'general contractors and subs',
    naics: '236',
    combo: true,
    ticket: '$25K – $300K',
    cycle: 'Moderate — tied to project award timing',
    capitalUses: ['Materials for an awarded job', 'Payroll across a draw schedule', 'Equipment purchase or rental', 'Bonding and mobilization costs'],
    pains: [
      'Draw schedules and retainage strand cash for 60–120 days',
      'Material prices move faster than the bid',
      'Bank lines rarely flex with project volume'
    ],
    triggers: ['New building permits pulled', 'Contractor license renewal', 'Bid award announcements', 'Equipment lien filings'],
    subjects: ['Fund the job before the first draw', 'Materials money, not a 60-day wait', 'Awarded the bid — now fund the crew'],
    objection: 'Seasonal in northern states, so time sends to the pre-season ramp rather than mid-winter.'
  },
  {
    slug: 'retail',
    name: 'Retail & Storefront',
    short: 'Retail',
    noun: 'independent retailers',
    naics: '44-45',
    combo: true,
    ticket: '$10K – $100K',
    cycle: 'Seasonal — Q3 inventory build is peak',
    capitalUses: ['Inventory buys ahead of Q4', 'Store remodel or fixtures', 'Rent and payroll bridging', 'Marketing pushes'],
    pains: [
      'Inventory must be bought months before it sells',
      'Foot traffic swings hard by season',
      'Card volume is provable, which makes underwriting simple'
    ],
    triggers: ['Seasonal hiring', 'New lease or relocation', 'Processor volume increase'],
    subjects: ['Stock the shelves before Q4', 'Inventory money against your card volume', 'Renovate now, pay from daily sales'],
    objection: 'Margin-sensitive — show factor rate against inventory turn, not just approval speed.'
  },
  {
    slug: 'auto-repair',
    name: 'Auto Repair & Body Shops',
    short: 'Auto Repair',
    noun: 'shop owners',
    naics: '8111',
    combo: true,
    ticket: '$15K – $120K',
    cycle: 'Fast — equipment and parts needs are urgent',
    capitalUses: ['Lifts, alignment racks, diagnostic tools', 'Parts inventory', 'Bay expansion', 'Insurance-claim float'],
    pains: [
      'Insurance reimbursements arrive weeks after the work',
      'Diagnostic equipment gets obsolete on a cycle',
      'Parts must be fronted on customer jobs'
    ],
    triggers: ['New bay or second location', 'Equipment financing inquiries', 'Technician hiring'],
    subjects: ['Add a bay, add a revenue stream', 'Parts float without the credit line', 'Fund the lift, keep the cash'],
    objection: 'Owners are hands-on and hard to reach by phone — email lands where calls do not.'
  },
  {
    slug: 'medical-dental',
    name: 'Medical & Dental Practices',
    short: 'Medical & Dental',
    noun: 'practice owners',
    naics: '621',
    combo: true,
    ticket: '$30K – $400K',
    cycle: 'Slower — decisions run through a practice manager',
    capitalUses: ['Chairs, imaging, and operatory buildout', 'Insurance receivable gaps', 'Practice acquisition', 'EHR and tech upgrades'],
    pains: [
      'Insurance reimbursement cycles are long and unpredictable',
      'Equipment is capital-heavy and financed on old terms',
      'Practice acquisitions need speed a bank cannot match'
    ],
    triggers: ['New practice registration', 'Provider license activity', 'Equipment vendor inquiries'],
    subjects: ['Bridge the insurance receivable gap', 'Fund the operatory buildout', 'Acquisition capital without the bank timeline'],
    objection: 'Higher credit quality — expect them to compare against SBA and term options.'
  },
  {
    slug: 'hvac',
    name: 'HVAC & Plumbing',
    short: 'HVAC & Plumbing',
    noun: 'HVAC and plumbing contractors',
    naics: '2382',
    combo: true,
    ticket: '$20K – $200K',
    cycle: 'Fast — driven by the season swing',
    capitalUses: ['Pre-season equipment stocking', 'Van and fleet purchases', 'Technician hiring and training', 'Financing customer jobs'],
    pains: [
      'Revenue triples in season and collapses out of it',
      'Equipment must be stocked before the first heat wave',
      'Customer financing programs eat into cash'
    ],
    triggers: ['Seasonal ramp (spring and fall)', 'Fleet additions', 'License renewals'],
    subjects: ['Stock units before the first heat wave', 'Fund the fourth van', 'Off-season payroll without the panic'],
    objection: 'Highly seasonal — send timing matters more than copy here.'
  },
  {
    slug: 'landscaping',
    name: 'Landscaping & Lawn Care',
    short: 'Landscaping',
    noun: 'landscape and lawn care owners',
    naics: '5617',
    combo: true,
    ticket: '$10K – $90K',
    cycle: 'Seasonal — spring ramp is the window',
    capitalUses: ['Mowers, trucks, and trailers', 'Spring crew hiring', 'Hardscape material buys', 'Winter payroll carry'],
    pains: [
      'Six months of revenue has to cover twelve months of overhead',
      'Equipment breaks in peak season with no slack',
      'Contract work is billed after completion'
    ],
    triggers: ['Spring hiring', 'Equipment purchases', 'Commercial contract awards'],
    subjects: ['Fund the spring ramp now', 'Equipment ready before the first cut', 'Carry the crew through winter'],
    objection: 'Small ticket sizes — volume of leads matters more than size per file.'
  },
  {
    slug: 'staffing-agencies',
    name: 'Staffing & Recruiting',
    short: 'Staffing',
    noun: 'staffing agency owners',
    naics: '5613',
    combo: true,
    ticket: '$40K – $500K',
    cycle: 'Fast — payroll is weekly and non-negotiable',
    capitalUses: ['Weekly payroll funding', 'Client receivable gaps', 'New contract mobilization', 'Back-office and ATS spend'],
    pains: [
      'Pay staff weekly, get paid by clients in 45–60 days',
      'Winning a large contract creates an immediate cash crisis',
      'Payroll funding companies take a heavy cut'
    ],
    triggers: ['New client contract wins', 'Headcount growth', 'Existing payroll-funding UCCs'],
    subjects: ['Cover payroll before the client pays', 'Won the contract — now fund the ramp', 'Alternative to payroll funding'],
    objection: 'Sophisticated buyers — they will ask for effective APR, not factor rate.'
  },
  {
    slug: 'e-commerce',
    name: 'E-Commerce & Online Sellers',
    short: 'E-Commerce',
    noun: 'online sellers',
    naics: '4541',
    combo: true,
    ticket: '$15K – $250K',
    cycle: 'Fast — inventory windows are tight',
    capitalUses: ['Inventory and container buys', 'Ad spend scaling', 'Amazon and marketplace reserve gaps', 'Fulfillment and 3PL costs'],
    pains: [
      'Marketplaces hold payouts on a rolling reserve',
      'Ad spend must be fronted before revenue lands',
      'Inventory lead times run 60–120 days'
    ],
    triggers: ['Q4 inventory build', 'Marketplace payout holds', 'Ad account scaling'],
    subjects: ['Fund inventory before the payout clears', 'Scale ad spend without the reserve gap', 'Container money in 48 hours'],
    objection: 'Comparison shoppers — they know revenue-based financing rates cold.'
  },
  {
    slug: 'cleaning-janitorial',
    name: 'Cleaning & Janitorial',
    short: 'Cleaning',
    noun: 'commercial cleaning owners',
    combo: false,
    ticket: '$10K – $80K',
    cycle: 'Moderate',
    capitalUses: ['Crew expansion for a new contract', 'Equipment and supplies', 'Payroll between invoices', 'Vehicle purchases'],
    pains: ['Commercial contracts pay net-30 or worse', 'Labor costs are front-loaded', 'Supply costs rise mid-contract'],
    triggers: ['New commercial contracts', 'Crew hiring'],
    subjects: ['Fund the new contract crew', 'Supplies and payroll in one shot'],
    objection: 'Owner-operators — keep copy plain and short.'
  },
  {
    slug: 'gyms-fitness',
    name: 'Gyms & Fitness Studios',
    short: 'Gyms & Fitness',
    combo: false,
    noun: 'gym and studio owners',
    ticket: '$15K – $150K',
    cycle: 'Moderate',
    capitalUses: ['Equipment refresh', 'Buildout and expansion', 'Membership marketing pushes', 'Rent and payroll gaps'],
    pains: ['Membership churn makes revenue lumpy', 'Equipment is capital-heavy', 'January drives the whole year'],
    triggers: ['New location leases', 'Q4 pre-January marketing'],
    subjects: ['Fund the equipment refresh before January', 'Membership revenue, upfront'],
    objection: 'Recurring revenue underwrites well — say so explicitly.'
  },
  {
    slug: 'hotels-motels',
    name: 'Hotels, Motels & Hospitality',
    short: 'Hospitality',
    combo: false,
    noun: 'property owners',
    ticket: '$50K – $500K',
    cycle: 'Slower — capital projects are planned',
    capitalUses: ['Property improvement plans', 'Room refresh and FF&E', 'Off-season payroll', 'Franchise fee obligations'],
    pains: ['Brand-mandated PIPs are expensive and non-optional', 'Occupancy swings hard by season', 'Bank CRE lending is slow'],
    triggers: ['Franchise PIP deadlines', 'Ownership transfers'],
    subjects: ['Fund the PIP without refinancing', 'Off-season carry for your property'],
    objection: 'Larger tickets — expect multiple bids and longer cycles.'
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing & Fabrication',
    short: 'Manufacturing',
    combo: false,
    noun: 'shop owners and plant managers',
    ticket: '$50K – $500K',
    cycle: 'Slower — tied to PO cycles',
    capitalUses: ['Raw material purchases against a PO', 'CNC and machine purchases', 'Shift expansion', 'Tooling'],
    pains: ['Large POs require material outlay months ahead of payment', 'Machine downtime kills throughput', 'Bank lines are collateral-bound'],
    triggers: ['Large PO awards', 'Equipment purchases', 'Facility expansion'],
    subjects: ['Fund the PO, not the wait', 'Material money against your order book'],
    objection: 'CFO-level buyers — lead with structure and cost of capital.'
  },
  {
    slug: 'wholesale-distribution',
    name: 'Wholesale & Distribution',
    short: 'Wholesale',
    combo: false,
    noun: 'distributors',
    ticket: '$50K – $500K',
    cycle: 'Moderate',
    capitalUses: ['Inventory buys', 'Warehouse expansion', 'Fleet additions', 'Extending terms to customers'],
    pains: ['Buy inventory now, collect in 60 days', 'Volume discounts require cash upfront', 'Customer terms squeeze the middle'],
    triggers: ['Seasonal buying cycles', 'New supplier agreements'],
    subjects: ['Take the volume discount', 'Fund the buy, collect later'],
    objection: 'Margin-driven — quantify the discount capture against the factor rate.'
  },
  {
    slug: 'salons-spas',
    name: 'Salons, Spas & Barbershops',
    short: 'Salons & Spas',
    combo: false,
    noun: 'salon and spa owners',
    ticket: '$10K – $75K',
    cycle: 'Fast',
    capitalUses: ['Chairs, stations, and equipment', 'Buildout for expansion', 'Product inventory', 'Marketing'],
    pains: ['Booth rent income is inconsistent', 'Buildouts are expensive relative to revenue', 'Banks decline on ticket size'],
    triggers: ['New suite or location leases', 'Stylist hiring'],
    subjects: ['Fund the expansion chair by chair', 'Buildout money against daily receipts'],
    objection: 'Small tickets, high volume — automation matters more than personalization.'
  },
  {
    slug: 'liquor-stores',
    name: 'Liquor & Beverage Retail',
    short: 'Liquor Stores',
    combo: false,
    noun: 'store owners',
    ticket: '$15K – $150K',
    cycle: 'Fast',
    capitalUses: ['Inventory buys ahead of holidays', 'License purchases', 'Store remodel', 'Cooler and fixture upgrades'],
    pains: ['Holiday inventory must be bought in advance', 'License costs are large and lumpy', 'High card volume, low margin'],
    triggers: ['License transfers', 'Holiday build cycles'],
    subjects: ['Stock the holiday shelves', 'License money without the bank'],
    objection: 'Restricted industry for some lenders — pre-qualify on lender appetite.'
  },
  {
    slug: 'gas-stations',
    name: 'Gas Stations & C-Stores',
    short: 'Gas & C-Store',
    combo: false,
    noun: 'station owners',
    ticket: '$25K – $300K',
    cycle: 'Moderate',
    capitalUses: ['Fuel inventory float', 'Canopy and pump upgrades', 'EMV compliance', 'Store remodels'],
    pains: ['Fuel is bought daily at volatile prices', 'Compliance upgrades are mandated and costly', 'Thin fuel margins, real inside margins'],
    triggers: ['Compliance deadlines', 'Ownership transfers', 'Brand conversions'],
    subjects: ['Fuel float without the squeeze', 'Fund the pump upgrade'],
    objection: 'Often multi-store owners — one relationship can mean several files.'
  },
  {
    slug: 'towing',
    name: 'Towing & Roadside',
    short: 'Towing',
    combo: false,
    noun: 'towing company owners',
    ticket: '$20K – $200K',
    cycle: 'Fast',
    capitalUses: ['Wrecker and flatbed purchases', 'Impound lot expansion', 'Insurance premiums', 'Repairs'],
    pains: ['Trucks are expensive and break constantly', 'Municipal and insurance contracts pay slowly', 'Insurance premiums are brutal'],
    triggers: ['Fleet additions', 'Municipal contract awards'],
    subjects: ['Fund the next wrecker', 'Insurance premium, one payment'],
    objection: '24/7 operators — email beats phone by a wide margin.'
  },
  {
    slug: 'moving-companies',
    name: 'Moving & Storage',
    short: 'Moving & Storage',
    combo: false,
    noun: 'moving company owners',
    ticket: '$15K – $150K',
    cycle: 'Seasonal — summer is peak',
    capitalUses: ['Truck purchases', 'Seasonal crew hiring', 'Storage facility leases', 'Marketing before peak season'],
    pains: ['Summer carries the whole year', 'Fleet maintenance is constant', 'Corporate accounts pay net-45'],
    triggers: ['Spring hiring', 'Fleet expansion'],
    subjects: ['Fund the trucks before peak season', 'Crew money for the summer run'],
    objection: 'Very seasonal — send March through May.'
  },
  {
    slug: 'daycare',
    name: 'Daycare & Childcare',
    short: 'Childcare',
    combo: false,
    noun: 'childcare center owners',
    ticket: '$15K – $150K',
    cycle: 'Moderate',
    capitalUses: ['Facility expansion and licensing', 'Playground and safety upgrades', 'Staff hiring', 'Subsidy payment gaps'],
    pains: ['State subsidy payments are slow', 'Licensing requirements drive capital spend', 'Staff ratios cap revenue'],
    triggers: ['Enrollment growth', 'License capacity increases'],
    subjects: ['Expand capacity, expand enrollment', 'Bridge the subsidy payment gap'],
    objection: 'Mission-driven owners — softer copy performs better.'
  },
  {
    slug: 'printing',
    name: 'Printing & Signage',
    short: 'Printing & Signs',
    combo: false,
    noun: 'print shop owners',
    ticket: '$20K – $200K',
    cycle: 'Moderate',
    capitalUses: ['Press and wide-format equipment', 'Substrate and ink inventory', 'Installation crews', 'Software and RIP upgrades'],
    pains: ['Equipment is six figures and dates quickly', 'Large jobs require material outlay', 'Commercial clients pay net-30'],
    triggers: ['Equipment upgrades', 'Large contract wins'],
    subjects: ['Fund the press, keep the cash', 'Material money for the big job'],
    objection: 'Equipment-heavy — many will compare against equipment finance.'
  },
  {
    slug: 'pet-services',
    name: 'Pet Services & Veterinary',
    short: 'Pet & Vet',
    combo: false,
    noun: 'clinic and grooming owners',
    ticket: '$15K – $200K',
    cycle: 'Moderate',
    capitalUses: ['Clinic equipment', 'Boarding and grooming buildout', 'Staff hiring', 'Practice acquisition'],
    pains: ['Veterinary equipment is capital-heavy', 'Boarding buildouts are expensive', 'Consolidators are buying up practices'],
    triggers: ['New clinic registrations', 'Facility expansion'],
    subjects: ['Fund the clinic buildout', 'Equipment now, pay from receipts'],
    objection: 'Higher credit quality — competitive against term lenders.'
  },
  {
    slug: 'bakeries',
    name: 'Bakeries & Specialty Food',
    short: 'Bakeries',
    combo: false,
    noun: 'bakery owners',
    ticket: '$10K – $100K',
    cycle: 'Fast',
    capitalUses: ['Ovens, mixers, and coolers', 'Ingredient inventory', 'Wholesale account expansion', 'Second location'],
    pains: ['Equipment failure stops production entirely', 'Wholesale accounts pay on terms', 'Ingredient costs move constantly'],
    triggers: ['Wholesale account wins', 'Equipment failure'],
    subjects: ['Oven down? Funding today', 'Fund the wholesale expansion'],
    objection: 'Small tickets — batch these with restaurant campaigns.'
  }
];

const byIndustrySlug = Object.fromEntries(industries.map((i) => [i.slug, i]));
const comboIndustries = industries.filter((i) => i.combo);

module.exports = { industries, byIndustrySlug, comboIndustries };
