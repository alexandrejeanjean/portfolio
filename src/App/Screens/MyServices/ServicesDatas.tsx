import {
  Coffee0,
  Help0,
  Integration0,
  Development0,
  Project0,
} from "../../Assets/imgPath";

interface Service {
  legend: string[];
  img: any;
}

const ServicesDatas: Service[] = [
  { legend: ["Découverte", "du projet"], img: Coffee0 },
  { legend: ["Accompagnement", "& réflexion"], img: Help0 },
  { legend: ["Intégration", "des maquettes"], img: Integration0 },
  { legend: ["Développement", "front-end"], img: Development0 },
  { legend: ["Suivi de projet", "& SAV"], img: Project0 },
];

interface Presentation {
  page: number;
  datas: string[];
}

const ServicePresentationDatas: Presentation[] = [
  {
    page: 0,
    datas: [
      "Développeur frontend sensible au comportement de l'utilisateur, mes compétences s'étendent de l'étude à la réalisation de projets web et mobile.",
      "J'ai pour habitude de travailler en étroite collaboration avec l'UI/UX designer, afin de m'imprégner des guidelines et de les respecter durant la phase d'intégration.",
      'Ecrire du code "éco-friendly", afin de créer des applications maintenables à long terme est l\'un de mes objectifs principal.',
      "J'aime partager, échanger autour des bonnes pratiques, et apprendre d'autrui.",
    ],
  },
  {
    page: 1,
    datas: [
      "Voici ce que l'on trouve dans ma boite à outils du quotidien :",
      "- Html, css/scss, javascript/typescript",
      "- React / React-native, Redux",
      "- Jest, Enzyme, Cypress.io",
      "- Github / Gitlab / Bitbucket, Jira / Trello, Docker, Travis, Circle.CI",
      "- Suite adobe (Photoshop / Illustrator / Indesign)",
      "- Wordpress",
      "",
      "Je dispose également de notions sur la partie backend :",
      "- Node.js, Express, Sequelize, PostgreSql",
    ],
  },
  {
    page: 2,
    datas: [
      "En dehors du web, je suis un jeune papa, qui aime observer son fils grandir et profiter de sa famille.",
      "Passionné par le fonctionnement de l'Homme et de la nature, je m'intéresse notamment aux médecines alternatives, médecine traditionnelle chinoise, qi gong, yoga...",
      "Je suis ouvert, flexible et enthousiaste, toujours prêt à découvrir de nouvelle perspectives !",
    ],
  },
];

export { ServicesDatas, ServicePresentationDatas };
