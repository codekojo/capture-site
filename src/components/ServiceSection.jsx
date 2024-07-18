// import React from "react";
// import home2 from "../img/home2.png";
// import clock from "../img/clock.svg";
// import diaphragm from "../img/diaphragm.svg";
// import money from "../img/money.svg";
// import teamwork from "../img/teamwork.svg";
// import Card from "./Card";
// import { About, ImageDescription } from "../style";
// import styled from "styled-components";
// import { useScroll } from "./useScroll";
// import { fade } from "../animate";

// export const ServiceSection = () => {
//   const [element, controls] = useScroll();

//   return (
//     <Service
//       variants={fade}
//       animate={controls}
//       initial="hidden"
//       ref={element}
//       className="service"
//     >
//       <ServiceImage className="service__img">
//         <img src={home2} alt="" />
//       </ServiceImage>
//       <ServiceDescription className="service__description">
//         <h2>
//           High quality<span></span> service
//         </h2>

//         <ServiceCard className="cards">
//           <Card
//             img={clock}
//             title="Efficient"
//             desc="Our team ensures a swift and smooth process from booking to delivery, respecting your time while providing top-notch service."
//           />
//           <Card
//             img={teamwork}
//             title="Teamwork"
//             desc="We believe in collaboration, working closely with you to capture your vision perfectly and create stunning images."
//           />
//           <Card
//             img={diaphragm}
//             title="Professional Gear"
//             desc="Using state-of-the-art equipment, we ensure each shot is captured with precision, clarity, and the highest quality."
//           />
//           <Card
//             img={money}
//             title="Affordable"
//             desc="We offer competitive pricing packages, ensuring you receive the best value for high-quality photography services."
//           />
//         </ServiceCard>
//       </ServiceDescription>
//     </Service>
//   );
// };

// const Service = styled(About)`
//   min-height: 100vh;
// `;

// const ServiceImage = styled(ImageDescription)`
//   flex: 1 1 40%;
// `;

// const ServiceDescription = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: column;
//   align-items: center;
//   flex: 1 1 60%;
//   padding: 1rem 1.3rem;

//   h2 {
//     padding: 1rem;
//   }
// `;

// const ServiceCard = styled.div`
//   display: flex;
//   flex-wrap: wrap;
// `;

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
        <img src={home2} alt="Camera equipment" />
      </ServiceImage>
      <ServiceDescription className="service__description">
        <h2>
          High quality<span></span> service
        </h2>

        <ServiceCard className="cards">
          <Card
            img={clock}
            title="Efficient"
            desc="Swift and smooth process from booking to delivery."
          />
          <Card
            img={teamwork}
            title="Teamwork"
            desc="Close collaboration to capture your vision perfectly."
          />
          <Card
            img={diaphragm}
            title="Pro Gear"
            desc="State-of-the-art equipment for high-quality shots."
          />
          <Card
            img={money}
            title="Affordable"
            desc="Competitive pricing for best value services."
          />
        </ServiceCard>
      </ServiceDescription>
    </Service>
  );
};

const Service = styled(About)`
  min-height: auto;
  padding: 2rem 0;

  @media (min-width: 768px) {
    min-height: 100vh;
  }
`;

const ServiceImage = styled(ImageDescription)`
  width: 100%;
  margin-bottom: 2rem;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    flex: 1 1 40%;
    margin-bottom: 0;
  }
`;

const ServiceDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 1rem;

  h2 {
    padding: 1rem 0;
    font-size: 1.8rem;
    text-align: center;
  }

  @media (min-width: 768px) {
    flex: 1 1 60%;
    padding: 1rem 1.3rem;

    h2 {
      font-size: 2.2rem;
      text-align: left;
    }
  }
`;

const ServiceCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
