import { IMG } from "./images";

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

const P1 = `The first number to look for on any project page is not the price per square foot. It is the RERA registration number — a string that looks bureaucratic until you know what it unlocks: an approved plan, a sanctioned layout, a committed handover date and a legal right to the information that follows.`;

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
    heroImg: IMG.plan,
    blocks: [
      { type: "p", text: P1 },
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
    heroImg: IMG.balcony,
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
    heroImg: IMG.construction,
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
    heroImg: IMG.exterior,
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
    heroImg: IMG.interior,
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
    heroImg: IMG.dusk,
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