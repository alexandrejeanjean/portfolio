import dipongo0 from '../../Assets/projects/dipongo1.png'
import homeassist2 from '../../Assets/projects/homeassist2.png'
import wog2 from '../../Assets/projects/wog2.png'
import fillgood3 from '../../Assets/projects/fillgood3.png'

interface Project {
  id: number
  title: string
  picture: string
  appType: string
  integration: string
  development: string
  description: string[]
  endpoint: string
  pictures: string[]
}

const ProjectsDatas: Project[] = [
  {
    id: 0,
    title: 'Dipongo',
    picture: 'dipongo',
    appType: 'Application Ios & Android',
    integration: 'Integration',
    development: 'Development',
    description: [
      "Dipongo(v2) est une application crossplateformes mêlant le virtuel au réel. Stimulant l'imaginaire de l'enfant au travers d'aventures fantastiques.\n",
      "Développée avec React Native, au sein de l'agence sqal.io, j'ai pris part à l'intégration du responsive pour mobile, et l'ajout de nouvelles fonctionnalités.\n",
      '#ReactNative #Redux #Scss',
    ],
    endpoint: '/projets/dipongo',
    pictures: [dipongo0],
  },
  {
    id: 1,
    title: 'Home Assist',
    picture: 'ha',
    appType: 'Application Android',
    integration: 'Integration',
    development: 'Development',
    description: [
      'Home Assist est un application connectée Android qui permet de simplifier et de faciliter le quotidien des seniors vivant seuls et loin de leurs proches.\n',
      "En collaboration avec le développeur back-end de chez Home Assist, j'ai réalisé l'intégration des maquettes. Dans un second temps le développement de l'application Android, ainsi qu'une application mobile à destination des proches.\n",
      '#ReactNative #Redux #StyledComponent',
    ],
    endpoint: '/projets/home-assist',
    pictures: [homeassist2],
  },
  {
    id: 2,
    title: 'War of Golf',
    picture: 'wog',
    appType: 'Application Ios & Android',
    integration: 'Integration',
    development: 'Development',
    description: [
      "War of Golf est une application Android et Ios qui offre une experience nouvelle du golf. Affronter ses amis sur le terrain, créer sa communauté, ou apprendre à jouer au golf via l'Academy.\n",
      "Il m'a été confié, la refonte intégrale et le développement de nouvelles fonctionnalités de la version 2.0.\n",
      '#ReactNative #Redux #StyledComponent',
    ],
    endpoint: '/projets/war-of-golf',
    pictures: [wog2],
  },
  {
    id: 3,
    title: 'Fillgood',
    picture: 'fillgood',
    appType: 'Application web',
    integration: 'Integration',
    development: 'Development',
    description: [
      "L'application web FillGood, est une plateforme permettant la livraison de carburant aux particuliers et entreprises.\n",
      "En charge de l'intégration et du développement de l'application web. J'ai développé une interface entièrement responsive, avec 3 accès différents selon le profil de l'utilisateur.\n",
      '#ReactJS #Redux #StyledComponent',
    ],
    endpoint: '/projets/fillgood',
    pictures: [fillgood3],
  },
]

export default ProjectsDatas
