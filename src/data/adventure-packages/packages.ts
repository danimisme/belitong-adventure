import { PackageType } from "@/models/Packages"

export const packagesData : PackageType[] = [
  // 1
  // {
  //   id: 1,
  //   category: "jage-bumi",
  //   subCategory: "adventure",
  //   title: "Laskar Pelangi Legacy Trail",
  //   slug: "laskar-pelangi-legacy-trail",
  //   description: "A literary and cultural journey through the land of the Rainbow Troops (Laskar Pelangi).",
  //   location: "Belitung Island, Indonesia",
  //   price: 50000,
  //   pricePack: "person",
  //   imgUrl: "/assets/images/jage-bumi/jage-bumi-1.png",
  //   imgGalleryUrls: [
  //     "/assets/images/packages/gallery1-1.jpg",
  //     "/assets/images/packages/gallery1-2.jpg",
  //     "/assets/images/packages/gallery1-3.jpg",
  //     "/assets/images/packages/gallery1-4.jpg",
  //   ],
  //   duration: "8 Hours",
  //   maxGuests: 10,
  //   avability: "Year Round",
  //   itinerary: [
  //     { day: 1, title: "Literary Tour", activities: ["Visit Laskar Pelangi sites", "Cultural storytelling", "Lunch at local warung"] }
  //   ],
  //   included: ["Guide", "Transport", "Lunch"],
  //   notIncluded: ["Personal expenses"],
  //   importantInfo: ["Bring hat and sunscreen"]
  // },
  {
    id: 1,
    category: "jage-bumi",
    subCategory: "adventure",
    title: "Ocean Island Explore",
    slug: "ocean-island-explore",
    description: "Embark on an unforgettable journey through the pristine waters and stunning islands of Belitung. This carefully crafted adventure package combines relaxation with exciting water activities, allowing you to discover hidden beaches, crystal-clear lagoons, and vibrant marine life. Perfect for nature lovers and adventure seekers alike.",
    location: "Belitung Island, Indonesia",
    price: 50000,
    pricePack: "person",
    imgUrl: "/assets/images/packages/banner1.jpg",
    imgGalleryUrls: [
      "/assets/images/packages/gallery1-1.jpg",
      "/assets/images/packages/gallery1-2.jpg",
      "/assets/images/packages/gallery1-3.jpg",
      "/assets/images/packages/gallery1-4.jpg",
    ],
    duration: "3 Days 2 Nights",
    maxGuests: 8,
    avability: "Year Round",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Island Introduction",
        activities: [
          "Pick up from hotel or airport",
          "Welcome briefing and safety orientation",
          "Boat ride to Lengkuas Island",
          "Visit the historic lighthouse",
          "Snorkeling at Lengkuas coral reef",
          "Lunch on the beach",
          "Sunset viewing at Tanjung Kelayang",
          "Check-in to accommodation"
        ]
      },
      {
        day: 2,
        title: "Island Hopping Adventure",
        activities: [
          "Early breakfast at hotel",
          "Visit Burung Island bird sanctuary",
          "Explore Kepayang Island caves",
          "Swimming at Batu Berlayar",
          "Traditional seafood lunch",
          "Snorkeling at Pulau Pasir",
          "Beach relaxation time",
          "Return to hotel for dinner"
        ]
      },
      {
        day: 3,
        title: "Cultural Experience & Departure",
        activities: [
          "Breakfast and hotel check-out",
          "Visit local fishing village",
          "Traditional market tour",
          "Lunch at local restaurant",
          "Optional: Last-minute beach visit",
          "Transfer to airport or next destination"
        ]
      }
    ],
    included: [
      "Professional tour guide",
      "All transportation during tour",
      "Boat rental for island hopping",
      "Snorkeling equipment",
      "Life jackets and safety gear",
      "2 nights accommodation",
      "Daily breakfast",
      "3x lunch (Day 1, 2, 3)",
      "Entrance fees to all attractions",
      "Bottled water during activities",
      "Travel insurance"
    ],
    notIncluded: [
      "Flight tickets to/from Belitung",
      "Dinner meals",
      "Personal expenses",
      "Tips for guide and crew",
      "Additional water activities",
      "Souvenirs"
    ],
    importantInfo: [
      "Minimum 2 participants required for tour confirmation",
      "Bring sunscreen, swimwear, and waterproof bag",
      "Tours may be adjusted due to weather conditions",
      "Full refund available if cancelled 7 days before departure",
      "Not recommended for guests with severe sea sickness"
    ]
  },
  // 2
  {
    id: 2,
    category: "jage-bumi",
    subCategory: "adventure",
    title: "Colors of the Earth Expedition",
    slug: "colors-of-the-earth-expedition",
    description: "Chase the golden hour and find tranquility on the water.",
    location: "Belitung Island, Indonesia",
    price: 100000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-bumi/jage-bumi-2.png",
    imgGalleryUrls: [
      "/assets/images/boat/1.png",
      "/assets/images/boat/2.png",
    ],
    duration: "5 Hours",
    maxGuests: 10,
    avability: "Year Round",
    itinerary: [
      { day: 1, title: "Golden Hour", activities: ["Sunset boat ride", "Photography session", "Barbeque time"] }
    ],
    included: ["Boat", "Guide"],
    notIncluded: ["Meals"],
    importantInfo: ["Weather dependent", "Bring camera"]
  },
  // 3
  {
    id: 3,
    category: "jage-laut",
    subCategory: "adventure",
    title: "Classic Island Explorer",
    slug: "classic-island-explorer",
    description: "Discover the iconic granite islands and snorkel in pristine waters.",
    location: "Belitung Island, Indonesia",
    price: 50000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-1.jpg",
    imgGalleryUrls: [
      "/assets/images/packages/gallery3-1.jpg",
      "/assets/images/packages/gallery3-2.jpg",
    ],
    duration: "8 Hours",
    maxGuests: 12,
    avability: "Year Round",
    itinerary: [
      { day: 1, title: "Island Hopping", activities: ["Visit 3 islands", "Snorkeling", "Beach lunch"] }
    ],
    included: ["Boat", "Snorkel gear", "Lunch"],
    notIncluded: ["Personal expenses"],
    importantInfo: ["Bring swimwear"]
  },
  // 4
  {
    id: 4,
    category: "jage-laut",
    subCategory: "nature",
    title: "Sunset & Secluded Shores",
    slug: "sunset-secluded-shores",
    description: "Chase the golden hour and find tranquility on the water.",
    location: "Belitung Island, Indonesia",
    price: 50000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-2.png",
    imgGalleryUrls: [
      "/assets/images/packages/gallery4-1.jpg",
      "/assets/images/packages/gallery4-2.jpg",
    ],
    duration: "3 Hours",
    maxGuests: 6,
    avability: "Year Round",
    itinerary: [
      { day: 1, title: "Sunset Cruise", activities: ["Boat ride", "Beach picnic"] }
    ],
    included: ["Boat", "Guide"],
    notIncluded: ["Meals"],
    importantInfo: ["Bring camera"]
  },
  // 5
  {
    id: 5,
    category: "jage-bumi",
    subCategory: "conservation",
    title: "Mangrove Guardians Walk",
    slug: "mangrove-guardians-walk",
    description: "Explore mangrove ecosystems while learning hands-on conservation practices.",
    location: "Belitung Island, Indonesia",
    price: 60000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-bumi/jage-bumi-1.png",
    imgGalleryUrls: [
      "/assets/images/packages/gallery5-1.jpg",
    ],
    duration: "4 Hours",
    maxGuests: 15,
    avability: "Year Round",
    itinerary: [
      { day: 1, title: "Mangrove Walk", activities: ["Guided walk", "Planting activity"] }
    ],
    included: ["Guide", "Tools"],
    notIncluded: ["Meals"],
    importantInfo: ["Wear boots"]
  },
  // 6
  {
    id: 6,
    category: "jage-bumi",
    subCategory: "conservation",
    title: "Bukit Conservation Trek",
    slug: "bukit-conservation-trek",
    description: "Guided trek focusing on native flora restoration and hillside cleanup.",
    location: "Belitung Island, Indonesia",
    price: 65000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-bumi/jage-bumi-2.png",
    imgGalleryUrls: [
      "/assets/images/packages/gallery6-1.jpg",
    ],
    duration: "5 Hours",
    maxGuests: 10,
    avability: "Year Round",
    itinerary: [
      { day: 1, title: "Hill Trek", activities: ["Trekking", "Cleanup"] }
    ],
    included: ["Guide", "Cleanup kit"],
    notIncluded: ["Meals"],
    importantInfo: ["Bring water"]
  },
  // 7
  {
    id: 7,
    category: "jage-bumi",
    subCategory: "education",
    title: "Geology of Belitung Workshop",
    slug: "geology-belitung-workshop",
    description: "Hands-on introduction to Belitung's unique granite formations and landforms.",
    location: "Belitung Island, Indonesia",
    price: 55000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-bumi/jage-bumi-1.png",
    imgGalleryUrls: [
      "/assets/images/packages/gallery7-1.jpg",
    ],
    duration: "3 Hours",
    maxGuests: 20,
    avability: "Year Round",
    itinerary: [
      { day: 1, title: "Geology Class", activities: ["Field study", "Rock identification"] }
    ],
    included: ["Guide", "Materials"],
    notIncluded: ["Meals"],
    importantInfo: ["Wear hat"]
  },
  // 8
  {
    id: 8,
    category: "jage-bumi",
    subCategory: "education",
    title: "Tin Mining Heritage Tour",
    slug: "tin-mining-heritage-tour",
    description: "Educational tour tracing the history and impact of tin mining on the island.",
    location: "Belitung Island, Indonesia",
    price: 52000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-bumi/jage-bumi-2.png",
    imgGalleryUrls: [
      "/assets/images/packages/gallery8-1.jpg",
    ],
    duration: "4 Hours",
    maxGuests: 15,
    avability: "Year Round",
    itinerary: [
      { day: 1, title: "Mining Tour", activities: ["Museum visit", "Site walk"] }
    ],
    included: ["Guide", "Entry ticket"],
    notIncluded: ["Meals"],
    importantInfo: ["Wear comfortable shoes"]
  },
  // 9
  {
    id: 9,
    category: "jage-bumi",
    subCategory: "nature",
    title: "Batu Granit Forest Hike",
    slug: "batu-granit-forest-hike",
    description: "Scenic hike through granite boulder forests and shaded woodland paths.",
    location: "Belitung Island, Indonesia",
    price: 48000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-bumi/jage-bumi-1.png",
    imgGalleryUrls: [
      "/assets/images/packages/gallery9-1.jpg",
    ],
    duration: "6 Hours",
    maxGuests: 12,
    avability: "Year Round",
    itinerary: [
      { day: 1, title: "Forest Hike", activities: ["Guided hike", "Birdwatching"] }
    ],
    included: ["Guide", "Snacks"],
    notIncluded: ["Meals"],
    importantInfo: ["Bring water"]
  },
  // 10
  {
    id: 10,
    category: "jage-bumi",
    subCategory: "nature",
    title: "Riverbank Birdwatching Safari",
    slug: "riverbank-birdwatching-safari",
    description: "Observe endemic and migratory birds along tranquil riverbanks.",
    location: "Belitung Island, Indonesia",
    price: 50000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-bumi/jage-bumi-2.png",
    imgGalleryUrls: [
      "/assets/images/packages/gallery10-1.jpg",
    ],
    duration: "2 Hours",
    maxGuests: 8,
    avability: "Year Round",
    itinerary: [
      { day: 1, title: "Birdwatching", activities: ["River walk", "Bird spotting"] }
    ],
    included: ["Guide", "Binoculars"],
    notIncluded: ["Meals"],
    importantInfo: ["Bring insect repellent"]
  },
  // 11
  {
    id: 11,
    category: "jage-laut",
    subCategory: "adventure",
    title: "Blue Lagoon Kayak Challenge",
    slug: "blue-lagoon-kayak-challenge",
    description: "Paddle across turquoise waters and navigate granite islets by kayak.",
    location: "Belitung Island, Indonesia",
    price: 70000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-1.jpg",
    imgGalleryUrls: [
      "/assets/images/packages/gallery11-1.jpg",
    ],
    duration: "5 Hours",
    maxGuests: 6,
    avability: "Year Round",
    itinerary: [
      { day: 1, title: "Kayak Adventure", activities: ["Kayaking", "Island stop"] }
    ],
    included: ["Kayak", "Guide"],
    notIncluded: ["Meals"],
    importantInfo: ["Bring swimwear"]
  },
  // 12
  {
    id: 12,
    category: "jage-laut",
    subCategory: "conservation",
    title: "Coral Nursery Volunteering",
    slug: "coral-nursery-volunteering",
    description: "Assist local teams in coral fragment planting and reef monitoring.",
    location: "Belitung Island, Indonesia",
    price: 80000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-2.png",
    imgGalleryUrls: [
      "/assets/images/packages/gallery12-1.jpg",
    ],
    duration: "6 Hours",
    maxGuests: 10,
    avability: "Year Round",
    itinerary: [
      { day: 1, title: "Coral Planting", activities: ["Briefing", "Planting", "Monitoring"] }
    ],
    included: ["Guide", "Equipment"],
    notIncluded: ["Meals"],
    importantInfo: ["Bring swimwear"]
  },
  // 13
  {
    id: 13,
    category: "jage-laut",
    subCategory: "conservation",
    title: "Beach Cleanup & Turtle Watch",
    slug: "beach-cleanup-turtle-watch",
    description: "Morning beach cleanup followed by a guided turtle habitat briefing.",
    location: "Belitung Island, Indonesia",
    price: 62000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-1.jpg",
    imgGalleryUrls: [
      "/assets/images/packages/gallery13-1.jpg",
    ],
    duration: "3 Hours",
    maxGuests: 20,
    avability: "Year Round",
    itinerary: [
      { day: 1, title: "Cleanup & Turtle Watch", activities: ["Beach cleanup", "Turtle briefing"] }
    ],
    included: ["Guide", "Cleanup kit"],
    notIncluded: ["Meals"],
    importantInfo: ["Wear hat"]
  },
  // 14
  {
    id: 14,
    category: "jage-laut",
    subCategory: "education",
    title: "Marine Ecology Field Class",
    slug: "marine-ecology-field-class",
    description: "Learn reef ecology and fish identification with a marine guide.",
    location: "Belitung Island, Indonesia",
    price: 75000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-2.png",
    imgGalleryUrls: [
      "/assets/images/packages/gallery14-1.jpg",
    ],
    duration: "4 Hours",
    maxGuests: 15,
    avability: "Year Round",
    itinerary: [
      { day: 1, title: "Ecology Class", activities: ["Reef walk", "Fish ID"] }
    ],
    included: ["Guide", "Materials"],
    notIncluded: ["Meals"],
    importantInfo: ["Bring notebook"]
  },
  // 15
  {
    id: 15,
    category: "jage-laut",
    subCategory: "education",
    title: "Fisherfolk Knowledge Exchange",
    slug: "fisherfolk-knowledge-exchange",
    description: "Dockside session on sustainable fishing practices with local fishermen.",
    location: "Belitung Island, Indonesia",
    price: 58000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-1.jpg",
    imgGalleryUrls: [
      "/assets/images/packages/gallery15-1.jpg",
    ],
    duration: "2 Hours",
    maxGuests: 10,
    avability: "Year Round",
    itinerary: [
      { day: 1, title: "Fishing Exchange", activities: ["Dockside talk", "Fishing demo"] }
    ],
    included: ["Guide", "Demo materials"],
    notIncluded: ["Meals"],
    importantInfo: ["Bring hat"]
  },
  // 16
  {
    id: 16,
    category: "jage-laut",
    subCategory: "nature",
    title: "Sunrise Sandbar Stroll",
    slug: "sunrise-sandbar-stroll",
    description: "Early walk across tidal sandbars teeming with small marine life.",
    location: "Belitung Island, Indonesia",
    price: 54000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-2.png",
    imgGalleryUrls: [
      "/assets/images/packages/gallery16-1.jpg",
    ],
    duration: "2 Hours",
    maxGuests: 8,
    avability: "Year Round",
    itinerary: [
      { day: 1, title: "Sandbar Walk", activities: ["Guided walk", "Marine life spotting"] }
    ],
    included: ["Guide"],
    notIncluded: ["Meals"],
    importantInfo: ["Wear sandals"]
  },
  // 17
  {
    id: 17,
    category: "jage-laut",
    subCategory: "adventure",
    title: "Granite Coves Snorkel Safari",
    slug: "granite-coves-snorkel-safari",
    description: "Guided snorkel tour through crystal coves and granite-lined reefs.",
    location: "Belitung Island, Indonesia",
    price: 69000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-1.jpg",
    imgGalleryUrls: [
      "/assets/images/packages/gallery17-1.jpg",
    ],
    duration: "4 Hours",
    maxGuests: 10,
    avability: "Year Round",
    itinerary: [
      { day: 1, title: "Snorkel Safari", activities: ["Snorkeling", "Cove exploration"] }
    ],
    included: ["Guide", "Snorkel gear"],
    notIncluded: ["Meals"],
    importantInfo: ["Bring swimwear"]
  },
  // 18
  {
    id: 18,
    category: "jage-laut",
    subCategory: "conservation",
    title: "Seagrass Bed Monitoring",
    slug: "seagrass-bed-monitoring",
    description: "Help survey seagrass meadows and learn about their role in the ecosystem.",
    location: "Belitung Island, Indonesia",
    price: 66000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-2.png",
    imgGalleryUrls: [
      "/assets/images/packages/gallery18-1.jpg",
    ],
    duration: "5 Hours",
    maxGuests: 12,
    avability: "Year Round",
    itinerary: [
      { day: 1, title: "Seagrass Survey", activities: ["Survey", "Data collection"] }
    ],
    included: ["Guide", "Survey kit"],
    notIncluded: ["Meals"],
    importantInfo: ["Bring notebook"]
  },
  // 19
  {
    id: 19,
    category: "jage-laut",
    subCategory: "education",
    title: "Lighthouse Maritime History Tour",
    slug: "lighthouse-maritime-history-tour",
    description: "Story-rich visit to historic lighthouse sites and coastal landmarks.",
    location: "Belitung Island, Indonesia",
    price: 60000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-1.jpg",
    imgGalleryUrls: [
      "/assets/images/packages/gallery19-1.jpg",
    ],
    duration: "3 Hours",
    maxGuests: 15,
    avability: "Year Round",
    itinerary: [
      { day: 1, title: "Lighthouse Tour", activities: ["Site visit", "History talk"] }
    ],
    included: ["Guide", "Entry ticket"],
    notIncluded: ["Meals"],
    importantInfo: ["Wear hat"]
  },
  // 20
  {
    id: 20,
    category: "jage-laut",
    subCategory: "nature",
    title: "Dolphin Spotting Morning Cruise",
    slug: "dolphin-spotting-morning-cruise",
    description: "Gentle cruise to observe wild dolphins at sunrise (seasonal).",
    location: "Belitung Island, Indonesia",
    price: 56000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-2.png",
    imgGalleryUrls: [
      "/assets/images/packages/gallery20-1.jpg",
    ],
    duration: "3 Hours",
    maxGuests: 10,
    avability: "Seasonal",
    itinerary: [
      { day: 1, title: "Dolphin Cruise", activities: ["Cruise", "Dolphin spotting"] }
    ],
    included: ["Guide", "Boat"],
    notIncluded: ["Meals"],
    importantInfo: ["Bring camera"]
  },
  // 21
  {
    id: 21,
    category: "jage-laut",
    subCategory: "adventure",
    title: "Hidden Lagoons SUP Quest",
    slug: "hidden-lagoons-sup-quest",
    description: "Stand-up paddle adventure through calm lagoons and narrow channels.",
    location: "Belitung Island, Indonesia",
    price: 72000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-1.jpg",
    imgGalleryUrls: [
      "/assets/images/packages/gallery21-1.jpg",
    ],
    duration: "4 Hours",
    maxGuests: 8,
    avability: "Year Round",
    itinerary: [
      { day: 1, title: "SUP Adventure", activities: ["SUP", "Lagoon exploration"] }
    ],
    included: ["SUP board", "Guide"],
    notIncluded: ["Meals"],
    importantInfo: ["Bring swimwear"]
  },
  // 22
  {
    id: 22,
    category: "jage-laut",
    subCategory: "adventure",
    title: "Island Hopping Speedboat Rush",
    slug: "island-hopping-speedboat-rush",
    description: "Fast-paced island-to-island run with snorkel stops and cliff views.",
    location: "Belitung Island, Indonesia",
    price: 79000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-2.png",
    imgGalleryUrls: [
      "/assets/images/packages/gallery22-1.jpg",
    ],
    duration: "6 Hours",
    maxGuests: 10,
    avability: "Year Round",
    itinerary: [
      { day: 1, title: "Speedboat Tour", activities: ["Island hopping", "Snorkeling"] }
    ],
    included: ["Speedboat", "Guide"],
    notIncluded: ["Meals"],
    importantInfo: ["Bring swimwear"]
  },
  // 23
  {
    id: 23,
    category: "jage-bumi",
    subCategory: "conservation",
    title: "Reef Health Photo Transects",
    slug: "reef-health-photo-transects",
    description: "Capture standardized reef photos to support long-term monitoring.",
    location: "Belitung Island, Indonesia",
    price: 70000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-1.jpg",
    imgGalleryUrls: [
      "/assets/images/packages/gallery23-1.jpg",
    ],
    duration: "5 Hours",
    maxGuests: 8,
    avability: "Year Round",
    itinerary: [
      { day: 1, title: "Photo Transects", activities: ["Photography", "Reef survey"] }
    ],
    included: ["Guide", "Camera"],
    notIncluded: ["Meals"],
    importantInfo: ["Bring swimwear"]
  },
  // 24
  {
    id: 24,
    category: "jage-laut",
    subCategory: "conservation",
    title: "Plastic-Free Harbor Initiative",
    slug: "plastic-free-harbor-initiative",
    description: "Harbor-side cleanup and waste-sorting workshop with local community.",
    location: "Belitung Island, Indonesia",
    price: 58000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-2.png",
    imgGalleryUrls: [
      "/assets/images/packages/gallery24-1.jpg",
    ],
    duration: "3 Hours",
    maxGuests: 20,
    avability: "Year Round",
    itinerary: [
      { day: 1, title: "Harbor Cleanup", activities: ["Cleanup", "Workshop"] }
    ],
    included: ["Guide", "Cleanup kit"],
    notIncluded: ["Meals"],
    importantInfo: ["Wear gloves"]
  },
  // 25
  {
    id: 25,
    category: "jage-laut",
    subCategory: "education",
    title: "Coastal Navigation Basics",
    slug: "coastal-navigation-basics",
    description: "Learn charts, bearings, and safe coastal navigation fundamentals.",
    location: "Belitung Island, Indonesia",
    price: 61000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-1.jpg",
    imgGalleryUrls: [
      "/assets/images/packages/gallery25-1.jpg",
    ],
    duration: "3 Hours",
    maxGuests: 12,
    avability: "Year Round",
    itinerary: [
      { day: 1, title: "Navigation Class", activities: ["Chart reading", "Navigation practice"] }
    ],
    included: ["Guide", "Materials"],
    notIncluded: ["Meals"],
    importantInfo: ["Bring notebook"]
  },
  // 26
  {
    id: 26,
    category: "jage-laut",
    subCategory: "education",
    title: "Sea Legends Storywalk",
    slug: "sea-legends-storywalk",
    description: "Guided coastal walk featuring maritime folklore and local history.",
    location: "Belitung Island, Indonesia",
    price: 56000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-2.png",
    imgGalleryUrls: [
      "/assets/images/packages/gallery26-1.jpg",
    ],
    duration: "2 Hours",
    maxGuests: 15,
    avability: "Year Round",
    itinerary: [
      { day: 1, title: "Storywalk", activities: ["Coastal walk", "Folklore session"] }
    ],
    included: ["Guide"],
    notIncluded: ["Meals"],
    importantInfo: ["Wear hat"]
  },
  // 27
  {
    id: 27,
    category: "jage-laut",
    subCategory: "nature",
    title: "Tidal Pool Micro-Safari",
    slug: "tidal-pool-micro-safari",
    description: "Explore tide pools and identify tiny marine creatures with a guide.",
    location: "Belitung Island, Indonesia",
    price: 52000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-1.jpg",
    imgGalleryUrls: [
      "/assets/images/packages/gallery27-1.jpg",
    ],
    duration: "2 Hours",
    maxGuests: 10,
    avability: "Year Round",
    itinerary: [
      { day: 1, title: "Micro-Safari", activities: ["Tide pool walk", "Creature spotting"] }
    ],
    included: ["Guide"],
    notIncluded: ["Meals"],
    importantInfo: ["Wear sandals"]
  },
  // 28
  {
    id: 28,
    category: "jage-laut",
    subCategory: "nature",
    title: "Starry Night Bioluminescence Watch",
    slug: "starry-night-bioluminescence-watch",
    description: "Nighttime boat drift to witness natural plankton glow (seasonal).",
    location: "Belitung Island, Indonesia",
    price: 68000,
    pricePack: "person",
    imgUrl: "/assets/images/jage-laut/jage-laut-2.png",
    imgGalleryUrls: [
      "/assets/images/packages/gallery28-1.jpg",
    ],
    duration: "3 Hours",
    maxGuests: 8,
    avability: "Seasonal",
    itinerary: [
      { day: 1, title: "Bioluminescence Watch", activities: ["Boat drift", "Plankton observation"] }
    ],
    included: ["Guide", "Boat"],
    notIncluded: ["Meals"],
    importantInfo: ["Bring camera"]
  },
]

