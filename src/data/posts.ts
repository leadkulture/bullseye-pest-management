export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  publishedISO: string; // YYYY-MM-DD
  updatedISO: string;
  category: 'Pest Management' | 'Termite Pretreatment' | 'Bee Removal' | 'Wildlife Removal' | 'Bedbugs' | 'Bullseye Pest Blog';
  heroImage: string;
  heroImageAlt: string;
  // AEO opener: 40-60 word direct answer, extracted by AI Overviews
  opener: string;
  relatedServiceSlug?: string;
  relatedCitySlug?: string;
  bodyHtml: string; // simple HTML body
};

export const posts: Post[] = [
  {
    slug: 'signs-of-termites-in-your-dfw-home',
    title: '9 Signs of Termites in Your DFW Home (and What to Do About Them)',
    metaTitle: '9 Signs of Termites in a DFW Home | Bullseye Pest Management',
    metaDescription:
      "Mud tubes, discarded wings, hollow wood, bubbling paint. The 9 clearest signs of termites in Dallas–Fort Worth homes plus what to do next.",
    excerpt:
      'North Texas is one of the highest-pressure termite zones in the country. Here are the 9 signs most DFW homeowners spot first, ranked by how alarming they should be.',
    publishedISO: '2026-04-15',
    updatedISO: '2026-06-20',
    category: 'Termite Pretreatment',
    heroImage: '/images/services/termite-treatment.jpeg',
    heroImageAlt: 'Termite mud tube on a Dallas–Fort Worth home foundation',
    opener:
      'The clearest signs of termites in a DFW home are pencil-thin mud tubes on foundation walls, discarded wings near windows in March or April, bubbling or warped paint, hollow-sounding wood, and small piles of fine sawdust (called frass) near baseboards. If you see any two of these at once, schedule a termite inspection this week.',
    relatedServiceSlug: 'termite-treatment',
    bodyHtml: `
      <h2>Why DFW Homes Are Termite Magnets</h2>
      <p>North Texas sits in one of the highest termite-pressure zones in the United States. The eastern subterranean termite (<em>Reticulitermes flavipes</em>) thrives in our clay-heavy soils, hot humid summers, and slab-on-grade construction. The USDA's termite infestation probability map rates DFW as "very heavy" — the top category. That means every home in the metroplex is a candidate, and the only meaningful difference between houses is whether the termite barrier is intact.</p>
      <h2>The 9 Signs, Ranked by Urgency</h2>
      <h3>1. Mud tubes on foundation walls or piers</h3>
      <p>Pencil-thin, dirt-colored tubes running vertically from soil to wood are the single clearest sign of active subterranean termites. They build these tubes to travel between soil (their nest) and wood (their food) while staying protected from air and predators. If you find a mud tube on your foundation, it means an active colony has already established a supply line into your home. Do not break the tube "to see if they come back" — that erases the evidence a professional needs and does not stop the colony. Call for an inspection.</p>
      <h3>2. Discarded wings on windowsills, spider webs, or floors</h3>
      <p>In March and April, reproductive termites (swarmers) leave the parent colony to mate and start new colonies. They shed their wings almost immediately after landing. Piles of clear, pale wings — often looking like fish scales — around windows, in spider webs, or on tile floors are a classic sign a swarm just happened. It also usually means a mature colony is nearby.</p>
      <h3>3. Bubbling, blistered, or warped paint</h3>
      <p>Termites eat wood from the inside out, and the moisture they carry causes paint to bubble, blister, or peel in patches that are not related to water leaks. Interior door frames, window trim, and baseboards are the most common spots.</p>
      <h3>4. Hollow-sounding wood</h3>
      <p>Tap door frames, window sills, baseboards, and structural beams with the handle of a screwdriver. Sound wood produces a solid thud. Termite-damaged wood produces a hollow, papery sound. If you get the hollow sound in more than one spot, get an inspection.</p>
      <h3>5. Frass (termite droppings)</h3>
      <p>Drywood termites leave small piles of what looks like fine sawdust or coffee grounds under wood beams and near baseboards. Drywood termites are less common in DFW than subterranean termites, but they do occur, especially in imported furniture and structural additions.</p>
      <h3>6. Tight-fitting doors and windows that suddenly stick</h3>
      <p>As termites damage the framing around doors and windows, the wood swells and warps, and doors that used to close smoothly start to bind. This one gets blamed on humidity often — sometimes correctly. But if it happens seasonally in more than one door, it is worth an inspection.</p>
      <h3>7. Buckling laminate or hardwood floors</h3>
      <p>Subterranean termites eating the subfloor can cause finish flooring to buckle, bubble, or feel spongy in spots. If you push on a soft spot and it gives, do not ignore it.</p>
      <h3>8. Small holes in drywall</h3>
      <p>Termites travel through drywall as they move from wood member to wood member. Small pinholes in drywall, especially with tiny bits of dirt or mud around the edges, can be an exit or entrance point.</p>
      <h3>9. Actual live termites</h3>
      <p>If you see live termites, they look like small pale ants with straight (not pinched) waists, straight (not bent) antennae, and equal-length wings if they have wings. If you cannot tell whether you are looking at ants or termites, take a photo and send it to us when you call — the treatment is completely different.</p>
      <h2>What to Do Next</h2>
      <p>If you have spotted one or more of these signs, do three things this week:</p>
      <ol>
        <li><strong>Save the evidence.</strong> Photograph the mud tubes, wings, or damaged wood. Do not break or vacuum anything up.</li>
        <li><strong>Schedule an inspection.</strong> A termite inspection with Bullseye Pest Management is free and takes about an hour. We inspect the interior, exterior, crawl space, and attic.</li>
        <li><strong>Ask about the Termidor Ten-Year Pledge.</strong> Bullseye Pest Management is a Termidor Certified Professional, which means qualifying homes are eligible for the manufacturer-backed Ten-Year Pledge: no termites, no callbacks, no excuses for ten years.</li>
      </ol>
      <p>Get more detail on our <a href="/services/termite-treatment/">termite treatment service</a>, or call directly for an inspection.</p>
    `,
  },
  {
    slug: 'quarterly-pest-control-program-explained',
    title: 'What a Quarterly Pest Control Program Actually Does (DFW Edition)',
    metaTitle: 'Quarterly Pest Control Program Explained | Bullseye Pest DFW',
    metaDescription:
      'What actually happens on a quarterly pest control visit in DFW: perimeter treatment, interior sweep, follow-up. Pricing, expectations, and results.',
    excerpt:
      'What a quarterly pest control program actually looks like on a DFW home: what gets treated, what does not, what it costs, and why the perimeter matters more than the inside.',
    publishedISO: '2026-05-02',
    updatedISO: '2026-06-20',
    category: 'Pest Management',
    heroImage: '/images/services/pest-control.png',
    heroImageAlt: 'Bullseye Pest Management technician applying a perimeter pest control treatment to a DFW home',
    opener:
      'A quarterly pest control program in DFW is four treatments per year: one interior + exterior treatment at the start, then three exterior perimeter treatments spaced every 12 to 14 weeks. Interior sprays are minimized because most pests enter from outside. Programs typically start at $75 per treatment for standard single-family homes with no contract required.',
    relatedServiceSlug: 'pest-control',
    bodyHtml: `
      <h2>What Actually Happens on a Quarterly Visit</h2>
      <h3>The First Treatment</h3>
      <p>The first quarterly visit is more thorough than the follow-ups because we are resetting the whole property. It usually includes:</p>
      <ul>
        <li><strong>Interior sweep:</strong> targeted treatment in problem areas — under sinks, along baseboards where activity has been reported, garage entry points, and utility penetrations.</li>
        <li><strong>Full exterior perimeter:</strong> a 3-foot band of product around the foundation, weep holes treated, eaves brushed for spider webs and wasp nests, entry points around utility lines sealed with backer rod or foam as needed.</li>
        <li><strong>Yard treatment for fire ants and specific pests</strong> when included in the program.</li>
      </ul>
      <h3>The Three Follow-Up Treatments</h3>
      <p>Follow-ups are exterior-focused. That surprises some homeowners, but here is why: <strong>the vast majority of pests enter your home from outside</strong>. If we kill them at the perimeter, they never get in. Constant interior spraying, on the other hand, exposes your family and pets to more product than necessary and does not solve the actual pest source. This is the core principle of Integrated Pest Management (IPM).</p>
      <p>Between quarterly visits, if you see activity inside, call us. Retreats between scheduled visits are included at no extra charge for quarterly customers.</p>
      <h2>What Gets Treated (and What Does Not)</h2>
      <p>The standard quarterly program covers common DFW pests: ants (including fire ants), German and American roaches, spiders, silverfish, millipedes, pillbugs, earwigs, crickets, wasps, and hornets.</p>
      <p><strong>The program does not cover:</strong> termites (separate specialty treatment), bed bugs (require multi-visit protocol), bee removal (separate service), rodents (separate rodent program), and wildlife (separate trapping service). We handle all of those, but they are priced and scheduled separately.</p>
      <h2>What Does It Cost?</h2>
      <p>Quarterly perimeter treatments start at <strong>$75 per treatment</strong> for standard single-family homes in the DFW area — that is $300 per year for four treatments and unlimited free retreats between visits. Larger homes, heavier infestations, and specialty pests are priced separately. Every job is quoted after a free in-person inspection.</p>
      <p><strong>Discounts are available</strong> for prepayment, seniors, veterans, first responders, and referrals. Ask about them when you call.</p>
      <h2>Why Not Just Spray Once and Be Done?</h2>
      <p>A one-time treatment kills the pests present that day. It does not create a barrier that lasts three months. Products break down in UV and rain within a few weeks. That is why one-time treatments almost always end with the pests coming back within a season. Quarterly programs work because they refresh the barrier before it wears off.</p>
      <h2>Do You Have to Sign a Contract?</h2>
      <p>Not with us. Bullseye Pest Management does not use contracts for any service. Quarterly customers stay because the program works, not because they are locked in. If the program is not solving your problem, tell us so we can adjust it or you can stop it.</p>
      <h2>Ready to Start?</h2>
      <p>Call <strong>682-472-4435</strong> or schedule a <a href="/contact/">free inspection</a>. Owner Steve Moseley replies personally and typically books first visits within a week.</p>
      <p>See our full <a href="/services/pest-control/">pest control service page</a> for more details.</p>
    `,
  },
  {
    slug: 'bee-swarm-vs-hive-what-to-do',
    title: 'Bee Swarm or Established Hive? Here Is How to Tell (and What to Do)',
    metaTitle: 'Bee Swarm or Hive? How to Tell + What to Do | Bullseye Pest',
    metaDescription:
      'A bee swarm on your tree is very different from a hive in your wall. How to tell them apart, whether they are dangerous, and how to get rid of each.',
    excerpt:
      'A tight cluster of bees on a branch is almost always a temporary swarm — no honey, no wax, just resting bees. A hive is permanent, with comb and honey, and much harder to remove.',
    publishedISO: '2026-04-28',
    updatedISO: '2026-06-20',
    category: 'Bee Removal',
    heroImage: '/images/services/bee-removal.png',
    heroImageAlt: 'Bee swarm cluster on a tree branch in a Dallas–Fort Worth yard',
    opener:
      'A bee swarm is a temporary cluster of homeless bees resting for a few hours to a few days while scout bees find a permanent hive site. Swarms usually leave on their own within 48 hours. An established hive has honeycomb, honey, and a queen laying eggs, and it does not leave on its own — it requires professional removal including full honeycomb extraction to prevent reinfestation.',
    relatedServiceSlug: 'bee-removal',
    bodyHtml: `
      <h2>Swarm vs. Hive: The Fast Answer</h2>
      <p><strong>Swarm:</strong> a tight fist- to basketball-sized cluster of bees hanging off a tree branch, fence post, patio umbrella, or car mirror. Little or no visible activity beyond the cluster. No wax comb. No honey. Bees appear "docile" (they are — they have no hive to defend). Usually gone within 24 to 48 hours.</p>
      <p><strong>Hive:</strong> bees consistently entering and exiting a specific spot — a wall cavity, tree hollow, roof line, or utility box. You can hear buzzing through the wall. Sometimes you can see comb or a stain from honey seepage. Bees are much more defensive because they have brood, honey, and a queen to protect. Hives do not leave on their own.</p>
      <h2>What to Do About a Swarm</h2>
      <p>Swarms are usually harmless if you leave them alone. They are temporary. If the swarm is out of the way (high in a tree, on the back of a fence), one option is to wait 24 to 48 hours and see if it moves on. If the swarm is in a bad spot (front porch, kids' play area, mailbox), or if it is still there after two days, call us.</p>
      <p>For live swarm capture, we work with local beekeepers when practical. Live capture is not always possible — swarms that have Africanized traits or that are in dangerous positions may need to be eliminated for safety.</p>
      <h2>What to Do About an Established Hive</h2>
      <p>Established hives require full removal. Do not spray them yourself. Here is what happens if you spray a hive in a wall cavity: bees die, comb stays in the wall, honey rots, comb attracts new colonies within months, and honey leaks through drywall and stains ceilings. You end up with a mold-and-pest problem worse than the bees.</p>
      <p>Proper hive removal includes:</p>
      <ol>
        <li><strong>Locate the hive.</strong> Sometimes it takes thermal imaging or listening through the wall to find the exact cavity.</li>
        <li><strong>Open the cavity carefully.</strong> Cut drywall, lift roof shingles, or open siding as needed.</li>
        <li><strong>Remove bees and every bit of honeycomb.</strong> This is the step DIY jobs skip and regret.</li>
        <li><strong>Seal the entry point</strong> to prevent reinfestation.</li>
        <li><strong>Recommend drywall or roofing repair</strong> for the opened area.</li>
      </ol>
      <h2>Africanized Bees in Texas</h2>
      <p>Africanized honeybees ("killer bees") are established in Texas. Visually they look identical to European honeybees. Behaviorally they are much more defensive. We identify Africanized colonies through behavior and, when necessary, lab analysis, and adjust removal procedures accordingly. If you have been attacked by a large group of bees, get to shelter and call 911 first, then call us for removal.</p>
      <h2>Common Bee Removal Spots in DFW</h2>
      <p>The most common bee removal calls in the DFW metroplex are: wall cavities in one-story ranch homes, soffit and eave voids on two-story homes, tree hollows, utility poles (we do these too), meter boxes, chimneys, and detached shed roofs. See our <a href="/services/bee-removal/">bee removal service page</a> for details and pricing.</p>
      <h2>Ready to Get the Bees Out?</h2>
      <p>Call <strong>682-472-4435</strong>. For an active swarm or an aggressive colony, we try to get out same-day or next-day.</p>
    `,
  },
  {
    slug: 'wdi-report-dfw-real-estate-explained',
    title: 'What Is a WDI Report? A DFW Home Buyer & Seller Guide',
    metaTitle: 'WDI Report Explained for DFW Real Estate | Bullseye Pest',
    metaDescription:
      "Selling or buying a home in DFW? Here is what a Wood Destroying Insect (WDI) report covers, when you need one, and what to expect it to cost.",
    excerpt:
      'Most Texas mortgages, and effectively all VA and FHA loans, require a Wood Destroying Insect (WDI) report before closing. Here is what it is, what it costs, and what happens if the inspector finds something.',
    publishedISO: '2026-05-18',
    updatedISO: '2026-06-20',
    category: 'Pest Management',
    heroImage: '/images/services/pest-control-23.jpeg',
    heroImageAlt: 'WDI Wood Destroying Insect report inspection at a Dallas–Fort Worth home',
    opener:
      'A WDI (Wood Destroying Insect) report is a licensed inspector\'s written report on whether a Texas property shows evidence of termites, carpenter ants, powderpost beetles, or other wood-destroying insects. VA loans, FHA loans, and most conventional Texas mortgages require one before closing. Standard single-family reports in DFW cost $85 to $125 and turnaround is typically 24 to 48 hours.',
    relatedServiceSlug: 'wdi-reports',
    bodyHtml: `
      <h2>What a WDI Report Actually Covers</h2>
      <p>A Wood Destroying Insect report is an official Texas Structural Pest Control Service (SPCS) form completed by a licensed applicator. The inspector documents:</p>
      <ul>
        <li>Whether there is <strong>active</strong> evidence of wood-destroying insects.</li>
        <li>Whether there is <strong>previous</strong> evidence (damage from a past infestation, whether or not it has been treated).</li>
        <li>Whether there is <strong>evidence of prior treatment</strong>.</li>
        <li>Whether there are <strong>conducive conditions</strong> that could support future infestation — wood-to-soil contact, moisture problems, dense foliage against foundation.</li>
      </ul>
      <p>The report does NOT cover: general home inspection issues, electrical problems, plumbing problems, structural problems unrelated to insect damage, or rodent activity. Those are separate inspections.</p>
      <h2>When You Need a WDI Report</h2>
      <p>You need a WDI report if any of the following apply to your DFW transaction:</p>
      <ul>
        <li><strong>VA loan.</strong> The VA requires a WDI report on every property.</li>
        <li><strong>FHA loan.</strong> FHA requires one in Texas.</li>
        <li><strong>USDA loan.</strong> Yes.</li>
        <li><strong>Conventional loan in Texas.</strong> Most conventional lenders in Texas require one, though a few will accept a general home inspection instead.</li>
        <li><strong>Cash sale.</strong> Not required, but strongly recommended — a $100 inspection can catch a $10,000 termite problem before you buy.</li>
      </ul>
      <h2>What It Costs in DFW</h2>
      <p>A standard single-family WDI inspection with report is <strong>$85 to $125</strong> depending on square footage and location. Larger properties, unusual construction types (multiple structures, guest houses, detached garages), and rush turnaround are priced separately.</p>
      <h2>What Happens If the Inspector Finds Something</h2>
      <p>If the WDI report shows active or previous evidence of termites or other wood-destroying insects, the transaction does not automatically fall through. Here are the usual outcomes:</p>
      <ol>
        <li><strong>The seller pays for treatment</strong> as a condition of sale. This is the most common outcome. The buyer's lender often requires proof of treatment before closing.</li>
        <li><strong>The seller offers a price concession</strong> so the buyer can handle treatment after closing.</li>
        <li><strong>The buyer walks.</strong> This is rare unless the damage is severe or the seller refuses to negotiate.</li>
      </ol>
      <p>As the WDI inspector, we can also provide the treatment quote so the transaction can close on schedule. Many DFW closings involve us inspecting on Monday, treating on Wednesday, and closing on Friday.</p>
      <h2>How to Order a WDI Report</h2>
      <p>Call <strong>682-472-4435</strong> or send us the property address and closing date. We schedule inspections within 2 to 3 business days for most DFW addresses and deliver reports within 24 to 48 hours of the inspection. Rush turnaround is available for tight closings.</p>
      <p>See our <a href="/services/wdi-reports/">WDI inspection service page</a> for the full details and to schedule.</p>
    `,
  },
];

export const postsBySlug: Record<string, Post> = Object.fromEntries(posts.map(p => [p.slug, p]));
