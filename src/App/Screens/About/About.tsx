import React from "react";
import ClassicButton from "../../Shared/Button/Button";
import { Me } from "../../Assets/imgPath";
import "./about.scss";

const About = () => {
  return (
    <main className="about-wrapper page">
      <picture className="desktop-about-profile-picture-wrapper">
        <img
          className="desktop-about-profile-picture"
          src={Me}
          alt="author"
          title="author"
        />
      </picture>
      <section className="about-presentation-wrapper">
        <div className="about-presentation-text">
          <h1>
            Faisons <span className="underlined">connaissance.</span>
          </h1>

          <img
            className="mobile-about-profile-picture"
            src={Me}
            alt="author"
            title="author"
          />
          <p>
            Je suis développeur web front-end, spécialisé sur
            <br /> l'univers <b>React / React-Native</b>.
          </p>

          <p>
            Depuis plus de 2 ans, je donne vie à des maquettes pour des
            <b> applications web et mobiles</b> écrites en
            javascript/typescript. <br />
          </p>
          <p>
            Cet univers me passionne, et je mets toute mon énergie à améliorer
            mes compétences au quotidien.
          </p>
          <p>
            J'ai pris part à la création de différents back-office, très
            orientés métier. Mais aussi à la création d'applications mobiles,
            comme War of Golf (v2), Home Assist, Dipongo (v2)...
          </p>
          <ClassicButton
            text="Découvrez mes compétences"
            endpoint="/services"
          />
        </div>
      </section>
    </main>
  );
};

export default About;
