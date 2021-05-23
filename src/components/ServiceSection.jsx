import React from "react";
import home2 from "../img/home2.png";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import Card from "./Card";
import { About, ImageDescription } from "../style";
import styled from "styled-components";
import { useScroll } from "./useScroll";
import { fade } from "../animate";

export const ServiceSection = () => {
  const [element, controls] = useScroll();

  return (
    <Service
      variants={fade}
      animate={controls}
      initial="hidden"
      ref={element}
      className="service"
    >
      <ServiceImage className="service__img">
        <img src={home2} alt="" />
      </ServiceImage>
      <ServiceDescription className="service__description">
        <h2>
          High quality<span></span> service
        </h2>

        <ServiceCard className="cards">
          <Card
            img={clock}
            title="Efficient"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
              aut?"
          />
          <Card
            img={teamwork}
            title="Teamwork"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
              aut?"
          />
          <Card
            img={diaphragm}
            title="Diaphragm"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
              aut?"
          />
          <Card
            img={money}
            title="Money"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
              aut?"
          />
        </ServiceCard>
      </ServiceDescription>
    </Service>
  );
};

const Service = styled(About)`
  min-height: 100vh;
`;

const ServiceImage = styled(ImageDescription)`
  flex: 1 1 40%;
`;

const ServiceDescription = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  flex: 1 1 60%;
  padding: 1rem 1.3rem;

  h2 {
    padding: 1rem;
  }
`;

const ServiceCard = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
