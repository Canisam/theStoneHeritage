import React from "react";
import { styled } from "@mui/material";

const FeaturesCard = ({ logo, text, description }) => {
  return (
    // <CardsWrapper>
    <CardContainer role="article" aria-label={text}>
      <Logo aria-hidden="true">{logo}</Logo>
      <Content>
        <Heading>{text}</Heading>
        <Description>{description}</Description>
      </Content>
    </CardContainer>
    // </CardsWrapper>
  );
};

export default FeaturesCard;

/* ---------- styled ---------- */

const CardContainer = styled("div")`
  flex: 1 1 260px;
  max-width: 320px;
  padding: clamp(1rem, 2.5vw, 1.25rem);
  margin: clamp(0.5rem, 2vw, 1rem);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
  }

  /* Tablet: 2 per row */
  @media (max-width: 768px) {
    flex: 1 1 45%;
    max-width: 45%;
  }

  /* Mobile: 3 per row */
  @media (max-width: 480px) {
    flex: 0 0 33.333%;
    max-width: 33.333%;
    padding: 0.5rem;
    margin: 0;
    border-radius: 10px;
  }
`;

const Logo = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.35rem;

  svg {
    font-size: 2rem;
    color: #384b42;
  }
  @media (max-width: 480px) {
    svg {
      font-size: 1.6rem;
    }
  }
`;

const Content = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Heading = styled("h3")`
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  font-weight: 700;
  margin-bottom: 0.4rem;
  color: #222;

  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 0.25rem;
  }
`;


const Description = styled("p")`
  font-size: clamp(0.85rem, 2.2vw, 0.95rem);
  color: #555;
  line-height: 1.5;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.75rem;
    line-height: 1.35;
  }
`;

const CardsWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

