interface Project {
  title: string
  picture: string
  integration: string
  development: string
  description: string[]
}

const ProjectsDatas: Project[] = [
  {
    title: 'Dipongo',
    picture: 'dipongo',
    integration: 'Integration',
    development: 'Development',
    description: [
      "Dipongo(v2) est une application crossplateformes mêlant le virtuel au réel. Stimulant l'imaginaire de l'enfant au travers d'aventures fantastiques.\n",
      "Développée avec React Native, j'ai pris part à l'intégration du responsive pour mobile, et l'ajout de fonctionnalités.\n",
      '#ReactNative #Redux #Scss',
    ],
  },
  {
    title: 'Home Assist',
    picture: 'ha',
    integration: 'Integration',
    development: 'Development',
    description: [
      'Home Assist est un application connectée Android qui permet de simplifier et de faciliter le quotidien des seniors vivant seuls et loin de leurs proches.\n',
      "En collaboration avec le développeur back-end de chez Home Assist, j'ai réalisé l'intégration et le développement de l'application Android.\n",
      '#ReactNative #Redux #StyledComponent',
    ],
  },
  {
    title: 'War of Golf',
    picture: 'wog',
    integration: 'Integration',
    development: 'Development',
    description: [
      "War of Golf est une application Android et Ios qui offre une experience nouvelle du golf. Affronter ses amis sur le terrain, créer sa communauté, ou apprendre à jouer au golf via l'Academy.\n",
      "Il m'a été confié, la refonte intégrale et le développement de nouvelles fonctionnalités de la version 2.0.\n",
      '#ReactNative #Redux #StyledComponent',
    ],
  },
  {
    title: 'Fillgood',
    picture: 'fillgood',
    integration: 'Integration',
    development: 'Development',
    description: [
      "L'application web FillGood, est une plateforme permettant la livraison de carburant aux particuliers et entreprises.\n",
      "En charge de l'intégration et du développement de l'application web. J'ai développé une interface entièrement responsive, avec 3 accès différents selon le profil de l'utilisateur.\n",
      '#ReactJS #Redux #StyledComponent',
    ],
  },
]

export default ProjectsDatas
