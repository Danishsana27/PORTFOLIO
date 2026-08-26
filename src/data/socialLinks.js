// ---------------------------------------------------------------------------
// EDIT ME: replace each url below with your real profile link.
// This is the ONLY file you need to touch to update your social links —
// the Navbar, Hero, Contact section, and Footer all read from here.
// Set `show: false` to hide a link without deleting it.
// ---------------------------------------------------------------------------

export const socialLinks = [
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/Danishsana27',
    icon: 'Github',
    show: true
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/danish-sana-2706f/',
    icon: 'Linkedin',
    show: true
  },
  {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/syed_danish27/?hl=en',
    icon: 'Instagram',
    show: true
  },
  {
    id: 'email',
    label: 'Email',
    url: 'mailto:danishsana2019@gmail.com',
    icon: 'Mail',
    show: true
  }
];

export const getSocial = (id) => socialLinks.find((s) => s.id === id);
