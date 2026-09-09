// Higgsfield-generated imagery — email-marketing subjects, bright/high-key
// to sit correctly on the cream palette.
//
// Hosted on Higgsfield's CDN. To self-host: download each, drop into
// /public/img, convert to .webp, and swap the values for local paths
// like '/img/hero.webp'.

const CDN = 'https://d8j0ntlcm91z4.cloudfront.net/user_3EmROCl8evT8aLsxpJaXd5oq6pI';
const img = (id) => `${CDN}/hf_20260909_174222_${id}.png`;

const images = {
  // Laptop with a campaign open — homepage hero panel
  hero:      img('bd913f46-8acd-419e-be3d-e23335c28ffd'),
  // Records validating with green checks — homepage split panel
  verify:    img('4aebe785-68fe-4e45-b112-a79b0bc30f69'),
  // Fanned envelopes, one mint — services hero
  envelopes: img('b2258fdb-a772-4975-8e85-dbac59576977'),
  // Campaign analytics dashboard — booking hero
  analytics: img('5b63716f-3d22-41b3-8c3a-cf72b3ee3c2c'),
  // Hands typing outreach — industry + about heroes
  outreach:  img('be8fe1c6-4556-463d-adcc-4c371e9f5bac'),
  // Wide soft paper/mint wash — CTA bands and textured sections
  texture:   img('1c48dd5e-e053-4783-95cc-4a458c4f91b4')
};

// Kept so any remaining call site resolves rather than throwing.
images.data = images.verify;
images.forVertical = () => images.outreach;

module.exports = images;
