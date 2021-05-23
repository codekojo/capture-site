import React from "react";
import styled from "styled-components";

function Card(props) {
  return (
    <SingleCard className="card">
      <CardIcon className="icon">
        <img src={props.img} alt="" />
        <h3>{props.title}</h3>
      </CardIcon>
      <p>{props.desc}</p>
    </SingleCard>
  );
}

const SingleCard = styled.div`
  flex: 1 1 20rem;
  padding: 1px 20px;
`;

const CardIcon = styled.div`
  display: flex;
  align-items: center;

  /* img {
    padding-right: 10px;
  } */

  h3 {
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
  }
`;

export default Card;
