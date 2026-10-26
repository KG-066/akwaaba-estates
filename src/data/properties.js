// DEMONSTRATION DATA ONLY.
// Every property, price and description below is fictional and is not a real offer.

// Change this to 'jpg' later if you replace the placeholders with real photos
// that use the same filenames (e.g. east-legon-hills-villa-1.jpg).
const IMAGE_EXT = 'svg'

const rawProperties = [
  {
    id: 1,
    slug: 'east-legon-hills-villa',
    name: 'East Legon Hills Villa',
    location: 'East Legon',
    type: 'Villa',
    status: 'sale',
    price: 4850000,
    bedrooms: 5,
    bathrooms: 5,
    area: 520,
    featured: true,
    description:
      'A striking five-bedroom villa in a gated East Legon Hills community, designed for families who value space and privacy. Double-height living areas open onto a landscaped garden and covered terrace. This is demonstration content and not a real listing.',
    amenities: ['Swimming pool', '24/7 security', 'Backup generator', 'Boys quarters', 'Landscaped garden', 'Smart home wiring'],
  },
  {
    id: 2,
    slug: 'cantonments-diplomatic-residence',
    name: 'Cantonments Diplomatic Residence',
    location: 'Cantonments',
    type: 'House',
    status: 'sale',
    price: 9500000,
    bedrooms: 6,
    bathrooms: 7,
    area: 780,
    featured: true,
    description:
      'An elegant residence on a generous plot in one of Accra\'s most established neighbourhoods. Formal reception rooms, a private study and a separate staff wing suit diplomatic and executive households. This is demonstration content and not a real listing.',
    amenities: ['Private study', 'Staff quarters', 'Swimming pool', 'Generator', 'CCTV', 'Ample parking'],
  },
  {
    id: 3,
    slug: 'airport-residential-penthouse',
    name: 'Airport Residential Penthouse',
    location: 'Airport Residential',
    type: 'Apartment',
    status: 'sale',
    price: 3600000,
    bedrooms: 3,
    bathrooms: 3,
    area: 240,
    featured: true,
    description:
      'A top-floor penthouse with wide city views, an open-plan living space and a large private terrace. Ideal for professionals who want a polished address close to business districts. This is demonstration content and not a real listing.',
    amenities: ['Private terrace', 'Elevator', 'Gym access', 'Concierge', 'Covered parking', 'Backup power'],
  },
  {
    id: 4,
    slug: 'osu-oxford-street-apartment',
    name: 'Osu Oxford Street Apartment',
    location: 'Osu',
    type: 'Apartment',
    status: 'rent',
    price: 14000,
    rentPeriod: 'month',
    bedrooms: 2,
    bathrooms: 2,
    area: 110,
    featured: true,
    description:
      'A fully furnished two-bedroom apartment steps from restaurants, cafes and nightlife. Bright interiors and a quiet balcony make it a comfortable base for short and long stays. This is demonstration content and not a real listing.',
    amenities: ['Fully furnished', 'Air conditioning', 'High-speed internet', 'Balcony', 'Security', 'Water storage'],
  },
  {
    id: 5,
    slug: 'spintex-family-townhouse',
    name: 'Spintex Family Townhouse',
    location: 'Spintex',
    type: 'Townhouse',
    status: 'sale',
    price: 1450000,
    bedrooms: 4,
    bathrooms: 4,
    area: 210,
    featured: true,
    description:
      'A practical four-bedroom townhouse in a gated Spintex estate, with a bright kitchen, a family lounge and a small private yard. A sensible choice for growing families who want security and easy road access. This is demonstration content and not a real listing.',
    amenities: ['Gated estate', 'Fitted kitchen', 'Private yard', 'Water tank', 'Parking for two cars', 'Estate security'],
  },
  {
    id: 6,
    slug: 'tema-community-18-home',
    name: 'Tema Community 18 Family Home',
    location: 'Tema',
    type: 'House',
    status: 'sale',
    price: 1150000,
    bedrooms: 4,
    bathrooms: 3,
    area: 260,
    featured: false,
    description:
      'A well-kept four-bedroom family home on a spacious plot with room for extension. Close to schools, markets and the Tema motorway. This is demonstration content and not a real listing.',
    amenities: ['Spacious compound', 'Fitted wardrobes', 'Borehole', 'Gated parking', 'Security fence', 'Room to extend'],
  },
  {
    id: 7,
    slug: 'labone-garden-apartment',
    name: 'Labone Garden Apartment',
    location: 'Labone',
    type: 'Apartment',
    status: 'rent',
    price: 9500,
    rentPeriod: 'month',
    bedrooms: 3,
    bathrooms: 2,
    area: 150,
    featured: false,
    description:
      'A ground-floor three-bedroom apartment with its own garden space, set in a calm, tree-lined part of Labone. Ideal for a small family or a couple who want a quieter home close to the city. This is demonstration content and not a real listing.',
    amenities: ['Private garden', 'Air conditioning', 'Fitted kitchen', 'Covered parking', 'Security', 'Water storage'],
  },
  {
    id: 8,
    slug: 'adenta-starter-home',
    name: 'Adenta Starter Home',
    location: 'Adenta',
    type: 'House',
    status: 'sale',
    price: 680000,
    bedrooms: 3,
    bathrooms: 2,
    area: 140,
    featured: false,
    description:
      'A neat three-bedroom home that suits first-time buyers and young families. Simple, practical finishes and a manageable compound keep running costs low. This is demonstration content and not a real listing.',
    amenities: ['Fenced compound', 'Tiled floors', 'Water tank', 'Parking space', 'Near public transport', 'Quiet street'],
  },
  {
    id: 9,
    slug: 'dansoman-courtyard-house',
    name: 'Dansoman Courtyard House',
    location: 'Dansoman',
    type: 'House',
    status: 'rent',
    price: 48000,
    rentPeriod: 'year',
    bedrooms: 3,
    bathrooms: 2,
    area: 170,
    featured: false,
    description:
      'A three-bedroom house arranged around a shaded courtyard, offering a calm family setting with easy access to local markets and schools. Quoted as an annual rent. This is demonstration content and not a real listing.',
    amenities: ['Central courtyard', 'Tiled floors', 'Fitted kitchen', 'Gated entrance', 'Water storage', 'Parking space'],
  },
  {
    id: 10,
    slug: 'east-legon-executive-townhouse',
    name: 'East Legon Executive Townhouse',
    location: 'East Legon',
    type: 'Townhouse',
    status: 'rent',
    price: 32000,
    rentPeriod: 'month',
    bedrooms: 4,
    bathrooms: 4,
    area: 280,
    featured: true,
    description:
      'A modern four-bedroom townhouse in a secure East Legon complex, with a private rooftop terrace and generous living spaces. Suited to executives and relocating professionals. This is demonstration content and not a real listing.',
    amenities: ['Rooftop terrace', 'Air conditioning', 'Shared gym', 'Backup generator', '24/7 security', 'Covered parking'],
  },
  {
    id: 11,
    slug: 'adenta-residential-land',
    name: 'Adenta Residential Plot',
    location: 'Adenta',
    type: 'Land',
    status: 'sale',
    price: 420000,
    bedrooms: 0,
    bathrooms: 0,
    area: 600,
    featured: false,
    description:
      'A level residential plot in a growing Adenta neighbourhood, suitable for a family home or a small development. Always verify title and site documents independently for any real land purchase. This is demonstration content and not a real listing.',
    amenities: ['Level terrain', 'Road access', 'Electricity nearby', 'Water supply nearby', 'Fenced boundary', 'Residential zoning'],
  },
  {
    id: 12,
    slug: 'spintex-commercial-office',
    name: 'Spintex Commercial Office Suite',
    location: 'Spintex',
    type: 'Commercial',
    status: 'rent',
    price: 28000,
    rentPeriod: 'month',
    bedrooms: 0,
    bathrooms: 2,
    area: 320,
    featured: false,
    description:
      'An open-plan office suite on a busy Spintex corridor, with a reception area, meeting room and ample parking. A good fit for growing businesses and professional services. This is demonstration content and not a real listing.',
    amenities: ['Open-plan floor', 'Meeting room', 'Reception area', 'Air conditioning', 'Backup power', 'Visitor parking'],
  },
]

