export const METADATA = {
  author: "Bruno Di Marco",
  title: "Portfolio | Bruno Di Marco",
  description:
    "Sono un medico chirurgo e sviluppatore, specializzato nella progettazione di applicazioni moderne ed efficienti. Combino competenze mediche e tecnologiche per creare soluzioni funzionali e mirate alle esigenze degli utenti.",
  siteUrl: "https://br1-tan.vercel.app/",
  twitterHandle: "@hasdex",
  keywords: [
    "Bruno Di Marco",
    "Medical Doctor",
    "Full stack Engineer",
    "Sviluppatore Java",
    "Sviluppatore AI/ML",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "Italian",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skill",
    ref: "skills",
  },
  {
    name: "Progetti",
    ref: "projects",
  },
  {
    name: "Esperienze",
    ref: "work",
  },
  {
    name: "Contatti",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "Full stack developer",
  "Creo app per web e mobile",
  "Unisco Medicina, Programmazione e AI",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto:brunodm@live.it",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/bruno-di-marco-b1bb4a1a9/",
  },
  {
    name: "github",
    url: "https://github.com/brunodimarco",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/brunodimarco/",
  },
  {
    name: "twitter",
    url: "https://x.com/hasdex",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "php",
    "java",
    "javascript",
    "nodejs",
    "supabase",
    "vite",
  ],
  librariesAndFrameworks: [
    "react",
    "tailwindcss",
    "bootstrap",
  ],
  databases: ["mysql", "postgreSQL"],
  other: ["git"],
};

export const PROJECTS = [
  {
    name: "Centro Medico Amodei",
    image: "/projects/centro.webp",
    blurImage: "/projects/blur/centro-blur.webp",
    description: "Sito web per centro medico poliambulatoriale",
    gradient: ["#F14658", "#DC2537"],
    url: "https://centromedicoamodei.it/",
    tech: ["wordpress", "javascript", "php"],
  },
  {
    name: "Studio Oculistico Amodei",
    image: "/projects/studio.webp",
    blurImage: "/projects/blur/centro-blur.webp",
    description: "Sito web per studio oculistico",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://studiooculisticoamodei.it/",
    tech: ["wordpress", "javascript", "php"],
  },
  {
    name: "Ithaka",
    image: "/projects/ithaka.webp",
    blurImage: "/projects/blur/ithaka-blur.webp",
    description:
      "Ithaka: un viaggio nella letteratura",
    gradient: ["#000066", "#6699FF"],
    url: "https://shubh73-inshorts.netlify.app/",
    tech: ["java", "html", "php"],
  },
  {
    name: "Kairos",
    image: "/projects/kairos.webp",
    blurImage: "/projects/blur/ithaka-blur.webp",
    description: "App smart home",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/shubh73/tesla",
    tech: ["java"],
  },
];


export const WORK_CONTENTS = {
  DUKAAN: [
    {
      title: "SISM",
      description:
        "SISM is a platform that enables businesses to launch their online stores at ease.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Revolutionizing commerce, one click at a time
        </div>
      ),
    },
    {
      title: "Transformation",
      description:
        "Since 2023, the Dukaan Seller Dashboard struggled with technical issues and a broken user experience due to accumulated technical debt. Leading a team of two junior developers, we migrated the dashboard from CSR to SSR, redesigned the UI, and overhauled the codebase in the process. This resolved the technical debt and vastly improved the user experience, making it Dukaan's largest and most impactful migration.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Senior Frontend Engineer
        </div>
      ),
    },
    {
      title: "Evolution",
      description:
        "Recognizing the need for improved performance and user engagement, I spearheaded the migration of the Dukaan App from native to React-Native for iOS and Android platforms. This strategic move led to a X% enhancement in app performance and a Y% boost in user engagement, representing a significant milestone in the app's evolution.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer
        </div>
      ),
    },
    {
      title: "Optimization",
      description:
        "Leveraging user feedback and analytics, I improved the seller web dashboard design, reducing bounce rates. Simultaneously, I overhauled the build process, slashing bundle size and boosting overall performance.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer Intern
        </div>
      ),
    },
  ],
  AVIATE: [
    {
      title: "Aviate",
      description:
        "Aviate is a preparation and mentorship platform for job-seekers that are seeking non-technical roles across top companies",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Finding the right job isn&apos;t fate, it&apos;s navigation
        </div>
      ),
    },
    {
      title: "Innovation",
      description:
        "I spearheaded the development of Q-Rate, their flagship product, a voice-based applicant screening platform. Moreover, I took initiatives to enhance user engagement and drive substantial increases in daily traffic. Additionally, I implemented an error-logging and bug reporting system, significantly diminishing user-reported bugs.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Developer Intern
        </div>
      ),
    },
  ],
  SPACENOS: [
    {
      title: "Spacenos",
      description:
        "A dynamic startup dedicated to creating innovative products that make the world a better place.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          We build apps that solve problems for the next billion people
        </div>
      ),
    },
    {
      title: "Trailblazing",
      description:
        "I led the comprehensive overhaul of the Admin Portal, implementing CRUD features for all services and providers. Additionally, I architected a feature enabling precise customer location tracking and delivering insightful usage statistics. Through optimized and compressed file serving, I catalyzed a remarkable Yx increase in page speed, resulting in a X% boost in customer retention.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Web Developer Intern
        </div>
      ),
    },
  ],
};

//export const GTAG = "G-5HCTL2TJ5W";
