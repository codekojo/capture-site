import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body{
      background: #1b1b1b;
      font-family: 'Inter', sans-serif;
      overflow-x: hidden;
   }

html{
   @media(max-width: 1700px){
      font-size: 75%;
   }

}
   button {
      font-weight: bold;
      font-size: 1.1.rem;
      cursor: pointer;
      padding: 1rem 2rem;
      border: 3px solid #23d997;
      color: white;
      background: transparent;
      transition: all 0.5s ease;
      font-family: 'Inter', sans-serif;
      &:hover {
         background-color: #23d997;
         color: white;
      }
   }

   h2 {
         font-weight: lighter;
         font-size: 4rem;
      }

      h3 {
         color: white;
      }

      h4 {
         font-weight: bold;
         color: #23d997;
      }

      span {
         font-weight: bold;
      }

      a {
         font-size: 1.6.rem;
         color: white;
         display: inline-block;
         width: 100%;
         text-decoration: none;
         text-transform: uppercase
      }
      p {
         padding: 1.3rem 0rem;
         color: #ccc;
         font-size: 1.4rem;
         line-height: 150%;
      }


`;
