export type ServiceArea = {
  slug: string;
  city: string;
  state: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  hero: {
    headline: string;
    sub: string;
  };
  localContext: string; // 150+ words, genuinely city-specific
  neighborhoods: string[]; // 6-12 real neighborhoods / subdivisions
  landmarks: string[]; // 3-5 landmarks locals recognize
  localAngle: {
    // A city-specific paragraph about the pest / lawn conditions here
    title: string;
    body: string;
  };
  faqs: { q: string; a: string }[];
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'dallas',
    city: 'Dallas',
    state: 'TX',
    metaTitle: 'Pest Control in Dallas TX | Bullseye Pest Management',
    metaDescription:
      'Dallas pest control, termite treatment, bed bugs, and wildlife removal by a certified applicator since 1999. Call 682-472-4435.',
    h1: 'Pest Control in Dallas, TX',
    hero: {
      headline: 'Dallas pest control done right.',
      sub: "Certified applicator since 1999. Quarterly perimeter programs, termite treatment, bed bugs, bees, and wildlife across the Dallas city limits.",
    },
    localContext:
      "Dallas is a mix of century-old bungalows in East Dallas, mid-century ranch homes in Lake Highlands and Preston Hollow, high-density urban lofts downtown, and newer construction stretching out toward the northern edges. That housing diversity means every pest job looks different. Older East Dallas homes tend to have carpenter ant issues, wood-boring beetles, and slab foundations vulnerable to subterranean termites. Mid-century Preston Hollow and Lake Highlands homes get roof rats through wood shake roofs and mature tree canopy. Newer construction sees the standard DFW ant and roach pressure, plus fire ants along untreated perimeters. Bullseye Pest Management has been treating Dallas properties since 1999, so we know which pests hit which neighborhoods, when the seasonal spikes happen (fire ants in spring, roof rats in fall, roaches year-round), and how to treat around older masonry, slabs, and pier-and-beam foundations without damaging finishes. Every job in Dallas is inspected in person by Steve before treatment.",
    neighborhoods: [
      'East Dallas',
      'Lake Highlands',
      'Preston Hollow',
      'Lakewood',
      'Oak Cliff',
      'Bishop Arts District',
      'Uptown',
      'Deep Ellum',
      'M Streets',
      'White Rock',
      'Kessler Park',
    ],
    landmarks: [
      'White Rock Lake',
      'Fair Park',
      'Klyde Warren Park',
      'Bishop Arts District',
      'Downtown Dallas',
    ],
    localAngle: {
      title: 'Common Dallas Pests We Treat',
      body: "Roof rats are especially common in Lake Highlands and Preston Hollow where mature tree canopy touches roof lines. Carpenter ants show up in older East Dallas and Lakewood homes with wood siding and shaded lots. Subterranean termites hit slab foundations across the entire Dallas footprint, especially after wet springs. Fire ants dominate open turf in South and East Dallas. German roaches appear in high-density housing (apartments, condos, older duplexes) and require a different treatment approach than the standard perimeter program. If you are not sure which pest you are dealing with, send us a photo when you call.",
    },
    faqs: [
      {
        q: 'Do you serve all Dallas neighborhoods?',
        a: 'Yes. We treat properties across the full City of Dallas footprint including East Dallas, Lake Highlands, Preston Hollow, Lakewood, Oak Cliff, Uptown, Deep Ellum, and everything in between.',
      },
      {
        q: 'How long does a service call to Dallas take?',
        a: 'Most Dallas single-family pest control jobs are 45 minutes to 90 minutes on-site. Larger properties, termite treatments, and bed bug jobs can take 3 to 6 hours. We schedule appointments so you know a real arrival window, not a vague "sometime today."',
      },
      {
        q: 'What is the most common pest problem in Dallas?',
        a: 'Depends on the neighborhood. Roof rats and carpenter ants dominate the older tree-canopied neighborhoods (Lake Highlands, Preston Hollow, Lakewood, East Dallas). Fire ants and subterranean termites are the main issues in newer construction and open turf areas. German roaches are the top complaint in dense multi-family housing.',
      },
      {
        q: 'Do you handle historic homes in Dallas?',
        a: 'Yes. Older Dallas homes (Kessler Park, Munger Place, Swiss Avenue) have unique treatment considerations — original wood, plaster walls, historic finishes. We use application methods that protect the building materials while still eliminating the pest.',
      },
    ],
  },
  {
    slug: 'fort-worth',
    city: 'Fort Worth',
    state: 'TX',
    metaTitle: 'Pest Control in Fort Worth TX | Bullseye Pest Management',
    metaDescription:
      'Fort Worth pest control, termites, bed bugs, bees, and wildlife removal. Certified applicator since 1999. Call 682-472-4435.',
    h1: 'Pest Control in Fort Worth, TX',
    hero: {
      headline: 'Fort Worth pest control from a local certified applicator.',
      sub: 'Serving Fort Worth since 1999. Quarterly perimeter programs, termite treatment, bees, bed bugs, and wildlife removal across the city.',
    },
    localContext:
      "Fort Worth's housing stock spans historic Fairmount bungalows, mid-century Ridglea and Wedgwood homes, sprawling newer construction in Alliance, and pier-and-beam farmhouses on the western edges. That variety plus Fort Worth's slightly drier, hotter microclimate compared to Dallas produces a specific pest pattern. Fire ants are the number-one call in Fort Worth turf areas from March through October. Carpenter ants and subterranean termites show up in the older neighborhoods with mature tree cover (Fairmount, Ryan Place, Berkeley, TCU area). Wildlife pressure is higher on the west and southwest sides where subdivisions meet ranch land — armadillos, opossums, and skunks are regulars. Bullseye Pest Management has been treating Fort Worth properties from Alliance to TCU to the Stockyards since 1999, and Steve personally inspects and treats every job in the Fort Worth service area.",
    neighborhoods: [
      'Fairmount',
      'Ryan Place',
      'TCU area',
      'Berkeley',
      'Ridglea',
      'Wedgwood',
      'Westover Hills',
      'Alliance',
      'Como',
      'Arlington Heights',
      'Near Southside',
      'Stockyards',
    ],
    landmarks: [
      'Sundance Square',
      'TCU campus',
      'Fort Worth Stockyards',
      'Trinity Park',
      'Alliance Airport',
    ],
    localAngle: {
      title: 'Fort Worth Pest Issues by Season',
      body: 'Fire ant mounds spike in March–April after the first warm rain, then again in September–October. Termite swarms (Reticulitermes flavipes, the eastern subterranean termite) hit Fort Worth on warm humid afternoons in March and April. Bee swarms come through in April and May — usually docile honeybees looking for a new hive site, sometimes moving into wall cavities. Rodent pressure spikes in October–November as temperatures drop and rodents look for warm places to overwinter. Bullseye Pest Management builds treatment schedules around these seasonal windows so we hit the pests when they are most vulnerable.',
    },
    faqs: [
      {
        q: 'Do you serve Alliance and North Fort Worth?',
        a: 'Yes. We cover the full City of Fort Worth including Alliance, Keller-adjacent areas, and North Fort Worth. Call with your address if you are unsure whether we cover it.',
      },
      {
        q: 'How much is pest control in Fort Worth?',
        a: 'Quarterly perimeter treatments start at $75 per treatment for standard single-family homes. Termite treatments, bee removal, and bed bugs are quoted individually after an in-person inspection.',
      },
      {
        q: 'Do you handle bee removal in Fort Worth?',
        a: 'Yes. Bee removal in Fort Worth is one of our regular jobs — swarms in trees, hives in walls, and utility pole colonies. We remove the bees and the honeycomb so a new colony does not move back in.',
      },
      {
        q: 'What is your response time in Fort Worth?',
        a: 'For scheduled work, we typically book within 2 to 5 business days. For urgent bee swarms, wildlife, or heavy pest activity, we try to get out same-day or next-day.',
      },
    ],
  },
  {
    slug: 'arlington',
    city: 'Arlington',
    state: 'TX',
    metaTitle: 'Pest Control in Arlington TX | Bullseye Pest Management',
    metaDescription:
      'Arlington TX pest control, termite treatment, bed bugs, bee removal, and wildlife. Certified applicator since 1999. Call 682-472-4435.',
    h1: 'Pest Control in Arlington, TX',
    hero: {
      headline: 'Arlington pest control by an applicator who knows the city.',
      sub: 'Serving Arlington since 1999. Homes near Globe Life Field, UTA, Six Flags, and every neighborhood between.',
    },
    localContext:
      "Arlington sits between Dallas and Fort Worth and inherits both markets' pest patterns plus some of its own. The University of Texas at Arlington area and near-north Arlington have older housing with slab foundations that see heavy subterranean termite pressure. The stadium district and Six Flags area have high foot traffic that pushes bed bug incidents in short-term rentals and hotels. Southeast Arlington's newer construction sees the standard DFW ant and roach load, plus mosquito pressure from the Trinity River bottoms. Bullseye Pest Management has treated Arlington homes and commercial properties since 1999. We know which subdivisions have hard water that affects lawn fertilization decisions, which streets get more rat pressure from the storm drain system, and which older neighborhoods have carpenter ant hotspots.",
    neighborhoods: [
      'North Arlington',
      'South Arlington',
      'Dalworthington Gardens',
      'Pantego',
      'Interlochen',
      'Woodland West',
      'Southeast Arlington',
      'West Arlington',
      'UTA area',
      'Viridian',
      'Enclave at Falcon Point',
    ],
    landmarks: [
      'Globe Life Field',
      'AT&T Stadium',
      'UT Arlington',
      'Six Flags Over Texas',
      'River Legacy Park',
    ],
    localAngle: {
      title: 'Common Arlington Pest Complaints',
      body: 'Carpenter ants are one of the top calls from North Arlington and Pantego, where older shaded lots produce moisture-damaged wood. Bed bug incidents are elevated in the stadium and UTA corridor because of high transient occupancy. Subterranean termites are a year-round threat across the entire city. Fire ants dominate open turf. Wildlife (raccoons, opossums, skunks) is common in the older neighborhoods with heavy tree cover and mature landscaping. Bullseye Pest Management has been on all of these calls, in every part of Arlington, since 1999.',
    },
    faqs: [
      {
        q: 'Do you treat properties near AT&T Stadium and Globe Life?',
        a: 'Yes. We treat residential and commercial properties throughout the stadium and entertainment district, including short-term rentals and Airbnbs that need discreet bed bug and pest treatment between guests.',
      },
      {
        q: 'How much is a WDI report in Arlington?',
        a: 'Standard single-family WDI inspections in Arlington are $85 to $125 depending on square footage. Reports typically delivered within 24 to 48 hours. Rush turnaround available for closings on a tight timeline.',
      },
      {
        q: 'Do you serve Dalworthington Gardens and Pantego?',
        a: 'Yes. Dalworthington Gardens, Pantego, and all of the enclaves within the greater Arlington footprint are inside our service area.',
      },
      {
        q: 'Do you handle carpenter ants in Arlington?',
        a: 'Yes. Carpenter ants are one of the more damaging pests in older Arlington neighborhoods. Treatment is different from regular ant treatment — we locate the parent nest, treat the moisture source, and eliminate the colony rather than just knocking down the visible foragers.',
      },
    ],
  },
  {
    slug: 'mansfield',
    city: 'Mansfield',
    state: 'TX',
    metaTitle: 'Pest Control in Mansfield TX | Bullseye Pest Management',
    metaDescription:
      'Mansfield TX pest control, termites, bed bugs, bee removal, wildlife trapping. Certified applicator since 1999. Call 682-472-4435.',
    h1: 'Pest Control in Mansfield, TX',
    hero: {
      headline: 'Mansfield pest control from a name you already know.',
      sub: 'Serving Mansfield since 1999. Quarterly perimeter programs, termites, bees, and wildlife across the city.',
    },
    localContext:
      "Mansfield's rapid growth over the last twenty years has produced neighborhoods that press right up against undeveloped ranch land, which produces a specific pest and wildlife signature. Fire ants are the number-one lawn call in Mansfield, especially in the new-construction subdivisions where turf grass sits over undisturbed native fire ant colonies. Wildlife pressure is high — armadillos in flower beds, opossums on porches, raccoons in attics, and snakes (mostly rat snakes and racers, occasionally copperheads) in landscaping are all regulars. Older Mansfield homes near downtown and Walnut Creek have the DFW-typical subterranean termite pressure. Bullseye Pest Management has been serving Mansfield since 1999, and Steve personally handles every job here — we are not a big-box franchise rotating techs through your yard.",
    neighborhoods: [
      'Downtown Mansfield',
      'Walnut Creek',
      'South Pointe',
      'Waterford',
      'The Reserve',
      'Mansfield National',
      'Stonebrook',
      'Camden Park',
      'Silverleaf',
    ],
    landmarks: [
      'Historic Downtown Mansfield',
      'Mansfield National Golf Club',
      'Walnut Creek Country Club',
      'Elmer W. Oliver Nature Park',
      'Mansfield ISD schools',
    ],
    localAngle: {
      title: 'Wildlife and Pest Pressure in Mansfield',
      body: "Because Mansfield's newer subdivisions back up to ranch land and undeveloped acreage, wildlife pressure is higher than in the inner DFW suburbs. Armadillos digging up flower beds, opossums making a mess of trash cans, and rat snakes in the garage are common calls. Fire ants are aggressive in Mansfield turf areas — annual pre-treat is worth it. Bee swarms show up in April and May and often end up in wall cavities or utility structures. Bullseye Pest Management handles all of these — one call, one certified applicator, no franchise runaround.",
    },
    faqs: [
      {
        q: 'Do you serve all of Mansfield?',
        a: 'Yes, including downtown Mansfield, Walnut Creek, South Pointe, Waterford, the newer subdivisions on the south and east sides, and the semi-rural properties on the outer edges of the city.',
      },
      {
        q: 'How much does wildlife trapping cost in Mansfield?',
        a: 'Flat fee per trip based on species. Armadillo and opossum trapping starts around $150 per trip. Attic raccoon jobs with exclusion work are quoted separately after inspection.',
      },
      {
        q: 'How bad are fire ants in Mansfield?',
        a: 'Bad. Mansfield sits in one of the highest fire ant pressure zones in North Texas because of the surrounding open land. Annual mound treatments and broadcast bait applications are the most cost-effective approach for most Mansfield properties.',
      },
      {
        q: 'Do you handle snakes in Mansfield?',
        a: 'Yes. Most Mansfield snake calls are non-venomous rat snakes, racers, and rough green snakes. Copperheads do exist in the area — we identify and remove every species safely.',
      },
    ],
  },
  {
    slug: 'plano',
    city: 'Plano',
    state: 'TX',
    metaTitle: 'Pest Control in Plano TX | Bullseye Pest Management',
    metaDescription:
      'Plano TX pest control, termite treatment, bed bugs, bee removal. Certified applicator since 1999. Call 682-472-4435.',
    h1: 'Pest Control in Plano, TX',
    hero: {
      headline: 'Plano pest control by a certified applicator.',
      sub: "Serving Plano homes and businesses since 1999. Quarterly perimeter programs, termites, bed bugs, bees, and wildlife.",
    },
    localContext:
      "Plano is dense, well-manicured, and dominated by single-family homes with mature landscaping and slab-on-grade foundations. That combination produces a specific pest pattern: subterranean termite pressure is heavy across the entire city because slabs sit directly on treated but aging soil, and any breach in the treatment (plumbing repair, foundation crack, addition) becomes a termite entry point. Roof rats are increasingly common in the older West Plano neighborhoods with mature tree canopy. German roaches show up in the higher-density Legacy West and Downtown Plano corridor and in older multi-family properties. Fire ants and standard perimeter pests are constant. Bullseye Pest Management has been treating Plano properties since 1999 — we know which subdivisions have the aging Termidor barriers that need refresh, which streets have the roof rat pressure, and how to work around Plano's tighter HOA landscaping without damaging the finish.",
    neighborhoods: [
      'West Plano',
      'East Plano',
      'Legacy West',
      'Downtown Plano',
      'Willow Bend',
      'Deerfield',
      'Los Rios',
      'Ridgeview Ranch',
      'Preston Meadow',
      'Haggard Park',
    ],
    landmarks: [
      'Legacy West',
      'Downtown Plano',
      'Arbor Hills Nature Preserve',
      'Oak Point Park',
      'Haggard Park',
    ],
    localAngle: {
      title: 'Plano-Specific Termite and Rodent Considerations',
      body: 'Most Plano homes built between 1985 and 2005 got a pre-construction termite pretreatment that has aged past its effective life. If your home is in that window and has never had a follow-up treatment, you are running without a termite barrier. We inspect for active termites, evidence of past damage, and gaps in the original barrier. Roof rats are a specific Plano problem in the older West Plano tree-canopy neighborhoods — they run the utility lines and tree branches from roof to roof and enter through vent screens and eaves. Exclusion work (sealing entry points) is the fix; trapping alone will not solve it.',
    },
    faqs: [
      {
        q: 'Do you serve West Plano and Legacy West?',
        a: 'Yes. We treat residential and commercial properties across the full City of Plano including West Plano, Legacy West, downtown Plano, East Plano, and every neighborhood in between.',
      },
      {
        q: 'Should I get my Plano home retreated for termites?',
        a: 'If your home was built between 1985 and 2005 and has never had a follow-up termite treatment, yes — the original pre-construction barrier has aged past effective. If your home is newer or has been retreated within the last 8 years, an inspection is often enough. We tell you honestly what you need after we look at the property.',
      },
      {
        q: 'How do I know if I have roof rats in Plano?',
        a: 'Common signs: scratching sounds in the attic at night (roof rats are nocturnal), droppings in the attic or garage, chewed wires, and greasy rub marks along roof lines and utility entrances. West Plano tree-canopy neighborhoods (Preston Meadow, Deerfield, Willow Bend) have the highest roof rat pressure.',
      },
      {
        q: 'Do you do WDI reports for Plano real estate closings?',
        a: 'Yes. We handle WDI inspections for Plano home sales, VA and FHA loans, and refinancing. Reports typically delivered within 24 to 48 hours of inspection.',
      },
    ],
  },
];

export const serviceAreasBySlug: Record<string, ServiceArea> = Object.fromEntries(
  serviceAreas.map((a) => [a.slug, a]),
);
