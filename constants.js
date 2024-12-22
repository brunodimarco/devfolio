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
    name: "Badaglialacqua Parrucchieri",
    image: "/projects/parrucchieri.webp",
    blurImage: "/projects/blur/parrucchieri-blur.webp",
    description: "Sito web per hair stylist",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://badaglialacquaparrucchieri.it/",
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
  SISM: [
    {
      title: "Leadership",
      description:
        "SISM is a non profit Lorem ipsum.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Presidente
        </div>
      ),
    },
    {
      title: "Communication",
      description:
         "Lorem ipsum",
         content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Local Officer on Research Exchange
        </div>
      ),
    },
    {
      title: "Evolution",
      description:
        "Lorem ipsum",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Local Officer on Information Technology
        </div>
      ),
    },
    {
      title: "Skill",
      description:
        "Lorem ipsum",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Coordinator on Base Surgery Course
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
