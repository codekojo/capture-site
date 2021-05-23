import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animate";
import styled from "styled-components";

export const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get In Touch</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send Us an Email</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send Us A Message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send Us A Tweet</h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  color: #353535;
  min-height: 90vh;
  width: 80%;
  margin: 0 auto;
  background: #fff;
  padding-left: 1rem;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Title = styled.div`
  color: black;
  margin-bottom: 4rem;
`;

const Circle = styled.div`
  border-radius: 50%;

  width: 3rem;
  height: 3rem;
  background: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;
