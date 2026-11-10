export const event = {
  name: "Hong Kong Master Policy Competition",
  short: "HKMPC",
  year: "2026",
  theme: "Building Trust: Governing a Changing Hong Kong",
  dates: "6–7 November 2026",
  hours: "13:00–19:00",
  venue: "JCT705, The University of Hong Kong",
  audience: "Master’s students of HKU",
  email: "hkmpc.hku@gmail.com",
  instagram: "https://www.instagram.com/hkmpc.hku/",
  instagramHandle: "@hkmpc.hku",
  /** Placeholder until organisers provide a live form. */
  signupUrl: "https://example.com/hkmpc-signup",
  organisers:
    "Master of Governance and Policy Student Representatives, with the support of the HKU School of Governance and Policy",
  committee: ["Bridget Chu", "Anky Li", "Julius Choy", "Desmond Wong", "Floria Mak"],
  teamSize: "2–4",
  prizes: {
    first: "HK$1,000, shared among the team",
    second: "HK$500, shared among the team",
    participation: "Certificate of participation for every team",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/competition", label: "The competition" },
  { href: "/topics", label: "Topics" },
  { href: "/people", label: "People" },
  { href: "/results", label: "Results" },
  { href: "/contact", label: "Contact" },
] as const;

export const topics = [
  {
    slug: "digital",
    title: "Trust in a Digital Age",
    secretary: "Secretary for Innovation, Technology and Industry",
    summary:
      "Design policy that helps residents trust decisions made with the help of artificial intelligence.",
    body: [
      "Hong Kong’s government is bringing artificial intelligence into how the city is run. The First Five-Year Plan commits to using AI to reform public administration, and to doing it in a safe and orderly way. The flagship is an AI City Brain: a system for real-time data sharing and analysis across departments, aimed at city management, disaster response and public safety.",
      "Beyond the City Brain, AI is expected to spread into finance, healthcare, law, transport and social welfare. The government has set aside HK$300 million for an AI for Welfare Lab. Faster services also mean more decisions about residents will be shaped by data and algorithms.",
      "Hong Kong has no dedicated AI law. It relies on guidance from the Digital Policy Office, including the Ethical Artificial Intelligence Framework and the Generative AI guideline, alongside the Personal Data (Privacy) Ordinance. A Commissioner for AI is planned, to be recruited by mid-2027. When the City Brain was announced, a senior official said it was not meant for surveillance. That statement itself showed how quickly trust becomes the question.",
    ],
    questions: [
      "Which public services are suited to AI, and which carry the greatest risk if something goes wrong?",
      "When should a person stay in the decision, and how can a resident appeal?",
      "Who is accountable when an AI-assisted decision goes wrong?",
    ],
  },
  {
    slug: "skills",
    title: "Trust in Skills for a Changing Workforce",
    secretary: "Secretary for Education",
    summary:
      "Design policy that makes applied and vocational pathways a trusted career choice.",
    body: [
      "Hong Kong needs more skilled technical workers, from construction and smart manufacturing to innovation and technology. Many students and parents still treat vocational and professional education as second to a traditional university degree. The 2026 Policy Address makes changing that an explicit goal.",
      "Hong Kong Metropolitan University became the first university of applied sciences in 2024, followed by Saint Francis University. With Tung Wah College and THEi, they formed the Alliance of Universities of Applied Sciences in November 2024. The First Five-Year Plan commits to more applied degree programmes and a platform that links industry and education.",
      "For people already in work, the Employees Retraining Board is being upgraded into Upskill Hong Kong, which is due to publish the first phase of a skills-based training framework in early 2027. An extra HK$1,000 a month training allowance is also planned for registered apprentices over two years. The structures are moving. Whether students, parents and employers trust an applied qualification as equal to an academic degree is the policy problem.",
    ],
    questions: [
      "What makes a traditional degree feel safer: pay, progression, status, or how the qualification is recognised?",
      "Who do students actually trust when they choose a path?",
      "What can Hong Kong learn from places where vocational routes are respected, such as Germany, Switzerland or Singapore?",
    ],
  },
  {
    slug: "green",
    title: "Trust in a Fair Green Transition",
    secretary: "Secretary for Environment and Ecology",
    summary:
      "Design policy that helps the people who drive taxis and minibuses trust that switching to electric is worth it.",
    body: [
      "Road transport is about a fifth of Hong Kong’s carbon emissions. Public buses and taxis alone emit about 1.4 million tonnes a year, around 4 percent of the city’s total. Taxis and minibuses are also how millions of residents move through the day.",
      "The Green Transformation Roadmap of Public Buses and Taxis, published in December 2024, aims for about 3,000 electric taxis and 700 electric buses by the end of 2027, and for fossil-fuel vehicles to leave these fleets by 2050. The government is offering HK$45,000 per vehicle to replace 3,000 of the oldest taxis, covering roughly 10 to 25 percent of the cost, and plans at least 500 new fast-charging ports by 2027.",
      "Many taxi drivers rent by the shift, so the person who buys the vehicle is often not the person who waits to charge it. Drivers weigh upfront cost, battery life, resale value, range over a long shift, and time lost at a charger. In 2023, roadside nitrogen dioxide was about 5.3 times the World Health Organization guideline. The costs and the health stakes do not fall on the same people.",
    ],
    questions: [
      "Are the current subsidy and charging targets enough to change an owner’s mind?",
      "How should the costs and benefits be shared between owners and drivers?",
      "Who do drivers trust for information about electric vehicles?",
    ],
  },
] as const;

export const deliverables = [
  {
    name: "Problem statement",
    format: "1 page, naming the problem the team will tackle",
    deadline: "Friday 6 November, 17:45",
  },
  {
    name: "Policy brief",
    format:
      "3 pages maximum, excluding citations. 14pt, triple spaced, addressed to the Secretary for the topic",
    deadline: "Saturday 7 November, 14:30",
  },
  {
    name: "Pitch",
    format: "5 minutes to the judges, then 2 minutes of questions",
    deadline: "Saturday 7 November, from 16:00",
  },
] as const;

export const criteria = [
  { name: "Problem definition", points: 20, look: "A specific problem, scoped to Hong Kong" },
  { name: "Use of evidence", points: 25, look: "Data, local context and the people affected" },
  { name: "Feasibility", points: 25, look: "A realistic owner, cost, timeline and risks" },
  { name: "Clarity", points: 20, look: "A brief a busy Secretary can use, and a pitch that lands in 5 minutes" },
  { name: "Handling questions", points: 10, look: "Clear, honest answers under pressure" },
] as const;

export const friday = [
  ["13:00", "Registration and refreshments. Solo registrants are matched into teams"],
  ["13:30", "Opening: welcome, rules, and the problem package"],
  ["13:50", "Topic briefing on the three topics and the Policy Address"],
  ["14:20", "Workshop 1. Writing a policy brief for a Secretary. Priscilla Gatonye"],
  ["15:05", "Break"],
  ["15:20", "Workshop 2. Stakeholders, feasibility, cost and implementation. Mika Noh"],
  ["16:05", "Work block, with refreshments"],
  ["17:45", "Problem statement due. Mentor feedback"],
  ["18:30", "Venue closes. Teams continue remotely"],
] as const;

export const saturday = [
  ["13:00", "Arrival"],
  ["13:30", "Mentor feedback and writing time"],
  ["14:30", "Policy brief due. Workshop 3. Pitching to decision makers. Calum Handforth"],
  ["15:15", "Break and presentation practice"],
  ["16:00", "Pitches: 5 minutes, then 2 minutes of questions"],
  ["17:20", "Judges deliberate"],
  ["17:50", "Award ceremony"],
  ["18:30", "Networking with speakers and judges"],
  ["19:00", "Venue closes"],
] as const;

export const workshops = [
  {
    name: "Priscilla Gatonye",
    role: "Programme Officer, UNESCO-UNEVOC",
    session: "Workshop 1 · Writing a policy brief for a Secretary",
  },
  {
    name: "Mika Noh",
    role: "Founder and Executive Director, AI Culture Lab",
    session: "Workshop 2 · Stakeholders, feasibility and implementation",
  },
  {
    name: "Calum Handforth",
    role: "AI Governance Expert, UN Development Programme",
    session: "Workshop 3 · Pitching policy to decision makers",
  },
] as const;

export const judges = [
  {
    name: "Ronald Young",
    role: "Head of Sustainable Banking Development, Hong Kong Monetary Authority",
  },
  {
    name: "Hideki Suzuki",
    role: "Senior Director of Sustainable Investment, Manulife Investment Management",
  },
] as const;
