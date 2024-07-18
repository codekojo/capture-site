import React from "react";
import home1 from "../img/home1.png";
import { Description, Hide, ImageDescription } from "../style";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim, fade, photoAnim } from "../animate";
import { Wave } from "./Wave";

export const AboutSection = () => {
  return (
    <AboutContainer
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="description__container"
    >
      <Wave />
      <Description className="description__about">
        <motion.div variants={titleAnim}>
          <Hide className="hide">
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide className="hide">
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide className="hide">
            <motion.h2 variants={titleAnim}>come true</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for your extra ordinary photography <br /> session with us
          at the fastest rate and enjoy the best of things
        </motion.p>
        <motion.button variants={fade}>
          <motion.a href="##">Contact Us</motion.a>
        </motion.button>
      </Description>

      <ImageDescription className="description__img">
        <motion.img
          variants={photoAnim}
          src={home1}
          alt="a photographer holding an expensive camera for the front page"
        />
      </ImageDescription>
    </AboutContainer>
  );
};

// const AboutContainer = styled(motion.div)`
//   min-height: 90vh;
//   display: flex;
//   flex-wrap: wrap;
//   width: 80%;
//   margin: 0 auto;
//   align-items: center;
//   justify-content: space-between;
//   color: white;
// `;

const AboutContainer = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 2rem 0;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 80%;
    justify-content: space-between;
  }

  .description__about {
    order: 2;
    text-align: center;
    margin-bottom: 2rem;

    @media (min-width: 768px) {
      order: 1;
      text-align: left;
      margin-bottom: 0;
    }

    h2 {
      font-size: 2rem;

      @media (min-width: 768px) {
        font-size: 2.5rem;
      }
    }

    p {
      font-size: 1rem;
      line-height: 1.5;
      margin: 1rem 0;
    }

    button {
      margin-top: 1rem;
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
  }

  .description__img {
    order: 1;
    width: 100%;
    max-width: 300px;
    margin-bottom: 2rem;

    @media (min-width: 768px) {
      order: 2;
      max-width: 40%;
      margin-bottom: 0;
    }

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
`;
