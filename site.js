// 1) Paste your Supabase values here (Project Settings → API). See README.md.
const SB_URL = 'YOUR_SUPABASE_URL';
const SB_KEY = 'YOUR_SUPABASE_ANON_KEY';

// Ready-made themes (editable later from Admin -> Theme & design)
const THEMES = {
  linkedin:{ name:'LinkedIn Blue', bg:'#f3f2ef', s:'#ffffff', t:'#191919', m:'#5e6670', l:'#e0dfdc', b:'#0a66c2', b2:'#378fe9', h:'#000000', bt:'#ffffff', font:'sans', radius:'10' },
  gold:    { name:'Golden Luxe',   bg:'#0c0a07', s:'#17130b', t:'#f7efdc', m:'#b9aa88', l:'#33290f', b:'#d4af37', b2:'#f3d77c', h:'#fff1c9', bt:'#1a1405', font:'serif', radius:'16' },
  ivory:   { name:'Ivory & Gold',  bg:'#faf6ec', s:'#ffffff', t:'#1f1a10', m:'#6b604a', l:'#e6dcc3', b:'#b8860b', b2:'#d4af37', h:'#1f1a10', bt:'#ffffff', font:'serif', radius:'16' },
  royal:   { name:'Royal Blue',    bg:'#050b18', s:'#0d1730', t:'#eaf2ff', m:'#9db0cc', l:'#1e2e4d', b:'#38bdf8', b2:'#2dd4bf', h:'#ffffff', bt:'#04121f', font:'sans',  radius:'16' },
  emerald: { name:'Emerald',       bg:'#06120d', s:'#0d211a', t:'#e8f7ef', m:'#94b8a6', l:'#1c3a2e', b:'#34d399', b2:'#6ee7b7', h:'#ffffff', bt:'#03150d', font:'sans',  radius:'16' },
  rose:    { name:'Rose & Amber',  bg:'#140810', s:'#231020', t:'#fdeef5', m:'#c9a0b4', l:'#3d1f33', b:'#f472b6', b2:'#fbbf24', h:'#ffffff', bt:'#1c0612', font:'serif', radius:'26' }
};
function applyTheme(t) {
  const u = t || {}; t = { ...THEMES.linkedin, ...u };
  const r = document.documentElement.style;
  ['bg','s','t','m','l','b','b2','bt'].forEach(k => r.setProperty('--' + k, t[k]));
  r.setProperty('--h', u.h || u.t || THEMES.linkedin.h);
  r.setProperty('--r', t.radius + 'px');
  r.setProperty('--hf', t.font == 'serif' ? 'Georgia,"Times New Roman",serif' : 'inherit');
}

// Default content shown until you save changes from the admin panel.
const DEFAULTS = {
  theme: { preset: 'linkedin', ...THEMES.linkedin },
  testimonials: [],
  announce: { on: 'no', speed: '8' },
  offers: [
    { text: '🎉 Limited offer: 40% OFF on website packages!', link: '#pricing' },
    { text: '🚀 Get a FREE website with our annual marketing plan!', link: '#contact' }
  ],
  pricingmeta: { sub: 'Choose a plan that fits your business. Custom quotes are available.', note: '' },
  pricing: [],
  faq: [
    { q: 'How long does it take to build a website?', a: 'Most business websites are ready in 1–3 weeks, depending on the pages and features. We share a clear timeline after our first call.' },
    { q: 'Can I update the website myself?', a: 'Yes. You get an easy admin panel to change text, images and videos without any coding.' },
    { q: 'Do you provide support after launch?', a: 'Yes. We offer ongoing maintenance and support so your site stays secure and fast.' },
    { q: 'Will my website work on mobile phones?', a: 'Absolutely. Every website we build is fully responsive.' }
  ],
  sections: [],
  socials: { facebook: '', instagram: '', linkedin: '', youtube: '', x: '', telegram: '' },
  footer: { about: 'Your digital partner for websites, automation and growth.', hours: '', note: '' },
  flinks: [],
  brand: { name: 'Ashirvaad Nexora Technologies' },
  hero: {
    tag: 'Your Digital Partner',
    title: 'We build brands online & digitise your business',
    text: 'Stunning websites, smart automation and simple online systems that help your business grow faster, work smarter and connect with customers.',
    cta1: 'Get a Free Consultation', cta2: 'See our work'
  },
  stats: [
    { n: '2026', l: 'Founded' }, { n: '100%', l: 'Mobile-responsive' },
    { n: '24/7', l: 'Ongoing support' }, { n: 'End-to-end', l: 'Concept to maintenance' }
  ],
  services: [
    { icon: '🎨', title: 'Web Design & UI/UX', text: 'Visually appealing, user-friendly interfaces that engage visitors from the first click.' },
    { icon: '💻', title: 'Custom Web Development', text: 'Scalable, secure and fast websites tailored to your business needs.' },
    { icon: '🛒', title: 'E-commerce Solutions', text: 'Online stores that turn visitors into loyal customers.' },
    { icon: '📈', title: 'SEO & Digital Marketing', text: 'Boost your visibility and drive targeted traffic.' },
    { icon: '🛠️', title: 'Maintenance & Support', text: 'Keep your site secure, fast and up to date.' },
    { icon: '📱', title: 'Mobile Responsiveness', text: 'Flawless on every device, from desktop to smartphone.' }
  ],
  digitise: [
    { icon: '⚙️', title: 'Workflow Automation', text: 'Approvals, task routing, automatic reminders and alerts.' },
    { icon: '🗂️', title: 'Portals & Dashboards', text: 'Customer, vendor and staff portals with live reports.' },
    { icon: '📄', title: 'Records Digitisation', text: 'Secure cloud storage and searchable digital records.' },
    { icon: '💳', title: 'Booking & Payments', text: 'Appointments, orders, invoicing and payment gateways.' }
  ],
  steps: [
    { title: 'Discover', text: 'We map your current process and find where time is lost.' },
    { title: 'Design', text: 'A simple digital flow your team and customers will love.' },
    { title: 'Build', text: 'Agile development with regular demos.' },
    { title: 'Launch & Support', text: 'Training, go-live and continuous improvement.' }
  ],
  about: {
    title: 'About Ashirvaad Nexora Technologies',
    p1: 'Founded in 2026, Ashirvaad Nexora Technologies emerged from a passion for digital innovation and a commitment to helping businesses thrive online. We are a team of designers, developers and digital strategists.',
    p2: 'Our mission is to deliver tailor-made web solutions that look exceptional and perform flawlessly. From concept to ongoing support, we partner with you every step of the way.'
  },
  values: [
    { t: 'Our Mission', d: 'Tailor-made web and digitisation solutions that perform.' },
    { t: 'Transparent Communication', d: 'Clear updates at every stage.' },
    { t: 'Agile Delivery', d: 'Fast iterations, early demos, flexible changes.' },
    { t: 'Excellence', d: 'Quality design and engineering in everything we ship.' }
  ],
  team: [
    { name: 'Vishnu Kumar', role: 'Founder & CEO', bio: 'Leads the vision and strategy of Ashirvaad Nexora Technologies, with a passion for helping businesses go digital.', email: 'ceo.ashirvaad@gmail.com', linkedin: 'https://www.linkedin.com/in/vishnu-kmr-b66b133a9/', photo: '' }
  ],
  contact: { email: 'ceo.ashirvaad@gmail.com', phone: '', whatsapp: '', address: '', formspree: 'mnpjyrop', wamsg: 'Hello! I would like to know more about your services.' }
};
