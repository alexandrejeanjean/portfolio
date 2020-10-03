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

export default ServicesDatas;
