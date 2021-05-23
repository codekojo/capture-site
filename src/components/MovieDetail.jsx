import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { MovieState } from "../movieState";
import { motion } from "framer-motion";
import { pageAnimation } from "../animate";

export const MovieDetail = () => {
  let hs = useHistory();
  const url = hs.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter(stateMovie => {
      return stateMovie.url === url;
    });
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="" />
          </Headline>
          <Awards>
            {movie.awards.map(({ title, description }) => {
              return (
                <AwardContainer>
                  <h3>{title}</h3>
                  <div className="line"></div>
                  <p>{description}</p>
                </AwardContainer>
              );
            })}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: white;
  img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
`;

const AwardContainer = styled.div`
  padding: 0 3rem;
  h3 {
    font-size: 1.3rem;
  }
  p {
    text-align: left;
  }

  .line {
    width: 50%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
`;

const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 80%;
    height: 70vh;
    margin: 0 auto;
    display: block;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  color: red;
  min-height: 100vh;
  width: 80%;
  margin: 0 auto;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;
