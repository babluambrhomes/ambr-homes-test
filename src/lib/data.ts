import { Building2, Calendar, Handshake, LandPlot, Layers, ShieldCheck, TrendingUp } from "lucide-react";

export type Img = {
  src: string;
  alt: string;
};

export const NAV = [
  { label: "About", href: "/about" },
  { label: "Why Ambr Homes", href: "/why-ambr-homes" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export const CONTACT = {
  phone: "+91 00000 00000",
  phoneHref: "tel:+910000000000",
  email: "hello@ambrhomes.com",
  emailHref: "mailto:hello@ambrhomes.com",
  officeHours: "Open 10am — 7pm, every day including Sundays.",
  addressShort: "Vaidpura, Greater Noida West, Uttar Pradesh 201306",
  addressLine1: "Ambr Homes Site Office, Bishrakh,",
  addressLine2: "Greater Noida West, Gautam Buddh Nagar, Uttar Pradesh 201306",
  rera:
    "RERA registration numbers — Ambrosia: UPRERAPRJXXXXXX · Atlanta: UPRERAPRJXXXXXX · Amore: UPRERAPRJXXXXXX · Magnolia: UPRERAPRJXXXXXX · Aspire: UPRERAPRJXXXXXX. Available at up-rera.in. Images and plans on this page are indicative. Nothing on this website constitutes an offer or contract; all bookings are governed by the agreement for sale executed between the parties.",
};

export const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "Facebook", href: "https://facebook.com/" },
  { label: "YouTube", href: "https://youtube.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
];

export type ProjectStatus = "completed" | "ready" | "construction";

export type ProjectConfig = {
  title: string;
  tag: string;
  desc: string;
  img: Img;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  sub: string;
  statusLabel: string;
  statusTone: "green" | "blue" | "orange";
  locality: "Bishrakh" | "Vaidpura";
  address: string;
  heroImg: Img;
  heroAlt: string;
  heading: string;
  intro: string;
  configs: ProjectConfig[];
  whyTitle: string;
  whyRows: { h: string; p: string }[];
  benefits: { title: string; desc: string }[];
  uses: { title: string; desc: string; img: Img }[];
  tech: { title: string; desc: string }[];
  steps: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  finalTitle: string;
  finalBody: string;
};

const SHARED_TECH = [
  { title: "RCC Frame", desc: "Earthquake-resistant reinforced concrete frame, designed and checked by an independent structural consultant." },
  { title: "Waterproofing", desc: "Membrane treatment to terraces, balconies and wet areas — tested before the finishes go on, not after." },
  { title: "Concealed Services", desc: "Plumbing and electrical routed and pressure-tested before plastering, with access provided for later maintenance." },
  { title: "Branded Fittings", desc: "Sanitaryware, CP fittings and switchgear from named brands, specified in the agreement rather than left as \"or equivalent\"." },
  { title: "Finished Interiors", desc: "Vitrified flooring, modular kitchen counter, and finishes chosen for how they look after ten monsoons." },
  { title: "Power Backup & Lifts", desc: "Lift shafts, backup provision and common-area lighting sized for daily use across the full occupancy of the block." },
];

const SHARED_STEPS = [
  { title: "Approvals & RERA", desc: "Sanctioned plan, layout approval and UP RERA registration completed and published before a single home is offered." },
  { title: "Foundation", desc: "Soil testing, excavation and raft foundation, checked by the structural consultant before any load is placed on it." },
  { title: "Structure", desc: "RCC frame raised floor by floor. Monthly dated progress photographs go to every pre-booked buyer from this stage." },
  { title: "Services & Waterproofing", desc: "Plumbing and electrical routed and pressure-tested, membranes applied to terraces and wet areas, then finishes begin." },
  { title: "Finishing & Landscape", desc: "Flooring, fittings, common areas and planting completed together, so the grounds are ready when the homes are." },
  { title: "Snagging & Handover", desc: "A snag list is walked with you, closed out, and only then are the keys handed over — with maintenance support that continues afterwards." },
];

const COMPLETED_FAQS = [
  {
    q: "Is this project RERA registered?",
    a: "Yes. Every Ambr Homes project is registered with UP RERA before a single flat is sold. The registration number is published on this page and can be verified independently at up-rera.in before you commit to anything.",
  },
  {
    q: "Can I visit a finished home?",
    a: "Yes, and we would encourage it. The flats are ready to walk through — stand in the actual home, on the actual balcony, before committing to anything.",
  },
  {
    q: "Do you help with home loans and documentation?",
    a: "We can share the approved-project paperwork that lenders ask for and point you to banks that have financed our earlier projects. We do not act as a broker or take a commission on financing.",
  },
  {
    q: "What happens after I get the keys?",
    a: "A snag list is walked with you before handover and closed out afterwards. Maintenance is handed over to the resident association with our team supporting the transition, and the same site office stays reachable — buyers from our earliest project still call it.",
  },
];

const SHARED_USES: Project["uses"] = [
  { title: "First Home Buyers", desc: "Sized for a young family, with room to grow into rather than out of.", img: { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80", alt: "Family home at Ambr Homes" } },
  { title: "Growing Families", desc: "Plans with a separate study or third bedroom, and storage where a household actually needs it.", img: { src: "/images/hero-4.jpeg", alt: "Finished living room at an Ambr Homes flat" } },
  { title: "Multi-Generational", desc: "Ground-floor and lift-adjacent units suited to older parents, with step-free access from the parking level.", img: { src: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1600&q=80", alt: "Ambr Homes residential community in Greater Noida West" } },
  { title: "Investors", desc: "Entry backed by a fifteen-year delivery record and steady rental demand across the corridor.", img: { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80", alt: "Ambr Homes building at dusk" } },
];

export const PROJECTS: Project[] = [
  {
    slug: "aspire",
    name: "Aspire",
    tagline: "Aspire by Ambr Homes",
    sub: "2 & 3 BHK in Vaidpura, Greater Noida West",
    statusLabel: "Under Construction · Pre-booking",
    statusTone: "orange",
    locality: "Vaidpura",
    address: "Vaidpura, Greater Noida West, Uttar Pradesh 201306",
    heroImg: { src: "/images/hero-1.jpeg", alt: "Modern residential building at Ambr Homes, Greater Noida West" },
    heroAlt: "Aspire by Ambr Homes, Vaidpura, Greater Noida West",
    heading: "Our Most Generous Plans Yet",
    intro:
      "Wider balconies, larger kitchens and a park edge that most homes look directly onto. Aspire is designed for families buying their second home — not their first compromise. Now open for pre-booking in Vaidpura, Greater Noida West.",
    configs: [
      { title: "2 BHK · Park facing", tag: "2 BHK", desc: "Every 2 BHK is park-facing, planned for cross ventilation and morning light with a kitchen that sees the living room.", img: { src: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1600&q=80", alt: "Park-facing home at Ambr Homes" } },
      { title: "3 BHK · Corner unit", tag: "3 BHK", desc: "A separate study or third bedroom, and storage where a household actually needs it. Corner units available with extra windows.", img: { src: "/images/hero-4.jpeg", alt: "Finished living room at an Ambr Homes flat" } },
    ],
    whyTitle: "Planned Around The Park, Not The Parking",
    whyRows: [
      { h: "The problem with most floor plates", p: "Layouts are usually drawn to fit the maximum number of saleable units onto the plot. Balconies shrink to ledges, kitchens lose their window, and the open ground between blocks becomes surface parking." },
      { h: "The Aspire approach", p: "We fixed the landscape and the park edge in the sanctioned plan first, then drew the homes around them. Fewer units on the plate, wider balconies, and most flats looking onto planting rather than onto another block." },
    ],
    benefits: [
      { title: "Daylight in every room", desc: "Orientation and cross ventilation are tested before a layout is signed, so you spend less on cooling through a Greater Noida summer." },
      { title: "Balconies you can use", desc: "Deep enough for two chairs and a table. A balcony narrower than a chair is a ledge, and every family finds that out in the first week." },
      { title: "RERA registered", desc: "Registered with UP RERA before booking opened. Registration number, approved plans and sanctioned layout are published, not produced on request." },
      { title: "Landscape held in the plan", desc: "Planting, play courts and the walking loop are part of the sanctioned drawing — not an amenity that quietly shrinks as the project is value-engineered." },
      { title: "Monthly construction updates", desc: "Every pre-booked buyer receives dated progress photographs and a written update, so you are never finding out about a delay from a neighbour." },
      { title: "Pre-launch pricing", desc: "Pre-booking gives first pick of floor, facing and corner units at a price that will not be repeated once the structure tops out." },
    ],
    uses: SHARED_USES,
    tech: SHARED_TECH,
    steps: SHARED_STEPS,
    faqs: [
      { q: "Is Aspire RERA registered?", a: "Yes. Aspire was registered with UP RERA before pre-booking opened. The registration number is published on this page and can be verified independently at up-rera.in before you commit to anything." },
      { q: "What does pre-booking involve, and is it refundable?", a: "Pre-booking reserves your choice of floor, facing and unit at pre-launch pricing. The payment schedule, cancellation terms and refund conditions are set out in the agreement for sale, which we will send you to read in full before anything is signed." },
      { q: "Can I see the site while it is under construction?", a: "Yes, and we would also suggest visiting Ambrosia or Atlanta. Both have been occupied for years and will tell you more about how our buildings age than a site under construction can. We can arrange both visits in one trip." },
      { q: "When is handover, and what happens if it slips?", a: "The committed handover date is stated in the RERA registration and in your agreement, along with the compensation terms that apply if it is not met. We publish monthly progress updates so the position is visible to you throughout." },
    ],
    finalTitle: "Pre-Book Your Home At Aspire",
    finalBody: "Best floors and corner units go first. Tell us what you are looking for and we will send the sanctioned layout, the payment schedule and the RERA filing before you visit — so the site visit is about the building, not the paperwork.",
  },
  {
    slug: "magnolia",
    name: "Magnolia",
    tagline: "Magnolia by Ambr Homes",
    sub: "2 & 3 BHK in Vaidpura, Greater Noida West",
    statusLabel: "Under Construction · Pre-booking",
    statusTone: "orange",
    locality: "Vaidpura",
    address: "Vaidpura, Greater Noida West, Uttar Pradesh 201306",
    heroImg: { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80", alt: "Under construction at an Ambr Homes project" },
    heroAlt: "Magnolia by Ambr Homes, Vaidpura, Greater Noida West",
    heading: "Now Rising In Vaidpura",
    intro:
      "Magnolia is our second project in Vaidpura, designed around generous courtyards and shaded walking loops. Registered with UP RERA and open for pre-booking with pre-launch pricing.",
    configs: [
      { title: "2 BHK · Courtyard facing", tag: "2 BHK", desc: "Park and courtyard-facing 2 BHK homes planned for cross ventilation and morning light.", img: { src: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1600&q=80", alt: "Park-facing home at Ambr Homes" } },
      { title: "3 BHK · Corner unit", tag: "3 BHK", desc: "Corner 3 BHK plans with a study or third bedroom and storage for a household.", img: { src: "/images/hero-4.jpeg", alt: "Finished living room at an Ambr Homes flat" } },
    ],
    whyTitle: "Courtyards Before Car Parks",
    whyRows: [
      { h: "The problem with most floor plates", p: "Layouts are usually drawn to fit the maximum number of saleable units onto the plot, shrinking the open ground between blocks into surface parking." },
      { h: "The Magnolia approach", p: "Courtyards, planting and the walking loop are fixed in the sanctioned plan before the homes are drawn around them — so the ground you are sold stays." },
    ],
    benefits: [
      { title: "Courtyard light in every home", desc: "Homes look onto planted courtyards rather than onto another block, bringing daylight and cross ventilation to living rooms." },
      { title: "Balconies you can use", desc: "Deep enough for two chairs and a table — not a ledge that every family discovers in the first week." },
      { title: "RERA registered", desc: "Registered with UP RERA before booking opened, with approved plans and sanctioned layout published." },
      { title: "Landscape held in the plan", desc: "Planting, play courts and walking loops are part of the sanctioned drawing." },
      { title: "Monthly construction updates", desc: "Dated progress photographs and a written update go to every pre-booked buyer." },
      { title: "Pre-launch pricing", desc: "First pick of floor, facing and corner units at a price not repeated once the structure tops out." },
    ],
    uses: SHARED_USES,
    tech: SHARED_TECH,
    steps: SHARED_STEPS,
    faqs: [
      { q: "Is Magnolia RERA registered?", a: "Yes. Magnolia was registered with UP RERA before pre-booking opened. The registration number is published on this page and can be verified at up-rera.in." },
      { q: "What does pre-booking involve, and is it refundable?", a: "Pre-booking reserves your choice of floor, facing and unit at pre-launch pricing. Payment schedule, cancellation terms and refund conditions are set out in the agreement for sale." },
      { q: "Can I see the site while it is under construction?", a: "Yes, and we also suggest visiting Ambrosia or Atlanta — occupied for years and more revealing about how our buildings age." },
      { q: "When is handover, and what happens if it slips?", a: "The committed handover date is in the RERA registration and your agreement, with compensation terms if it is not met. We publish monthly progress." },
    ],
    finalTitle: "Pre-Book Your Home At Magnolia",
    finalBody: "Best floors and corner units go first. Tell us what you are looking for and we will send the sanctioned layout, payment schedule and RERA filing before you visit.",
  },
  {
    slug: "amore",
    name: "Amore",
    tagline: "Amore by Ambr Homes",
    sub: "2 & 3 BHK in Bishrakh, Greater Noida West",
    statusLabel: "Ready to move in",
    statusTone: "blue",
    locality: "Bishrakh",
    address: "Bishrakh, Greater Noida West, Uttar Pradesh 201306",
    heroImg: { src: "/images/hero-3.jpeg", alt: "Ambr Homes building exterior" },
    heroAlt: "Amore by Ambr Homes, Bishrakh, Greater Noida West",
    heading: "Completed And Ready To Move In",
    intro:
      "Amore is complete and ready to occupy. Stand in the actual flat and on the actual balcony before committing — the most useful visit if you want to see exactly what you are buying.",
    configs: [
      { title: "2 BHK · Park facing", tag: "2 BHK", desc: "Ready to move into, with the finishes and balconies you can inspect in person today.", img: { src: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1600&q=80", alt: "Park-facing home at Ambr Homes" } },
      { title: "3 BHK · Corner unit", tag: "3 BHK", desc: "Corner 3 BHK plans ready to occupy, with a study or third bedroom.", img: { src: "/images/hero-4.jpeg", alt: "Finished living room at an Ambr Homes flat" } },
    ],
    whyTitle: "Finished Stock You Can Walk Through",
    whyRows: [
      { h: "Most builders sell you a sample", p: "A sample unit built to impress tells you little about how the building will age." },
      { h: "Amore is real", p: "Every home at Amore is finished and occupied. You stand in the actual flat, on the actual balcony, and check how it has worn." },
    ],
    benefits: [
      { title: "Move in now", desc: "Amore is complete and ready to occupy — no wait for construction." },
      { title: "See how it ages", desc: "Occupied homes show how waterproofing, fittings and planting hold up in daily use." },
      { title: "RERA registered", desc: "Registered with UP RERA, with approved plans and sanctioned layout published." },
      { title: "Balconies you can use", desc: "Deep enough for two chairs and a table — check them in person." },
      { title: "Same crew who built it", desc: "The site office that delivered Amore still supports its residents." },
      { title: "Straightforward paperwork", desc: "Agreement for sale and payment schedule shared in full before you commit." },
    ],
    uses: SHARED_USES,
    tech: SHARED_TECH,
    steps: SHARED_STEPS,
    faqs: COMPLETED_FAQS,
    finalTitle: "Walk Through Amore",
    finalBody: "Come and stand in a finished Ambr home. Pick a time — evenings and Sundays included — and we will keep the flat open.",
  },
  {
    slug: "atlanta",
    name: "Atlanta",
    tagline: "Atlanta by Ambr Homes",
    sub: "2 & 3 BHK in Bishrakh, Greater Noida West",
    statusLabel: "Completed",
    statusTone: "green",
    locality: "Bishrakh",
    address: "Bishrakh, Greater Noida West, Uttar Pradesh 201306",
    heroImg: { src: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1600&q=80", alt: "Ambr Homes residential community in Greater Noida West" },
    heroAlt: "Atlanta by Ambr Homes, Bishrakh, Greater Noida West",
    heading: "An Occupied Community In Bishrakh",
    intro:
      "Atlanta has been complete and occupied for years — the more useful visit if you want to see how our buildings age. Registered with UP RERA, delivered on the date we gave at booking.",
    configs: [
      { title: "2 BHK · Park facing", tag: "2 BHK", desc: "Occupied 2 BHK homes, planned for cross ventilation and morning light.", img: { src: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1600&q=80", alt: "Park-facing home at Ambr Homes" } },
      { title: "3 BHK · Corner unit", tag: "3 BHK", desc: "Corner 3 BHK plans with a study or third bedroom, occupied and lived in.", img: { src: "/images/hero-4.jpeg", alt: "Finished living room at an Ambr Homes flat" } },
    ],
    whyTitle: "Built To Age, Not Just To Sell",
    whyRows: [
      { h: "The finish that photographs best", p: "Is rarely the one that lasts. Atlanta was built with materials chosen for ten monsoons." },
      { h: "Twelve years of evidence", p: "The families at Atlanta have lived with our waterproofing, lifts and fittings for years — the only builder review that means anything." },
    ],
    benefits: [
      { title: "Delivered on time", desc: "Four communities delivered on the dates we gave at booking." },
      { title: "See how it ages", desc: "Occupied for years, Atlanta shows how our buildings hold up in daily use." },
      { title: "RERA registered", desc: "Registered with UP RERA, approved plans and sanctioned layout published." },
      { title: "Building communities", desc: "Play courts, shaded seating and walking loops sized for daily use." },
      { title: "We stay after handover", desc: "Snag lists, maintenance and resident association support are part of the job." },
      { title: "Same crew, fifteen years", desc: "The teams who built Atlanta still work across the corridor." },
    ],
    uses: SHARED_USES,
    tech: SHARED_TECH,
    steps: SHARED_STEPS,
    faqs: COMPLETED_FAQS,
    finalTitle: "Walk Around Atlanta",
    finalBody: "Come and stand inside a building we handed over years ago. Pick a time — evenings and Sundays included — and we will keep the flat open.",
  },
  {
    slug: "ambrosia",
    name: "Ambrosia",
    tagline: "Ambrosia by Ambr Homes",
    sub: "2 & 3 BHK in Bishrakh, Greater Noida West",
    statusLabel: "Completed",
    statusTone: "green",
    locality: "Bishrakh",
    address: "Bishrakh, Greater Noida West, Uttar Pradesh 201306",
    heroImg: { src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80", alt: "Ambr Homes community at dusk" },
    heroAlt: "Ambrosia by Ambr Homes, Bishrakh, Greater Noida West",
    heading: "Where Ambr Began",
    intro:
      "Ambrosia was our first community, delivered in 2010 and complete and occupied for years. Its families are still a short drive from our office — proof that we build to stay.",
    configs: [
      { title: "2 BHK · Park facing", tag: "2 BHK", desc: "The original 2 BHK homes, planned for cross ventilation and morning light.", img: { src: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1600&q=80", alt: "Park-facing home at Ambr Homes" } },
      { title: "3 BHK · Corner unit", tag: "3 BHK", desc: "Corner 3 BHK plans with a study or third bedroom.", img: { src: "/images/hero-4.jpeg", alt: "Finished living room at an Ambr Homes flat" } },
    ],
    whyTitle: "The Project That Started It All",
    whyRows: [
      { h: "A builder who returns", p: "We chose to stay in one corridor rather than spread across the NCR, because a builder who keeps coming back has to live with what they put up." },
      { h: "Fifteen years later", p: "The residents of our earliest project are still a short drive from our office, and the same crew still supports them." },
    ],
    benefits: [
      { title: "Built to last", desc: "Structurally, financially and in daily use — for the families who bought here." },
      { title: "See how it ages", desc: "Occupied since 2010, Ambrosia is the longest record we have to judge." },
      { title: "RERA registered", desc: "Registered with UP RERA, approved plans and sanctioned layout published." },
      { title: "Building communities", desc: "Communities that outlast the sales campaign that launched them." },
      { title: "We stay after handover", desc: "Buyers from our earliest project can still reach the people who built for them." },
      { title: "One corridor", desc: "Site teams, vendors and service crews all within a half-hour drive." },
    ],
    uses: SHARED_USES,
    tech: SHARED_TECH,
    steps: SHARED_STEPS,
    faqs: COMPLETED_FAQS,
    finalTitle: "Walk Around Ambrosia",
    finalBody: "Come and see where Ambr began. Pick a time — evenings and Sundays included — and we will keep the flat open.",
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export const STATUS_TONES: Record<
  ProjectStatus,
  { badge: string; dot: string }
> = {
  completed: { badge: "bg-emerald-600 text-white", dot: "bg-emerald-600" },
  ready: { badge: "bg-blue-600 text-white", dot: "bg-blue-600" },
  construction: { badge: "bg-orange-600 text-white", dot: "bg-orange-600" },
};

export type BlogImg = { src: string; alt: string };

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; title?: string; items: string[] }
  | { type: "img"; img: BlogImg; caption?: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  readTime: string;
  date: string;
  author: string;
  role: string;
  heroImg: BlogImg;
  blocks: BlogBlock[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "rera-number-before-the-brochure",
    title: "Read The RERA Number, Not The Brochure",
    excerpt:
      "What a UP RERA registration actually unlocks for a buyer in Greater Noida West — and how to check it yourself before you put anything down.",
    category: "Buying Guides",
    tags: ["RERA", "Due diligence", "Documentation"],
    readTime: "6 min read",
    date: "12 Feb 2026",
    author: "The Ambr Homes Team",
    role: "Site Office, Bishrakh",
    heroImg: { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80", alt: "Home layout plan" },
    blocks: [
      { type: "p", text: "The first number to look for on any project page is not the price per square foot. It is the RERA registration number — a string that looks bureaucratic until you know what it unlocks: an approved plan, a sanctioned layout, a committed handover date and a legal right to the information that follows." },
      { type: "h2", text: "What the registration number unlocks" },
      {
        type: "p",
        text: "A project sold before it is RERA registered leaves the buyer carrying most of the risk. A registered project has its sanctioned layout and approved plans on file with the authority — the same drawings that later appear on the project page. That is why we register before a single flat is offered, and why every Ambr project page lists the number up front.",
      },
      {
        type: "list",
        title: "Three things a RERA number gives you",
        items: [
          "The committed handover date and what happens if it is not met",
          "The sanctioned layout as approved by the authority — a legal baseline",
          "A direct escalation path through the RERA authority if things go wrong",
        ],
      },
      { type: "quote", text: "Registration numbers, approved plans and sanctioned layouts should be published — not produced when you ask for them." },
      { type: "h2", text: "Check it yourself in two minutes" },
      {
        type: "p",
        text: "Open up-rera.in, search the number from the project page, and you will see the developer, the project name and the sanctioned details on the record. It is public information, free to check, and it takes less time than reading a brochure's 'about the promoter' section.",
      },
      {
        type: "p",
        text: "If a project cannot produce its registration number before you have reached for your wallet, that silence is itself the most important detail on the page.",
      },
    ],
  },
  {
    slug: "balcony-or-ledge-floor-plan",
    title: "A Balcony, Or A Ledge? Reading The Floor Plan",
    excerpt:
      "Floor plans hide more than they show. Here is how to read a 2 BHK layout for the things that actually decide whether the home works in daily use.",
    category: "Buying Guides",
    tags: ["Layouts", "2 BHK", "Inspection"],
    readTime: "5 min read",
    date: "28 Jan 2026",
    author: "The Ambr Homes Team",
    role: "Design & Planning",
    heroImg: { src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80", alt: "Balcony view at an Ambr Homes flat" },
    blocks: [
      { type: "p", text: "A balcony is a ledge by another name if it cannot hold two chairs and a table. The floor plan is where that decision is made — long before the brochure photograph is taken — and most buyers never check it." },
      { type: "h2", text: "The kitchen window test" },
      {
        type: "p",
        text: "Start with the kitchen. In most value-engineered layouts the kitchen loses its window first, because western exposure was never a column in somebody's spreadsheet. Look for cross-ventilated rooms and morning light in the rooms you will actually live in: the living room and the bedrooms.",
      },
      { type: "h2", text: "Measure the balcony on the drawing" },
      {
        type: "p",
        text: "Look at the depth of the balcony on the floor plan, not the render. About 4.5 feet of clear depth fits a chair and a table. Anything noticeably less is decoration — and every family discovers that within the first week of moving in.",
      },
      { type: "quote", text: "If a balcony cannot take two chairs, it is a ledge. Ours are measured for the chairs before the layout is signed." },
      { type: "list", title: "What else to read in a floor plate", items: ["Storage: where shoes, luggage and the mixer lines up", "The kitchen's relationship to the living room", "Cross ventilation in each sleeping room", "Shafts and service ducts accessible for maintenance"] },
      { type: "p", text: "The layout is the one thing in the buying process you can read honestly, because it cannot oversell. Learn to read it, and you have most of the due diligence done." },
    ],
  },
  {
    slug: "what-to-inspect-on-a-site-visit",
    title: "What To Inspect On A Site Visit, Not Just Admire",
    excerpt:
      "Renderings sell the dream; a site visit pays for the details. Here is the short checklist we give our own buyers before they step on site.",
    category: "On The Site",
    tags: ["Site visit", "Inspection", "Construction"],
    readTime: "7 min read",
    date: "15 Jan 2026",
    author: "The Ambr Homes Team",
    role: "Construction",
    heroImg: { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80", alt: "Under construction at an Ambr Homes project" },
    blocks: [
      { type: "p", text: "A finished flat tells you more about a builder than a hundred renderings. On a site visit, the instructions to yourself are simple: look at the joints, look at the drips, and look at how the building has actually aged — not how the sales person would like you to feel about it." },
      { type: "h2", text: "Look at the parts nobody photographs" },
      {
        type: "list",
        items: [
          "Waterproofing: check terrace edges, balcony parapets and wet areas for staining or repair patches",
          "Drainage falls: water should leave the balcony and bathroom floors, not pool in a corner",
          "Jointing and finishes: look at skirting joints, window edges and switch plates for honest workmanship",
          "Lift and services: check the lobby, the lift and the service ducts — the equipment everyone depends on",
        ],
      },
      { type: "h2", text: "Ask for the old one" },
      {
        type: "p",
        text: "If the project under construction is your interest, we will also point you at a community we handed over years ago. An occupied building is the only builder review that means anything. Read the monthly progress updates of the project under construction, then walk the project already lived in.",
      },
      { type: "quote", text: "Ask for a delivered flat years old — not renderings — and read the updates on the one under construction." },
      { type: "p", text: "A site visit is not the time to be polite. Stand in the actual flat, test the balcony, and take your time in the corners." },
    ],
  },
  {
    slug: "handover-dates-a-habit-not-a-headline",
    title: "Handover Dates: A Habit, Not A Headline",
    excerpt:
      "Why 'delivered on the date we said' should be the minimum standard a buyer expects — and the four projects we have met it on.",
    category: "How We Build",
    tags: ["Handover", "Commitment", "Timeline"],
    readTime: "5 min read",
    date: "29 Dec 2025",
    author: "The Ambr Homes Team",
    role: "Projects & Delivery",
    heroImg: { src: "/images/hero-3.jpeg", alt: "Ambr Homes building exterior" },
    blocks: [
      { type: "p", text: "An early handover date is the easiest promise to make and the easiest one to quietly move. The discipline that actually protects the buyer is committing to a date we can meet, writing it down, and then treating the deadline as a legal commitment rather than a marketing estimate." },
      { type: "h2", text: "The date that matters is the one in writing" },
      {
        type: "p",
        text: "The committed handover date lives in the RERA registration and in the agreement for sale. Both documents also carry what happens if it is not met. That asymmetry — a penalty for the builder, certainty for the buyer — is precisely why we prefer a later committed date we will hit over an early one we would move.",
      },
      { type: "quote", text: "We would rather commit to a later handover and hit it than promise an early one and move it twice." },
      { type: "list", title: "Four communities delivered on the dates we gave at booking", items: ["Ambrosia, Bishrakh — our first handover", "Atlanta, Bishrakh — an occupied community", "Amore, Bishrakh — ready to move in", "Magnolia and Aspire in Vaidpura — in progress, on plan"] },
      { type: "p", text: "Monthly dated photographs and written updates make the position visible through the build, so a buyer is never finding out about a schedule change from a neighbour." },
    ],
  },
  {
    slug: "year-one-to-year-twelve-cost-of-home",
    title: "Year 1, 3, 6 And 12: The Real Cost Of A Home",
    excerpt:
      "A home is priced on day one but paid for across twelve years. Here is what actually spends your money after handover — and what a builder can do about it in advance.",
    category: "Ownership",
    tags: ["Cost", "Long-term", "Maintenance"],
    readTime: "6 min read",
    date: "11 Dec 2025",
    author: "The Ambr Homes Team",
    role: "Engineering",
    heroImg: { src: "/images/hero-4.jpeg", alt: "Finished living room at an Ambr Homes flat" },
    blocks: [
      { type: "p", text: "Buyers price a home on the day they sign. Builders should price a home across the twelve years it is lived in — because the monsoons, the lift cycles and the cooling bills are where the real costs land." },
      { type: "h2", text: "Year 1: the handover year" },
      { type: "p", text: "The costs here are the ones you know: stamp duty, registration, movement and the first round of furnishings. The hidden cost is the snag list. A builder who walks the snag list with you and closes it before handing over keys saves you both time and money you would otherwise pay to get defects fixed." },
      { type: "h2", text: "Years 2–3: the weather arrives" },
      {
        type: "p",
        text: "The first monsoons test waterproofing, balcony falls and drainage. This is precisely when we budget for it not-to-fail — membrane treatment to terraces and wet areas, tested before finishes go on rather than after a leak is reported.",
      },
      { type: "h2", text: "Year 6: the machines" },
      {
        type: "p",
        text: "Lifts, motors and pumps complete their heaviest daily cycles around this time. A service crew within a half-hour drive — rather than a helpdesk logging a ticket — is where that reality shows up. One corridor of projects means our crews are local, so a service call is a drive, not a dispatch.",
      },
      { type: "h2", text: "Year 12: the finish" },
      { type: "quote", text: "The finish that photographs best is rarely the one that lasts. Materials are chosen for how they look after ten monsoons, not on handover day." },
      {
        type: "p",
        text: "Twelve years in, the floor, the fittings and the railings either look right or they do not. Cross ventilation and the layout — decided at drawing stage, at no extra cost — determine the cooling bills every year in between. The cheapest design decisions are the ones made earliest.",
      },
    ],
  },
  {
    slug: "one-corridor-five-addresses",
    title: "One Corridor, Five Addresses: Why We Never Left",
    excerpt:
      "Most builders spread their projects across the city. We chose a half-hour corridor between Bishrakh and Vaidpura — and everything below follows from that decision.",
    category: "Company",
    tags: ["Locality", "Greater Noida West", "Community"],
    readTime: "5 min read",
    date: "26 Nov 2025",
    author: "The Ambr Homes Team",
    role: "Founding Team",
    heroImg: { src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80", alt: "Ambr Homes community at dusk" },
    blocks: [
      { type: "p", text: "The most important decision we made was also the most boring: stay put. Where most builders spread projects across the NCR, we chose one short corridor of Greater Noida West — three projects in Bishrakh and two in Vaidpura, all within a half-hour drive of each other." },
      { type: "h2", text: "What staying put actually does" },
      {
        type: "list",
        items: [
          "Service calls become a drive, not a dispatch — crews are locals, not a helpdesk",
          "The same site engineers, masons and finishing teams move between projects; standards travel with people",
          "Vendors and materials are within the corridor, so quality control is a repeated conversation",
          "Residents from our earliest project still live three streets away — a decade of evidence on display",
        ],
      },
      { type: "quote", text: "Five addresses within a half-hour drive of one site office. When something needs a visit, it's a drive — not a logged ticket." },
      { type: "h2", text: "The corridor grows with its families" },
      {
        type: "p",
        text: "Greater Noida West is where families choose to begin. By building repeatedly in the same corridor, we have been able to grow with them — first homes, then second homes, and communities that outlast the launch campaign that began them.",
      },
      { type: "p", text: "The next address in the corridor is Aspire, now open for pre-booking in Vaidpura. Come and see how the corridor has aged — then judge whether we are the builder we say we are." },
    ],
  },
];

export const BLOG_CATEGORIES = [
  "Buying Guides",
  "On The Site",
  "How We Build",
  "Ownership",
  "Company",
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, count);
}

