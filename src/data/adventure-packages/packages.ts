import { PackageType } from "@/models/Packages";

export const packages : PackageType[] = [
  {
    id: 1,
    category: "jage-bumi",
    subCategory: "adventure",
    title: "Laskar Pelangi Legacy Trail",
    description: "A literary and cultural journey through the land of the Rainbow Troops (Laskar Pelangi).",
    price: 50000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-bumi/jage-bumi-1.png",
    duration: 8
  },
  {
    id: 2,
    category: "jage-bumi",
    subCategory: "adventure",
    title: "Colors of the Earth Expedition",
    description: "Chase the golden hour and find tranquility on the water.",
    price: 50000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-bumi/jage-bumi-2.png",
    duration: 3
  },
  {
    id: 3,
    category: "jage-laut",
    subCategory: "adventure",
    title: "Classic Island Explorer",
    description:
      "Discover the iconic granite islands and snorkel in pristine waters.",
    price: 50000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-1.jpg",
    duration: 8
  },
  {
    id: 4,
    category: "jage-laut",
    subCategory: "nature",
    title: "Sunset & Secluded Shores",
    description: "Chase the golden hour and find tranquility on the water.",
    price: 50000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-2.png",
    duration: 3
  },
  // Jage Bumi - Conservation (2)
  {
    id: 5,
    category: "jage-bumi",
    subCategory: "conservation",
    title: "Mangrove Guardians Walk",
    description: "Explore mangrove ecosystems while learning hands-on conservation practices.",
    price: 60000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-bumi/jage-bumi-1.png",
    duration: 4
  },
  {
    id: 6,
    category: "jage-bumi",
    subCategory: "conservation",
    title: "Bukit Conservation Trek",
    description: "Guided trek focusing on native flora restoration and hillside cleanup.",
    price: 65000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-bumi/jage-bumi-2.png",
    duration: 5
  },
  // Jage Bumi - Education (2)
  {
    id: 7,
    category: "jage-bumi",
    subCategory: "education",
    title: "Geology of Belitung Workshop",
    description: "Hands-on introduction to Belitung's unique granite formations and landforms.",
    price: 55000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-bumi/jage-bumi-1.png",
    duration: 3
  },
  {
    id: 8,
    category: "jage-bumi",
    subCategory: "education",
    title: "Tin Mining Heritage Tour",
    description: "Educational tour tracing the history and impact of tin mining on the island.",
    price: 52000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-bumi/jage-bumi-2.png",
    duration: 4
  },
  // Jage Bumi - Nature (2)
  {
    id: 9,
    category: "jage-bumi",
    subCategory: "nature",
    title: "Batu Granit Forest Hike",
    description: "Scenic hike through granite boulder forests and shaded woodland paths.",
    price: 48000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-bumi/jage-bumi-1.png",
    duration: 6
  },
  {
    id: 10,
    category: "jage-bumi",
    subCategory: "nature",
    title: "Riverbank Birdwatching Safari",
    description: "Observe endemic and migratory birds along tranquil riverbanks.",
    price: 50000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-bumi/jage-bumi-2.png",
    duration: 2
  },
  // Jage Laut - Adventure (needs +1 to reach 2)
  {
    id: 11,
    category: "jage-laut",
    subCategory: "adventure",
    title: "Blue Lagoon Kayak Challenge",
    description: "Paddle across turquoise waters and navigate granite islets by kayak.",
    price: 70000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-1.jpg",
    duration: 5
  },
  // Jage Laut - Conservation (2)
  {
    id: 12,
    category: "jage-laut",
    subCategory: "conservation",
    title: "Coral Nursery Volunteering",
    description: "Assist local teams in coral fragment planting and reef monitoring.",
    price: 80000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-2.png",
    duration: 6
  },
  {
    id: 13,
    category: "jage-laut",
    subCategory: "conservation",
    title: "Beach Cleanup & Turtle Watch",
    description: "Morning beach cleanup followed by a guided turtle habitat briefing.",
    price: 62000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-1.jpg",
    duration: 3
  },
  // Jage Laut - Education (2)
  {
    id: 14,
    category: "jage-laut",
    subCategory: "education",
    title: "Marine Ecology Field Class",
    description: "Learn reef ecology and fish identification with a marine guide.",
    price: 75000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-2.png",
    duration: 4
  },
  {
    id: 15,
    category: "jage-laut",
    subCategory: "education",
    title: "Fisherfolk Knowledge Exchange",
    description: "Dockside session on sustainable fishing practices with local fishermen.",
    price: 58000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-1.jpg",
    duration: 2
  },
  // Jage Laut - Nature (needs +1 to reach 2)
  {
    id: 16,
    category: "jage-laut",
    subCategory: "nature",
    title: "Sunrise Sandbar Stroll",
    description: "Early walk across tidal sandbars teeming with small marine life.",
    price: 54000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-2.png",
    duration: 2
  },
  // Jage Laut - Additions to reach 3 per subcategory
  {
    id: 17,
    category: "jage-laut",
    subCategory: "adventure",
    title: "Granite Coves Snorkel Safari",
    description: "Guided snorkel tour through crystal coves and granite-lined reefs.",
    price: 69000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-1.jpg",
    duration: 4
  },
  {
    id: 18,
    category: "jage-laut",
    subCategory: "conservation",
    title: "Seagrass Bed Monitoring",
    description: "Help survey seagrass meadows and learn about their role in the ecosystem.",
    price: 66000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-2.png",
    duration: 5
  },
  {
    id: 19,
    category: "jage-laut",
    subCategory: "education",
    title: "Lighthouse Maritime History Tour",
    description: "Story-rich visit to historic lighthouse sites and coastal landmarks.",
    price: 60000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-1.jpg",
    duration: 3
  },
  {
    id: 20,
    category: "jage-laut",
    subCategory: "nature",
    title: "Dolphin Spotting Morning Cruise",
    description: "Gentle cruise to observe wild dolphins at sunrise (seasonal).",
    price: 56000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-2.png",
    duration: 3
  },
  // Jage Laut - Add 2 more each to reach 5 per subcategory
  // Adventure (+2)
  {
    id: 21,
    category: "jage-laut",
    subCategory: "adventure",
    title: "Hidden Lagoons SUP Quest",
    description: "Stand-up paddle adventure through calm lagoons and narrow channels.",
    price: 72000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-1.jpg",
    duration: 4
  },
  {
    id: 22,
    category: "jage-laut",
    subCategory: "adventure",
    title: "Island Hopping Speedboat Rush",
    description: "Fast-paced island-to-island run with snorkel stops and cliff views.",
    price: 79000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-2.png",
    duration: 6
  },
  // Conservation (+2)
  {
    id: 23,
    category: "jage-bumi",
    subCategory: "conservation",
    title: "Reef Health Photo Transects",
    description: "Capture standardized reef photos to support long-term monitoring.",
    price: 70000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-1.jpg",
    duration: 5
  },
  {
    id: 24,
    category: "jage-laut",
    subCategory: "conservation",
    title: "Plastic-Free Harbor Initiative",
    description: "Harbor-side cleanup and waste-sorting workshop with local community.",
    price: 58000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-2.png",
    duration: 3
  },
  // Education (+2)
  {
    id: 25,
    category: "jage-laut",
    subCategory: "education",
    title: "Coastal Navigation Basics",
    description: "Learn charts, bearings, and safe coastal navigation fundamentals.",
    price: 61000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-1.jpg",
    duration: 3
  },
  {
    id: 26,
    category: "jage-laut",
    subCategory: "education",
    title: "Sea Legends Storywalk",
    description: "Guided coastal walk featuring maritime folklore and local history.",
    price: 56000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-2.png",
    duration: 2
  },
  // Nature (+2)
  {
    id: 27,
    category: "jage-laut",
    subCategory: "nature",
    title: "Tidal Pool Micro-Safari",
    description: "Explore tide pools and identify tiny marine creatures with a guide.",
    price: 52000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-1.jpg",
    duration: 2
  },
  {
    id: 28,
    category: "jage-laut",
    subCategory: "nature",
    title: "Starry Night Bioluminescence Watch",
    description: "Nighttime boat drift to witness natural plankton glow (seasonal).",
    price: 68000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-2.png",
    duration: 3
  },
]

export const subCategories = [
  { label: "Adventure", value: "adventure" },
  { label: "Conservation", value: "conservation" },
  { label: "Education", value: "education" },
  { label: "Nature", value: "nature" },
]