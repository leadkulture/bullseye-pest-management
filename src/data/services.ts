export type Service = {
  slug: string;
  title: string;
  navTitle: string;
  icon: string; // heroicon name
  image: string;
  imageAlt: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  serviceType: string; // used in Service schema
  hero: {
    headline: string;
    sub: string;
  };
  intro: string;
  pests?: string[];
  featureBullets: { title: string; body: string }[];
  process: { step: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'pest-control',
    title: 'Pest Control & Extermination',
    navTitle: 'Pest Control',
    icon: 'bug',
    image: '/images/services/pest-control.png',
    imageAlt: 'Bullseye Pest Management technician applying perimeter pest control treatment to a DFW home',
    shortDescription:
      'Quarterly perimeter treatments and one-time extermination for ants, roaches, spiders, silverfish, and more across Dallas–Fort Worth.',
    metaTitle: 'Pest Control in Dallas–Fort Worth TX | Bullseye Pest Management',
    metaDescription:
      'DFW pest control by a certified applicator since 1999. Quarterly perimeter treatments starting at $75. Child- and pet-safe options. Call 682-472-4435.',
    h1: 'Pest Control in the Dallas–Fort Worth Metroplex',
    serviceType: 'Pest Control',
    hero: {
      headline: 'Kill the bugs. Keep them out.',
      sub: 'Certified applicator, quarterly perimeter treatments, and honest pricing since 1999.',
    },
    intro:
      'Ants in the kitchen, roaches under the sink, spiders in the garage — the DFW climate breeds pests year-round. Bullseye Pest Management builds a treatment schedule around your home, not a one-size-fits-all spray. Owner Steve Moseley personally inspects and treats every property.',
    pests: [
      'Ants (including fire ants and carpenter ants)',
      'Roaches (German, American, and Oriental)',
      'Spiders',
      'Silverfish',
      'Millipedes and centipedes',
      'Pillbugs',
      'Earwigs',
      'Crickets',
      'Wasps and hornets',
    ],
    featureBullets: [
      {
        title: 'Quarterly Perimeter Program',
        body: 'Four treatments per year with 1 inside treatment and 3 outside perimeter treatments. Keeps pests out year round without over-spraying inside the home.',
      },
      {
        title: 'Certified Applicator, Every Job',
        body: "Steve Moseley is licensed by the Texas Department of Agriculture and personally handles every inspection and treatment. No rotating techs, no upsells.",
      },
      {
        title: 'Eco-Friendly Options',
        body: 'We use IPM (Integrated Pest Management) principles: biological, cultural, physical, and chemical tools chosen to minimize environmental and health impact.',
      },
      {
        title: 'Child and Pet Safe',
        body: 'Products and application methods selected to be safe around kids and pets when used as directed. We will review every product label with you before we treat.',
      },
    ],
    process: [
      {
        step: 'Free Inspection',
        body: 'We walk your property, identify the pest, and find the conditions attracting them (moisture, entry points, food sources).',
      },
      {
        step: 'Written Estimate',
        body: 'You get a plain-English quote up front. No hidden fees, no contracts required.',
      },
      {
        step: 'Targeted Treatment',
        body: 'First treatment includes an inside sweep and full outside perimeter. Follow-up quarterly treatments focus on the exterior.',
      },
      {
        step: 'Follow-Up Communication',
        body: 'Between visits, we stay in touch. Notice new activity? A retreat is included, no extra charge.',
      },
    ],
    faqs: [
      {
        q: 'How much does pest control cost in the DFW area?',
        a: 'Quarterly perimeter treatments with Bullseye Pest Management start at $75 per treatment for most single-family homes. Larger homes, heavier infestations, or specialty pests (like bed bugs or termites) are priced separately. You get a written estimate before any work begins.',
      },
      {
        q: 'Is the treatment safe for my kids and pets?',
        a: 'Yes when used as directed. We select products and application methods with kids and pets in mind, and Steve will show you every product label before treatment. Most treated areas are dry and safe to re-enter within an hour.',
      },
      {
        q: 'Do I have to sign a contract?',
        a: 'No. Bullseye Pest Management does not require contracts. Most customers stay on the quarterly schedule because it works, not because they are locked in.',
      },
      {
        q: 'What if the pests come back between quarterly treatments?',
        a: 'Call us. Retreats between scheduled visits are included at no extra charge for quarterly customers. That is how the program is designed.',
      },
      {
        q: 'Do you treat commercial properties too?',
        a: 'Yes. Bullseye Pest Management serves both residential and commercial clients across the Dallas–Fort Worth Metroplex, including offices, retail spaces, and rental properties.',
      },
    ],
  },
  {
    slug: 'termite-treatment',
    title: 'Termite Treatment & Pre-Construction',
    navTitle: 'Termite Treatment',
    icon: 'termite',
    image: '/images/services/termite-treatment.jpeg',
    imageAlt: 'Termidor Certified Professional termite treatment being performed on a Dallas–Fort Worth home',
    shortDescription:
      'Termidor SC and Phantom Termite Control certified. Pre-construction, post-construction, and WDI inspection reports for the DFW area.',
    metaTitle: 'Termite Treatment in DFW | Termidor Certified | Bullseye Pest',
    metaDescription:
      'Termidor Certified Professional termite treatments across Dallas–Fort Worth. 10-year pledge available. Free inspection. Call 682-472-4435.',
    h1: 'Termite Treatment in the DFW Metroplex',
    serviceType: 'Termite Control',
    hero: {
      headline: "Termidor Certified. Ten-Year Pledge.",
      sub: 'Pre-construction, post-construction, and WDI reports by a certified applicator with 25+ years in the DFW area.',
    },
    intro:
      'Termites cause billions of dollars of damage every year, and North Texas is one of the highest-pressure termite regions in the country. Bullseye Pest Management is a Termidor Certified Professional and offers the Termidor Ten-Year Pledge on qualifying treatments. We handle pre-construction pretreatments, post-construction treatments, and Wood Destroying Insect (WDI) reports for real estate transactions.',
    featureBullets: [
      {
        title: 'Termidor SC (The Industry Standard)',
        body: 'Termidor SC is a non-repellent termiticide. Termites cannot detect it, so they walk through it, carry it back to the colony, and transfer it colony-wide. That is why it eliminates the colony, not just the workers.',
      },
      {
        title: 'Ten-Year Termidor Pledge',
        body: 'Qualifying homes come with the Termidor Ten-Year Pledge: no termites, no callbacks, no excuses for ten years. Ask us about eligibility during your inspection.',
      },
      {
        title: 'Phantom Certified',
        body: 'For newer construction and specific soil conditions, we also apply Phantom Termite Control. Two industry-leading treatment systems, one certified applicator.',
      },
      {
        title: 'Pre-Construction Pretreatment',
        body: 'Building new? We treat the soil before the slab is poured. Cheapest, most effective way to protect a new home from termites for years to come.',
      },
      {
        title: 'WDI Reports for Real Estate',
        body: 'Wood Destroying Insect inspection reports for home sales and refinancing. Certified applicator, correct forms, quick turnaround.',
      },
    ],
    process: [
      {
        step: 'Termite Inspection',
        body: 'We inspect the interior, exterior, crawl space, and attic for active termites, past damage, and conducive conditions.',
      },
      {
        step: 'Written Treatment Plan',
        body: 'You get a diagram of the property, the recommended treatment (Termidor SC or Phantom), and a flat-rate quote.',
      },
      {
        step: 'Trench and Treat',
        body: 'For post-construction jobs, we trench around the foundation and apply termiticide directly to the soil where termites travel.',
      },
      {
        step: 'Ten-Year Pledge Registration',
        body: 'Qualifying homes are registered with BASF for the Termidor Ten-Year Pledge, and we schedule optional annual inspections.',
      },
    ],
    faqs: [
      {
        q: 'How much does termite treatment cost in DFW?',
        a: 'Termite treatment pricing depends on the linear footage of the foundation, the construction type (slab, pier and beam, basement), and the treatment product. Most DFW single-family homes fall between $1,200 and $2,500 for a full Termidor treatment. Every job is quoted after an in-person inspection — no phone quotes.',
      },
      {
        q: 'What is the Termidor Ten-Year Pledge?',
        a: 'It is a manufacturer-backed pledge from BASF (the maker of Termidor) covering qualifying homes for ten years: no termites, no callbacks, no excuses. Bullseye Pest Management is a Termidor Certified Professional, which is required to register a home for the pledge.',
      },
      {
        q: 'Do I need a WDI report to sell my house?',
        a: 'Most Texas mortgage lenders require a Wood Destroying Insect (WDI) report before closing, especially on VA and FHA loans. Bullseye Pest Management is licensed to issue WDI reports across the DFW area — we handle inspection, the correct paperwork, and typically same-week turnaround.',
      },
      {
        q: 'How long does a termite treatment take?',
        a: 'A standard post-construction Termidor treatment takes 4 to 6 hours for a typical single-family home, including drilling, trenching, and application. You can be home during treatment. The treated soil is safe to walk on almost immediately.',
      },
      {
        q: 'How do I know if I have termites?',
        a: 'Common signs include mud tubes on foundation walls or piers, bubbling or warping paint, hollow-sounding wood, discarded wings near windows in spring, and small piles of what looks like fine sawdust (frass). If you see any of these, schedule an inspection.',
      },
    ],
  },
  {
    slug: 'bed-bug-treatment',
    title: 'Bed Bug Treatment',
    navTitle: 'Bed Bugs',
    icon: 'bed',
    image: '/images/services/bed-bug-treatment.png',
    imageAlt: 'Bed bug treatment being performed on a mattress in a Dallas–Fort Worth home',
    shortDescription:
      'Specialized bed bug elimination for homes, hotels, apartments, and rental units across DFW. Multi-treatment protocol, full home inspection.',
    metaTitle: 'Bed Bug Treatment in DFW | Bullseye Pest Management',
    metaDescription:
      'Bed bug extermination in Dallas–Fort Worth. Certified applicator, multi-treatment protocol, discreet service. Free inspection. Call 682-472-4435.',
    h1: 'Bed Bug Treatment in Dallas–Fort Worth',
    serviceType: 'Bed Bug Extermination',
    hero: {
      headline: 'Bed bugs? We know how to kill them.',
      sub: 'Multi-treatment protocol, complete home inspection, discreet service. Certified applicator, no contracts.',
    },
    intro:
      'Bed bug infestations get worse fast. A single fertilized female can produce hundreds of offspring in weeks, and they hide in furniture, baseboards, electrical outlets, and picture frames. Bullseye Pest Management uses a proven multi-treatment protocol to eliminate every life stage: adults, nymphs, and eggs.',
    featureBullets: [
      {
        title: 'Full Property Inspection',
        body: 'Before we treat, we identify every harborage point: beds, box springs, headboards, sofas, chairs, curtains, baseboards, and outlets. Missing a harborage means the infestation comes back.',
      },
      {
        title: 'Multi-Treatment Protocol',
        body: 'Bed bug eggs are resistant to many treatments. We schedule follow-up treatments 10–14 days apart to kill newly hatched nymphs before they can reproduce.',
      },
      {
        title: 'Discreet Service',
        body: 'Unmarked vehicle available on request. We understand privacy matters — especially for rental properties, hotels, and Airbnbs.',
      },
      {
        title: 'Prep Guide Included',
        body: "We give you a clear prep checklist before treatment day so the products can reach every hiding spot. Preparation is half the battle.",
      },
    ],
    process: [
      {
        step: 'Inspection',
        body: 'We inspect every room and identify infestation severity and harborage points.',
      },
      {
        step: 'Prep Checklist',
        body: 'You get a specific prep list: laundry to bag, items to remove, furniture to move.',
      },
      {
        step: 'Initial Treatment',
        body: 'We treat every identified harborage point with targeted products safe for bedrooms and living spaces.',
      },
      {
        step: 'Follow-Up Treatments',
        body: 'We return 10–14 days later to treat any surviving nymphs. Most infestations are eliminated after 2–3 treatments.',
      },
    ],
    faqs: [
      {
        q: 'How much does bed bug treatment cost?',
        a: 'Bed bug treatment pricing depends on the number of rooms affected and the severity of the infestation. Most single-family home treatments start at $500 for the first treatment. We quote after an in-person inspection so you know exactly what you are paying for.',
      },
      {
        q: 'How long does it take to get rid of bed bugs?',
        a: 'A typical infestation is eliminated in 2 to 3 treatments spaced 10 to 14 days apart, so plan on about 4 to 6 weeks from first treatment to clear. Severe infestations may need additional treatments. We do not consider a job done until follow-up inspection confirms zero activity.',
      },
      {
        q: 'Do I have to throw away my mattress?',
        a: 'Usually no. Modern bed bug treatments work on mattresses and box springs directly. We recommend encasements after treatment. In extreme cases where the mattress is severely infested, replacement may be the best option — we will tell you honestly during inspection.',
      },
      {
        q: 'Do you treat apartments, hotels, and Airbnb properties?',
        a: 'Yes. We work with property managers, hoteliers, and short-term rental owners across DFW. Discreet vehicles available on request. We can coordinate treatment schedules around guest bookings and tenant occupancy.',
      },
    ],
  },
  {
    slug: 'bee-removal',
    title: 'Bee Removal & Honeycomb Removal',
    navTitle: 'Bee Removal',
    icon: 'bee',
    image: '/images/services/bee-removal.png',
    imageAlt: 'Live bee removal from a wall cavity in a Dallas–Fort Worth home',
    shortDescription:
      'Live bee removal, swarm capture, honeycomb extraction, and utility pole work across DFW. Trees, roofs, walls, patios — we remove it all.',
    metaTitle: 'Bee Removal in Dallas–Fort Worth TX | Bullseye Pest',
    metaDescription:
      'Bee removal in DFW: swarms, hives, honeycomb, utility poles. Certified applicator, honey and comb removed. Call 682-472-4435.',
    h1: 'Bee Removal in the DFW Metroplex',
    serviceType: 'Bee Removal',
    hero: {
      headline: 'Bees, swarms, honeycomb — we remove it all.',
      sub: 'Trees, roofs, walls, patios, utility poles. Certified applicator with 25+ years of DFW experience.',
    },
    intro:
      "Honeybees pollinate the food supply, but a hive in your wall or a swarm on your patio is a serious safety hazard. Bullseye Pest Management removes bees, swarms, and honeycomb from every setting: trees, roofs, walls, patios, utility poles, and commercial buildings. We remove the honeycomb too — leaving it behind attracts new colonies and can rot inside a wall.",
    featureBullets: [
      {
        title: 'Live Removal When Possible',
        body: "Swarms are typically docile and can often be removed live. We work with local beekeepers when live relocation is the right call.",
      },
      {
        title: 'Full Honeycomb Extraction',
        body: 'Killing the bees is half the job. If the honeycomb stays in the wall, it rots, attracts new colonies, and can leak honey through drywall. We remove every bit of comb.',
      },
      {
        title: 'Wall, Roof, Tree, or Utility Pole',
        body: 'Working in tight spaces on ladders and around obstacles is what we do. Steve has no trouble entering and exiting crawl spaces, attics, roof tops, and utility pole work.',
      },
      {
        title: 'Africanized Bee Awareness',
        body: 'Africanized (killer) bees are established in Texas. We are trained to identify them and take appropriate precautions.',
      },
    ],
    process: [
      {
        step: 'Assess the Hive',
        body: 'We locate the hive, identify the species (honeybee vs. wasp vs. hornet), and check for Africanization risk.',
      },
      {
        step: 'Access and Removal',
        body: 'We open the cavity carefully (drywall cut, roof shingle lift, tree pruning, etc.), remove bees, and extract all honeycomb.',
      },
      {
        step: 'Seal and Repair Recommendations',
        body: 'We seal the entry point to prevent reinfestation and give you specific repair recommendations for drywall, roofing, or masonry.',
      },
    ],
    faqs: [
      {
        q: 'How much does bee removal cost in DFW?',
        a: 'Bee removal pricing depends on location, hive size, and difficulty of access. A swarm on a fence post is under $200. A full hive in a second-story wall with honeycomb extraction is $500–$1,500. Every job is quoted in person — no phone quotes for bees.',
      },
      {
        q: 'Do you kill the bees or relocate them?',
        a: 'It depends on the situation. Docile honeybee swarms can often be captured live and relocated. Aggressive colonies, Africanized bees, or hives in structural cavities usually need to be eliminated for safety. We will tell you honestly what your options are.',
      },
      {
        q: 'Do you remove the honeycomb too?',
        a: 'Yes. Removing bees without removing honeycomb is a rookie mistake. Leftover honey rots, attracts new swarms, drips through drywall, and stains ceilings. Full honeycomb extraction is included in every bee removal quote.',
      },
      {
        q: 'Can you get bees off a utility pole?',
        a: 'Yes. Utility pole bee and hive removal is one of our specialty jobs. See our recent commercial bee removal from a utility pole with pictures on the blog for a real example.',
      },
    ],
  },
  {
    slug: 'rodent-control',
    title: 'Rodent Control & Exclusion',
    navTitle: 'Rodent Control',
    icon: 'rodent',
    image: '/images/services/rodent-control.jpeg',
    imageAlt: 'Rodent bait station being installed at a Dallas–Fort Worth home',
    shortDescription:
      'Rats, mice, and rodent exclusion work across DFW. Bait stations, trapping, and sealing entry points so they cannot come back.',
    metaTitle: 'Rodent Control in Dallas–Fort Worth | Bullseye Pest Management',
    metaDescription:
      'Rat and mouse control in DFW: trapping, bait stations, and exclusion work. Certified applicator. Free inspection. Call 682-472-4435.',
    h1: 'Rodent Control & Exclusion in DFW',
    serviceType: 'Rodent Control',
    hero: {
      headline: 'Only thing better than exterminating rodents is keeping them out.',
      sub: 'Trapping, bait stations, and exclusion work. Certified applicator, DFW-based, since 1999.',
    },
    intro:
      'Rats and mice damage insulation, chew wiring, contaminate food, and carry disease. Killing the ones inside is only half the fix — if you do not seal the entry points, new rodents move in within weeks. Bullseye Pest Management does both: elimination and exclusion.',
    featureBullets: [
      {
        title: 'Trapping First',
        body: "For active rodents inside, snap traps and bait stations deployed in the right places kill the population quickly and let us count the bodies.",
      },
      {
        title: 'Exclusion Work',
        body: 'A mouse fits through a hole the size of a dime. A rat fits through a hole the size of a quarter. We identify and seal every entry point — foundation gaps, roof lines, vent screens, garage door seals, plumbing penetrations.',
      },
      {
        title: 'Bait Stations for Long-Term Control',
        body: 'Tamper-resistant, weather-proof bait stations installed at strategic exterior locations to intercept rodents before they reach the structure.',
      },
      {
        title: 'Sanitation Guidance',
        body: 'We tell you what conditions are attracting rodents (pet food, bird feeders, compost, brush piles) and what to change so the problem does not repeat.',
      },
    ],
    process: [
      {
        step: 'Inspection',
        body: 'We identify rodent species (Norway rat, roof rat, house mouse), current activity, entry points, and conducive conditions.',
      },
      {
        step: 'Trap and Bait Deployment',
        body: 'Traps and bait stations placed based on runways, droppings, and access points.',
      },
      {
        step: 'Exclusion Work',
        body: 'Entry points sealed with rodent-proof materials: hardware cloth, sheet metal, copper mesh, and appropriate sealants.',
      },
      {
        step: 'Follow-Up',
        body: 'We return to check traps, remove carcasses, and confirm the population is eliminated. Quarterly maintenance available.',
      },
    ],
    faqs: [
      {
        q: 'How do I know if I have rats or mice?',
        a: 'Common signs: droppings (rice-sized for mice, raisin-sized for rats), gnaw marks on wood or wires, greasy rub marks along walls, scratching sounds in walls or attic at night, and musty odor. A single visual sighting almost always means many more you have not seen.',
      },
      {
        q: 'How much does rodent control cost?',
        a: 'A standard rodent job (initial trap deployment plus 1–2 follow-ups) starts around $300. Exclusion work (sealing entry points) is quoted separately based on the number and type of openings — usually $150–$800. We quote after an in-person inspection.',
      },
      {
        q: 'Will poison bait harm my pets or wildlife?',
        a: 'We use tamper-resistant bait stations that pets and non-target wildlife cannot access. Interior baiting is used sparingly and only in locations pets cannot reach. Trapping is often the safer option for homes with pets, and we will discuss the trade-offs during inspection.',
      },
      {
        q: 'How long does it take to get rid of rats or mice?',
        a: 'Most infestations are cleared within 2 to 4 weeks. Severe attic or crawl space infestations may take 4 to 8 weeks. Exclusion work is what keeps them from coming back — that is the piece most homeowners skip and regret.',
      },
    ],
  },
  {
    slug: 'animal-trapping',
    title: 'Animal Trapping & Wildlife Removal',
    navTitle: 'Wildlife Removal',
    icon: 'wildlife',
    image: '/images/services/animal-trapping.png',
    imageAlt: 'Wildlife trapping cage set for raccoon or opossum removal in a DFW yard',
    shortDescription:
      'Live trapping and removal for armadillos, opossums, raccoons, skunks, snakes, and squirrels across the DFW area. Flat fee per trip.',
    metaTitle: 'Wildlife Removal in Dallas–Fort Worth | Bullseye Pest Management',
    metaDescription:
      'Wildlife trapping in DFW: raccoons, opossums, armadillos, skunks, snakes, squirrels. Flat-fee live trapping. Call 682-472-4435.',
    h1: 'Wildlife Trapping & Removal in DFW',
    serviceType: 'Animal Trapping',
    hero: {
      headline: 'Wildlife where it does not belong? We remove it.',
      sub: 'Raccoons, opossums, armadillos, skunks, snakes, and squirrels. Live trapping, flat fee per trip.',
    },
    intro:
      'The DFW metroplex has bulldozed a lot of wildlife habitat — which means armadillos in the flower bed, raccoons in the attic, opossums under the deck, and skunks under the shed are common problems. Bullseye Pest Management uses humane live trapping and removes the animal to an appropriate location.',
    featureBullets: [
      {
        title: 'Live Trapping',
        body: 'Cage traps sized and baited for the target species, checked daily, and non-target catches released on site.',
      },
      {
        title: 'Species Handled',
        body: 'Armadillos, opossums, raccoons, skunks (yes, we handle skunks), snakes, and squirrels. If it belongs in the woods and it is in your attic or yard, we can help.',
      },
      {
        title: 'Attic and Crawl Space Access',
        body: 'For animals that got into a structure, we access attics, crawl spaces, and roof lines to trap or remove them and seal the entry point.',
      },
      {
        title: 'Flat Fee Per Trip',
        body: 'Simple pricing: flat fee per trip. No surprise charges. Multi-day jobs quoted up front.',
      },
    ],
    process: [
      {
        step: 'Inspection',
        body: 'We identify the species, entry or nesting point, and best trap placement.',
      },
      {
        step: 'Trap Deployment',
        body: 'Traps set, baited, and monitored daily until the animal is captured.',
      },
      {
        step: 'Removal',
        body: 'Captured animal is transported and released or dispatched per Texas Parks & Wildlife guidelines.',
      },
      {
        step: 'Exclusion Work',
        body: 'For structural entry points (attics, roof lines, crawl spaces), we seal the opening so the next animal cannot get in.',
      },
    ],
    faqs: [
      {
        q: 'Do you handle skunks?',
        a: 'Yes. Skunks under sheds and decks are common in DFW, and yes, we know how to trap them without getting sprayed.',
      },
      {
        q: 'What about snakes?',
        a: 'We remove snakes from yards, garages, and inside structures. Most DFW snakes are non-venomous rat snakes and racers, but we identify and handle every species safely, including copperheads and cottonmouths.',
      },
      {
        q: 'Do you get raccoons out of attics?',
        a: 'Yes. Raccoons in attics are a common springtime problem — usually a mother with kits. We remove the family, clean the affected area recommendations, and seal the entry point so it does not repeat next year.',
      },
      {
        q: 'How much does wildlife trapping cost?',
        a: 'Flat fee per trip, quoted based on species and location. Simple ground trapping (armadillo, opossum) starts around $150 per trip. Attic or roof work with exclusion is quoted separately after inspection.',
      },
    ],
  },
  {
    slug: 'lawn-fertilization',
    title: 'Lawn Fertilization',
    navTitle: 'Lawn Fertilization',
    icon: 'lawn',
    image: '/images/services/lawn-fertilization.png',
    imageAlt: 'Green healthy DFW lawn after professional fertilization treatment',
    shortDescription:
      'Certified lawn and ornamental fertilization with soil testing across DFW. Green Lawn certified applicator.',
    metaTitle: 'Lawn Fertilization in DFW TX | Bullseye Pest Management',
    metaDescription:
      'Lawn fertilization and soil testing across Dallas–Fort Worth. Green Lawn certified applicator. Custom schedule per property. Call 682-472-4435.',
    h1: 'Lawn Fertilization in DFW',
    serviceType: 'Lawn Fertilization',
    hero: {
      headline: 'A greener lawn, tested and fertilized right.',
      sub: 'Soil tested, application matched to your grass type, Green Lawn certified. Since 1999.',
    },
    intro:
      "Most lawn programs sell you the same bag of fertilizer they sell everyone. Bullseye Pest Management does it differently: soil test first, then a fertilization schedule matched to your grass type (Bermuda, St. Augustine, or Zoysia), your soil chemistry, and DFW's specific climate windows.",
    featureBullets: [
      {
        title: 'Soil Testing First',
        body: 'We test soil pH and nutrient levels before recommending a program. Cheap upfront, saves money over the season.',
      },
      {
        title: 'Green Lawn Certified',
        body: 'Steve is Green Lawn certified — a specific certification for lawn and ornamental applications through the Texas Department of Agriculture.',
      },
      {
        title: 'Matched to Your Grass Type',
        body: 'Bermuda, St. Augustine, and Zoysia have different feeding schedules. We build a program for your yard, not the generic one.',
      },
      {
        title: 'Timed to DFW Weather Windows',
        body: 'Pre-emergent in February. Fertilizer in March. Post-emergent in May. Summer feeding schedule. Fall recovery. We know when to apply what for DFW.',
      },
    ],
    process: [
      {
        step: 'Soil Test',
        body: 'Sample sent to Texas A&M or a commercial lab. Results usually back in 5–10 days.',
      },
      {
        step: 'Custom Program',
        body: 'Fertilizer selection, application schedule, and any soil amendments quoted based on the soil test.',
      },
      {
        step: 'Seasonal Applications',
        body: 'Applications scheduled across the year based on your grass type and the DFW weather pattern.',
      },
    ],
    faqs: [
      {
        q: 'How much does lawn fertilization cost in DFW?',
        a: 'Most single-family DFW lawns fall between $50 and $100 per application, with typical programs running 5 to 7 applications per year. Pricing depends on lawn size and the specific program. Soil testing is quoted separately (usually $30–$50 one time).',
      },
      {
        q: 'When should I start fertilizing my Bermuda lawn?',
        a: 'For Bermuda in DFW, wait until soil temperatures hit ~65°F consistently — usually mid to late March. Fertilizing dormant Bermuda wastes product and can push weed growth. Green-up is your signal.',
      },
      {
        q: 'Do you also do weed control?',
        a: 'Yes. Weed control is a separate service that pairs well with fertilization. Pre-emergent, post-emergent, and broadleaf treatments matched to your grass type. See our weed control page.',
      },
      {
        q: 'Do I really need a soil test?',
        a: 'For a one-time application, no. For a full-year program, yes — a $40 soil test can save hundreds by matching fertilizer to what your soil actually needs instead of guessing.',
      },
    ],
  },
  {
    slug: 'weed-control',
    title: 'Weed Control',
    navTitle: 'Weed Control',
    icon: 'weed',
    image: '/images/services/weed-control.png',
    imageAlt: 'Weed control application on a DFW residential lawn',
    shortDescription:
      'Pre-emergent, post-emergent, and broadleaf weed control across DFW. Certified applicator, matched to your grass and season.',
    metaTitle: 'Weed Control in Dallas–Fort Worth | Bullseye Pest Management',
    metaDescription:
      'Professional weed control in DFW: pre-emergent, post-emergent, broadleaf. Certified applicator, no contracts. Call 682-472-4435.',
    h1: 'Weed Control in Dallas–Fort Worth',
    serviceType: 'Weed Control',
    hero: {
      headline: 'Kill the weeds without killing the lawn.',
      sub: 'Pre-emergent, post-emergent, and broadleaf treatments. Certified applicator since 1999.',
    },
    intro:
      "Weeds compete with your grass for water, sunlight, and nutrients. Left alone, they take over. But weed control done wrong browns out St. Augustine or thins Bermuda. Bullseye Pest Management uses the right product at the right time for your specific grass type and the DFW climate.",
    featureBullets: [
      {
        title: 'Pre-Emergent',
        body: 'Applied in late February and early September to stop weed seeds before they germinate. The single highest-leverage weed control move.',
      },
      {
        title: 'Post-Emergent',
        body: 'Kills weeds that already emerged. Selective products chosen to spare your grass type.',
      },
      {
        title: 'Broadleaf Control',
        body: 'Dandelions, clover, dollarweed, spurge, and other common DFW broadleaf weeds treated specifically.',
      },
      {
        title: 'Grass-Type Aware',
        body: 'St. Augustine is sensitive to certain herbicides that Bermuda tolerates. We know the difference and pick accordingly.',
      },
    ],
    process: [
      {
        step: 'Lawn Assessment',
        body: 'We identify grass type and the specific weeds present.',
      },
      {
        step: 'Treatment Plan',
        body: 'Pre-emergent schedule + spot treatments for existing weeds.',
      },
      {
        step: 'Seasonal Applications',
        body: 'Multiple applications timed to the DFW growing season.',
      },
    ],
    faqs: [
      {
        q: 'When should I apply pre-emergent in DFW?',
        a: 'Late February for spring-germinating weeds (like crabgrass), and early September for fall-germinating weeds (like Poa annua). Missing these windows by more than a couple weeks makes the whole application much less effective.',
      },
      {
        q: 'How much does weed control cost?',
        a: 'Individual applications run $50–$85 for most DFW single-family lawns. A full-year weed control program (5 applications) runs $250–$425 depending on lawn size.',
      },
      {
        q: 'Will weed killer hurt my St. Augustine?',
        a: 'It can if the wrong product is used. St. Augustine is sensitive to atrazine only in certain temperature windows and reacts badly to some common broadleaf herbicides. We use products chosen specifically for St. Augustine, applied within its tolerance window.',
      },
    ],
  },
  {
    slug: 'wdi-reports',
    title: 'WDI Reports (Wood Destroying Insect Inspections)',
    navTitle: 'WDI Reports',
    icon: 'clipboard',
    image: '/images/services/pest-control-23.jpeg',
    imageAlt: 'WDI Wood Destroying Insect Report being completed during a DFW real estate inspection',
    shortDescription:
      'Wood Destroying Insect inspection reports for DFW real estate transactions, VA loans, and refinancing. Quick turnaround.',
    metaTitle: 'WDI Reports in Dallas–Fort Worth | Bullseye Pest Management',
    metaDescription:
      'Wood Destroying Insect (WDI) reports for DFW real estate closings, VA and FHA loans, refinancing. Certified applicator. Call 682-472-4435.',
    h1: 'WDI Reports in the Dallas–Fort Worth Metroplex',
    serviceType: 'WDI Inspection',
    hero: {
      headline: 'WDI reports done right, on time.',
      sub: 'Real estate closings, VA loans, FHA loans, refinancing. Certified applicator, correct forms, quick turnaround.',
    },
    intro:
      "Most Texas real estate transactions — and effectively all VA and FHA loans — require a Wood Destroying Insect (WDI) report before closing. Bullseye Pest Management is licensed to perform WDI inspections across the DFW metroplex, completes the correct Texas SPCS forms, and typically turns reports around within 24 to 48 hours.",
    featureBullets: [
      {
        title: 'VA / FHA Ready',
        body: 'We use the current Texas Structural Pest Control Service (SPCS) forms accepted by VA, FHA, and conventional lenders.',
      },
      {
        title: 'Quick Turnaround',
        body: 'Most reports delivered within 24 to 48 hours. Rush service available for closings on a tight timeline.',
      },
      {
        title: 'Complete Property Inspection',
        body: "We inspect the interior, exterior, crawl space, and attic. If we find active or previous WDI activity, we document it and quote treatment separately.",
      },
      {
        title: 'Realtor Friendly',
        body: 'We work with realtors, mortgage brokers, and closing agents across DFW every week. Send us the deal — we handle the rest.',
      },
    ],
    process: [
      {
        step: 'Schedule the Inspection',
        body: 'You (or your realtor) call us. We schedule the on-site inspection, usually within 2–3 business days.',
      },
      {
        step: 'On-Site Inspection',
        body: 'Typically 45–90 minutes on site. We inspect all accessible areas: interior, exterior, crawl space, attic.',
      },
      {
        step: 'Report Delivery',
        body: 'Signed WDI report delivered by email to you, your realtor, and the lender or closing agent.',
      },
    ],
    faqs: [
      {
        q: 'How much does a WDI inspection cost in DFW?',
        a: 'A standard single-family WDI inspection with report is $85–$125 depending on square footage. Larger properties and rush turnaround are quoted separately.',
      },
      {
        q: 'How long does a WDI inspection take?',
        a: '45 to 90 minutes on-site for a typical single-family home, plus report preparation. Most reports are delivered within 24 to 48 hours of the inspection.',
      },
      {
        q: 'What if the WDI report finds termites?',
        a: 'If we find active or previous termite or WDI activity, we document it on the report and provide a separate treatment quote. Many transactions close with the seller paying for treatment as a condition of sale — we work with everyone involved to get it done before closing.',
      },
      {
        q: 'Do you do WDI reports outside of Dallas / Fort Worth proper?',
        a: 'Yes. We cover the full DFW metroplex including Arlington, Mansfield, Plano, Frisco, Grand Prairie, Irving, and surrounding suburbs. Call to confirm your specific address.',
      },
    ],
  },
];

export const servicesBySlug: Record<string, Service> = Object.fromEntries(
  services.map((s) => [s.slug, s]),
);
