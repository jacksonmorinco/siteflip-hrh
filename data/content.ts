// ─────────────────────────────────────────────
// Hampton Roads Helicopters — Content Data
// Scraped from hrheli.com, March 2026
// ─────────────────────────────────────────────

export const site = {
  name:        'Hampton Roads Helicopters',
  shortName:   'HRH',
  tagline:     'A Full Service Aviation Company',
  phone:       '1.757.488.9044',
  fax:         '1.757.488.2033',
  email:       'flying@hrheli.com',
  address:     '5196 W Military Hwy',
  city:        'Chesapeake, VA 23321',
  airport:     'Hampton Roads Executive Airport (PVG)',
  partnerName: 'Hampton Roads Charter Service (HRCS)',
  partnerCert: 'H4RA894W',
  faaReg:      'FAA Part 135',
  robinson:    'Robinson Factory Authorized Service Center',
  founded:     '2005',
  url:         'https://hrheli.com',
}

export const stats = [
  { value: '20+',    label: 'Years in Operation' },
  { value: '18,000+', label: 'Accident-Free Hours' },
  { value: '100+',   label: 'Years Combined Experience' },
  { value: 'FAA 135', label: 'Certified Charter' },
]

export const services = [
  {
    slug:     'charter',
    title:    'Helicopter Charter',
    short:    'Door-to-door private charter anywhere on the East Coast.',
    icon:     'charter',
    href:     '/charter',
    headline: 'Meeting All Your Helicopter Charter Needs',
    subhead:  'Whether you have a business meeting in Baltimore or are traveling to the Outer Banks for vacation, we can get you there stress free and in a fraction of the driving time.',
    body:     'We utilize the Robinson R44 helicopter to take you door to door, in one of the most reliable and efficient means of air travel. All charter flights are conducted by Hampton Roads Charter Service under Certificate # H4RA894W. Our aircraft are maintained and operated under strict Federal Aviation Administration Part 135 regulations, aimed to ensure your flying safety. Our professional and courteous pilots go through annual recurrent training and checkouts so that you can sit back and relax, knowing that you will arrive safely at your destination on time and in style.',
    travelTimes: [
      { destination: 'Washington, DC',    time: '1 Hr 30 Min' },
      { destination: 'Baltimore',         time: '1 Hr 30 Min' },
      { destination: 'Richmond',          time: '40 Minutes'  },
      { destination: 'The Outer Banks',   time: '40 Minutes'  },
      { destination: 'Raleigh-Durham',    time: '1 Hr 20 Min' },
    ],
  },
  {
    slug:     'tours',
    title:    'Aerial Tours',
    short:    'The number one aerial tour provider in the Hampton Roads area.',
    icon:     'tours',
    href:     '/tours',
    headline: 'What a Spectacular View',
    subhead:  'HRH is the number one provider of aerial tours and flight-seeing experiences in the Hampton Roads area.',
    body:     'HRH is committed to providing you with a comfortable, enjoyable, and safe flying experience. HRH utilizes the 4-seat Robinson R44 helicopter, known for excellent safety and reliability, smooth handling, and superior comfort. Headsets are provided for all passengers which permits communication with your pilot and other passengers and for music to be enjoyed in-flight. The cabin is air conditioned and heated for maximum comfort. Photos and video may be taken in-flight to capture the amazing views.',
    tours: [
      {
        name:   'Virginia Beach Tour',
        desc:   'Fly past and right over all that annoying South Side road traffic to take in all the major sights. Points of interest include the Virginia Beach Boardwalk, Fort Story Lighthouses, Chesapeake Bay Bridge Tunnel, Hampton Roads Bridge Tunnel, Norfolk Naval Shipyard, Craney Island, Downtown Norfolk, and the USS Wisconsin. Keep your eyes open for dolphins playing just offshore.',
        seasonal: false,
      },
      {
        name:   'James River & Peninsula Tour',
        desc:   'Catch a glimpse of the "Dead Fleet" as you are whisked over the James River to the North Side Peninsula. Newport News and Hampton points of interest include the Monitor Merrimack Memorial Bridge Tunnel, the James River Bridge, Newport News Shipyard, Langley Air Force Base, NASA Research Center, downtown Hampton, and historical Fort Monroe.',
        seasonal: false,
      },
      {
        name:   'Norfolk & Dismal Swamp Tour',
        desc:   'Get a bird\'s eye view of the stark contrast between the hustle and bustle of thriving Downtown Norfolk versus the vast and open Great Dismal Swamp Wildlife Refuge. Points of interest include the Elizabeth River, the massive ship & submarine repair Drydocks, Waterside Drive, the USS Wisconsin, and Craney Island to Lake Drummond, the Dismal Swamp Canal, and natural wildlife.',
        seasonal: false,
      },
      {
        name:   'Colors of Fall Tour',
        desc:   'When it\'s that time of year, Hampton Roads comes alive with the colors of Fall. The Fall foliage around Hampton Roads can be exceptionally thick and vibrant. From the orange and yellow marsh of Coinjock Bay, up the northwest river and beyond, to the Bright Red Cypress of the Great Dismal Swamp.',
        seasonal: true,
        seasonNote: 'Available October – November',
      },
      {
        name:   'Holiday Lights Tour',
        desc:   'Any night tour is truly spectacular, but one during the Winter Holidays is really a sight to see. Take a Holiday Lights Tour of Hampton Roads and see some amazing Holiday Light displays. Points of interest include the Virginia Beach Town Center, the Virginia Beach Boardwalk holiday lights, and the Botanical Gardens Dominion Garden of Lights.',
        seasonal: true,
        seasonNote: 'Available Thanksgiving – New Year\'s',
      },
    ],
  },
  {
    slug:     'special-events',
    title:    'Special Events',
    short:    'Making your next event truly unforgettable.',
    icon:     'events',
    href:     '/#services',
    headline: 'Your Special Event Is Our Specialty',
    subhead:  'Let HRH help you put the "special" into your next special event.',
    body:     'HRH can help make your next special event a truly memorable one. We have worked with charity organizers for golf ball, duck, and Easter egg drops, gender reveal celebrations, and with wedding coordinators to give the wedding couple a once-in-a-lifetime helicopter experience on their special day. Call us with your ideas on how HRH can help you add an amazing helicopter experience to your next event.',
  },
  {
    slug:     'training',
    title:    'Flight Training',
    short:    'World-class helicopter training since 2005.',
    icon:     'training',
    href:     '/training',
    headline: 'World-Class Training for World-Class Pilots',
    subhead:  'HRH\'s highly qualified and experienced staff has thousands of hours and decades of experience to meet all your training needs.',
    body:     'Hampton Roads Helicopters has been providing helicopter flight and ground training for world-class pilots since 2005. But our instructors and staff have been serving the aviation training industry for over 40 years. Pilots receive the highest-quality instruction by combining our skilled flight instructors\' experience with a versatile curriculum, using a modern fleet of Robinson helicopters — the safest, most reliable, most economical line of helicopters in the world. Our staff takes pride in preparing each and every student to safely and professionally handle every flight and every situation.',
    certificates: [
      'Private Pilot',
      'Instrument Rating',
      'Commercial Pilot',
      'Flight Instructor',
      'Instrument Flight Instructor',
      'Airline Transport Pilot',
      'Advanced / Custom Training',
    ],
    regulation: 'FAA Part 61 – Rotorcraft Helicopter',
  },
  {
    slug:     'maintenance',
    title:    'Maintenance',
    short:    'Robinson Factory Authorized Service Center.',
    icon:     'maintenance',
    href:     '/maintenance',
    headline: 'Exceptional Maintenance Service',
    subhead:  'HRH — your factory-authorized Robinson Service Center.',
    body:     'HRH\'s exceptionally skilled technicians take pride in their work and are dedicated to keeping your aircraft flying safely. Whether it is routine scheduled maintenance performed at our facility, or on-the-road service calls to help a customer get back in the air, you can count on HRH for all your Robinson helicopter maintenance needs.',
  },
  {
    slug:     'capabilities',
    title:    'Advanced Capabilities',
    short:    'Specialized missions beyond standard operations.',
    icon:     'capabilities',
    href:     '/#capabilities',
    headline: 'Beyond Standard Operations',
    subhead:  'Over 20+ years, we\'ve provided specialized helicopter services for well-known organizations across the country.',
    body:     'Not only can HRH provide the services typical of many small operators such as training, tours, and charters, but we can also provide many more specialized services.',
    capabilities: [
      'Air-to-air photography',
      'Boat / moving photography',
      'Chase aircraft ops for manned and unmanned systems',
      'Disaster relief',
      'Shipboard / platform operations',
      'Weapons / live fire platform',
      'Aerial photography & videography',
      'Aircraft ferrying services',
      'Aircraft management & pilot services',
    ],
  },
]