// export const packages : PackageType[] = [
//   {
//     id: 1,
//     category: "jage-bumi",
//     subCategory: "adventure",
//     title: "Laskar Pelangi Legacy Trail",
//     description: "A literary and cultural journey through the land of the Rainbow Troops (Laskar Pelangi).",
//     price: 50000,
//     pricePack: "person",
//     imgUrl: "/assets/images/jage-bumi/jage-bumi-1.png",
//     duration: 8
//   },
//   {
//     id: 2,
//     category: "jage-bumi",
//     subCategory: "adventure",
//     title: "Colors of the Earth Expedition",
//     description: "Chase the golden hour and find tranquility on the water.",
//     price: 50000,
//     pricePack: "person",
//     imgUrl: "/assets/images/jage-bumi/jage-bumi-2.png",
//     duration: 3
//   },
//   {
//     id: 3,
//     category: "jage-laut",
//     subCategory: "adventure",
//     title: "Classic Island Explorer",
//     description:
//       "Discover the iconic granite islands and snorkel in pristine waters.",
//     price: 50000,
//     pricePack: "person",
//     imgUrl: "/assets/images/jage-laut/jage-laut-1.jpg",
//     duration: 8
//   },
//   {
//     id: 4,
//     category: "jage-laut",
//     subCategory: "nature",
//     title: "Sunset & Secluded Shores",
//     description: "Chase the golden hour and find tranquility on the water.",
//     price: 50000,
//     pricePack: "person",
//     imgUrl: "/assets/images/jage-laut/jage-laut-2.png",
//     duration: 3
//   },
//   // Jage Bumi - Conservation (2)
//   {
//     id: 5,
//     category: "jage-bumi",
//     subCategory: "conservation",
//     title: "Mangrove Guardians Walk",
//     description: "Explore mangrove ecosystems while learning hands-on conservation practices.",
//     price: 60000,
//     pricePack: "person",
//     imgUrl: "/assets/images/jage-bumi/jage-bumi-1.png",
//     duration: 4
//   },
//   {
//     id: 6,
//     category: "jage-bumi",
//     subCategory: "conservation",
//     title: "Bukit Conservation Trek",
//     description: "Guided trek focusing on native flora restoration and hillside cleanup.",
//     price: 65000,
//     pricePack: "person",
//     imgUrl: "/assets/images/jage-bumi/jage-bumi-2.png",
//     duration: 5
//   },
//   // Jage Bumi - Education (2)
//   {
//     id: 7,
//     category: "jage-bumi",
//     subCategory: "education",
//     title: "Geology of Belitung Workshop",
//     description: "Hands-on introduction to Belitung's unique granite formations and landforms.",
//     price: 55000,
//     pricePack: "person",
//     imgUrl: "/assets/images/jage-bumi/jage-bumi-1.png",
//     duration: 3
//   },
//   {
//     id: 8,
//     category: "jage-bumi",
//     subCategory: "education",
//     title: "Tin Mining Heritage Tour",
//     description: "Educational tour tracing the history and impact of tin mining on the island.",
//     price: 52000,
//     pricePack: "person",
//     imgUrl: "/assets/images/jage-bumi/jage-bumi-2.png",
//     duration: 4
//   },
//   // Jage Bumi - Nature (2)
//   {
//     id: 9,
//     category: "jage-bumi",
//     subCategory: "nature",
//     title: "Batu Granit Forest Hike",
//     description: "Scenic hike through granite boulder forests and shaded woodland paths.",
//     price: 48000,
//     pricePack: "person",
//     imgUrl: "/assets/images/jage-bumi/jage-bumi-1.png",
//     duration: 6
//   },
//   {
//     id: 10,
//     category: "jage-bumi",
//     subCategory: "nature",
//     title: "Riverbank Birdwatching Safari",
//     description: "Observe endemic and migratory birds along tranquil riverbanks.",
//     price: 50000,
//     pricePack: "person",
//     imgUrl: "/assets/images/jage-bumi/jage-bumi-2.png",
//     duration: 2
//   },
//   // Jage Laut - Adventure (needs +1 to reach 2)
//   {
//     id: 11,
//     category: "jage-laut",
//     subCategory: "adventure",
//     title: "Blue Lagoon Kayak Challenge",
//     description: "Paddle across turquoise waters and navigate granite islets by kayak.",
//     price: 70000,
//     pricePack: "person",
//     imgUrl: "/assets/images/jage-laut/jage-laut-1.jpg",
//     duration: 5
//   },
//   // Jage Laut - Conservation (2)
//   {
//     id: 12,
//     category: "jage-laut",
//     subCategory: "conservation",
//     title: "Coral Nursery Volunteering",
//     description: "Assist local teams in coral fragment planting and reef monitoring.",
//     price: 80000,
//     pricePack: "person",
//     imgUrl: "/assets/images/jage-laut/jage-laut-2.png",
//     duration: 6
//   },
//   {
//     id: 13,
//     category: "jage-laut",
//     subCategory: "conservation",
//     title: "Beach Cleanup & Turtle Watch",
//     description: "Morning beach cleanup followed by a guided turtle habitat briefing.",
//     price: 62000,
//     pricePack: "person",
//     imgUrl: "/assets/images/jage-laut/jage-laut-1.jpg",
//     duration: 3
//   },
//   // Jage Laut - Education (2)
//   {
//     id: 14,
//     category: "jage-laut",
//     subCategory: "education",
//     title: "Marine Ecology Field Class",
//     description: "Learn reef ecology and fish identification with a marine guide.",
//     price: 75000,
//     pricePack: "person",
//     imgUrl: "/assets/images/jage-laut/jage-laut-2.png",
//     duration: 4
//   },
//   {
//     id: 15,
//     category: "jage-laut",
//     subCategory: "education",
//     title: "Fisherfolk Knowledge Exchange",
//     description: "Dockside session on sustainable fishing practices with local fishermen.",
//     price: 58000,
//     pricePack: "person",
//     imgUrl: "/assets/images/jage-laut/jage-laut-1.jpg",
//     duration: 2
//   },
//   // Jage Laut - Nature (needs +1 to reach 2)
//   {
//     id: 16,
//     category: "jage-laut",
//     subCategory: "nature",
//     title: "Sunrise Sandbar Stroll",
//     description: "Early walk across tidal sandbars teeming with small marine life.",
//     price: 54000,
//     pricePack: "person",
//     imgUrl: "/assets/images/jage-laut/jage-laut-2.png",
//     duration: 2
//   },
//   // Jage Laut - Additions to reach 3 per subcategory
//   {
//     id: 17,
//     category: "jage-laut",
//     subCategory: "adventure",
//     title: "Granite Coves Snorkel Safari",
//     description: "Guided snorkel tour through crystal coves and granite-lined reefs.",
//     price: 69000,
//     pricePack: "person",
//     imgUrl: "/assets/images/jage-laut/jage-laut-1.jpg",
//     duration: 4
//   },
//   {
//     id: 18,
//     category: "jage-laut",
//     subCategory: "conservation",
//     title: "Seagrass Bed Monitoring",
//     description: "Help survey seagrass meadows and learn about their role in the ecosystem.",
//     price: 66000,
//     pricePack: "person",
//     imgUrl: "/assets/images/jage-laut/jage-laut-2.png",
//     duration: 5
//   },
//   {
//     id: 19,
//     category: "jage-laut",
//     subCategory: "education",
//     title: "Lighthouse Maritime History Tour",
//     description: "Story-rich visit to historic lighthouse sites and coastal landmarks.",
//     price: 60000,
//     pricePack: "person",
//     imgUrl: "/assets/images/jage-laut/jage-laut-1.jpg",
//     duration: 3
//   },
//   {
//     id: 20,
//     category: "jage-laut",
//     subCategory: "nature",
//     title: "Dolphin Spotting Morning Cruise",
//     description: "Gentle cruise to observe wild dolphins at sunrise (seasonal).",
//     price: 56000,
//     pricePack: "person",
//     imgUrl: "/assets/images/jage-laut/jage-laut-2.png",
//     duration: 3
//   },
//   // Jage Laut - Add 2 more each to reach 5 per subcategory
//   // Adventure (+2)
//   {
//     id: 21,
//     category: "jage-laut",
//     subCategory: "adventure",
//     title: "Hidden Lagoons SUP Quest",
//     description: "Stand-up paddle adventure through calm lagoons and narrow channels.",
//     price: 72000,
//     pricePack: "person",
//     imgUrl: "/assets/images/jage-laut/jage-laut-1.jpg",
//     duration: 4
//   },
//   {
//     id: 22,
//     category: "jage-laut",
//     subCategory: "adventure",
//     title: "Island Hopping Speedboat Rush",
//     description: "Fast-paced island-to-island run with snorkel stops and cliff views.",
//     price: 79000,
//     pricePack: "person",
//     imgUrl: "/assets/images/jage-laut/jage-laut-2.png",
//     duration: 6
//   },
//   // Conservation (+2)
//   {
//     id: 23,
//     category: "jage-bumi",
//     subCategory: "conservation",
//     title: "Reef Health Photo Transects",
//     description: "Capture standardized reef photos to support long-term monitoring.",
//     price: 70000,
//     pricePack: "person",
//     imgUrl: "/assets/images/jage-laut/jage-laut-1.jpg",
//     duration: 5
//   },
//   {
//     id: 24,
//     category: "jage-laut",
//     subCategory: "conservation",
//     title: "Plastic-Free Harbor Initiative",
//     description: "Harbor-side cleanup and waste-sorting workshop with local community.",
//     price: 58000,
//     pricePack: "person",
//     imgUrl: "/assets/images/jage-laut/jage-laut-2.png",
//     duration: 3
//   },
//   // Education (+2)
//   {
//     id: 25,
//     category: "jage-laut",
//     subCategory: "education",
//     title: "Coastal Navigation Basics",
//     description: "Learn charts, bearings, and safe coastal navigation fundamentals.",
//     price: 61000,
//     pricePack: "person",
//     imgUrl: "/assets/images/jage-laut/jage-laut-1.jpg",
//     duration: 3
//   },
//   {
//     id: 26,
//     category: "jage-laut",
//     subCategory: "education",
//     title: "Sea Legends Storywalk",
//     description: "Guided coastal walk featuring maritime folklore and local history.",
//     price: 56000,
//     pricePack: "person",
//     imgUrl: "/assets/images/jage-laut/jage-laut-2.png",
//     duration: 2
//   },
//   // Nature (+2)
//   {
//     id: 27,
//     category: "jage-laut",
//     subCategory: "nature",
//     title: "Tidal Pool Micro-Safari",
//     description: "Explore tide pools and identify tiny marine creatures with a guide.",
//     price: 52000,
//     pricePack: "person",
//     imgUrl: "/assets/images/jage-laut/jage-laut-1.jpg",
//     duration: 2
//   },
//   {
//     id: 28,
//     category: "jage-laut",
//     subCategory: "nature",
//     title: "Starry Night Bioluminescence Watch",
//     description: "Nighttime boat drift to witness natural plankton glow (seasonal).",
//     price: 68000,
//     pricePack: "person",
//     imgUrl: "/assets/images/jage-laut/jage-laut-2.png",
//     duration: 3
//   },
// ]

export const subCategories = [
  { label: "Adventure", value: "adventure" },
  { label: "Conservation", value: "conservation" },
  { label: "Education", value: "education" },
  { label: "Nature", value: "nature" },
]