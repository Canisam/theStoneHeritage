import React from "react";
import { styled } from "@mui/material";

const FeaturesCard = ({ logo, text, description }) => {
  return (
    <CardContainer role="article" aria-label={text}>
      <Logo aria-hidden="true">{logo}</Logo>
      <Content>
        <Heading>{text}</Heading>
        <Description>{description}</Description>
      </Content>
    </CardContainer>
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

  @media (max-width: 768px) {
    flex: 1 1 45%;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`;

const Logo = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: clamp(0.6rem, 2vw, 0.75rem);

  svg {
    font-size: clamp(2.2rem, 6vw, 3.8rem);
    color: #384b42;
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
  margin-bottom: clamp(0.4rem, 1.5vw, 0.6rem);
  color: #222;
`;

const Description = styled("p")`
  font-size: clamp(0.85rem, 2.2vw, 0.95rem);
  color: #555;
  line-height: 1.5;
  margin: 0;
`;
