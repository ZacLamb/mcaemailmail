// Higgsfield-generated imagery.
//
// These are hosted on Higgsfield's CDN. For production you should download each
// one, drop it in /public/img, and change the value to a local path like
// '/img/hero.jpg' — a CDN you don't control is not something to build a site on.
// Convert to .webp while you're at it; these are PNGs and they're heavy.

const CDN = 'https://d8j0ntlcm91z4.cloudfront.net/user_3EmROCl8evT8aLsxpJaXd5oq6pI';
const img = (id) => `${CDN}/hf_20260909_012337_${id}.png`;

const images = {
  hero:       img('26182291-779f-4dce-93c9-d6f26ed948f1'),
  data:       img('e143a6c6-a73f-467a-adcb-70ede1deecfd'),

  verticals: {
    'restaurants':            img('68c1f44f-b7a2-45c1-8c3e-1947368c12f8'),
    'trucking':               img('54cedf58-3ba4-4186-9606-e5d83fb604b7'),
    'auto-repair':            img('b4057fb6-c7c0-46ab-8a98-34dcda565eaa'),
    'retail':                 img('ee85f9de-22f8-4293-959d-aea69f814742'),
    'wholesale-distribution': img('03e34654-97d3-4df4-9d95-d978f6a10d53')
  }
};

// Verticals with no bespoke shot fall back to the abstract data plate.
images.forVertical = (slug) => images.verticals[slug] || images.data;

// Wide texture plate for CTA bands and textured sections.
// The bespoke one was rejected by the generator's safety filter (false positive),
// so this reuses the data plate. Regenerate and point this at its own file when you can.
images.texture = images.data;

module.exports = images;
