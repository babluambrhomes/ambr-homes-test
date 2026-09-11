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
  officeHours: "Open 10am - 7pm, every day including Sundays.",
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
  { title: "Waterproofing", desc: "Membrane treatment to terraces, balconies and wet areas - tested before the finishes go on, not after." },
  { title: "Concealed Services", desc: "Plumbing and electrical routed and pressure-tested before plastering, with access provided for later maintenance." },
  { title: "Branded Fittings", desc: "Sanitaryware, CP fittings and switchgear from named brands, specified in the agreement rather than left as \"or equivalent\"." },
  { title: "Finished Interiors", desc: "Vitrified flooring, modular kitchen counter, and finishes chosen for how they look after ten monsoons." },
  { title: "Power Backup & Lifts", desc: "Lift shafts, backup provision and common-area lighting sized for daily use across the full occupancy of the block." },
];

const SHARED_STEPS = [
  { title: "Planning & Clearances", desc: "Planning, drawings and applicable statutory clearances come together before construction moves forward." },
  { title: "Foundation", desc: "Soil investigation, excavation and foundation work establish the base." },
  { title: "Structure", desc: "The RCC structure rises floor by floor." },
  { title: "Services & Waterproofing", desc: "The systems behind the walls and waterproofing work are completed and checked." },
  { title: "Finishing & Landscape", desc: "Flooring, doors, kitchens, common areas and landscape bring the project together." },
  { title: "Snagging & Handover", desc: "The home is checked, outstanding items are addressed and the handover process begins." },
];

const COMPLETED_FAQS = [
  {
    q: "What configurations are available?",
    a: "2 & 3 BHK homes are presented in the project material, with multiple plan variants.",
  },
  {
    q: "Can I visit a finished home?",
    a: "Yes, and we would encourage it. The flats are ready to walk through - stand in the actual home, on the actual balcony, before committing to anything.",
  },
  {
    q: "Do you help with home loans and documentation?",
    a: "We can share the approved-project paperwork that lenders ask for and point you to banks that have financed our earlier projects. We do not act as a broker or take a commission on financing.",
  },
  {
    q: "What happens after I get the keys?",
    a: "A snag list is walked with you before handover and closed out afterwards. Maintenance is handed over to the resident association with our team supporting the transition, and the same site office stays reachable - buyers from our earliest project still call it.",
  },
];

const SHARED_USES: Project["uses"] = [
  { title: "First Home", desc: "First Home Buyer, with room to grow into rather than out of.", img: { src: "/images/ambr8.jpeg", alt: "Family home at Ambr Homes" } },
  { title: "Growing Family", desc: "Plans with a separate study or third bedroom, and storage where a household actually needs it.", img: { src: "/images/ambr9.jpeg", alt: "Finished living room at an Ambr Homes flat" } },
  { title: "Parents & Multiple Generations", desc: "Ground-floor and lift-adjacent units suited to older parents, with step-free access from the parking level.", img: { src: "/images/ambr18.jpeg", alt: "Ambr Homes residential community in Greater Noida West" } },
  { title: "The Years Ahead", desc: "Choose the plan you can imagine living in, not only the one that looks best on a brochure", img: { src: "/images/ambr38.jpeg", alt: "Ambr Homes building at dusk" } },
];

