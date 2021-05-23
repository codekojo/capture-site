import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.section)`
  min-height: 90vh;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 2 1 60%;
  margin-bottom: 20px;
  z-index: 2;

  h2 {
    font-weight: lighter;
  }
`;

export const ImageDescription = styled.div`
  flex: 1 1 40%;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    pointer-events: none;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
