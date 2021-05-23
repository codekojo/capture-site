import React from "react";
import { About } from "./pages/About";
import { GlobalStyle } from "./components/GlobalStyle";
import { Switch, Route, useLocation } from "react-router-dom";
import { AboutSection } from "./components/AboutSection";
import { ContactUs } from "./components/ContactUs";
import { OurWork } from "./components/OurWork";
import { Nav } from "./components/Nav";
import { MovieDetail } from "./components/MovieDetail";
import { AnimatePresence } from "framer-motion";

export const App = () => {
  const locationX = useLocation();
  const { key } = locationX;

  return (
    <div>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch Location={locationX} key={locationX.pathname}>
          <Route path="/about" exact>
            {" "}
            <AboutSection />{" "}
          </Route>
          <Route path="/contact" exact>
            {" "}
            <ContactUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />{" "}
          </Route>
          <Route path="/work/:id" exact>
            <MovieDetail />{" "}
          </Route>
          <Route path="/" exact>
            <About />{" "}
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};
