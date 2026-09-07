export type Img = {
  src: string;
  alt: string;
};

const U = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

export const IMG = {
  hero: {
    src: U("photo-1600585154340-be6161a56a0c"),
    alt: "Modern residential building at Ambr Homes, Greater Noida West",
  },
  landscape: {
    src: U("photo-1600607687939-ce8a6c25118c"),
    alt: "Landscaped shared space at an Ambr Homes community",
  },
  exterior: {
    src: U("photo-1600566753190-17f0baa2a6c3"),
    alt: "Ambr Homes building exterior",
  },
  interior: {
    src: U("photo-1522708323590-d24dbb6b0267"),
    alt: "Finished living room at an Ambr Homes flat",
  },
  balcony: {
    src: U("photo-1600607688969-a5bfcd646154"),
    alt: "Balcony view at an Ambr Homes flat",
  },
  construction: {
    src: U("photo-1504307651254-35680f356dfd"),
    alt: "Under construction at an Ambr Homes project",
  },
  plan: {
    src: U("photo-1586023492125-27b2c045efd7"),
    alt: "Home layout plan",
  },
  kitchen: {
    src: U("photo-1556911220-bff31c812dba"),
    alt: "Modular kitchen at an Ambr Homes flat",
  },
  dusk: {
    src: U("photo-1487958449943-2429e8be8625"),
    alt: "Ambr Homes community at dusk",
  },
  office: {
    src: U("photo-1497366216548-37526070297c"),
    alt: "Ambr Homes site office, Bishrakh",
  },
  community: {
    src: U("photo-1449844908441-8829872d2607"),
    alt: "Ambr Homes residential community in Greater Noida West",
  },
  family: {
    src: U("photo-1560448204-e02f11c3d0e2"),
    alt: "Family home at Ambr Homes",
  },
  park: {
    src: U("photo-1523348837708-15d4a09cfac2"),
    alt: "Park-facing home at Ambr Homes",
  },
  night: {
    src: U("photo-1512917774080-9991f1c4c750"),
    alt: "Ambr Homes building at dusk",
  },
  bedroom: {
    src: U("photo-1560448204-e02f11c3d0e2"),
    alt: "Bedroom at an Ambr Homes flat",
  },
  lounge: {
    src: U("photo-1600210492486-724fe5c67fb0"),
    alt: "Lounge interior at an Ambr Homes flat",
  },
  courtyard: {
    src: U("photo-1600566753086-00f18fb6b3ea"),
    alt: "Courtyard garden at an Ambr Homes community",
  },
  pool: {
    src: U("photo-1576013551627-0cc20b96c2a7"),
    alt: "Amenity pool at an Ambr Homes community",
  },
  dining: {
    src: U("photo-1531973576160-7125cd663d86"),
    alt: "Dining area at an Ambr Homes flat",
  },
  facade: {
    src: U("photo-1600585154526-990dced4db0d"),
    alt: "Building facade at an Ambr Homes project",
  },
} satisfies Record<string, Img>;
