import React, { useState } from "react";
import ClassicButton from "../../Shared/Button/Button";
import NextPrevButton from "../../Shared/NextPrevBtn/NextPrevBtn";
import { ServicesDatas, ServicePresentationDatas } from "./ServicesDatas";
import "./services.scss";

const Services = () => {
  const [page, setPage] = useState(0);

  return (
    <>
      <main className="page">
        <div className="services-wrapper">
          <section className="services-presentation-wrapper">
            <h1 className="services-title">Mes compétences.</h1>
            {ServicePresentationDatas[page].datas.map((sentence) => (
              <p className="services-subtitle" key={sentence.substr(0, 5)}>
                {sentence}
              </p>
            ))}
            <div>
              <NextPrevButton text="Intro" handleClick={() => setPage(0)} /> //{" "}
              <NextPrevButton
                text="Hard skills"
                handleClick={() => setPage(1)}
              />{" "}
              //{" "}
              <NextPrevButton
                text="Soft skills"
                handleClick={() => setPage(2)}
              />{" "}
            </div>
            <div>
              <ClassicButton text="Visiter les projets" endpoint="/projets" />
            </div>
          </section>

          <section className="skills-wrapper">
            {ServicesDatas.map((item) => (
              <div className="skill-wrapper" key={item.img + "_skill"}>
                <div className="skill-cube">
                  <img src={item.img} alt="" title="" />
                </div>
                <p>
                  {item.legend[0]}
                  <br />
                  {item.legend[1]}
                </p>
              </div>
            ))}
          </section>
        </div>
      </main>
    </>
  );
};

export default Services;
