export type Img = {
  src: string;
  alt: string;
};

export const NAV = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Why Ambr Homes", href: "/why-ambr-homes" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export const CONTACT = {
  phone: process.env.NEXT_PUBLIC_PHONE ?? "",
  phoneHref: process.env.NEXT_PUBLIC_PHONE_HREF ?? "",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "",
  emailHref: process.env.NEXT_PUBLIC_EMAIL_HREF ?? "",
  whatsappHref: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "",
  officeHours: "Open 10am - 7pm, every day including Sundays.",
  addressShort: "Sector-10/16C, Vaidpura, Greater Noida West - 203207",
  addressLine1: "Ambr Homes Site Office, Sector-10/16C, Vaidpura,",
  addressLine2: "Greater Noida West - 203207, Uttar Pradesh",
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
  { title: "Earthquake Resistant Structure", desc: "Designed by highly experienced structural engineers with lab-tested steel & concrete." },
  { title: "8-Ft Hardwood & UPVC Doors", desc: "8 ft polished hardwood entrance frame with laminated flush door & UPVC sliding doors with wire mesh." },
  { title: "Smart Digital Door Lock", desc: "Advanced one-touch fingerprint & PIN code digital lock system for keyless entry & emergency key backup." },
  { title: "Wooden & Vitrified Flooring", desc: "Wooden flooring in Master Bedroom, vitrified tiles in living/bedrooms & anti-skid ceramic tiles in wet areas." },
  { title: "Modular Kitchen & Granite Slab", desc: "Granite working platform with 2 ft glazed ceramic tile dado, stainless steel sink & modular kitchen." },
  { title: "Luxury Bathrooms & False Ceiling", desc: "Glazed wall tiles to roof level, E-board false ceiling, vanity washbasin & CERA / Hindware / Paryware sanitaryware." },
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
    heroImg: { src: "/images/aspire-01.jpeg", alt: "Aspire by Ambr Homes, Vaidpura, Greater Noida West" },
    heroAlt: "Aspire by Ambr Homes, Vaidpura, Greater Noida West",
    heading: "Our Most Generous Plans Yet",
    intro:
      "Wider balconies, larger kitchens and a park edge that most homes look directly onto. Aspire is designed for families buying their second home — not their first compromise. Now open for pre-booking in Vaidpura, Greater Noida West.",
    configs: [
      { title: "2 BHK — Park facing", tag: "2 BHK", desc: "Every 2 BHK is park-facing, planned for cross ventilation and morning light with a kitchen that sees the living room.", img: { src: "/images/2bhk.jpg", alt: "Park-facing home at Aspire" } },
      { title: "3 BHK — Corner unit", tag: "3 BHK", desc: "A separate study or third bedroom, and storage where a household actually needs it. Corner units available with extra windows.", img: { src: "/images/3bhk.jpg", alt: "Finished living room at Aspire" } },
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
    ],
    uses: [
      { title: "First Serious Home", desc: "A 2 BHK can make sense when you want a proper family home with usable rooms and room to grow without immediately moving again.", img: { src: "/images/2bhk-1.jpg", alt: "First Serious Home at Aspire" } },
      { title: "Growing Families", desc: "A 3 BHK gives a growing family more flexibility — a child’s room, guest room, study or simply more breathing room as life changes.", img: { src: "/images/3bhk-2.jpg", alt: "Growing Families at Aspire" } },
      { title: "Multi-Generational Families", desc: "For families living across generations, the right plan is the one that makes movement, privacy and shared time easier.", img: { src: "/images/family-1.jpg", alt: "Multi-Generational Families at Aspire" } },
      { title: "Smart Investors", desc: "For an investor, the starting question is simple: would an actual family want to live here? Location, usability and connectivity matter.", img: { src: "/images/invester.jpg", alt: "Aspire Real Estate Investment" } },
    ],
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
    tagline: "AMBR Magnolia",
    sub: "2 & 3 BHK in Vaidpura, Greater Noida West",
    statusLabel: "Under Construction · Pre-booking",
    statusTone: "orange",
    locality: "Vaidpura",
    address: "Vaidpura, Greater Noida West, Uttar Pradesh 201306",
    heroImg: { src: "/images/ambr38.jpeg", alt: "Magnolia by Ambr Homes, Vaidpura, Greater Noida West" },
    heroAlt: "Magnolia by Ambr Homes, Vaidpura, Greater Noida West",
    heading: "A Home That Makes Room For Everyone.",
    intro:
      "Spacious 2 & 3 BHK low-rise residences planned for families who want room to live, gather and grow together. Featuring wide balconies, lush courtyards and open living spaces, Magnolia is crafted for peaceful community living in Vaidpura.",
    configs: [
      { title: "2 BHK · Courtyard facing", tag: "2 BHK", desc: "Park and courtyard-facing 2 BHK homes planned for cross ventilation and morning light.", img: { src: "/images/magno1.jpg", alt: "Magnolia Courtyard Facing 2 BHK" } },
      { title: "3 BHK · Corner unit", tag: "3 BHK", desc: "Corner 3 BHK plans with a study or third bedroom and storage for a household.", img: { src: "/images/stu1.jpg", alt: "Magnolia Corner 3 BHK" } },
    ],
    whyTitle: "Courtyards Before Car Parks",
    whyRows: [
      { h: "The problem with most floor plates", p: "Layouts are usually drawn to fit the maximum number of saleable units onto the plot, shrinking the open ground between blocks into surface parking." },
      { h: "The Magnolia approach", p: "Courtyards, planting and the walking loop are fixed in the sanctioned plan before the homes are drawn around them - so the ground you are sold stays." },
    ],
    benefits: [
      { title: "Courtyard light in every home", desc: "Homes look onto planted courtyards rather than onto another block, bringing daylight and cross ventilation to living rooms." },
      { title: "Balconies you can use", desc: "Deep enough for two chairs and a table - not a ledge that every family discovers in the first week." },
      { title: "Fully Approved", desc: "Approved plans and sanctioned layout published before booking opened." },
      { title: "Landscape held in the plan", desc: "Planting, play courts and walking loops are part of the sanctioned drawing." },
      { title: "Monthly construction updates", desc: "Dated progress photographs and a written update go to every pre-booked buyer." },
      { title: "Pre-launch pricing", desc: "First pick of floor, facing and corner units at a price not repeated once the structure tops out." },
    ],
    uses: [
      { title: "Courtyard 2 BHK Homes", desc: "Directly overlooking green courtyards with optimal daylight and cross-ventilation.", img: { src: "/images/magno1.jpg", alt: "Magnolia Courtyard 2 BHK" } },
      { title: "Spacious 3 BHK Layouts", desc: "Corner 3 BHK plans with a dedicated study, balcony access, and extra storage.", img: { src: "/images/stu1.jpg", alt: "Magnolia 3 BHK Living Space" } },
      { title: "Gated Family Living", desc: "Safe, landscaped walking loops and courtyards for kids and elders alike.", img: { src: "/images/family-1.jpg", alt: "Magnolia Community Environment" } },
      { title: "Pre-Booking Value", desc: "Early stage entry pricing in Vaidpura with clear milestone assurances.", img: { src: "/images/invester.jpg", alt: "Magnolia Real Estate Investment" } },
    ],
    tech: SHARED_TECH,
    steps: SHARED_STEPS,
    faqs: [
      { q: "Are Magnolia's plans and sanctions approved?", a: "Yes. All plans and layouts were sanctioned and approved before pre-booking opened, and full documentation is available to review." },
      { q: "What does pre-booking involve, and is it refundable?", a: "Pre-booking reserves your choice of floor, facing and unit at pre-launch pricing. Payment schedule, cancellation terms and refund conditions are set out in the agreement for sale." },
      { q: "Can I see the site while it is under construction?", a: "Yes, and we also suggest visiting Ambrosia or Atlanta - occupied for years and more revealing about how our buildings age." },
      { q: "When is handover, and what happens if it slips?", a: "The committed handover date is in your agreement, with compensation terms if it is not met. We publish monthly progress." },
    ],
    finalTitle: "Pre-Book Your Home At Magnolia",
    finalBody: "Best floors and corner units go first. Tell us what you are looking for and we will send the sanctioned layout, payment schedule and project documentation before you visit.",
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
    heroImg: { src: "/images/ambr10.jpeg", alt: "Amore by Ambr Homes, Bishrakh, Greater Noida West" },
    heroAlt: "Amore by Ambr Homes, Bishrakh, Greater Noida West",
    heading: "Completed And Ready To Move In",
    intro:
      "Amore is completely finished and ready to occupy immediately. Stand in the actual flat, walk the wide balcony and check all fittings before deciding — the most reassuring visit to see exactly what you are purchasing in Bishrakh.",
    configs: [
      { title: "2 BHK · Park facing", tag: "2 BHK", desc: "Ready to move into, with the finishes and balconies you can inspect in person today.", img: { src: "/images/park.jpg", alt: "Amore Park Facing 2 BHK" } },
      { title: "3 BHK · Corner unit", tag: "3 BHK", desc: "Corner 3 BHK plans ready to occupy, with a study or third bedroom.", img: { src: "/images/hero-4.jpeg", alt: "Amore 3 BHK Corner Unit" } },
    ],
    whyTitle: "Finished Stock You Can Walk Through",
    whyRows: [
      { h: "Most builders sell you a sample", p: "A sample unit built to impress tells you little about how the building will age." },
      { h: "Amore is real", p: "Every home at Amore is finished and occupied. You stand in the actual flat, on the actual balcony, and check how it has worn." },
    ],
    benefits: [
      { title: "Move in now", desc: "Amore is complete and ready to occupy - no wait for construction." },
      { title: "See how it ages", desc: "Occupied homes show how waterproofing, fittings and planting hold up in daily use." },
      { title: "Fully Approved", desc: "Approved plans and sanctioned layout published." },
      { title: "Balconies you can use", desc: "Deep enough for two chairs and a table - check them in person." },
      { title: "Same crew who built it", desc: "The site office that delivered Amore still supports its residents." },
      { title: "Straightforward paperwork", desc: "Agreement for sale and payment schedule shared in full before you commit." },
    ],
    uses: [
      { title: "Ready 2 BHK Residences", desc: "Park-facing completed homes ready to inspect and move in immediately.", img: { src: "/images/park.jpg", alt: "Amore Park Facing Home" } },
      { title: "Move-In Ready 3 BHK", desc: "Fully finished 3 BHK corner homes with expansive living spaces and modern fittings.", img: { src: "/images/hero-4.jpeg", alt: "Amore Finished Living Room" } },
      { title: "Lived-In Family Comfort", desc: "Active community in Bishrakh with established connectivity and security.", img: { src: "/images/family-1.jpg", alt: "Amore Active Community" } },
      { title: "Immediate Possession", desc: "No construction delay risk — walk in, inspect the keys, and move right in.", img: { src: "/images/keys.jpg", alt: "Amore Immediate Handover" } },
    ],
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
    heroImg: { src: "/images/Batlanta.jpg", alt: "Atlanta by Ambr Homes, Bishrakh, Greater Noida West" },
    heroAlt: "Atlanta by Ambr Homes, Bishrakh, Greater Noida West",
    heading: "An Occupied Community In Bishrakh",
    intro:
      "Atlanta has been fully completed and warmly occupied for years, offering a settled neighborhood in Bishrakh. Built with durable materials to gracefully withstand monsoons, delivered on schedule with lifelong builder support.",
    configs: [
      { title: "2 BHK · Park facing", tag: "2 BHK", desc: "Occupied 2 BHK homes, planned for cross ventilation and morning light.", img: { src: "/images/cross.jpg", alt: "Atlanta Sunlit 2 BHK" } },
      { title: "3 BHK · Corner unit", tag: "3 BHK", desc: "Corner 3 BHK plans with a study or third bedroom, occupied and lived in.", img: { src: "/images/bal.jpg", alt: "Atlanta Wide Balcony 3 BHK" } },
    ],
    whyTitle: "Built To Age, Not Just To Sell",
    whyRows: [
      { h: "The finish that photographs best", p: "Is rarely the one that lasts. Atlanta was built with materials chosen for ten monsoons." },
      { h: "Twelve years of evidence", p: "The families at Atlanta have lived with our waterproofing, lifts and fittings for years - the only builder review that means anything." },
    ],
    benefits: [
      { title: "Delivered on time", desc: "Four communities delivered on the dates we gave at booking." },
      { title: "See how it ages", desc: "Occupied for years, Atlanta shows how our buildings hold up in daily use." },
      { title: "Fully Approved", desc: "Approved plans and sanctioned layout published." },
      { title: "Building communities", desc: "Play courts, shaded seating and walking loops sized for daily use." },
      { title: "We stay after handover", desc: "Snag lists, maintenance and resident association support are part of the job." },
      { title: "Same crew, fifteen years", desc: "The teams who built Atlanta still work across the corridor." },
    ],
    uses: [
      { title: "Sunlit 2 BHK Units", desc: "Cross-ventilated 2 BHK homes with ample natural daylight and garden views.", img: { src: "/images/cross.jpg", alt: "Atlanta Sunlit 2 BHK" } },
      { title: "Wide Balcony 3 BHK", desc: "Corner 3 BHK residences featuring deep, usable balconies for morning tea.", img: { src: "/images/bal.jpg", alt: "Atlanta Wide Balcony 3 BHK" } },
      { title: "Settled Community", desc: "Delivered on time and occupied for years with active resident associations.", img: { src: "/images/family-1.jpg", alt: "Atlanta Established Neighborhood" } },
      { title: "Proven Asset Quality", desc: "Tested through multiple monsoons to prove material durability and upkeep.", img: { src: "/images/invester.jpg", alt: "Atlanta Proven Asset" } },
    ],
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
    heroImg: { src: "/images/Bambrosia.jpeg", alt: "Ambrosia by Ambr Homes, Bishrakh, Greater Noida West" },
    heroAlt: "Ambrosia by Ambr Homes, Bishrakh, Greater Noida West",
    heading: "Where Ambr Began",
    intro:
      "Ambrosia was our flagship community in Bishrakh, delivered in 2022 and thriving with happy resident families. Built for long-term comfort, open cross ventilation and backed by our on-site team just a short drive away.",
    configs: [
      { title: "2 BHK · Park facing", tag: "2 BHK", desc: "The original 2 BHK homes, planned for cross ventilation and morning light.", img: { src: "/images/2bhk.jpg", alt: "Ambrosia Flagship 2 BHK" } },
      { title: "3 BHK · Corner unit", tag: "3 BHK", desc: "Corner 3 BHK plans with a study or third bedroom.", img: { src: "/images/3bhk.jpg", alt: "Ambrosia Corner 3 BHK" } },
    ],
    whyTitle: "The Project That Started It All",
    whyRows: [
      { h: "A builder who returns", p: "We chose to stay in one corridor rather than spread across the NCR, because a builder who keeps coming back has to live with what they put up." },
      { h: "Years of trust", p: "The residents of our earliest project are still a short drive from our office, and the same crew still supports them." },
    ],
    benefits: [
      { title: "Built to last", desc: "Structurally, financially and in daily use - for the families who bought here." },
      { title: "See how it ages", desc: "Occupied since 2022, Ambrosia is the longest record we have to judge." },
      { title: "Fully Approved", desc: "Approved plans and sanctioned layout published." },
      { title: "Building communities", desc: "Communities that outlast the sales campaign that launched them." },
      { title: "We stay after handover", desc: "Buyers from our earliest project can still reach the people who built for them." },
      { title: "One corridor", desc: "Site teams, vendors and service crews all within a half-hour drive." },
    ],
    uses: [
      { title: "Flagship 2 BHK Homes", desc: "Our very first delivered 2 BHK floor plans built with precision structural design.", img: { src: "/images/2bhk.jpg", alt: "Ambrosia Flagship 2 BHK" } },
      { title: "Corner 3 BHK Units", desc: "Corner units with maximum window openings and serene outdoor views.", img: { src: "/images/3bhk.jpg", alt: "Ambrosia Corner 3 BHK" } },
      { title: "Vibrant Resident Life", desc: "Fully occupied community in Bishrakh, operating smoothly since 2022.", img: { src: "/images/family-1.jpg", alt: "Ambrosia Resident Life" } },
      { title: "Handover Trust", desc: "A testament to our promise — completed on schedule with long-term builder support.", img: { src: "/images/keys.jpg", alt: "Ambrosia Delivered Community" } },
    ],
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
