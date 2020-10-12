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
      "J'ai pour habitude de travailler en étroite collaboration avec l'UI/UX designer, afin de m'imprégner des guidelines et de les respecter durant la phase d'intégration.",
      'Ecrire du code "éco-friendly", afin de créer des applications maintenables à long terme est l\'un de mes objectifs principal.',
      "J'aime partager, échanger autour des bonnes pratiques, et apprendre d'autrui.",
    ],
  },
  {
    page: 1,
    datas: [
      "Voici la stack technique avec laquelle j'ai pour habitude de travailler :",
      "Html - Scss - Javascript / Typescript",
      "React - React-Native - Redux - Redux-thunk",
      "Jest - Enzyme - Cypress.io",
      "Heroku - Android Studio - Xcode - Git - Gitflow - Jira - Trello",
      "Je développe actuellement les compétences backend suivantes :",
      "Node.js - Express - Sequelize - Chaï - Mocha - Swagger",
      "Ainsi que des notions d'intégration continue :",
      "Docker - Docker compose - Travis",
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
