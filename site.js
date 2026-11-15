// 1) Paste your Supabase values here (Project Settings → API). See README.md.
const SB_URL = 'https://kahapxfozlmzraevmjgv.supabase.co/rest/v1/';
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthaGFweGZvemxtenJhZXZtamd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ3Mzc2MDcsImV4cCI6MjExMDMxMzYwN30.zyS5bFU5aZBuKfAkntspjoboFx0bz0Dw5luKJ-PEokg';

// Default content shown until you save changes from the admin panel.
const DEFAULTS = {
  brand: { name: 'Ashirvaad' },
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
    title: 'About Ashirvaad',
    p1: 'Founded in 2026, Ashirvaad emerged from a passion for digital innovation and a commitment to helping businesses thrive online. We are a team of designers, developers and digital strategists.',
    p2: 'Our mission is to deliver tailor-made web solutions that look exceptional and perform flawlessly. From concept to ongoing support, we partner with you every step of the way.'
  },
  values: [
    { t: 'Our Mission', d: 'Tailor-made web and digitisation solutions that perform.' },
    { t: 'Transparent Communication', d: 'Clear updates at every stage.' },
    { t: 'Agile Delivery', d: 'Fast iterations, early demos, flexible changes.' },
    { t: 'Excellence', d: 'Quality design and engineering in everything we ship.' }
  ],
  team: [
    { name: 'Vishnu Kumar', role: 'Founder & CEO', bio: 'Leads the vision and strategy of Ashirvaad, with a passion for helping businesses go digital.', email: 'ceo.ashirvaad@gmail.com', linkedin: 'https://www.linkedin.com/in/vishnu-kmr-b66b133a9/', photo: '' }
  ],
  contact: { email: 'ceo.ashirvaad@gmail.com', phone: '', whatsapp: '', address: '', formspree: 'mnpjyrop' }
};