export const team = [
  {
    name:        'Dave Hynes',
    title:       'President & Co-Founder',
    credentials: 'USAF Academy · Helicopter & Airplane Pilot/Instructor/Designated Examiner',
    bio:         'In 2005, Dave transitioned from flying for the Air Force to team with Andy Gibbs to start and grow HRH into a premier aviation services company. Dave is a graduate of the U.S. Air Force Academy and served flying VIPs in Learjets, international missions in the C-5 Galaxy, and navaid flight inspection in Hawker 800s. His start in aviation began in the 1970s and 80s, growing up around and working for Brantly-Hynes Helicopters, at the time owned by his father Michael Hynes. With over 18,000+ accident-free flying hours split between helicopters and airplanes, Dave personally oversees all operations for HRH.',
    hours:       '18,000+',
    photo:       null,
    order:       1,
  },
  {
    name:        'Patrick Hynes',
    title:       'Director of Maintenance',
    credentials: 'IA/A&P · Helicopter Pilot/Instructor · Airplane Pilot · U.S. Army Aviation',
    bio:         'Patrick left American Airlines in 2014 as a maintenance technician to take over as Director of Maintenance for HRH. Besides over a decade of maintenance experience in the airline industry, Patrick also grew up working in numerous roles at Brantly-Hynes Helicopters, served in the Army as a helicopter maintenance specialist, and ran his own Robinson helicopter maintenance company. Patrick\'s diverse maintenance background and thousands of hours of pilot experience give him a unique capability to superbly perform his role for HRH\'s customers.',
    hours:       null,
    photo:       null,
    order:       2,
  },
  {
    name:        'Mitchell Hynes',
    title:       'Chief Helicopter Instructor',
    credentials: 'Robinson Factory Approved Instructor · Virginia Tech CS · Gold Seal Instructor',
    bio:         'With aviation ingrained in the Hynes family, Mitchell soloed both the airplane and the helicopter on his 16th birthday, and got his private pilot certificate on his 17th. After Virginia Tech, where he earned an engineering degree in Computer Science while flying part-time, Mitchell has continually expanded his aviation accomplishments — including flying over 30 different aircraft types and becoming a Robinson Factory Approved Instructor Pilot.',
    hours:       null,
    photo:       null,
    order:       3,
  },
  {
    name:        'Greg Doloresco',
    title:       'Operations Coordinator',
    credentials: 'Virginia Tech · Lifelong Aviation Enthusiast',
    bio:         'A Virginian born and raised, Greg attended Virginia Tech for Biology and Biochemistry before focusing on a career in aviation. Some of his first memories are from attending air shows at NAS Oceana with his grandfather, a retired U.S. Air Force aircraft technician.',
    hours:       null,
    photo:       null,
    order:       4,
  },
  {
    name:        'Peter Houk',
    title:       'Helicopter Instructor & Pilot',
    credentials: 'U.S. Navy Veteran · Helicopter Flight Instructor',
    bio:         'Hailing from Washington D.C., Peter\'s adventurous spirit led him from herding cattle in eastern Idaho to repairing equipment on submarines during a long Navy career. After retiring, he finally pursued his longstanding passion for aviation and is now living his dream as a helicopter flight instructor.',
    hours:       null,
    photo:       null,
    order:       5,
  },
  {
    name:        'Caleb Waite',
    title:       'Airplane & Helicopter Instructor',
    credentials: 'LeTourneau University · A&P Certificate · OCONUS Military Contracts',
    bio:         'Caleb joined HRH in 2022 with over a decade of aviation experience — from instruction to utility work and managing flight operations overseas. He earned his Aeronautical Science degree at LeTourneau University along with fixed-wing ratings and an A&P certificate, before advancing into aerial mosquito control and OCONUS military contracting operations.',
    hours:       null,
    photo:       null,
    order:       6,
  },
  {
    name:        'Dylan Borer',
    title:       'Airplane Pilot',
    credentials: 'Virginia Beach Native · Civil Air Patrol · Banner Towing',
    bio:         'Dylan joined HRCS in December 2023 bringing nearly a decade of aviation experience. Born and raised in Virginia Beach, he was 8 years old when he took his first airplane ride and shortly after joined the Civil Air Patrol. His first job towing banners over his hometown led to a full aviation career.',
    hours:       null,
    photo:       null,
    order:       7,
  },
]

