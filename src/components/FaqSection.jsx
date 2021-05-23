import React from "react";
import styled from "styled-components";
import { About } from "../style";
import { Toggle } from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { fade } from "../animate";

export const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <FAQ
      variants={fade}
      ref={element}
      animate={controls}
      initial="hidden"
      className="faq"
    >
      <div className="faq__title">
        <h2>
          Any questions? <span>FAQ</span>
        </h2>
      </div>
      <AnimateSharedLayout>
        <Toggle title="How DO I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
              quibusdam.
            </p>
          </div>
        </Toggle>

        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
              quibusdam.
            </p>
          </div>
        </Toggle>

        <Toggle title="Different Payment">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
              quibusdam.
            </p>
          </div>
        </Toggle>
        <Toggle title="What Product Do you offer">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
              quibusdam.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </FAQ>
  );
};

const FAQ = styled(About)`
  min-height: 100vh;
  flex-direction: column;
  align-items: stretch;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 1rem 0rem;
    width: 100%;
  }
  .faq__title {
    display: flex;
    justify-content: center;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
    p {
      padding: 1rem 0rem;
    }
  }
  h4 {
    font-weight: bold;
    font-size: 2rem;
  }
`;
