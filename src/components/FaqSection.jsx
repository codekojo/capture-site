// import React from "react";
// import styled from "styled-components";
// import { About } from "../style";
// import { Toggle } from "./Toggle";
// import { AnimateSharedLayout } from "framer-motion";
// import { useScroll } from "./useScroll";
// import { fade } from "../animate";

// export const FaqSection = () => {
//   const [element, controls] = useScroll();
//   return (
//     <FAQ
//       variants={fade}
//       ref={element}
//       animate={controls}
//       initial="hidden"
//       className="faq"
//     >
//       <div className="faq__title">
//         <h2>Any questions?</h2>
//       </div>
//       <AnimateSharedLayout>
//         <Toggle title="How Do I Start?">
//           <div className="answer">
//             <p>
//               To get started, simply contact us through our website or give us a
//               call. We’ll discuss your vision and schedule a consultation to
//               understand your needs.
//             </p>
//             <p>
//               Our team will guide you through the process, from planning your
//               shoot to the final delivery of your photos. We ensure a seamless
//               and enjoyable experience from start to finish.
//             </p>
//           </div>
//         </Toggle>

//         <Toggle title="Daily Schedule">
//           <div className="answer">
//             <p>
//               Our daily schedule is quite flexible to accommodate your needs. We
//               typically start our shoots early in the morning to take advantage
//               of the natural light.
//             </p>
//             <p>
//               Each session is tailored to the client, ensuring we capture the
//               best moments. We also offer evening sessions for those looking for
//               a different lighting ambiance.
//             </p>
//           </div>
//         </Toggle>

//         <Toggle title="Different Payment">
//           <div className="answer">
//             <p>
//               We offer various payment options to make it convenient for you.
//               You can pay via credit card, bank transfer, or even in
//               installments for larger packages.
//             </p>
//             <p>
//               We require a deposit to secure your booking, with the balance due
//               upon delivery of the final photographs. Detailed payment plans can
//               be discussed during the consultation.
//             </p>
//           </div>
//         </Toggle>
//         <Toggle title="What Product Do you offer">
//           <div className="answer">
//             <p>
//               We offer a range of products including high-resolution digital
//               images, professionally edited photo albums, framed prints, and
//               custom photo books.
//             </p>
//             <p>
//               All our products are crafted to the highest standards, ensuring
//               your memories are preserved beautifully. You can view samples of
//               our products during your consultation.
//             </p>
//           </div>
//         </Toggle>
//       </AnimateSharedLayout>
//     </FAQ>
//   );
// };

// const FAQ = styled(About)`
//   min-height: 100vh;
//   flex-direction: column;
//   align-items: stretch;
//   span {
//     display: block;
//   }
//   h2 {
//     padding-bottom: 2rem;
//     font-weight: lighter;
//   }
//   .faq-line {
//     background: #ccc;
//     height: 0.2rem;
//     margin: 1rem 0rem;
//     width: 100%;
//   }
//   .faq__title {
//     display: flex;
//     justify-content: center;
//   }

//   .question {
//     padding: 3rem 0rem;
//     cursor: pointer;
//     p {
//       padding: 1rem 0rem;
//     }
//   }
//   h4 {
//     font-weight: bold;
//     font-size: 2rem;
//   }
// `;

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
        <h2>Any questions?</h2>
      </div>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>
              Contact us through our website or call us. We'll discuss your
              vision and schedule a consultation to understand your needs.
            </p>
            <p>
              We'll guide you through planning, shooting, and delivery, ensuring
              a seamless experience.
            </p>
          </div>
        </Toggle>

        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>
              Our schedule is flexible to meet your needs. We typically start
              shoots early for the best natural light.
            </p>
            <p>
              Each session is tailored to the client. We also offer evening
              sessions for different lighting.
            </p>
          </div>
        </Toggle>

        <Toggle title="Payment Options">
          <div className="answer">
            <p>
              We accept credit cards, bank transfers, and offer installment
              plans for larger packages.
            </p>
            <p>
              A deposit secures your booking, with the balance due upon delivery
              of final photos.
            </p>
          </div>
        </Toggle>

        <Toggle title="Products Offered">
          <div className="answer">
            <p>
              We offer high-resolution digital images, edited photo albums,
              framed prints, and custom photo books.
            </p>
            <p>
              All products meet high quality standards. Sample products are
              available during consultation.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </FAQ>
  );
};

const FAQ = styled(About)`
  min-height: auto;
  padding: 2rem 1rem;
  flex-direction: column;
  align-items: stretch;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 1.5rem;
    font-weight: lighter;
    font-size: 1.8rem;
    text-align: center;
  }

  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 1rem 0;
    width: 100%;
  }

  .faq__title {
    display: flex;
    justify-content: center;
  }

  .question {
    padding: 1.5rem 0;
    cursor: pointer;

    p {
      padding: 0.5rem 0;
      font-size: 0.9rem;
      line-height: 1.4;
    }
  }

  h4 {
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 768px) {
    min-height: 100vh;
    padding: 2rem;

    h2 {
      font-size: 2.2rem;
    }

    .question {
      padding: 2rem 0;

      p {
        font-size: 1rem;
      }
    }

    h4 {
      font-size: 1.5rem;
    }
  }
`;