export const credibilitySignals = [
  {
    label: 'AOPA March 2026',
    text:  'Cover photo of AOPA Magazine — the most-read general aviation publication in America — was taken from one of our helicopters providing photo/chase support.',
  },
  {
    label: 'FAA Part 135',
    text:  'All charter flights conducted under FAA Part 135 regulations. Certificate #H4RA894W.',
  },
  {
    label: 'Robinson Factory Authorized',
    text:  'Factory-authorized Robinson Service Center. Scheduled maintenance, on-road field service, and full Robinson helicopter sales.',
  },
  {
    label: 'Founded 2005',
    text:  'Built on the vision of founder Andy Gibbs, carried forward by the Hynes family. 20 years of continuous operation from Hampton Roads Executive Airport.',
  },
]

export const fleetHighlights = [
  { model: 'Robinson R44',  type: 'Primary Charter & Tour Aircraft',   notes: 'Known for safety, reliability, and superior comfort. 4-seat configuration.' },
  { model: 'Robinson R22',  type: 'Primary Training Aircraft',         notes: 'The world\'s most popular training helicopter.' },
  { model: 'Robinson R66',  type: 'Turbine Helicopter',                notes: 'Advanced operations and specialized missions.' },
  { model: 'Pilatus',       type: 'Fixed-Wing',                        notes: 'Fixed-wing charter and transport operations.' },
  { model: 'Cirrus',        type: 'Fixed-Wing',                        notes: 'Fixed-wing operations and training.' },
  { model: 'Cessna',        type: 'Fixed-Wing',                        notes: 'Fixed-wing training and utility.' },
]
