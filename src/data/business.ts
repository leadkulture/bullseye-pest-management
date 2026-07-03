// Single source of truth for NAP+W. Every page pulls from here.
// Any change here propagates to schema, header, footer, contact page, and CTAs.

export const business = {
  legalName: 'Bullseye Pest Management, LLC',
  displayName: 'Bullseye Pest Management',
  tagline: 'Right On Target',
  license: 'TPCL 0609490',
  foundedYear: 1999,
  owner: 'Steve Moseley',
  ownerTitle: 'Owner & Certified Applicator',

  phone: {
    tollFree: '800-466-4451',
    tollFreeTel: '+18004664451',
    local: '682-472-4435',
    localTel: '+16824724435',
    primary: '682-472-4435',
    primaryTel: '+16824724435',
  },

  email: 'info@bullseyepestmanagement.com',

  hours: {
    display: 'Monday through Friday, 8:00 AM to 6:00 PM',
    short: 'Mon–Fri 8AM–6PM',
    schema: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
  },

  address: {
    // Service-area business, no public storefront listed. Use service-area geo instead.
    region: 'Dallas–Fort Worth Metroplex',
    state: 'Texas',
    stateAbbr: 'TX',
    country: 'US',
  },

  // Geo point centered on DFW metroplex (Grand Prairie / mid-metroplex).
  geo: {
    latitude: 32.7767,
    longitude: -96.797,
  },

  urls: {
    canonical: 'https://bullseyepestmanagement.com',
    facebook: 'https://www.facebook.com/BullseyePestManagement',
    google: 'https://share.google/48OhXUF5xmWhrjMy2',
  },

  certifications: [
    {
      name: 'Phantom Termite Control Certified',
      short: 'Phantom Certified',
      image: '/images/badges/phantom-termite-control.png',
    },
    {
      name: 'Termidor Certified Professional',
      short: 'Termidor Certified',
      image: '/images/badges/termidor-certified-professional.jpeg',
    },
    {
      name: 'Termidor Ten-Year Pledge',
      short: 'Termidor 10-Year Pledge',
      image: '/images/badges/termidor-ten-year-pledge.jpeg',
    },
    {
      name: 'Texas Pest Control Association Member',
      short: 'TPCA Member',
      image: '/images/badges/texas-pest-control-association.png',
    },
  ],

  // Aggregate rating placeholder — MUST be replaced with the live GBP rating before launch.
  // Do not invent numbers. If GBP has no reviews yet, omit AggregateRating from schema entirely.
  aggregateRating: {
    ratingValue: null as number | null,
    reviewCount: null as number | null,
  },
} as const;

export const priceRange = '$$';

export const primaryCTA = {
  label: 'Call Now',
  phoneLabel: business.phone.primary,
  href: `tel:${business.phone.primaryTel}`,
};

export const secondaryCTA = {
  label: 'Get a Free Quote',
  href: '/contact/',
};