export const PROJECTS: Project[] = [
  {
    slug: "aspire",
    name: "Aspire",
    tagline: "Aspire by Ambr Homes",
    sub: "2 & 3 BHK in Vaidpura, Greater Noida West",
    statusLabel: "Under Construction· Pre-booking",
    statusTone: "orange",
    locality: "Vaidpura",
    address: "Vaidpura, Greater Noida West, Uttar Pradesh 201306",
    heroImg: { src: "/images/ambr42.jpeg", alt: "Modern residential building at Ambr Homes, Greater Noida West" },
    heroAlt: "Aspire by Ambr Homes, Vaidpura, Greater Noida West",
    heading: "Our Most Generous Plans Yet",
    intro:
      "Wider balconies, larger kitchens and a park edge that most homes look directly onto. Aspire is designed for families buying their second home — not their first compromise. Now open for pre-booking in Vaidpura, Greater Noida West.",
    configs: [
      { title: "2 BHK — Park facing", tag: "2 BHK", desc: "Every 2 BHK is park-facing, planned for cross ventilation and morning light with a kitchen that sees the living room.", img: { src: "/images/2bhk.jpg", alt: "Park-facing home at Ambr Homes" } },
      { title: "3 BHK — Corner unit", tag: "3 BHK", desc: "A separate study or third bedroom, and storage where a household actually needs it. Corner units available with extra windows.", img: { src: "/images/3bhk.jpg", alt: "Finished living room at an Ambr Homes flat" } },
    ],
    whyTitle: "Planned Around The Park, Not The Parking.",

whyRows: [
  {
    h: "More than an elevation",
    p: "The space between buildings matters too.",
  },
  {
    h: "Green where you live",
    p: "Landscaped areas make the everyday walk feel less like a commute.",
  },
  {
    h: "Light and air",
    p: "Natural light and cross ventilation are part of the planning story.",
  },
  {
    h: "A place to come back to",
    p: "The aim is a community that feels comfortable after the first impression wears off.",
  },
],
    benefits: [
      { title: "Daylight, Not Just Downlights", desc: "Natural light and ventilation are highlighted as planning priorities — because a home should feel good before the lights are switched on." },
      { title: "Balconies With A Purpose", desc: "Wider balconies are part of the project story. Think morning tea, plants, a little fresh air, or simply somewhere to step outside." },
      { title: "A Kitchen That Works", desc: "The brochure includes modular-kitchen provision and branded fixtures/materials. Final specifications should always be checked against the latest applicable documents." },
      // { title: "Details You Touch Every Day", desc: "The brochure lists items including 8-ft doors, premium flooring, bathroom fittings, electrical fittings and smart digital door locks." },
      // { title: "Monthly construction updates", desc: "Every pre-booked buyer receives dated progress photographs and a written update, so you are never finding out about a delay from a neighbour." },
      // { title: "Pre-launch pricing", desc: "Pre-booking gives first pick of floor, facing and corner units at a price that will not be repeated once the structure tops out." },
    ],
    uses: SHARED_USES,
    tech: SHARED_TECH,
    steps: SHARED_STEPS,
    faqs: [
      { q: "What configurations are available?", a: "2 & 3 BHK homes are presented in the project material, with multiple plan variants." },
      { q: "Where is Aspire?", a: "Vaidpura, Greater Noida West, Uttar Pradesh." },
      { q: "What is the current status?", a: "The website positions Aspire as under construction with pre-booking open." },
      { q: "What should I check before booking?", a: "Compare the exact plan, applicable area, current commercial terms, specifications, payment schedule, project documents and agreement." },
      { q: "Can I see the home before deciding?", a: "Yes. The strongest next step is a site visit so you can see the location, plans and project for yourself." },
    ],
    finalTitle: "Pre-Book Your Home At Aspire",
    finalBody: "You do not have to decide from a screen. Come to Vaidpura. Walk through the plans. Ask the uncomfortable questions. See the setting. Then take the time you need to decide.",
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
    heroImg: { src: "/images/ambr38.jpeg", alt: "Under construction at an Ambr Homes project" },
    heroAlt: "Magnolia by Ambr Homes, Vaidpura, Greater Noida West",
    heading: "Now Rising In Vaidpura",
    intro:
      "Magnolia is our second project in Vaidpura, designed around generous courtyards and shaded walking loops. Registered with UP RERA and open for pre-booking with pre-launch pricing.",
    configs: [
      { title: "2 BHK · Courtyard facing", tag: "2 BHK", desc: "Park and courtyard-facing 2 BHK homes planned for cross ventilation and morning light.", img: { src: "/images/ambr38.jpeg", alt: "Park-facing home at Ambr Homes" } },
      { title: "3 BHK · Corner unit", tag: "3 BHK", desc: "Corner 3 BHK plans with a study or third bedroom and storage for a household.", img: { src: "/images/ambr38.jpeg", alt: "Finished living room at an Ambr Homes flat" } },
    ],
    whyTitle: "Courtyards Before Car Parks",
    whyRows: [
      { h: "The problem with most floor plates", p: "Layouts are usually drawn to fit the maximum number of saleable units onto the plot, shrinking the open ground between blocks into surface parking." },
      { h: "The Magnolia approach", p: "Courtyards, planting and the walking loop are fixed in the sanctioned plan before the homes are drawn around them - so the ground you are sold stays." },
    ],
    benefits: [
      { title: "Courtyard light in every home", desc: "Homes look onto planted courtyards rather than onto another block, bringing daylight and cross ventilation to living rooms." },
      { title: "Balconies you can use", desc: "Deep enough for two chairs and a table - not a ledge that every family discovers in the first week." },
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
      { q: "Can I see the site while it is under construction?", a: "Yes, and we also suggest visiting Ambrosia or Atlanta - occupied for years and more revealing about how our buildings age." },
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
    heroImg: { src: "/images/ambr10.jpeg", alt: "Ambr Homes building exterior" },
    heroAlt: "Amore by Ambr Homes, Bishrakh, Greater Noida West",
    heading: "Completed And Ready To Move In",
    intro:
      "Amore is complete and ready to occupy. Stand in the actual flat and on the actual balcony before committing - the most useful visit if you want to see exactly what you are buying.",
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
      { title: "Move in now", desc: "Amore is complete and ready to occupy - no wait for construction." },
      { title: "See how it ages", desc: "Occupied homes show how waterproofing, fittings and planting hold up in daily use." },
      { title: "RERA registered", desc: "Registered with UP RERA, with approved plans and sanctioned layout published." },
      { title: "Balconies you can use", desc: "Deep enough for two chairs and a table - check them in person." },
      { title: "Same crew who built it", desc: "The site office that delivered Amore still supports its residents." },
      { title: "Straightforward paperwork", desc: "Agreement for sale and payment schedule shared in full before you commit." },
    ],
    uses: SHARED_USES,
    tech: SHARED_TECH,
    steps: SHARED_STEPS,
    faqs: COMPLETED_FAQS,
    finalTitle: "Walk Through Amore",
    finalBody: "Come and stand in a finished Ambr home. Pick a time - evenings and Sundays included - and we will keep the flat open.",
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
    heroImg: { src: "/images/ambr9.jpeg", alt: "Ambr Homes residential community in Greater Noida West" },
    heroAlt: "Atlanta by Ambr Homes, Bishrakh, Greater Noida West",
    heading: "An Occupied Community In Bishrakh",
    intro:
      "Atlanta has been complete and occupied for years — the more useful visit if you want to see how our buildings age. Registered with UP RERA, delivered on the date we gave at booking.",
    configs: [
      { title: "2 BHK · Park facing", tag: "2 BHK", desc: "Occupied 2 BHK homes, planned for cross ventilation and morning light.", img: { src: "/images/ambr9.jpeg", alt: "Park-facing home at Ambr Homes" } },
      { title: "3 BHK · Corner unit", tag: "3 BHK", desc: "Corner 3 BHK plans with a study or third bedroom, occupied and lived in.", img: { src: "/images/ambr9.jpeg", alt: "Finished living room at an Ambr Homes flat" } },
    ],
    whyTitle: "Built To Age, Not Just To Sell",
    whyRows: [
      { h: "The finish that photographs best", p: "Is rarely the one that lasts. Atlanta was built with materials chosen for ten monsoons." },
      { h: "Twelve years of evidence", p: "The families at Atlanta have lived with our waterproofing, lifts and fittings for years - the only builder review that means anything." },
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
    heroImg: { src: "/images/ambr8.jpeg", alt: "Ambr Homes community at dusk" },
    heroAlt: "Ambrosia by Ambr Homes, Bishrakh, Greater Noida West",
    heading: "Where Ambr Began",
    intro:
      "Ambrosia was our first community, delivered in 2010 and complete and occupied for years. Its families are still a short drive from our office - proof that we build to stay.",
    configs: [
      { title: "2 BHK · Park facing", tag: "2 BHK", desc: "The original 2 BHK homes, planned for cross ventilation and morning light.", img: { src: "/images/ambr8.jpeg", alt: "Park-facing home at Ambr Homes" } },
      { title: "3 BHK · Corner unit", tag: "3 BHK", desc: "Corner 3 BHK plans with a study or third bedroom.", img: { src: "/images/ambr38.jpeg", alt: "Finished living room at an Ambr Homes flat" } },
    ],
    whyTitle: "The Project That Started It All",
    whyRows: [
      { h: "A builder who returns", p: "We chose to stay in one corridor rather than spread across the NCR, because a builder who keeps coming back has to live with what they put up." },
      { h: "Fifteen years later", p: "The residents of our earliest project are still a short drive from our office, and the same crew still supports them." },
    ],
    benefits: [
      { title: "Built to last", desc: "Structurally, financially and in daily use - for the families who bought here." },
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
    finalBody: "Come and see where Ambr began. Pick a time - evenings and Sundays included - and we will keep the flat open.",
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
