import {
  homeassist1,
  homeassist2,
  homeassist3,
  dipongo1,
  dipongo2,
  dipongo3,
  wog1,
  wog2,
  wog3,
  fillgood1,
  fillgood2,
  fillgood3,
  familyTree,
  familyTree2,
  wineabroad1,
  wineabroad2,
  wineabroad3,
} from '../../Assets/imgPath'

interface Project {
  id: number
  type: string
  title: string
  picture: string
  appType: string
  integration: string
  development: string
  description: string[]
  endpoint: string
  pictures: string[]
  projectUrl: string
}

const ProjectsDatas: Project[] = [
  {
    id: 0,
    type: 'Personnel',
    title: 'WineAbroad',
    picture: 'wineabroad1',
    appType: 'Application web responsive',
    integration: 'Integration',
    development: 'Development',
    description: [
      'WineAbroad est une Single Page Application (SPA) présentant la société et ses services.',
      "WineAbroad est une société spécialisée dans l'export de vins à l'international.",
      "Développée avec Gatsby, pour aider au lancement de l'activité d'un ami, j'ai créé, intégré et développé le projet jusqu'à sa mise en production.",
      '#Gatsby #React #StyledComponent',
    ],
    endpoint: '/projets/wineabroad',
    pictures: [wineabroad1, wineabroad2, wineabroad3],
    projectUrl: 'https://www.wineabroad.fr/',
  },
  {
    id: 1,
    type: 'Professionel',
    title: 'Dipongo',
    picture: 'dipongo',
    appType: 'Application Ios & Android',
    integration: 'Integration',
    development: 'Development',
    description: [
      'Dipongo(v2) est une application crossplateformes mêlant le virtuel au réel.',
      "Stimulant l'imaginaire de l'enfant au travers d'aventures fantastiques.",
      "Développée avec React Native, au sein de l'agence sqal.io, j'ai pris part à l'intégration du responsive pour mobile, et l'ajout de nouvelles fonctionnalités.",
      '#Android #Ios #ReactNative #Redux #Scss',
    ],
    endpoint: '/projets/dipongo',
    pictures: [dipongo1, dipongo2, dipongo3],
    projectUrl: 'https://www.dipongo.net/',
  },
  {
    id: 2,
    type: 'Professionel',
    title: 'Home Assist',
    picture: 'ha',
    appType: 'Application Android',
    integration: 'Integration',
    development: 'Development',
    description: [
      'Home Assist est un application connectée Android qui permet de simplifier et de faciliter le quotidien des seniors vivant seuls et loin de leurs proches.',
      "En collaboration avec le développeur back-end de chez Home Assist, j'ai réalisé au sein de l'agence sqal.io, l'intégration des maquettes. Dans un second temps le développement de l'application Android, ainsi qu'une application mobile à destination des proches.",
      '#Android #ReactNative #Redux #StyledComponent #Firebase',
    ],
    endpoint: '/projets/home-assist',
    pictures: [homeassist1, homeassist2, homeassist3],
    projectUrl: 'http://www.home-assist.fr/',
  },
  {
    id: 3,
    type: 'Professionel',
    title: 'War of Golf',
    picture: 'wog',
    appType: 'Application Ios & Android',
    integration: 'Integration',
    development: 'Development',
    description: [
      "War of Golf est une application Android et Ios qui offre une experience nouvelle du golf. Affronter ses amis sur le terrain, créer sa communauté, ou apprendre à jouer au golf via l'Academy.",
      "Au sein de l'agence sqal.io, il m'a été confié, la refonte intégrale et le développement de nouvelles fonctionnalités de la version 2.0.",
      '#Android #Ios #ReactNative #Redux #StyledComponent #WebSocket #GoogleAdmob #Firebase #OneSignal',
    ],
    endpoint: '/projets/war-of-golf',
    pictures: [wog1, wog2, wog3],
    projectUrl: 'https://warofgolf.com/',
  },
  {
    id: 4,
    type: 'Professionel',
    title: 'Fillgood',
    picture: 'fillgood',
    appType: 'Application web responsive',
    integration: 'Integration',
    development: 'Development',
    description: [
      "L'application web FillGood, est une plateforme permettant la livraison de carburant aux particuliers et entreprises.",
      "En charge de l'intégration et du développement de l'application web au sein de l'agence sqal.io. J'ai développé une interface entièrement responsive, avec 3 accès : administrateur, employé et client.",
      '#Web #ReactJS #Redux #StyledComponent #Responsive',
    ],
    endpoint: '/projets/fillgood',
    pictures: [fillgood1, fillgood2, fillgood3],
    projectUrl: 'https://fill-good.fr/',
  },
  {
    id: 5,
    type: 'Personnel',
    title: 'Family Tree',
    picture: 'familyTree',
    appType: 'Application web',
    integration: 'Integration',
    development: 'Development',
    description: [
      "L'application web Family Tree, est une application responsive, créée dans un but de montée en compétences fullstack.",
      "L'utilisateur peut créer un compte, ajouter sa famille, les générations et les membres qui la compose.",
      "Pour réaliser cette application, j'ai imaginé le design, l'ai intégré, puis réalisé le développement de l'ensemble des composants, jusqu'aux tests unitaires.",
      'Je me suis chargé de créer une API REST en Node/Express, qui permet de servir le client.',
      'Je poursuis actuellement le développement, pour la partie client et server afin de présenter ce projet comme réalisation dans mon portfolio.',
      '#Web #Responsive #ReactJS #scss #bootstrap #Jest #Enzyme #API #NodeJS #Express #Sequelize',
    ],
    endpoint: '/projets/familytree',
    pictures: [familyTree, familyTree2],
    projectUrl: 'https://family-tree-app-app.herokuapp.com/',
  },
]

export default ProjectsDatas