// Build the three image paths for each property and attach them.
export const properties = rawProperties.map((p) => ({
  ...p,
  images: [1, 2, 3].map((n) => `/images/properties/${p.slug}-${n}.${IMAGE_EXT}`),
}))

export const heroImage = '/images/hero.svg'

export const LOCATIONS = [
  'Adenta',
  'Airport Residential',
  'Cantonments',
  'Dansoman',
  'East Legon',
  'Labone',
  'Osu',
  'Spintex',
  'Tema',
]

export const PROPERTY_TYPES = ['Apartment', 'Commercial', 'House', 'Land', 'Townhouse', 'Villa']

export function formatPrice(property) {
  const amount = `GH\u20B5${property.price.toLocaleString('en-GH')}`
  if (property.status === 'rent') {
    return `${amount} / ${property.rentPeriod === 'year' ? 'year' : 'month'}`
  }
  return amount
}

export function getPropertyBySlug(slug) {
  return properties.find((p) => p.slug === slug)
}

export function getSimilarProperties(property, limit = 3) {
  return properties
    .filter((p) => p.id !== property.id)
    .map((p) => {
      let score = 0
      if (p.type === property.type) score += 2
      if (p.location === property.location) score += 2
      if (p.status === property.status) score += 1
      return { p, score }
    })
    .sort((a, b) => b.score - a.score || a.p.id - b.p.id)
    .slice(0, limit)
    .map((item) => item.p)
}
