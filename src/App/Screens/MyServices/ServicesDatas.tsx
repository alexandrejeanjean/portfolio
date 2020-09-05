import coffee0 from '../../Assets/coffee0.svg'
import development0 from '../../Assets/development0.svg'
import integration0 from '../../Assets/integration0.svg'
import project0 from '../../Assets/project0.svg'
import help0 from '../../Assets/help0.svg'

interface Service {
  legend: string[]
  img: any
}

const ServicesDatas: Service[] = [
  { legend: ['Découverte', 'de votre projet'], img: coffee0 },
  { legend: ['Accompagnement', '& réflexion'], img: help0 },
  { legend: ['Intégration', 'de vos maquettes'], img: integration0 },
  { legend: ['Développement', 'front-end'], img: development0 },
  { legend: ['Suivi de projet', '& SAV'], img: project0 },
]

export default ServicesDatas
